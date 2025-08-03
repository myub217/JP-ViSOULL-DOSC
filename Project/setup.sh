#!/bin/bash

set -e

# ========================
# 🔧 PROJECT CONFIGURATION
# ========================
PROJECT_NAME="JP-ViSOULL-DOSC"
GITHUB_REPO="https://github.com/myub217/JP-ViSOULL-DOSC"
BUILD_DIR="dist"

# Vercel configuration
VERCEL_PROJECT="jp-visoull-dosc"
VERCEL_PROJECT_ID="prj_OFKFfvA4bZaBG3iGttIoqPf09d7x"
VERCEL_ORG_ID=""
VERCEL_TOKEN="vgfeOfkyL3Vgu9fnIX7eroQl"

# =======================
# ⚙️ EXECUTION
# =======================
echo "🔧 Starting setup for $PROJECT_NAME..."

# 1. Clean previous build output
if [ -d "$BUILD_DIR" ]; then
  echo "🧹 Cleaning previous $BUILD_DIR..."
  rm -rf "$BUILD_DIR"
fi

# 2. Install dependencies
echo "📦 Installing dependencies using pnpm..."
pnpm install --frozen-lockfile

# 3. Approve pending builds
echo "🧪 Approving pending pnpm builds if any..."
pnpm approve-builds || true

# 4. Install Vercel CLI if needed
if ! command -v vercel &> /dev/null; then
  echo "⚙️ Installing Vercel CLI globally..."
  npm install -g vercel@latest
else
  echo "✅ Vercel CLI already installed."
fi

# 5. Remove invalid config if exists
if [ -d ".vercel" ]; then
  echo "🧨 Removing existing .vercel config (to fix broken state)..."
  rm -rf .vercel
fi

# 6. Re-link project to Vercel
echo "🔗 Re-linking project to Vercel..."
vercel link --project "$VERCEL_PROJECT" --token "$VERCEL_TOKEN" --yes

# 7. Pull environment variables (preview)
echo "🌐 Pulling environment variables (preview env)..."
vercel pull --yes --environment=preview --token="$VERCEL_TOKEN"

# 8. Build with Vercel CLI
echo "🏗️ Building project locally using Vercel..."
vercel build --token="$VERCEL_TOKEN"

# 9. Deploy prebuilt output
echo "🚀 Deploying prebuilt output to Vercel..."
vercel deploy --prebuilt --token="$VERCEL_TOKEN"

# ✅ DONE
echo ""
echo "🎉 Deployment complete for $PROJECT_NAME"
echo "🔗 GitHub: $GITHUB_REPO"