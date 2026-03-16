# 📄 Matías Escobar — CV Dinámico

Curriculum Vitae interactivo, moderno y bilingüe (ES / EN) construido con **React + Vite + TypeScript**.

## ✨ Características

- 🌐 **Bilingüe** — Español e Inglés con cambio de idioma instantáneo
- 🎨 **Diseño oscuro premium** — Glassmorphism, gradientes y micro-animaciones con Framer Motion
- 📱 **Responsive** — Adaptado para mobile, tablet y desktop
- 🔍 **Proyectos filtrables** — Búsqueda en tiempo real por nombre, descripción o tecnología
- 💡 **Habilidades interactivas** — Modal con detalle de nivel por cada skill
- 📬 **Formulario de contacto** — Integrado con EmailJS para envíos sin backend propio
- ⬇️ **Descarga de CV** — Botón para descargar el PDF directamente
- 🔝 **Scroll to Top** — Botón flotante que aparece al hacer scroll

## 🛠️ Stack Tecnológico

| Tecnología | Uso |
|---|---|
| React 19 + TypeScript | UI principal |
| Vite 6 | Bundler y servidor de desarrollo |
| Tailwind CSS v4 | Estilos utilitarios |
| Framer Motion (`motion`) | Animaciones |
| Lucide React + React Icons | Íconos |
| EmailJS Browser | Envío de formulario de contacto |

## 🚀 Cómo correr el proyecto localmente

### Requisitos

- **Node.js** v18 o superior

### Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Crear el archivo de variables de entorno
cp .env.example .env.local

# 3. Editar .env.local con tus credenciales de EmailJS

# 4. Iniciar el servidor de desarrollo
npm run dev
```

La app estará disponible en `http://localhost:3000`.

## ⚙️ Configuración

### Variables de entorno (`.env.local`)

```env
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
```

### Foto de perfil y CV en PDF

- Reemplaza `public/perfil.jpg` con tu foto.
- Coloca tu PDF en `public/` como `cv-matias-escobar.pdf`.

## 📁 Estructura del proyecto

```
my_curriculum/
├── public/                 # Archivos estáticos
├── src/
│   ├── App.tsx             # Datos y UI
│   ├── main.tsx            # Entry point
│   └── index.css           # Estilos
├── vite.config.ts          # Configuración de Vite
└── package.json            # Dependencias
```

## 📄 Licencia

Uso personal. Siéntete libre de adaptar este template para tu propio CV.
