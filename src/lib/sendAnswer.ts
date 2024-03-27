import { apiRequest } from "@/services/api/apiRequest";

export const handleSubmit = async (
  answers,
  email,
  category
): Promise<{
  message: "Success" | "Error";
  result?: number;
}> => {
  const newAnswer = answers.map((answer) => {
    return answer.at(0);
  });

  try {
    const response = await apiRequest({
      method: "POST",
      endpoint: "/api/grade-quiz",
      data: JSON.stringify({ answers: newAnswer, email, category }),
    });

    if (response.status !== 200) {
      return { message: "Error" };
    }
    return { message: "Success", result: response.data.student_score };
  } catch (error) {
    return { message: "Error" };
  }
};
