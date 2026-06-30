import api from "./api";

export const generateImages = async (prompt) => {
  const response = await api.post(
    "/image",
    {
      prompt,
    },
    {
      responseType: "blob",
    }
  );

  return [URL.createObjectURL(response.data)];
};