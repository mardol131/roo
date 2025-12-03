"use client";

import React, { useCallback, useRef } from "react";
import Divider from "../../atoms/Divider";
import Text from "../../atoms/text/Text";
import { User } from "lucide-react";
import { FaUser } from "react-icons/fa6";
import { RiFileUserFill } from "react-icons/ri";
import { useClickOutside } from "@/app/_hooks/useClickOutside";
import { GiPartyFlags } from "react-icons/gi";
import { FaIdCardAlt } from "react-icons/fa";
import { useAppDispatch } from "@/app/_redux/hooks";
import { authSlice } from "@/app/_redux/slices/authSlice/authSlice";
import Button from "../../atoms/button/Button";
import Link from "next/link";
import { useTranslations } from "next-intl";

type Props = { closeHandler: () => void };

export default function UserDropdown({ closeHandler }: Props) {
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, closeHandler);

  const t = useTranslations("header.desktop.dropdown");
  const dispatch = useAppDispatch();

  const openLoginModalHandler = useCallback(() => {
    dispatch(authSlice.actions.changeModalIsOpen({ isOpen: true }));
  }, [authSlice]);

  return (
    <div ref={dropdownRef} className=" absolute top-[100%] pt-3">
      <div className="flex flex-col gap-5 p-5 bg-white min-w-60 border text-start shadow-[0px_0px_10px_5px] shadow-black/10 border-borderLight rounded-lg">
        <button
          onClick={openLoginModalHandler}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <FaUser className="text-primary" />
          <Text
            text={t("signIn")}
            tag="p"
            fontWeight="semibold"
            className="group-hover:text-primary"
            size="headingXs"
          />
        </button>
        <Divider height={1} />
        <Link
          href={"/registrovat-se"}
          className="flex items-center gap-3 group"
        >
          <RiFileUserFill className="text-primary" />
          <Text
            text={t("signUp")}
            tag="p"
            fontWeight="semibold"
            className="group-hover:text-primary"
            size="headingXs"
          />
        </Link>
        <Divider height={1} />
        <div className="flex flex-col text-start items-start gap-3">
          <Text
            text={t("becomeHost")}
            tag="p"
            size="headingXs"
            fontWeight="semibold"
          />
          <Text text={t("becomeHostText")} tag="p" />
          <Button
            text={t("becomeHostButton")}
            type="button"
            size="md"
            bgColor="primaryTertiary"
            rounding="full"
            textColor="white"
          />
        </div>
      </div>
    </div>
  );
}
