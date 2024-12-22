import { Button, Dialog, Flex, TextArea } from "@radix-ui/themes";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";

import { useTranslation } from "@hooks/useTranslation";

import { AppDispatch, RootState } from "@src/store";
import { changeInstructions } from "@src/store/bag";

const ExtraInstructionsModal: React.FC = () => {
  const [newInstructions, setNewInstructions] = useState("");

  const { t } = useTranslation(["Instructions_modal"]);
  const { webSettings } = useSelector((state: RootState) => state.webSettings);
  const { instructions } = useSelector((state: RootState) => state.basket);

  const dispatch = useDispatch<AppDispatch>();

  const handleSaveInstruction = () => {
    dispatch(changeInstructions(newInstructions));
  };

  useEffect(() => {
    setNewInstructions(instructions);
  }, [instructions]);

  return (
    <Dialog.Content aria-describedby={undefined} maxWidth="450px">
      <Dialog.Title>{t(["title"])}</Dialog.Title>

      <Flex direction="column" gap="3">
        <TextArea
          value={newInstructions}
          onChange={(e) => {
            setNewInstructions(e.target.value);
          }}
          placeholder={t(["description"])}
        />
      </Flex>

      <Flex gap="3" mt="4" justify="end">
        <Dialog.Close>
          <Button variant="soft" color="gray">
            {t(["cancel_btn"])}
          </Button>
        </Dialog.Close>
        <Dialog.Close>
          <Button
            onClick={handleSaveInstruction}
            style={{
              backgroundColor: webSettings.navBackgroundColour,
            }}
          >
            {t(["save_btn"])}
          </Button>
        </Dialog.Close>
      </Flex>
    </Dialog.Content>
  );
};

export default ExtraInstructionsModal;
