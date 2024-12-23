import axiosInstance from "@libs/axios/config";
import { ProductResponse } from "@store/menu/types";

export const getProductsRequest = async () => {
  try {
    const { data, status } = await axiosInstance.get<ProductResponse>("/menu");
    if (status === 200) {
      return data;
    }
    throw new Error();
  } catch (error) {
    console.error("Error fetching app config:", error);
    throw error;
  }
};
