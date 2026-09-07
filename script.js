
// Плавная прокрутка Обо мне


document.getElementById("aboutButton").addEventListener("click", () => {
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});



// Анимация секций

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
});



// Кнопка Наверх


const topButton = document.getElementById("topButton");

window.addEventListener("scroll", () => {
    topButton.style.display = window.scrollY > 500 ? "block" : "none";
});

topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});



// Переключение языка


const languageButton = document.getElementById("languageButton");

let english = false;

const translations = {
    ru: {
        nav: ["Главная", "Обо мне", "Навыки", "Проекты", "Контакты"],

        title: "Привет, я keNDys",
        welcome: "Добро пожаловать в моё портфолио",

        aboutTitle: "Обо мне",
        aboutText1:
            "Я keNDys. Мне интересно программирование и всё, что с ним связано. Я изучаю разные технологии, пробую создавать сайты и постепенно развиваю свои навыки.",
        aboutText2:
            "Мне интересно разбираться в коде, создавать что-то своё и пробовать новые направления.",
        aboutButton: "Обо мне",

        skillsTitle: "Навыки",
        pythonText: "Изучаю программирование",
        htmlText: "Изучаю создание сайтов",
        cssText: "Изучаю стилизацию сайтов",
        jsText: "Изучаю интерактивность сайтов",

        abilitiesTitle: "Что я умею",

        abilityWebTitle: "🌐 Создание сайтов",
        abilityWebText:
            "Создаю сайты с помощью HTML и CSS и постепенно улучшаю их дизайн.",

        abilityPythonTitle: "🐍 Python",
        abilityPythonText:
            "Изучаю Python и создаю свои небольшие проекты для практики.",

        abilityJsTitle: "⚡ JavaScript",
        abilityJsText:
            "Добавляю интерактивность, кнопки, анимации и другие функции.",

        abilityDesignTitle: "🎨 Дизайн",
        abilityDesignText:
            "Экспериментирую с цветами, анимациями и внешним видом интерфейсов.",

        journeyTitle: "Мой путь",

        journeyPythonTitle: "Python",
        journeyPythonText:
            "Начал изучать основы программирования и Python.",

        journeyHtmlTitle: "HTML & CSS",
        journeyHtmlText:
            "Перешёл к созданию и оформлению сайтов.",

        journeyJsTitle: "JavaScript",
        journeyJsText:
            "Начал добавлять интерактивность и анимации.",

        journeyProjectsTitle: "Проекты",
        journeyProjectsText:
            "Создаю собственные проекты и продолжаю развиваться.",

        goalsTitle: "Мои цели",

        goalJsTitle: "Улучшить JavaScript",
        goalJsText:
            "Научиться создавать более сложные интерактивные сайты.",

        goalTechTitle: "Изучить новые технологии",
        goalTechText:
            "Постепенно расширять свои знания в программировании.",

        goalProjectsTitle: "Создавать больше проектов",
        goalProjectsText:
            "Практиковаться и превращать свои идеи в реальные проекты.",

        projectsTitle: "Проекты",

        portfolioTitle: "Моё портфолио",
        portfolioText:
            "Личный сайт-портфолио, созданный с помощью HTML и CSS.",
        portfolioButton: "Подробнее",

        pythonProjectTitle: "Python-проект",
        pythonProjectText: "Мой проект на Python.",
        pythonProjectButton: "Подробнее",

        montageProjectTitle: "Монтаж",
        montageProjectText: "Примеры игрового монтажа и оформления видео.",
        montageProjectButton: "Подробнее",

        editingTitle: "Монтаж",
        editingText: "Примеры работ с игровыми видео, нарезками и оформлением превью.",
        montageCaption1: "Игровой момент",
        montageCaption2: "Оформление превью",

        contactsTitle: "Контакты",
        contactsText: "Связаться со мной можно здесь:",

        footerText: "© 2026 keNDys. Моё портфолио.",
        topButton: "↑ Наверх"
    },

    en: {
        nav: ["Home", "About me", "Skills", "Projects", "Contacts"],

        title: "Hi, I'm keNDys",
        welcome: "Welcome to my portfolio",

        aboutTitle: "About me",
        aboutText1:
            "I'm keNDys. I'm interested in programming and everything related to it. I'm learning different technologies, creating websites and gradually improving my skills.",
        aboutText2:
            "I enjoy understanding code, creating something of my own and trying new directions.",
        aboutButton: "About me",

        skillsTitle: "Skills",
        pythonText: "Learning programming",
        htmlText: "Learning website development",
        cssText: "Learning website styling",
        jsText: "Learning website interactivity",

        abilitiesTitle: "What I can do",

        abilityWebTitle: "🌐 Website Development",
        abilityWebText:
            "I create websites using HTML and CSS and gradually improve their design.",

        abilityPythonTitle: "🐍 Python",
        abilityPythonText:
            "I study Python and create small projects for practice.",

        abilityJsTitle: "⚡ JavaScript",
        abilityJsText:
            "I add interactivity, buttons, animations and other features.",

        abilityDesignTitle: "🎨 Design",
        abilityDesignText:
            "I experiment with colors, animations and interface design.",

        journeyTitle: "My Journey",

        journeyPythonTitle: "Python",
        journeyPythonText:
            "Started learning the basics of programming and Python.",

        journeyHtmlTitle: "HTML & CSS",
        journeyHtmlText:
            "Moved on to creating and designing websites.",

        journeyJsTitle: "JavaScript",
        journeyJsText:
            "Started adding interactivity and animations.",

        journeyProjectsTitle: "Projects",
        journeyProjectsText:
            "I create my own projects and continue to develop my skills.",

        goalsTitle: "My Goals",

        goalJsTitle: "Improve JavaScript",
        goalJsText:
            "Learn to create more advanced interactive websites.",

        goalTechTitle: "Learn New Technologies",
        goalTechText:
            "Gradually expand my knowledge of programming.",

        goalProjectsTitle: "Create More Projects",
        goalProjectsText:
            "Practice and turn my ideas into real projects.",

        projectsTitle: "Projects",

        portfolioTitle: "My Portfolio",
        portfolioText:
            "Personal portfolio website created with HTML and CSS.",
        portfolioButton: "Learn more",

        pythonProjectTitle: "Python Project",
        pythonProjectText: "My project written in Python.",
        pythonProjectButton: "Learn more",

        montageProjectTitle: "Video Editing",
        montageProjectText: "Examples of gaming edits and video design.",
        montageProjectButton: "Learn more",

        editingTitle: "Video Editing",
        editingText: "Examples of gaming videos, highlights and thumbnail design.",
        montageCaption1: "Gaming moment",
        montageCaption2: "Video thumbnail",

        contactsTitle: "Contacts",
        contactsText: "You can contact me here:",

        footerText: "© 2026 keNDys. My portfolio.",
        topButton: "↑ Top"
    }
};

