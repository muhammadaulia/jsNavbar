// Using selector inside the element for all question
const questions = document.querySelectorAll(".question");
// getting and saving all btn for each question
questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");

// item and question parameter in this case are referencing the sama part
// both of it referencing to the article
    btn.addEventListener("click", function (params) {
        questions.forEach(function (item) {
            if (item != question) {
                item.classList.remove("show-text");
            }
        });
        question.classList.toggle("show-text");
    });

});