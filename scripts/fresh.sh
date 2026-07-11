#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

PORTS=(3000 3001 3002 3003 3004 3005 3006 3007 3008 3009 3010)

kill_port() {
  local port="$1"
  local pids

  pids=$(lsof -ti tcp:"$port" -sTCP:LISTEN 2>/dev/null || true)

  if [ -n "$pids" ]; then
    echo "Cerrando puerto $port (PID: $pids)..."
    kill -9 $pids 2>/dev/null || true
  fi
}

echo "Liberando puertos de desarrollo..."
for port in "${PORTS[@]}"; do
  kill_port "$port"
done

if [ -d ".next" ]; then
  echo "Limpiando caché .next..."
  rm -rf .next
fi

echo "Iniciando servidor en http://localhost:3000"
exec npx next dev -p 3000
