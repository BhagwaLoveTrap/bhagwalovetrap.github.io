import { posts,comments } from "./data.js";


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

// ============

// CommentModule.js
// CommentModule.js
class CommentModule {
    constructor(containerId) {
        this.comments = comments; // Using imported comment data
        this.container = document.getElementById(containerId);
        this.currentComment = 0;
        this.createComments();
        this.startCommentUpdate();
        this.initSwipeListeners();
    }

    createComments() {
        this.comments.forEach((commentData, index) => {
            const commentDiv = this.renderComment(commentData, index);
            this.container.appendChild(commentDiv);
        });
        this.commentsDivs = document.querySelectorAll('.comment');
    }

    renderComment(commentData, index) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        if (index === 0) commentDiv.classList.add('active');  // First comment as active

        commentDiv.innerHTML = `
            <h3>${commentData.name}</h3>
            <p>${commentData.comment}</p>
        `;
        return commentDiv;
    }

    nextComment() {
        this.commentsDivs[this.currentComment].classList.remove('active');
        this.currentComment = (this.currentComment + 1) % this.commentsDivs.length;
        this.commentsDivs[this.currentComment].classList.add('active');
    }

    prevComment() {
        this.commentsDivs[this.currentComment].classList.remove('active');
        this.currentComment = (this.currentComment - 1 + this.commentsDivs.length) % this.commentsDivs.length;
        this.commentsDivs[this.currentComment].classList.add('active');
    }

    startCommentUpdate() {
        setInterval(() => {
            this.nextComment();
        }, 60000);  // Update every 1 minute (60000ms)
    }

    initSwipeListeners() {
        let isMouseDown = false;
        let isTouchStart = false;
        let startX = 0;
        let endX = 0;

        // Mouse swipe listeners
        this.container.addEventListener('mousedown', (e) => {
            isMouseDown = true;
            startX = e.clientX;
        });

        this.container.addEventListener('mousemove', (e) => {
            if (isMouseDown) {
                endX = e.clientX;
                this.handleDrag(startX, endX);
            }
        });

        this.container.addEventListener('mouseup', () => {
            isMouseDown = false;
            this.handleDragEnd(startX, endX);
        });

        this.container.addEventListener('mouseleave', () => {
            isMouseDown = false;
            this.handleDragEnd(startX, endX);
        });

        // Touch swipe listeners for mobile devices
        this.container.addEventListener('touchstart', (e) => {
            isTouchStart = true;
            startX = e.touches[0].clientX;
        });

        this.container.addEventListener('touchmove', (e) => {
            if (isTouchStart) {
                endX = e.touches[0].clientX;
                this.handleDrag(startX, endX);
            }
        });

        this.container.addEventListener('touchend', () => {
            isTouchStart = false;
            this.handleDragEnd(startX, endX);
        });

        this.container.addEventListener('touchcancel', () => {
            isTouchStart = false;
            this.handleDragEnd(startX, endX);
        });
    }

    handleDrag(startX, endX) {
        const swipeThreshold = 100;  // Increase threshold to make the drag more deliberate
        const swipeDistance = endX - startX;

        // Move comment smoothly with drag
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                this.prevComment();  // Drag right to go to the previous comment
            } else {
                this.nextComment();  // Drag left to go to the next comment
            }
        }
    }

    handleDragEnd(startX, endX) {
        // After drag ends, transition smoothly to next/prev based on distance
        const swipeThreshold = 100;
        const swipeDistance = endX - startX;

        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                this.prevComment();  // Drag right to go to the previous comment
            } else {
                this.nextComment();  // Drag left to go to the next comment
            }
        }
    }
}

// Initialize the CommentModule
const commentModule = new CommentModule('commentSection');
