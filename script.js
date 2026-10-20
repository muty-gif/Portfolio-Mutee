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
        "projects.techLabel": "Technologies",
        "projects.viewCode": "View code",
        "projects.helpdesk.title": "Ticketing system (Help Desk)",
        "projects.helpdesk.imageAlt": "Help Desk dashboard with ticket statistics and an alert for unassigned tickets",
        "projects.helpdesk.ticketsAlt": "Ticket list with search, status and priority filters",
        "projects.helpdesk.detailAlt": "Ticket detail with status badges and the management panel to assign, change state and priority",
        "projects.helpdesk.imageAria": "Open Help Desk screenshots",
        "projects.helpdesk.description": "A Flask-based support web application: users report issues and the technical team manages their status, priority and assignment, with comments, change history and search filters. Covered by 51 automated tests with pytest.",
        "projects.trackit.title": "Project and task tracker (TrackIt)",
        "projects.trackit.imageAlt": "TrackIt task list with completed tasks struck through",
        "projects.trackit.projectsAlt": "TrackIt projects overview with a new project form and a project card",
        "projects.trackit.projectAlt": "TrackIt project page with the edit form and task list",
        "projects.trackit.imageAria": "Open TrackIt screenshots",
        "projects.trackit.description": "A project and task tracker built with Flask and a JSON REST API, with a plain HTML, CSS and JavaScript front end that talks to it using fetch(). Each user only ever sees their own projects and tasks, and other users' data returns 404 so it is never leaked. Covered by 57 automated tests, including cross-user isolation.",

        "lightbox.title": "Screenshot viewer",
        "lightbox.close": "Close",
        "lightbox.prev": "Previous screenshot",
        "lightbox.next": "Next screenshot",

        "skills.title": "Skills",
        "skills.technical": "Technical",
        "skills.soft": "Workplace",
        "skills.soft.communication": "Communication",
        "skills.soft.time": "Time management",
        "skills.soft.teamwork": "Teamwork",

        "contact.title": "Contact",
        "contact.intro": "Want to talk? Here are my links:",
        "contact.email": "Email",
        "contact.github": "GitHub",
        "contact.linkedin": "LinkedIn",
        "contact.copy": "Copy email",
        "contact.copied": "Email copied to clipboard",
        "contact.copyError": "Couldn't copy — select the address manually.",

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
        "projects.techLabel": "Tecnologías",
        "projects.viewCode": "Ver código",
        "projects.helpdesk.title": "Sistema de tickets (Help Desk)",
        "projects.helpdesk.imageAlt": "Panel de inicio de Help Desk con estadísticas de tickets y alerta de tickets sin asignar",
        "projects.helpdesk.ticketsAlt": "Lista de tickets con filtros de búsqueda, estado y prioridad",
        "projects.helpdesk.detailAlt": "Detalle del ticket con etiquetas de estado y el panel para asignar técnico, cambiar estado y prioridad",
        "projects.helpdesk.imageAria": "Abrir capturas de Help Desk",
        "projects.helpdesk.description": "Aplicación web de soporte con Flask: los usuarios registran incidencias y el equipo técnico gestiona su estado, prioridad y asignación, con comentarios, historial de cambios y filtros de búsqueda. Cubierta por 51 pruebas automatizadas con pytest.",
        "projects.trackit.title": "Gestor de proyectos y tareas (TrackIt)",
        "projects.trackit.imageAlt": "Lista de tareas de TrackIt con las tareas completadas tachadas",
        "projects.trackit.projectsAlt": "Vista de proyectos de TrackIt con el formulario de nuevo proyecto y una tarjeta de proyecto",
        "projects.trackit.projectAlt": "Página de proyecto de TrackIt con el formulario de edición y la lista de tareas",
        "projects.trackit.imageAria": "Abrir capturas de TrackIt",
        "projects.trackit.description": "Gestor de proyectos y tareas creado con Flask y una API REST en JSON, con un front end en HTML, CSS y JavaScript que se comunica con ella mediante fetch(). Cada usuario solo ve sus propios proyectos y tareas, y los datos de otros usuarios devuelven 404 para no revelar su existencia. Cubierto por 57 pruebas automatizadas, incluido el aislamiento entre usuarios.",

        "lightbox.title": "Visor de capturas",
        "lightbox.close": "Cerrar",
        "lightbox.prev": "Captura anterior",
        "lightbox.next": "Captura siguiente",

        "skills.title": "Habilidades",
        "skills.technical": "Técnicas",
        "skills.soft": "Laborales",
        "skills.soft.communication": "Comunicación",
        "skills.soft.time": "Gestión del tiempo",
        "skills.soft.teamwork": "Trabajo en equipo",

        "contact.title": "Contacto",
        "contact.intro": "¿Quieres hablar? Aquí tienes mis enlaces:",
        "contact.email": "Correo",
        "contact.github": "GitHub",
        "contact.linkedin": "LinkedIn",
        "contact.copy": "Copiar correo",
        "contact.copied": "Correo copiado al portapapeles",
        "contact.copyError": "No se pudo copiar. Selecciona la dirección manualmente.",

        "footer.rights": "© 2026 Mutee Rafi Anjum. Todos los derechos reservados."
    }
};

