/* Minimal i18n for the portfolio. Text lives in this dictionary, keyed by the
   data-i18n attributes in index.html. English is the fallback language. */

const translations = {
    en: {
        "document.title": "Mutee Rafi Anjum - Portfolio",
        "document.description": "Personal portfolio of Mutee Rafi Anjum, computer engineering student.",

        "lang.switcher": "Language selector",

        "nav.about": "About",
        "nav.projects": "Projects",
        "nav.skills": "Skills",
        "nav.contact": "Contact",

        "home.eyebrow": "Computer engineering student.",
        "home.hook": "I learn by applying what I learn, and now I'm looking to keep doing it in a professional environment.",
        "home.availability": "Available for remote work",

        "about.title": "About me",
        "about.p1": "With the goal of building a solid foundation in the world of technology, I decided to start my computer engineering studies, which I am still pursuing. I have a particular interest in the fields of information technology and cybersecurity.",
        "about.p2": "Understanding things means being curious and wanting to learn how they work on the inside, so I don't settle for the basics. I currently combine my studies with volunteering in tech initiatives, and I spend my free time building my own projects to learn.",

        "projects.title": "Projects",
        "projects.helpdesk.title": "Ticketing system (Help Desk)",
        "projects.helpdesk.imageAlt": "Help Desk dashboard with ticket statistics and an alert for unassigned tickets",
        "projects.helpdesk.imageAria": "View the Help Desk code on GitHub",
        "projects.helpdesk.description": "A Flask-based support web application: users report issues and the technical team manages their status, priority and assignment, with comments, change history and search filters. Covered by 51 automated tests with pytest.",
        "projects.trackit.title": "Project and task tracker (TrackIt)",
        "projects.trackit.imageAlt": "TrackIt task list with completed tasks struck through",
        "projects.trackit.imageAria": "View the TrackIt code on GitHub",
        "projects.trackit.description": "A project and task tracker built with Flask and a JSON REST API, with a plain HTML, CSS and JavaScript front end that talks to it using fetch(). Each user only ever sees their own projects and tasks, and other users' data returns 404 so it is never leaked. Covered by 57 automated tests, including cross-user isolation.",

        "skills.title": "Skills",
        "skills.technical": "Technical",
        "skills.soft": "Workplace",
        "skills.soft.communication": "Communication",
        "skills.soft.time": "Time management",
        "skills.soft.teamwork": "Teamwork",

        "contact.title": "Contact",
        "contact.intro": "Want to talk? Here are my links:",

        "footer.rights": "© 2026 Mutee Rafi Anjum. All rights reserved."
    },
    es: {
        "document.title": "Mutee Rafi Anjum - Portafolio",
        "document.description": "Portafolio personal de Mutee Rafi Anjum, estudiante de ingeniería informática.",

        "lang.switcher": "Selector de idioma",

        "nav.about": "Sobre mí",
        "nav.projects": "Proyectos",
        "nav.skills": "Habilidades",
        "nav.contact": "Contacto",

        "home.eyebrow": "Estudiante de ingeniería informática.",
        "home.hook": "Aprendo aplicando lo que aprendo, y ahora busco poder seguir haciéndolo en un entorno profesional.",
        "home.availability": "Disponible para trabajar en remoto",

        "about.title": "Sobre mí",
        "about.p1": "Con el objetivo de construir una base sólida en el mundo de la tecnología, decidí empezar mis estudios de ingeniería informática, formación que sigo cursando. Tengo un cierto interés en los ámbitos de la tecnología de la información y de la ciberseguridad.",
        "about.p2": "Para saber hace falta ser curioso y querer entender cómo funcionan las cosas por dentro, así que no me conformo con lo básico. Actualmente combino mis estudios con labores de voluntariado en iniciativas tecnológicas, y dedico mi tiempo libre a construir proyectos propios para aprender.",

        "projects.title": "Proyectos",
        "projects.helpdesk.title": "Sistema de tickets (Help Desk)",
        "projects.helpdesk.imageAlt": "Panel de inicio de Help Desk con estadísticas de tickets y alerta de tickets sin asignar",
        "projects.helpdesk.imageAria": "Ver el código de Help Desk en GitHub",
        "projects.helpdesk.description": "Aplicación web de soporte con Flask: los usuarios registran incidencias y el equipo técnico gestiona su estado, prioridad y asignación, con comentarios, historial de cambios y filtros de búsqueda. Cubierta por 51 pruebas automatizadas con pytest.",
        "projects.trackit.title": "Gestor de proyectos y tareas (TrackIt)",
        "projects.trackit.imageAlt": "Lista de tareas de TrackIt con las tareas completadas tachadas",
        "projects.trackit.imageAria": "Ver el código de TrackIt en GitHub",
        "projects.trackit.description": "Gestor de proyectos y tareas creado con Flask y una API REST en JSON, con un front end en HTML, CSS y JavaScript que se comunica con ella mediante fetch(). Cada usuario solo ve sus propios proyectos y tareas, y los datos de otros usuarios devuelven 404 para no revelar su existencia. Cubierto por 57 pruebas automatizadas, incluido el aislamiento entre usuarios.",

        "skills.title": "Habilidades",
        "skills.technical": "Técnicas",
        "skills.soft": "Laborales",
        "skills.soft.communication": "Comunicación",
        "skills.soft.time": "Gestión del tiempo",
        "skills.soft.teamwork": "Trabajo en equipo",

        "contact.title": "Contacto",
        "contact.intro": "¿Quieres hablar? Aquí tienes mis enlaces:",

        "footer.rights": "© 2026 Mutee Rafi Anjum. Todos los derechos reservados."
    }
};

const STORAGE_KEY = "portfolio-lang";

function detectLanguage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) {
        return saved;
    }

    const preferred = navigator.languages || [navigator.language];
    for (const lang of preferred) {
        if (typeof lang === "string" && lang.toLowerCase().startsWith("es")) {
            return "es";
        }
    }

    return "en";
}

function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;

    document.documentElement.lang = lang;

    if (dict["document.title"]) {
        document.title = dict["document.title"];
    }

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && dict["document.description"]) {
        metaDescription.setAttribute("content", dict["document.description"]);
    }

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const value = dict[element.dataset.i18n];
        if (value) {
            element.textContent = value;
        }
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
        const value = dict[element.dataset.i18nAlt];
        if (value) {
            element.setAttribute("alt", value);
        }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
        const value = dict[element.dataset.i18nAriaLabel];
        if (value) {
            element.setAttribute("aria-label", value);
        }
    });

    document.querySelectorAll(".lang-btn").forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
    });
}

function init() {
    let currentLang = detectLanguage();

    applyLanguage(currentLang);

    document.querySelectorAll(".lang-btn").forEach((button) => {
        button.addEventListener("click", () => {
            currentLang = button.dataset.lang;
            localStorage.setItem(STORAGE_KEY, currentLang);
            applyLanguage(currentLang);
        });
    });
}

init();
