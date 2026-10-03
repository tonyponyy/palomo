#!/bin/bash
cd "$(dirname "$(readlink -f "$0")")/.."
export PATH="$HOME/.local/bin:$PATH"

if npm run appimage; then
  notify-send -i "$PWD/build/icon.png" "Palomo" "AppImage creada en dist/"
  echo
  echo "AppImage creada: $PWD/$(ls -t dist/*.AppImage | head -1)"
else
  notify-send -i "$PWD/build/icon.png" "Palomo" "Ha fallado la compilacion"
  echo
  echo "Ha fallado la compilacion, mira los mensajes de arriba"
fi
read -p "Pulsa Enter para cerrar"
