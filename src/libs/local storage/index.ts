const STORAGE_PREFIX = "myApp_";

export const getData = (keyPart: string): object | null => {
  try {
    const fullKey = `${STORAGE_PREFIX}${keyPart}`;
    const jsonData = localStorage.getItem(fullKey);
    return jsonData ? JSON.parse(jsonData) : null;
  } catch (error) {
    console.error("Error getting data from async storage", error);
    return null;
  }
};

export const addData = (keyPart: string, data: object): void => {
  try {
    const fullKey = `${STORAGE_PREFIX}${keyPart}`;
    const jsonData = JSON.stringify(data);
    localStorage.setItem(fullKey, jsonData);
  } catch (error) {
    console.error("Error adding data to async storage", error);
  }
};

export const removeData = (keyPart: string): void => {
  try {
    const fullKey = `${STORAGE_PREFIX}${keyPart}`;
    localStorage.removeItem(fullKey);
  } catch (error) {
    console.error("Error removing data from async storage", error);
  }
};
