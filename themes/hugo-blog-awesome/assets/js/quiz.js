document.addEventListener('DOMContentLoaded', function () {
  const quizzes = document.querySelectorAll('.quiz');
  if (!quizzes.length) return;

  quizzes.forEach((quiz) => {
    const submitBtn = quiz.querySelector('.quiz-submit');
    const resultEl = quiz.querySelector('.quiz-result');

    submitBtn.addEventListener('click', function () {
      let total = 0;
      let correct = 0;

      const questions = quiz.querySelectorAll('.quiz-question');

      questions.forEach((q) => {
        total += 1;

        const options = q.querySelectorAll('input[type="radio"], input[type="checkbox"]');

        const correctSet = new Set(
          Array.from(options)
            .filter((o) => o.dataset.correct === 'true')
            .map((o) => o.value)
        );

        const userSet = new Set(
          Array.from(options)
            .filter((o) => o.checked)
            .map((o) => o.value)
        );

        q.classList.remove('quiz-correct', 'quiz-wrong');

        options.forEach((o) => {
          o.parentElement.classList.remove(
            'answer-correct',
            'answer-wrong',
            'answer-missed'
          );
        });

        options.forEach((o) => {
          const val = o.value;
          const isCorrect = correctSet.has(val);
          const isChecked = o.checked;

          if (isCorrect && isChecked) {
            o.parentElement.classList.add('answer-correct');
          } else if (!isCorrect && isChecked) {
            o.parentElement.classList.add('answer-wrong');
          } else if (isCorrect && !isChecked) {
            o.parentElement.classList.add('answer-missed');
          }
        });

        const isQuestionCorrect =
          userSet.size === correctSet.size &&
          Array.from(correctSet).every((v) => userSet.has(v));

        if (isQuestionCorrect) {
          q.classList.add('quiz-correct');
          correct += 1;
        } else {
          q.classList.add('quiz-wrong');
        }

        const explanation = q.querySelector('.quiz-explanation');
        if (explanation) explanation.style.display = 'block';
      });

      resultEl.textContent = `Result: ${correct} out of ${total}`;
    });
  });
});