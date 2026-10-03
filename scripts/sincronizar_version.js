const fs = require('fs')
const path = require('path')

const html = fs.readFileSync(path.join(__dirname, '..', 'src', 'palomo.html'), 'utf8')
const encontrada = html.match(/const\s+VERSION\s*=\s*["']([^"']+)["']/)
if (!encontrada) {
  console.error('No se ha encontrado const VERSION = "..." en palomo.html')
  process.exit(1)
}
const version = encontrada[1]

function cambia_version(fichero, cambia) {
  const ruta = path.join(__dirname, '..', fichero)
  if (!fs.existsSync(ruta)) return
  const datos = JSON.parse(fs.readFileSync(ruta, 'utf8'))
  cambia(datos)
  fs.writeFileSync(ruta, JSON.stringify(datos, null, 2) + '\n')
}

cambia_version('package.json', (datos) => { datos.version = version })
cambia_version('package-lock.json', (datos) => {
  datos.version = version
  if (datos.packages && datos.packages['']) datos.packages[''].version = version
})
console.log('Version de palomo.html: ' + version)
