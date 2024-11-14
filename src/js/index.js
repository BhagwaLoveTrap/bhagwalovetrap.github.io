import { posts } from "./posts.js";

class SlideShow {
    constructor(posts, slideContainer) {
        this.posts = posts;
        this.slideContainer = slideContainer;
        this.currentSlideIndex = 0;
        this.totalSlides = posts.length;
        this.autoSlideInterval = null;

        // Bind methods
        this.showSlide = this.showSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
    }

    initialize() {
        this.renderSlide(this.currentSlideIndex);
        this.startAutoSlide();

        // Set up navigation buttons
        document.getElementById("nextSlide").addEventListener("click", () => {
            this.nextSlide();
            this.resetAutoSlide();
        });
        document.getElementById("prevSlide").addEventListener("click", () => {
            this.prevSlide();
            this.resetAutoSlide();
        });
    }

    startAutoSlide() {
        this.autoSlideInterval = setInterval(this.nextSlide, 5000); // Change slide every 5 seconds
    }

    resetAutoSlide() {
        clearInterval(this.autoSlideInterval);
        this.startAutoSlide();
    }

    renderSlide(index) {
        const post = this.posts[index];
        const { title, author, date, location, path, coverPhoto, coverVideo } = post;

        // Generate slide content
        this.slideContainer.innerHTML = `
            <div class="post-slide active">
                <h2><a href="${path}">${title}</a></h2>
                <p><strong>Author:</strong> ${author}</p>
                <p><strong>Date:</strong> ${date}</p>
                <p><strong>Location:</strong> ${location}</p>
                <p class="description">${post.description || "No description available."}</p>
            </div>
        `;

        // Apply fade effect
        const slides = document.querySelectorAll('.post-slide');
        slides.forEach((slide) => slide.classList.remove('active'));
        slides[0].classList.add('active');
    }

    showSlide(index) {
        if (index >= this.totalSlides) this.currentSlideIndex = 0;
        else if (index < 0) this.currentSlideIndex = this.totalSlides - 1;
        else this.currentSlideIndex = index;

        this.renderSlide(this.currentSlideIndex);
    }

    nextSlide() {
        this.showSlide(this.currentSlideIndex + 1);
    }

    prevSlide() {
        this.showSlide(this.currentSlideIndex - 1);
    }
}

// Sample data

// Initialize and run slideshow
const slideContainer = document.querySelector(".slide");
const slideShow = new SlideShow(posts, slideContainer);
slideShow.initialize();
