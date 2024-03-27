export const getQuiz = async (quiz: string) => {
  try {
    const response = await fetch(
      `http://localhost:3000/api/get-quizzes/${quiz}`
    );
    const data = await response.json();

    if (response.status === 404) {
      return [];
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};
