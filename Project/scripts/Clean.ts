import { execSync } from "child_process";
import {
  existsSync,
  mkdirSync,
  rmSync,
  readdirSync,
  statSync
} from "fs";
import { join } from "path";

// 📍 Path Config
const SRC_DIR = process.cwd();
const DATE = new Date().toISOString().replace(/[:T]/g, "-").split(".")[0];
const FOLDER_NAME = `backup_${DATE}`;
const LOCAL_BACKUP_DIR = join(SRC_DIR, ".backup");
const LOCAL_FOLDER = join(LOCAL_BACKUP_DIR, FOLDER_NAME);
const ANDROID_BACKUP_DIR = "/storage/emulated/0/Download/Backup";
const ZIP_FILE = join(ANDROID_BACKUP_DIR, `${FOLDER_NAME}.zip`);

// 📌 Logger Utility
const log = (msg: string) => {
  const now = new Date().toLocaleTimeString("en-GB", { hour12: false });
  console.log(`[${now}] ${msg}`);
};

// 🔐 Android Storage Check (Termux)
if (!existsSync("/storage/emulated/0")) {
  log("❌ Storage access not found. Run: termux-setup-storage");
  process.exit(1);
}

// 🧹 Pre-clean: remove node_modules and pnpm-lock.yaml
const NODE_MODULES = join(SRC_DIR, "node_modules");
const LOCK_FILE = join(SRC_DIR, "pnpm-lock.yaml");

if (existsSync(NODE_MODULES)) {
  log("🧹 Removing node_modules...");
  rmSync(NODE_MODULES, { recursive: true, force: true });
}

if (existsSync(LOCK_FILE)) {
  log("🧹 Removing pnpm-lock.yaml...");
  rmSync(LOCK_FILE, { force: true });
}

// 📁 Ensure backup directories exist
mkdirSync(LOCAL_FOLDER, { recursive: true });
mkdirSync(ANDROID_BACKUP_DIR, { recursive: true });

// 🧹 Remove old backups (keep last 10)
const oldDirs = readdirSync(LOCAL_BACKUP_DIR)
  .filter((name) => name.startsWith("backup_"))
  .map((name) => ({
    name,
    time: statSync(join(LOCAL_BACKUP_DIR, name)).mtime.getTime()
  }))
  .sort((a, b) => b.time - a.time)
  .slice(10);

oldDirs.forEach(({ name }) => {
  rmSync(join(LOCAL_BACKUP_DIR, name), { recursive: true, force: true });
});

// 📦 Copy project with exclusions
log(`📁 Copying project to ${LOCAL_FOLDER} ...`);
const exclude = [
  "node_modules",
  ".git",
  "dist",
  ".backup",
  ".DS_Store",
  "*.log",
  ".env.local",
  ".next",
  ".vercel",
  ".cache",
  "pnpm-lock.yaml"
];

const rsyncArgs = [
  "-a",
  ...exclude.map((e) => `--exclude='${e}'`),
  `${SRC_DIR}/`,
  `${LOCAL_FOLDER}/`
].join(" ");

execSync(`rsync ${rsyncArgs}`, {
  stdio: "inherit",
  shell: "/bin/bash"
});

// 🗜️ Create ZIP to Android download folder
log(`📦 Zipping to ${ZIP_FILE} ...`);
execSync(`cd ${LOCAL_BACKUP_DIR} && zip -r -q "${ZIP_FILE}" "${FOLDER_NAME}"`, {
  stdio: "inherit",
  shell: "/bin/bash"
});

// ✅ Final Status
if (existsSync(ZIP_FILE)) {
  log("✅ Backup completed.");
  log(`   📁 Folder: ${LOCAL_FOLDER}`);
  log(`   📱 ZIP:    ${ZIP_FILE}`);
} else {
  log("❌ ZIP failed.");
}