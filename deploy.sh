#!/usr/bin/env bash
# Actualiza y reconstruye tryflama-web, servido en la IP de WireGuard (10.77.64.103:80)
set -euo pipefail

APP_DIR=/opt/apps/tryflama-web
export PATH="/root/.nvm/versions/node/v24.22.1/bin:$PATH"

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
nginx -t && nginx -s reload

echo "[deploy] listo: http://10.77.64.103/"
