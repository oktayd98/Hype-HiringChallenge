const testimonials = document.querySelector(".testimonials");
const testimonialsContainer = document.querySelector(".testimonials-container");
const feedbacks = document.querySelector(".feedbacks");
const feedbacksContainer = document.querySelector(".feedbacks-container");

testimonials.addEventListener("click", (e) => {
    testimonialsContainer.className = "testimonials-container active";
    feedbacksContainer.className = "feedbacks-container";
    testimonials.className = "testimonials active";
    feedbacks.className = "feedbacks";
    e.preventDefault();
});

feedbacks.addEventListener("click", (e) => {
    feedbacksContainer.className = "feedbacks-container active";
    testimonialsContainer.className = "testimonials-container";
    feedbacks.className = "feedbacks active";
    testimonials.className = "testimonials";
    e.preventDefault();
});
