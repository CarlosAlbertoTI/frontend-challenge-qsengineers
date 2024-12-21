import React from "react";
import { useSelector } from "react-redux";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { IoMenu } from "react-icons/io5";
import { Flex, Heading } from "@radix-ui/themes";

import { useTranslation } from "@hooks/useTranslation";
import { RootState } from "@src/store";

const Header: React.FC = () => {
  const { t } = useTranslation(["Header"]);

  const webSettings = useSelector((state: RootState) => state.webSettings);
  const {
    webSettings: { bannerImage, navBackgroundColour },
  } = webSettings;
  return (
    <>
      <Flex
        style={{ backgroundColor: navBackgroundColour }}
        className=" text-white p-4 flex flex-row-reverse"
      >
        <nav className="container mx-auto flex justify-center items-center hidden md:flex">
          <ul className="flex space-x-10">
            <li className="w-32 relative group text-lg">
              <a
                href="#menu"
                className="hover:text-gray-400 flex justify-center"
              >
                {t("header_menu")}
              </a>
              <span className="w-32 absolute left-0 right-0 top-9 h-1 bg-white transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></span>
            </li>
            <li className="w-32 relative group text-lg">
              <a
                href="#entrar"
                className="hover:text-gray-400 flex justify-center "
              >
                {t("header_login")}
              </a>
              <span className="w-32 absolute left-0 right-0 top-9 h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </li>
            <li className="w-32 relative group text-lg">
              <a
                href="#contato"
                className="hover:text-gray-400 flex justify-center"
              >
                {t("header_contact")}
              </a>
              <span className="w-32 absolute left-0 right-0 top-9 h-1 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </li>
          </ul>
        </nav>
        <nav className="md:hidden ml-3">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger color="white">
              <IoMenu size="35" />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content className="bg-white text-black rounded-md shadow-lg p-3 mr-8">
              <DropdownMenu.Item className="p-2 hover:bg-gray-200">
                {t("header_menu")}
              </DropdownMenu.Item>
              <DropdownMenu.Item className="p-2 hover:bg-gray-200">
                {t("header_login")}
              </DropdownMenu.Item>
              <DropdownMenu.Item className="p-2 hover:bg-gray-200">
                {t("header_contact")}
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </nav>
        <div className="flex justify-center w-full md:hidden pl-14">
          <Heading>Menu</Heading>
        </div>
      </Flex>
      <img
        style={{ borderBottom: "5px solid white" }}
        src={bannerImage}
        alt="Example"
        className="w-full object-cover h-8 min-h-32 min-w-20"
      />
    </>
  );
};

export default Header;
