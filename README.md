# Palomo API-geon

<img src="build/icon.png" width="64" align="right">

Cliente de escritorio sencillo para probar APIs HTTP, hecho con Electron.

## Funcionalidades

- Peticiones GET, POST, PUT, DELETE… con cuerpo JSON y cabeceras personalizadas
- Pestañas, y peticiones guardadas para reutilizarlas
- Variables de entorno: escribe `{{clave}}` en la URL, las cabeceras o el JSON
  - `{{$clave}}` envía el valor y después le suma 1
  - `{{$i}}` es el número de envío
- Extraer valores de la respuesta al entorno
- Envío múltiple: en paralelo, en secuencia o a intervalos
- Disponible en español, català, English, Deutsch, русский, 中文 y 日本語

## Uso

Necesitas [Node.js](https://nodejs.org/) 18 o superior.

```bash
npm install
npm start
```

## Compilar

```bash
npm run dist       # AppImage y .deb (Linux)
npm run appimage   # solo AppImage
npm run win        # instalador y .exe portable (Windows)
```

O todo de una vez (AppImage, .deb y .exe) con `scripts/compilar.sh`.

Para compilar para Windows desde Linux hace falta Wine (`sudo apt install wine`).

Los paquetes se generan en `dist/`. La versión se toma de la constante `VERSION`
de `src/palomo.html` y se copia a `package.json` antes de compilar.

## Estructura

```
├── build/            recursos para electron-builder (iconos)
├── scripts/          utilidades de compilación
└── src/
    ├── main.js       proceso principal de Electron
    ├── preload.js    puente entre Electron y la página
    ├── palomo.html   interfaz
    ├── css/
    ├── img/
    └── js/
        └── idiomas/  traducciones
```

## Licencia

[ISC](LICENSE)
