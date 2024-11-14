import { posts } from "./posts.js";


class Slideshow {
    constructor(posts, containerId) {
        this.posts = posts;
        this.container = document.getElementById(containerId);
        this.currentSlide = 0;
        this.createSlides();
        this.startSlideshow();

        // Add event listeners for buttons
        document.getElementById('nextSlide').addEventListener('click', () => this.nextSlide());
        document.getElementById('prevSlide').addEventListener('click', () => this.prevSlide());

        // Add swipe event listeners
        this.initSwipeListeners();
    }

    createSlides() {
        this.posts.forEach((post, index) => {
            const slide = document.createElement('div');
            slide.classList.add('slide');
            if (index === 0) slide.classList.add('active');

            slide.innerHTML = `
                <h2>${post.title}</h2>
                <p><strong>By:</strong> ${post.author} | <strong>Date:</strong> ${post.date}</p>
                <p>${post.description}</p>
                ${post.coverPhoto ? `<img src="${post.coverPhoto.path}" alt="${post.title}">` : ''}
            `;

            this.container.appendChild(slide);
        });
        this.slides = document.querySelectorAll('.slide');
    }

    nextSlide() {
        this.slides[this.currentSlide].classList.remove('active');
        this.currentSlide = (this.currentSlide + 1) % this.slides.length;
        this.slides[this.currentSlide].classList.add('active');
    }

    prevSlide() {
        this.slides[this.currentSlide].classList.remove('active');
        this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.slides[this.currentSlide].classList.add('active');
    }

    startSlideshow() {
        setInterval(() => {
            this.nextSlide();
        }, 5000);
    }

    // Method to initialize swipe detection
    initSwipeListeners() {
        let startX = 0;
        let endX = 0;

        this.container.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX; // Record the starting X position
        });

        this.container.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX; // Record the ending X position
            this.handleSwipe(startX, endX); // Check the swipe direction
        });
    }

    // Method to handle the swipe gesture and trigger slide navigation
    handleSwipe(startX, endX) {
        const swipeThreshold = 50; // Minimum distance in pixels to consider it a swipe
        const swipeDistance = endX - startX;

        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                // Swiped right (previous slide)
                this.prevSlide();
            } else {
                // Swiped left (next slide)
                this.nextSlide();
            }
        }
    }
}

const slideshow = new Slideshow(posts, 'slideshow');

