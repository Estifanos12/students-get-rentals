export const getQuiz = async (quiz: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/get-quizzes/${quiz}`
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
