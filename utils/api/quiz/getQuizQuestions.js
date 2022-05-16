export const getQuizQuestions = async (quizParams) => {
  const { amount, category, difficulty } = quizParams;

  const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}`;

  const config = {
    method: 'GET',
  };

  try {
    const response = await fetch(url, config);
    const json = await response.json();

    if (response.ok) {
      return json;
    }
  } catch (e) {
    console.log({ e });
  }
};
