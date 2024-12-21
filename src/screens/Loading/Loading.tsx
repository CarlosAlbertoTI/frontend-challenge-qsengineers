import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import i18next from "i18next";
import { Container, Flex, Spinner } from "@radix-ui/themes";
import { useNavigate } from "react-router";

import { getAppSettingsServiceRequest } from "@src/services/api/getAppConfigSettingsRequest";

import { AppDispatch, RootState } from "@src/store";
import { setAppSettingsValue } from "@store/appSettings";

const LoadingScreen: React.FC = () => {
  const webSettings = useSelector((state: RootState) => state.webSettings);
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  useEffect(() => {
    if (webSettings.id !== 0) {
      navigate("/Menu");
    }
  }, [webSettings]);

  useEffect(() => {
    const requestAppSettings = async () => {
      const response = await getAppSettingsServiceRequest();
      if (response) {
        dispatch(setAppSettingsValue(response));
        await i18next.changeLanguage(response.locale);
        document.title = response.internalName;
      }
    };

    requestAppSettings();

    return () => {};
  }, []);

  return (
    <Container size="1" height={"100vh"} width={"100vw"}>
      <Flex height={"100%"} width={"100%"} justify="center" align="center">
        <Spinner
          style={{
            width: "10%",
            height: "10%",
          }}
        />
      </Flex>
    </Container>
  );
};

export default LoadingScreen;
