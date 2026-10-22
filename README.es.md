<div align="center">

# Mutee Rafi Anjum - Portafolio

**Sitio web personal, un portafolio de una sola página, sin frameworks y sin proceso de compilación.**

[![Demo en vivo](https://img.shields.io/badge/demo%20en%20vivo-muty--gif.github.io-39ff14?style=flat-square)](https://muty-gif.github.io/Portfolio-Mutee/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=flat-square&logo=githubpages&logoColor=white)](https://pages.github.com/)

[English](README.md) | **Español**

</div>

## Vista previa

| English | Español |
| :---: | :---: |
| <img src="images/screenshot-en.png" alt="Portfolio home page in English" width="100%"> | <img src="images/screenshot-es.png" alt="Página de inicio del portafolio en español" width="100%"> |

## Sobre este sitio

Este es mi portafolio personal; un sitio estático rápido y sin dependencias que presenta quién soy, lo que estoy aprendiendo y los proyectos que construyo mientras curso ingeniería informática. Es totalmente bilingüe, de modo que quien lo visite puede leerlo en inglés o en español con un solo clic.

**[→ Ver el sitio en vivo](https://muty-gif.github.io/Portfolio-Mutee/)**

## Características

- **Bilingüe (EN / ES)**: un selector de idioma en la cabecera, con detección del idioma del navegador en la primera visita y la preferencia guardada para la siguiente.
- **Galerías de proyectos**: capturas enmarcadas con etiquetas de tecnologías, miniaturas y un visor a tamaño completo con navegación por teclado.
- **Tarjetas de contacto**: enlaces con icono a GitHub y LinkedIn, y copia del correo electrónico con un solo clic.
- **Responsivo**: funciona desde teléfonos pequeños hasta pantallas de escritorio amplias.
- **Accesible**: HTML semántico, navegación con teclado, estados de foco visibles y soporte de `prefers-reduced-motion`.
- **Ligero**: HTML, CSS y JavaScript vanilla. Sin dependencias y sin proceso de compilación, carga en un instante.
- **Listo para SEO y redes**: descripción meta, etiquetas Open Graph con una imagen de vista previa de 1200×630 y favicon propio.

## Tecnologías

| Capa | Tecnología |
| --- | --- |
| Estructura | HTML5 |
| Estilos | CSS3 (propiedades personalizables, Flexbox, media queries) |
| Comportamiento | JavaScript vanilla (selector de idioma, visor de galería) |
| Alojamiento | GitHub Pages |

## Proyectos destacados

### [Sistema de tickets (Help Desk)](https://github.com/muty-gif/Help-Desk-L1)

Aplicación web de soporte con Flask. Los usuarios registran incidencias y el equipo técnico gestiona su estado, prioridad y asignación, con comentarios, historial de cambios y filtros de búsqueda. Cubierta por 51 pruebas automatizadas con pytest.

<img src="images/help-desk-dashboard.png" alt="Panel de inicio de Help Desk con estadísticas de tickets y alerta de tickets sin asignar" width="100%">

### [Gestor de proyectos y tareas (TrackIt)](https://github.com/muty-gif/TrackIt)

Gestor de proyectos y tareas creado con Flask, SQLAlchemy y una API REST en JSON, con un panel de métricas y un front end en HTML, CSS y JavaScript que se comunica con ella mediante `fetch()`. Cada usuario solo ve sus propios proyectos y tareas, y los datos de otros usuarios devuelven `404` para no revelar su existencia. Cubierto por 70 pruebas automatizadas, incluido el aislamiento entre usuarios.

<img src="images/trackit-tasks.png" alt="Lista de tareas de TrackIt con controles en línea de estado, prioridad y fecha de vencimiento" width="100%">

## Estructura del proyecto

```text
Portfolio-Mutee/
├── index.html    # Estructura y contenido de la página (el texto por defecto está en inglés)
├── styles.css    # Tema oscuro con verde neón, diseño responsivo y detalles de accesibilidad
├── script.js     # Selector de idioma, traducciones, galería de proyectos y copia del correo
└── images/       # Favicon, capturas de los proyectos y vistas previas para el README
```

## Ejecutar en local

```bash
git clone https://github.com/muty-gif/Portfolio-Mutee.git
cd Portfolio-Mutee
python3 -m http.server 8000
```

Luego abre [http://localhost:8000](http://localhost:8000). También puedes abrir `index.html` directamente en el navegador.

> **Para editar contenido:** cada texto traducible vive en `script.js`, dentro de los diccionarios `en` y `es`. Cámbialo en ambos idiomas y listo: la página lo muestra al cargarse.

## Despliegue

El sitio se publica con [GitHub Pages](https://pages.github.com/). Cada push a la rama `main` se vuelve a compilar y se despliega automáticamente.

## Contacto

No dudes en escribirme:

- Correo: [muteerafi@gmail.com](mailto:muteerafi@gmail.com)
- GitHub: [github.com/muty-gif](https://github.com/muty-gif/)
- LinkedIn: [Mutee Rafi Anjum](https://www.linkedin.com/in/mutee-rafi-anjum-52b99142b/)

<div align="center">
<sub>© 2026 Mutee Rafi Anjum. Todos los derechos reservados.</sub>
</div>
