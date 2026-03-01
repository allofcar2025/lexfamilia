# LexFamilia: Guía de Despliegue en Android 🤖📱

Como la aplicación ha sido desarrollada en HTML, CSS y JavaScript vainilla (completamente libre de dependencias de servidor complejas), el proceso para convertirla en una aplicación instalable de Android (`.apk` o `.aab`) es muy directo. Puedes optar por tres vías:

## Opción 1: Aplicación Web Progresiva (PWA) - ¡La más rápida! ⚡
Dado que ya he generado el archivo `manifest.json`, The aplicación ya es instalable **sin pasar por Google Play**.
1. Sube la carpeta `lexfamilia` a cualquier servidor de alojamiento estático (ej. GitHub Pages, Vercel, Netlify).
2. Abre la URL en el navegador de un móvil Android (Chrome).
3. Aparecerá un aviso en la parte inferior: **"Añadir a la pantalla de inicio"**.
4. ¡Listo! La app se ejecutará a pantalla completa, con su icono, sin barra de direcciones (offline-ready si se añade un Service Worker posteriormente).

## Opción 2: Capacitor.js (Recomendado para Google Play) 📦
Si necesitas subirla a Google Play Store para monetizarla o darle aspecto 100% nativo.
*Nota: Requerirás instalar Node.js temporalmente en la máquina donde vayas a compilar, y tener Android Studio instalado*.

### Pasos (en tu terminal, dentro de la carpeta `lexfamilia`):
\`\`\`bash
# 1. En la máquina con Node instalado, inicia un proyecto npm básico
npm init -y

# 2. Instala Capacitor
npm install @capacitor/core
npm install @capacitor/cli --save-dev

# 3. Inicializa Capacitor en la carpeta de la app (el directorio webDir es el actual '.')
npx cap init LexFamilia com.lexfamilia.app --web-dir=.

# 4. Añade la plataforma Android
npm install @capacitor/android
npx cap add android

# 5. Copia los archivos web (HTML/JS/CSS) a la carpeta de Android
npx cap sync
\`\`\`
Después, abrirás la carpeta `android` generada con **Android Studio** (`npx cap open android`), y desde ahí le darás a "Build APK" o "Generate Signed Bundle". 

## Opción 3: Platform WebWrappers (Sin código) 🌐
Si no quieres tocar la consola, existen servicios gratuitos en la nube como:
- **PWA2APK**
- **WebIntoApp.com**
Solo tienes que subir el `.zip` de la carpeta `lexfamilia` y ellos te devuelven el `.apk` listo para instalar.

### ✅ Tareas pendientas para el Arte Final:
- Simplemente reemplazar los archivos `icon-192.png` y `icon-512.png` (que he referenciado en el `manifest.json`) por tu logotipo real de LexFamilia antes de compilar.
