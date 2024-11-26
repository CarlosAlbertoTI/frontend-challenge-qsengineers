import React, { useContext, useEffect } from "react";
import { Container, Flex, Spinner } from "@radix-ui/themes";
import { useNavigate } from "react-router";

import { getAppSettingsServiceRequest } from "@src/services/api/getAppConfigSettingsRequest";

import { AppSettingsContext } from "@src/contexts/AppSettings/AppSettingsProvider";
import i18next from "i18next";

const LoadingScreen: React.FC = () => {
  const navigate = useNavigate();
  const { setting, setSetting } = useContext(AppSettingsContext);

  useEffect(() => {
    if (Object.keys(setting).length !== 0) {
      navigate("/Menu");
    }
  }, [setting, navigate]);

  useEffect(() => {
    const requestAppSettings = async () => {
      const response = await getAppSettingsServiceRequest();
      if (response) {
        setSetting(response);
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
