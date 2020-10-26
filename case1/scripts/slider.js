const slider = document.querySelectorAll(".testimonials-container .feedback");
const sliderCount = slider.length;
const left = document.getElementById("left-arrow");
const right = document.getElementById("right-arrow");
const cards = document.querySelectorAll(".card");
let activeFeedback = 0;

left.addEventListener("click", (e) => {
    slider[activeFeedback].className = "feedback";
    cards[activeFeedback].className = "card";
    activeFeedback--;
    if (activeFeedback < 0) activeFeedback = sliderCount - 1;
    slider[activeFeedback].className = "feedback slide";
    cards[activeFeedback].className = "card active";
    e.preventDefault();
});

right.addEventListener("click", (e) => {
    slider[activeFeedback].className = "feedback";
    cards[activeFeedback].className = "card";
    activeFeedback++;
    if (activeFeedback > sliderCount - 1) activeFeedback = 0;
    slider[activeFeedback].className = "feedback slide";
    cards[activeFeedback].className = "card active";
    e.preventDefault();
});
