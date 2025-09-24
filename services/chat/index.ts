import axios from "axios";

export const uploadPDF = async (formData: object, config: object) => {
  const res = await axios.post("api/upload-file", formData, config);

  return res;
};

export const sendQuery = async (query: string, fileName: string) => {
  const res = await axios.post("api/chat", {
    query: query,
    fileName: fileName,
  });

  return res.data;
};
