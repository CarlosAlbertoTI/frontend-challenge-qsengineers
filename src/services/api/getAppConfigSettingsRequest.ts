import axiosInstance from "@libs/axios/config";

export const getAppSettingsServiceRequest = async () => {
  try {
    const { data, status } = await axiosInstance.get("/venue/9");
    if (status === 200) {
      return data;
    }
    throw new Error;
  } catch (error) {
    console.error("Error fetching app config:", error);
    throw error;
  }
};
