const questions = document.getElementsByClassName('question');
const questionsContent = document.getElementsByClassName('question__content');
const arrows = document.getElementsByClassName('question__arrow');
const answerContainers = document.getElementsByClassName('answer__content');
const answers = document.getElementsByClassName('answer');

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', () => {
        questions[i].classList.toggle('question--open');

        let question = questions[i];
        let questionContent = questionsContent[i];
        let panel = answerContainers[i];
        let content = answers[i];
        let arrow = arrows[i];

        if (question.classList.contains('question--open')) {
            content.style.display = 'block';
            panel.style.maxHeight = panel.scrollHeight + 'px';
            questionContent.classList.add('question--active');
            arrow.classList.add('question__arrow--active')
        } else {
            panel.style.maxHeight = 0;
            content.style.display = "none";
            questionContent.classList.remove('question--active');
            arrow.classList.remove('question__arrow--active')

        }
    })
}
