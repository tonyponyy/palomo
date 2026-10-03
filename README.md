# Palomo API-geon

<img src="build/icon.png" width="64" align="right">

Cliente de escritorio sencillo para probar APIs HTTP, hecho con Electron.

## Descargar

**[⬇️ Descargar la última versión](https://github.com/tonyponyy/palomo/releases/latest)**

| Sistema | Archivo |
|---|---|
| Linux | `Palomo-API-geon-x.x.x.AppImage` (dale permiso de ejecución y ábrelo) o `palomo_x.x.x_amd64.deb` (Ubuntu / Debian) |
| Windows | `Palomo-API-geon-x.x.x-windows-portable.zip` **(recomendado)**: no necesita instalarse. Haz clic derecho → *Extraer todo* y abre `Palomo API-geon.exe` de la carpeta (no lo abras desde dentro del zip, no funcionaría) |
| Windows | `Palomo-API-geon-x.x.x-instalador.exe`: lo instala en el ordenador y crea accesos directos |

> En Windows puede salir el aviso "Windows protegió su PC" porque el programa no está firmado.
> Pulsa en **Más información → Ejecutar de todas formas**.

## Probar en el navegador

**[▶️ Probar Palomo API-geon online](https://tonyponyy.github.io/palomo/)**, sin instalar nada.

> ⚠️ La versión web es para echar un vistazo y **es posible que haya cosas que no funcionen**.
> El navegador solo deja hacer peticiones a las APIs que lo permiten (CORS), hay cabeceras
> que no se pueden cambiar, y lo que guardes se queda solo en ese navegador.
> Para usarlo de verdad, mejor descarga la versión de escritorio.

## Capturas

### Petición y respuesta

![Petición y respuesta](capturas/palomo1.png)

La pantalla principal. Arriba se escribe la petición: dirección, método (GET, POST, PUT…),
formato de envío y el cuerpo en JSON, que se valida mientras escribes (*✔ Valid JSON*) y se
puede formatear con un botón. Las variables del entorno como `{{num}}` se resaltan en verde.
Abajo está la respuesta: código de estado, tiempo que ha tardado, cuerpo con colores y
cabeceras. Cada petición va en su propia pestaña, y con el disquete se guarda para más tarde.

### Envío múltiple

![Configurar el envío múltiple](capturas/palomo5.png)

Marcando **Multiple** se puede lanzar la misma petición varias veces: todas a la vez, una
detrás de otra (esperando cada respuesta) o cada cierto tiempo.

![Resultado del envío múltiple](capturas/palomo2.png)

El resultado del envío múltiple: cuántas han ido bien y cuántas han fallado, los tiempos mínimo,
medio y máximo, y cada respuesta por separado.

En el cuerpo se ven los dos iteradores en acción:

- **`{{$i}}`** (en morado) es el número de envío, así que `"test_{{$i}}"` llega como
  `test_1`, `test_2`, `test_3`…
- **`{{$num}}`** (en naranja) usa la variable `num` del entorno como contador: cada petición
  envía su valor y le suma 1, así que `userId` llega como `1234`, `1235`, `1236`…

Más detalles en [Iteradores](#iteradores-i-y-variable).

### Entorno

![Entorno](capturas/palomo3.png)

Las variables del entorno. Cualquier `{{clave}}` que escribas en la dirección, las cabeceras o
el JSON se cambia por su valor al enviar. Con `{{$clave}}` además se le suma 1 después de cada
envío, útil para ids que no se pueden repetir. Desde la pestaña *Save to environment* también
se pueden guardar aquí valores sacados de una respuesta, como un token.

### Peticiones guardadas

![Peticiones guardadas](capturas/palomo4.png)

Las peticiones que has guardado, con su método y la fecha. Al pulsar una se abre en una
pestaña nueva tal y como la dejaste. La interfaz está en 7 idiomas (aquí en español).

### Ver imágenes y páginas de la respuesta

![Vista previa de una imagen](capturas/Screenshot_2026-10-03_19-51-02.png)

Las direcciones que aparecen en una respuesta JSON se pueden pulsar para verlas sin salir
del programa, ya sean imágenes o páginas web, o abrirlas en una pestaña del navegador.

## Funcionalidades

- Peticiones GET, POST, PUT, DELETE… con cuerpo JSON y cabeceras personalizadas
- Pestañas, y peticiones guardadas para reutilizarlas
- Variables de entorno: escribe `{{clave}}` en la URL, las cabeceras o el JSON
  - `{{$clave}}` envía el valor y después le suma 1
  - `{{$i}}` es el número de envío
  - Mira [cómo funcionan los iteradores](#iteradores-i-y-variable)
- Extraer valores de la respuesta al entorno
- Envío múltiple: en paralelo, en secuencia o a intervalos
- Disponible en español, català, English, Deutsch, русский, 中文 y 日本語

### Iteradores `{{$i}}` y `{{$variable}}`

Sirven para que cada petición sea distinta sin tener que cambiarla a mano, sobre todo con el
envío múltiple. Se pueden escribir en la dirección, en las cabeceras y en el cuerpo JSON.

**`{{$i}}`: número de envío**

Se cambia por el número de la petición dentro del envío: `1`, `2`, `3`… en un envío múltiple,
y siempre `1` en un envío normal. No guarda nada: en el siguiente envío múltiple vuelve a
empezar por `1`.

**`{{$variable}}`: contador del entorno**

Usa una variable del entorno como contador. Envía su valor actual y, después, le suma 1 y lo
guarda en el entorno, así que la siguiente petición (ahora o cuando vuelvas a abrir el programa)
sigue por donde se quedó.

- Solo funciona si la variable es un número entero (también negativo). Si no existe o no es un
  número, se deja tal cual y se marca en rojo.
- Se suma 1 por petición, aunque uses el mismo `{{$variable}}` varias veces en ella.
- Respeta los ceros a la izquierda: `007` → `008` → `009`.
- `{{variable}}`, sin el `$`, envía el valor sin sumarle nada.

**Ejemplo**

Con la variable `num` = `1234` en el entorno y este cuerpo, enviado 3 veces con el envío múltiple:

```json
{
  "title": "test_{{$i}}",
  "userId": {{$num}}
}
```

| Envío | `title` | `userId` |
|---|---|---|
| 1 | `test_1` | `1234` |
| 2 | `test_2` | `1235` |
| 3 | `test_3` | `1236` |

Al terminar, `num` vale `1237` en el entorno. Si lo vuelves a enviar 3 veces, `title` vuelve a
ir de `test_1` a `test_3`, pero `userId` sigue en `1237`, `1238`, `1239`.

Mientras escribes, cada tipo se resalta con un color:
<code>{{variable}}</code> en verde, <code>{{$variable}}</code> en naranja, <code>{{$i}}</code> en
morado y lo que no existe en rojo.

## Ejecutar desde el código
> ⚠️ Esto es unicamente para compilarlo si se hacen cambios,**si quieres usarlo sin mas, pulsa en el enlace de descargas de arriba.**.


Necesitas [Node.js](https://nodejs.org/) 18 o superior.

```bash
npm install
npm start
```

## Compilar

```bash
npm run dist       # AppImage y .deb (Linux)
npm run appimage   # solo AppImage
npm run win        # instalador .exe y .zip portable (Windows)
```

O todo de una vez (AppImage, .deb, .exe y .zip) con `scripts/compilar.sh`.

Para compilar para Windows desde Linux hace falta Wine (`sudo apt install wine`).

Los paquetes se generan en `dist/`. La versión se toma de la constante `VERSION`
de `src/palomo.html` y se copia a `package.json` antes de compilar.

## Estructura

```
├── build/            recursos para electron-builder (iconos)
├── capturas/         capturas de pantalla del README
├── index.html        redirige a la app (para GitHub Pages)
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
