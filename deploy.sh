#!/usr/bin/env bash
set -euo pipefail

APP_DIR=/opt/apps/tryflama-web

export PATH="/opt/node/bin:$PATH"

cd "$APP_DIR"

echo "[deploy] git pull..."
GIT_TERMINAL_PROMPT=0 git pull --ff-only

echo "[deploy] pnpm install..."
pnpm install --frozen-lockfile

echo "[deploy] build..."
pnpm build

echo "[deploy] permisos..."
chmod -R a+rX "$APP_DIR/dist"

echo "[deploy] reload nginx..."
sudo /usr/sbin/nginx -t
sudo /usr/sbin/nginx -s reload

echo "[deploy] listo"