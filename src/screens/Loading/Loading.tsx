import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import i18next from "i18next";
import { Container, Flex, Spinner } from "@radix-ui/themes";
import { useNavigate } from "react-router";

import { getAppSettingsServiceRequest } from "@services/api/getAppConfigSettingsRequest";

import { AppDispatch } from "@src/store";
import { setAppSettingsValue } from "@store/appSettings";

const LoadingScreen: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const { isPending, isError, data } = useQuery({
    queryKey: ["settings"],
    queryFn: getAppSettingsServiceRequest,
  });

  useEffect(() => {
    if (!isPending && !isError) {
      if (data) {
        const { locale, internalName } = data;

        dispatch(setAppSettingsValue(data));
        i18next.changeLanguage(locale);
        document.title = internalName;

        navigate("/Menu");
      }
    }
  }, [isPending]);

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
