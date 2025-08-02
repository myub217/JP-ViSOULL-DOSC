#!/bin/bash

# 📦 JP-System | เจ้าป่า
# 🔧 Installer for gdrive CLI (Google Drive uploader) in Termux (ARM64 only)
set -e

INSTALL_DIR="$HOME/.local/bin"
GDRIVE_BIN="$INSTALL_DIR/gdrive"
ARCH=$(uname -m)

echo "🚀 Installing gdrive CLI for Termux..."

# === Check architecture ===
if [[ "$ARCH" != "aarch64" ]]; then
  echo "❌ Unsupported architecture: $ARCH (Only aarch64 supported)"
  exit 1
fi

# === Prepare folder ===
mkdir -p "$INSTALL_DIR"
cd "$INSTALL_DIR"

# === Clean old binary ===
rm -f "$GDRIVE_BIN"

# === Download gdrive (check for HTML error) ===
echo "⬇️ Downloading gdrive binary (ARM64)..."
curl -L -s -o gdrive "https://github.com/prasmussen/gdrive/releases/download/2.1.1/gdrive-linux-arm64"

# === Validate binary (not HTML) ===
if file gdrive | grep -qi "HTML"; then
  echo "❌ Failed to download binary — GitHub returned HTML (maybe rate-limited or wrong URL)"
  rm -f gdrive
  exit 1
fi

chmod +x gdrive

# === Ensure PATH includes ~/.local/bin ===
if ! echo "$PATH" | grep -q "$INSTALL_DIR"; then
  echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.zshrc
  export PATH="$HOME/.local/bin:$PATH"
  echo "🔁 PATH updated (added to ~/.zshrc)"
fi

# === Test if working ===
if command -v gdrive &>/dev/null; then
  echo "✅ gdrive installed successfully!"
  gdrive version
else
  echo "❌ gdrive command not found after install."
  exit 1
fi