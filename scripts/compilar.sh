#!/bin/sh
cd "$(dirname "$(readlink -f "$0")")/.."
export PATH="$HOME/.local/bin:$PATH"

avisa() {
  notify-send -i "$PWD/build/icon.png" "Palomo API-geon" "$1"
  echo
  echo "$1"
}

creados=""
fallos=""

if npm run dist; then
  creados="$creados $(ls -t dist/*.AppImage | head -1) $(ls -t dist/*.deb | head -1)"
else
  fallos="$fallos AppImage/.deb,"
fi

if ! command -v wine > /dev/null; then
  fallos="$fallos .exe (WINE SIN INSTALAR)"
elif npm run win; then
  creados="$creados $(ls -t dist/*-instalador.exe | head -1) $(ls -t dist/*-windows-portable.zip | head -1)"
else
  fallos="$fallos .exe,"
fi

if [ -z "$fallos" ]; then
  avisa "Compilacion terminada en dist/"
else
  avisa "Ha fallado:${fallos%,}. Miraa los mensajes de arriba"
fi
for fichero in $creados; do
  echo "  $PWD/$fichero"
done
printf "pulsa enter"
read -r _
