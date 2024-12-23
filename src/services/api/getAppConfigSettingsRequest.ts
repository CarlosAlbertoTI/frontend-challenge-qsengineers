import axiosInstance from "@libs/axios/config";
import { AppSettingProps } from "@store/appSettings/types";

export const getAppSettingsServiceRequest = async () => {
  try {
    const { data, status } = await axiosInstance.get<AppSettingProps>(
      "/venue/9"
    );
    if (status === 200) {
      return data;
    }
    throw new Error();
  } catch (error) {
    console.error("Error fetching app config:", error);
    throw error;
  }
};
