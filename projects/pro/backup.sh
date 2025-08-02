#!/bin/bash

# ────────────────────────────────────────────────
# 🧠 JP-System | Folder Backup + ZIP to Android
# 🔒 By เจ้าป่า | Termux-ready | Dual-format Backup
# ────────────────────────────────────────────────

# 📍 Config
SRC_DIR="$PWD"
DATE=$(date +"%Y-%m-%d_%H-%M-%S")
FOLDER_NAME="backup_$DATE"
LOCAL_BACKUP_DIR="$SRC_DIR/.backup"
LOCAL_FOLDER="$LOCAL_BACKUP_DIR/$FOLDER_NAME"
ANDROID_BACKUP_DIR="/storage/emulated/0/Download/Backup"
ZIP_FILE="$ANDROID_BACKUP_DIR/$FOLDER_NAME.zip"

# 📌 Logger
log() {
  echo "[$(date +'%H:%M:%S')] $1"
}

# 🔐 Check Android Storage (Termux)
if ! [ -d "/storage/emulated/0" ]; then
  log "❌ Storage access not found. Run: termux-setup-storage"
  exit 1
fi

# 📁 Prepare folders
mkdir -p "$LOCAL_FOLDER"
mkdir -p "$ANDROID_BACKUP_DIR"

# 🧹 Clean old local folders (keep last 10)
find "$LOCAL_BACKUP_DIR" -mindepth 1 -maxdepth 1 -type d -name "backup_*" | sort -r | tail -n +11 | xargs -r rm -rf

# 📦 Copy project (excluding heavy/unneeded)
log "📁 Copying files to $LOCAL_FOLDER ..."
rsync -a --exclude='node_modules' \
         --exclude='.git' \
         --exclude='dist' \
         --exclude='.backup' \
         --exclude='.DS_Store' \
         --exclude='*.log' \
         --exclude='.env.local' \
         --exclude='.next' \
         --exclude='.cache' \
         "$SRC_DIR/" "$LOCAL_FOLDER/"

# 🗜️ ZIP to Android
log "📦 Creating ZIP at $ZIP_FILE ..."
cd "$LOCAL_BACKUP_DIR"
zip -r -q "$ZIP_FILE" "$FOLDER_NAME"

# ✅ Done
if [ -f "$ZIP_FILE" ]; then
  log "✅ Backup completed."
  log "   📁 Folder: $LOCAL_FOLDER"
  log "   📱 ZIP:    $ZIP_FILE"
else
  log "❌ ZIP failed."
fi