const elements = {
    nav: document.querySelectorAll("nav a"),

    title: document.getElementById("title"),
    welcome: document.getElementById("welcome"),
    aboutTitle: document.getElementById("about-title"),
    aboutText1: document.getElementById("about-text-1"),
    aboutText2: document.getElementById("about-text-2"),
    aboutButton: document.getElementById("aboutButton"),

    skillsTitle: document.getElementById("skills-title"),
    pythonText: document.getElementById("python-text"),
    htmlText: document.getElementById("html-text"),
    cssText: document.getElementById("css-text"),
    jsText: document.getElementById("js-text"),

    abilitiesTitle: document.getElementById("abilities-title"),

    abilityWebTitle: document.getElementById("ability-web-title"),
    abilityWebText: document.getElementById("ability-web-text"),

    abilityPythonTitle: document.getElementById("ability-python-title"),
    abilityPythonText: document.getElementById("ability-python-text"),

    abilityJsTitle: document.getElementById("ability-js-title"),
    abilityJsText: document.getElementById("ability-js-text"),

    abilityDesignTitle: document.getElementById("ability-design-title"),
    abilityDesignText: document.getElementById("ability-design-text"),

    journeyTitle: document.getElementById("journey-title"),

    journeyPythonTitle: document.getElementById("journey-python-title"),
    journeyPythonText: document.getElementById("journey-python-text"),

    journeyHtmlTitle: document.getElementById("journey-html-title"),
    journeyHtmlText: document.getElementById("journey-html-text"),

    journeyJsTitle: document.getElementById("journey-js-title"),
    journeyJsText: document.getElementById("journey-js-text"),

    journeyProjectsTitle: document.getElementById("journey-projects-title"),
    journeyProjectsText: document.getElementById("journey-projects-text"),

    goalsTitle: document.getElementById("goals-title"),

    goalJsTitle: document.getElementById("goal-js-title"),
    goalJsText: document.getElementById("goal-js-text"),

    goalTechTitle: document.getElementById("goal-tech-title"),
    goalTechText: document.getElementById("goal-tech-text"),

    goalProjectsTitle: document.getElementById("goal-projects-title"),
    goalProjectsText: document.getElementById("goal-projects-text"),

    projectsTitle: document.getElementById("projects-title"),

    portfolioTitle: document.getElementById("portfolio-title"),
    portfolioText: document.getElementById("portfolio-text"),
    portfolioButton: document.getElementById("portfolio-button"),

    pythonProjectTitle: document.getElementById("python-project-title"),
    pythonProjectText: document.getElementById("python-project-text"),
    pythonProjectButton: document.getElementById("python-project-button"),

    montageProjectTitle: document.getElementById("montage-project-title"),
    montageProjectText: document.getElementById("montage-project-text"),
    montageProjectButton: document.getElementById("montage-project-button"),

    editingTitle: document.getElementById("editing-title"),
    editingText: document.getElementById("editing-text"),
    montageCaption1: document.getElementById("montage-caption-1"),
    montageCaption2: document.getElementById("montage-caption-2"),

    contactsTitle: document.getElementById("contacts-title"),
    contactsText: document.getElementById("contacts-text"),

    footerText: document.getElementById("footer-text")
};