const STORAGE_KEY = "portfolio-lang";
let currentLang = "en";

function t(key) {
    const dict = translations[currentLang] || translations.en;
    return dict[key] || translations.en[key] || "";
}

function applyLanguage(lang) {
    const dict = translations[lang] || translations.en;

    currentLang = translations[lang] ? lang : "en";
    document.documentElement.lang = currentLang;

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
        button.setAttribute("aria-pressed", String(button.dataset.lang === currentLang));
    });

    const copyStatus = document.querySelector(".copy-status");
    if (copyStatus) {
        copyStatus.textContent = "";
    }

    const copyButton = document.querySelector(".copy-btn");
    if (copyButton) {
        copyButton.classList.remove("is-copied");
    }
}

function detectLanguage() {
    let saved = null;

    try {
        saved = localStorage.getItem(STORAGE_KEY);
    } catch (error) {
        saved = null;
    }

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

/* Project screenshot galleries ------------------------------------------- */

function galleryItems(name) {
    const thumbnails = document.querySelectorAll(`[data-thumbs="${name}"] img`);

    return Array.from(thumbnails).map((thumbnail) => ({
        src: thumbnail.getAttribute("src"),
        alt: thumbnail.getAttribute("alt") || ""
    }));
}

function selectThumb(button) {
    const thumbs = button.closest("[data-thumbs]");
    if (!thumbs) return;

    const name = thumbs.dataset.thumbs;
    const mainImage = document.querySelector(`[data-shot="${name}"] img`);
    const thumbImage = button.querySelector("img");

    if (mainImage && thumbImage) {
        mainImage.setAttribute("src", thumbImage.getAttribute("src"));
        mainImage.setAttribute("alt", thumbImage.getAttribute("alt") || "");
        mainImage.setAttribute("width", thumbImage.getAttribute("width") || "");
        mainImage.setAttribute("height", thumbImage.getAttribute("height") || "");

        const altKey = thumbImage.getAttribute("data-i18n-alt");
        if (altKey) {
            mainImage.setAttribute("data-i18n-alt", altKey);
        } else {
            mainImage.removeAttribute("data-i18n-alt");
        }
    }

    thumbs.querySelectorAll("button").forEach((thumb) => {
        thumb.removeAttribute("aria-current");
    });
    button.setAttribute("aria-current", "true");
}

function initLightbox() {
    const dialog = document.getElementById("lightbox");
    const shots = document.querySelectorAll("[data-shot]");

    if (!dialog || typeof dialog.showModal !== "function") {
        shots.forEach((button) => {
            button.addEventListener("click", () => {
                const image = button.querySelector("img");
                if (image) {
                    window.open(image.getAttribute("src"), "_blank", "noopener");
                }
            });
        });
        return;
    }

    const image = dialog.querySelector(".lightbox-img");
    const counter = dialog.querySelector(".lightbox-count");
    const prevButton = dialog.querySelector("[data-prev]");
    const nextButton = dialog.querySelector("[data-next]");
    let items = [];
    let index = 0;
    let trigger = null;

    function render() {
        const item = items[index];
        if (!item) return;

        image.setAttribute("src", item.src);
        image.setAttribute("alt", item.alt);
        counter.textContent = `${index + 1} / ${items.length}`;

        const single = items.length < 2;
        prevButton.hidden = single;
        nextButton.hidden = single;
    }

    function step(delta) {
        if (items.length < 2) return;
        index = (index + delta + items.length) % items.length;
        render();
    }

    function open(name, startIndex, opener) {
        items = galleryItems(name);
        if (!items.length) return;

        index = Math.min(Math.max(startIndex, 0), items.length - 1);
        trigger = opener;

        render();
        document.body.classList.add("lightbox-open");
        dialog.showModal();
    }

    function close() {
        dialog.close();
    }

    shots.forEach((button) => {
        button.addEventListener("click", () => {
            const name = button.dataset.shot;
            const thumbs = document.querySelector(`[data-thumbs="${name}"]`);
            const active = thumbs ? thumbs.querySelector('[aria-current="true"]') : null;
            const start = active ? Number(active.dataset.index || 0) : 0;

            open(name, start, button);
        });
    });

    document.querySelectorAll("[data-thumbs] button").forEach((button) => {
        button.addEventListener("click", () => selectThumb(button));
    });

    dialog.querySelector("[data-close]").addEventListener("click", close);
    prevButton.addEventListener("click", () => step(-1));
    nextButton.addEventListener("click", () => step(1));

    dialog.addEventListener("click", (event) => {
        if (event.target === dialog) {
            close();
        }
    });

    dialog.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
            event.preventDefault();
            step(1);
        } else if (event.key === "ArrowLeft") {
            event.preventDefault();
            step(-1);
        }
    });

    dialog.addEventListener("close", () => {
        document.body.classList.remove("lightbox-open");

        const fallback = document.querySelector('[data-thumbs] [aria-current="true"]');
        if (trigger && document.contains(trigger)) {
            trigger.focus();
        } else if (fallback) {
            fallback.focus();
        }
    });
}

