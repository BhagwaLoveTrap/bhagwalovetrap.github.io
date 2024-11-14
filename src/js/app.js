class App {
    isNavOpen = false;

    constructor() {
        this.navElement = document.querySelector(".nav");
        this.footerElement = document.querySelector(".footer");

        // Bind methods to the instance
        this.toggleNav = this.toggleNav.bind(this);
    }

    initialize() {
        this.setupNavToggle();
        this.updateCopyright();
    }

    setupNavToggle() {
        document.querySelector(".menu").addEventListener("click", this.toggleNav);
    }

    toggleNav() {
        this.isNavOpen = !this.isNavOpen;
        this.navElement.style.width = this.isNavOpen ? "100%" : "0%";
    }

    updateCopyright() {
        const currentYear = new Date().getFullYear();
        this.footerElement.innerHTML = `<p>&copy; By BLT ${currentYear}</p>`;
    }
}

// Instantiate and initialize the app
const app = new App();
app.initialize();