function setText(element, text) {
    element.textContent = text;
}

function updateLanguage() {
    const lang = english ? translations.en : translations.ru;

    elements.nav.forEach((link, index) => {
        setText(link, lang.nav[index]);
    });

    languageButton.textContent = english ? "RU" : "EN";

    Object.keys(elements).forEach(key => {
        if (key !== "nav" && lang[key] !== undefined) {
            setText(elements[key], lang[key]);
        }
    });
}

languageButton.addEventListener("click", () => {
    english = !english;
    updateLanguage();
});


//Модальное окно проектов

const modal = document.getElementById("projectModal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const modalTech = document.getElementById("modal-tech");
const modalLink = document.getElementById("modal-link");
const modalImage = document.getElementById("modal-image");

function openModal(title, text, tech, images) {
    modalTitle.textContent = title;
    modalText.textContent = text;
    modalTech.textContent = tech;

    const imageList = Array.isArray(images) ? images : (images ? [images] : []);
    const gallery = document.getElementById("modal-gallery");

    gallery.innerHTML = "";

    imageList.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `${title} — ${index + 1}`;
        gallery.appendChild(img);
    });

    modal.style.display = "flex";
}


elements.portfolioButton.addEventListener("click", event => {
    event.preventDefault();

    openModal(
        english ? "My Portfolio" : "Моё портфолио",
        english
            ? "This is my personal portfolio website. I created it to practice HTML, CSS and JavaScript."
            : "Это мой личный сайт-портфолио. Я создал его для практики HTML, CSS и JavaScript.",
        "HTML • CSS • JavaScript",
        ""
    );
});
elements.pythonProjectButton.addEventListener("click", event => {
    event.preventDefault();

    openModal(
        english ? "Python Project" : "Python-проект",
        english
            ? "This is my Python project."
            : "Это мой проект на Python.",
        "Python",
        "./python-project.png"
    );
});

elements.montageProjectButton.addEventListener("click", event => {
    event.preventDefault();

    openModal(
        english ? "Video Editing" : "Монтаж",
        english
            ? "Examples of my gaming video editing and thumbnail design."
            : "Примеры моего игрового монтажа и оформления превью.",
        "Video Editing",
        ["./montage-1.jpg", "./montage-2.jpg"]
    );
});


function closeProjectModal() {
    modal.classList.add("hide");

    setTimeout(() => {
        modal.style.display = "none";
        modal.classList.remove("hide");
    }, 200);
}

closeModal.addEventListener("click", closeProjectModal);

window.addEventListener("click", event => {
    if (event.target === modal) {
        closeProjectModal();
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal.style.display === "flex") {
        closeProjectModal();
    }
});