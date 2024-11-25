import axiosInstance from "@libs/axios/config";

export const getProductsRequest = async () => {
  try {
    const { data, status } = await axiosInstance.get("/menu");
    if (status === 200) {
      return data;
    }
    throw new Error();
  } catch (error) {
    console.error("Error fetching app config:", error);
    throw error;
  }
};
