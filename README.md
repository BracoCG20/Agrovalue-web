# Agrovalue - Corporate Website

[![Astro CI Pipeline](https://github.com/BracoCG20/Agrovalue-web/actions/workflows/deploy.yml/badge.svg?branch=main)](https://github.com/BracoCG20/Agrovalue-web/actions/workflows/deploy.yml)

Sitio web corporativo de alto rendimiento desarrollado con **Astro**. Diseñado bajo principios de arquitectura DRY, cuenta con internacionalización nativa (i18n), navegación fluida tipo SPA (ViewTransitions) con animaciones de GSAP, y un backend seguro en PHP integrado para el formulario de contacto.

## Características Principales

- **Arquitectura Modular (DRY):** Las vistas (`index`, `nosotros`, `servicios`, `contacto`) actúan como envoltorios de componentes universales, eliminando la duplicación de código entre idiomas.
- **Internacionalización (i18n) Centralizada:** Diccionarios y lógica de enrutamiento gestionados desde `src/i18n/`, soportando español (predeterminado) e inglés (`/en/`).
- **Navegación SPA y Rendimiento:** Implementación de `ClientRouter` de Astro para transiciones de vista fluidas. Control de recolección de basura y prevención de fugas de memoria con `gsap.context()` y `ctx.revert()`.
- **Animaciones Complejas:** GSAP y ScrollTrigger para animaciones de scroll, revelado de texto y redimensionamiento dinámico (Clip-Path con ResizeObserver).
- **Backend Seguro (PHP):** Script independiente (`enviar.php`) utilizando PHPMailer, configurado para entornos restrictivos (cPanel/GoDaddy). Incluye Rate Limiting, Honeypot y CORS estricto.
- **SEO Técnico:** Etiquetas `hreflang` dinámicas, OpenGraph adaptativo y JSON-LD estructurado.

## Tecnologías Utilizadas

- **Framework:** [Astro 5](https://astro.build/)
- **Estilos:** SCSS / Sass
- **Animaciones:** [GSAP](https://gsap.com/) (Core, ScrollTrigger, MatchMedia)
- **Iconos:** [Lucide Astro](https://lucide.dev/)
- **Backend:** PHP 8.x + [PHPMailer](https://github.com/PHPMailer/PHPMailer)

## Estructura del Proyecto

```text
/
├── public/                 # Archivos estáticos y backend
│   ├── enviar.php          # Endpoint del formulario de contacto
│   ├── .htaccess           # Configuración de servidor Apache/cPanel
│   └── PHPMailer/          # Dependencia local para envíos SMTP
├── src/
│   ├── assets/             # Imágenes y SVGs optimizados
│   ├── components/         # Componentes UI centralizados (DRY)
│   ├── data/               # Archivos de datos estructurados (ej. serviciosData.js)
│   ├── i18n/               # Diccionarios (ui.ts) y utilidades (utils.ts)
│   ├── layouts/            # Plantilla base (Layout.astro)
│   ├── pages/              # Enrutamiento de páginas (ES y EN)
│   └── styles/             # Archivos globales SCSS
├── astro.config.mjs        # Configuración del framework
└── package.json            # Dependencias y scripts
```

## Instalación y Desarrollo Local

Clonar el repositorio:

```sh
git clone https://github.com/tu-usuario/agrovalue.git
cd agrovalue
```

Instalar dependencias:

```sh
npm install
```

Ejecutar el servidor de desarrollo:

```sh
npm run dev
```