/* Copy email ------------------------------------------------------------- */

function initCopy() {
    const button = document.querySelector("[data-copy]");
    const status = document.querySelector(".copy-status");
    if (!button || !status) return;

    let resetTimer;

    function announce(message, copied) {
        status.textContent = message;
        button.classList.toggle("is-copied", Boolean(copied));
        window.clearTimeout(resetTimer);
        resetTimer = window.setTimeout(() => {
            status.textContent = "";
            button.classList.remove("is-copied");
        }, 3000);
    }

    function fallbackCopy(value) {
        const field = document.createElement("textarea");
        field.value = value;
        field.setAttribute("readonly", "");
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.appendChild(field);
        field.select();
        const copied = document.execCommand("copy");
        field.remove();

        if (!copied) {
            throw new Error("copy failed");
        }
    }

    button.addEventListener("click", async () => {
        const value = button.dataset.copy;
        if (!value) return;

        try {
            if (navigator.clipboard && window.isSecureContext) {
                await navigator.clipboard.writeText(value);
            } else {
                fallbackCopy(value);
            }
            announce(t("contact.copied"), true);
        } catch (error) {
            announce(t("contact.copyError"), false);
        }
    });
}

/* Scroll reveal ---------------------------------------------------------- */

function initReveal() {
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!elements.length) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
        elements.forEach((element) => element.classList.add("is-visible"));
        return;
    }

    document.documentElement.classList.add("js");

    elements.forEach((element) => {
        const siblings = Array.from(element.parentElement.children).filter((node) =>
            node.hasAttribute("data-reveal")
        );
        const position = siblings.indexOf(element);
        element.style.setProperty("--reveal-delay", `${Math.min(position, 4) * 90}ms`);
    });

    const observer = new IntersectionObserver((entries, instance) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            instance.unobserve(entry.target);
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

    elements.forEach((element) => observer.observe(element));
}

/* Active navigation ------------------------------------------------------ */

function initActiveNav() {
    const links = Array.from(document.querySelectorAll('nav a[href^="#"]'));
    if (!links.length || !("IntersectionObserver" in window)) return;

    const bySection = new Map();
    links.forEach((link) => {
        bySection.set(link.getAttribute("href").slice(1), link);
    });

    const sections = Array.from(document.querySelectorAll("main section[id]")).filter((section) =>
        bySection.has(section.id)
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            links.forEach((link) => link.removeAttribute("aria-current"));
            const link = bySection.get(entry.target.id);
            if (link) {
                link.setAttribute("aria-current", "location");
            }
        });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

    sections.forEach((section) => observer.observe(section));
}

/* Header state ----------------------------------------------------------- */

function initHeader() {
    const header = document.querySelector("header");
    if (!header) return;

    let queued = false;

    function update() {
        const scrollTop = window.scrollY;
        header.classList.toggle("is-scrolled", scrollTop > 8);

        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        const progress = scrollable > 0 ? Math.min(scrollTop / scrollable, 1) : 0;
        document.documentElement.style.setProperty("--scroll-progress", String(progress));

        queued = false;
    }

    window.addEventListener("scroll", () => {
        if (queued) return;
        queued = true;
        window.requestAnimationFrame(update);
    }, { passive: true });

    update();
}

function init() {
    applyLanguage(detectLanguage());

    document.querySelectorAll(".lang-btn").forEach((button) => {
        button.addEventListener("click", () => {
            applyLanguage(button.dataset.lang);
            try {
                localStorage.setItem(STORAGE_KEY, currentLang);
            } catch (error) {
                /* Storage can be blocked; the language still applies for this visit. */
            }
        });
    });

    initReveal();
    initLightbox();
    initCopy();
    initActiveNav();
    initHeader();
}

init();
