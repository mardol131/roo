"use client";

import React, { useCallback, useRef } from "react";
import Divider from "../../atoms/Divider";
import Text from "../../atoms/Text";
import { User } from "lucide-react";
import { FaUser } from "react-icons/fa6";
import { RiFileUserFill } from "react-icons/ri";
import { useClickOutside } from "@/app/_hooks/useClickOutside";
import { GiPartyFlags } from "react-icons/gi";
import { FaIdCardAlt } from "react-icons/fa";
import { useAppDispatch } from "@/app/_redux/hooks";
import { authSlice } from "@/app/_redux/slices/authSlice/authSlice";

type Props = { closeHandler: () => void };

export default function UserDropdown({ closeHandler }: Props) {
  const dropdownRef = useRef(null);
  useClickOutside(dropdownRef, closeHandler);

  const dispatch = useAppDispatch();

  const openLoginModalHandler = useCallback(() => {
    dispatch(authSlice.actions.changeModalIsOpen({ isOpen: true }));
  }, [authSlice]);

  return (
    <div ref={dropdownRef} className=" absolute top-[100%] pt-3">
      <div className="flex flex-col gap-5 p-5 bg-white border text-start shadow-[0px_0px_10px_5px] shadow-black/10 border-borderLight rounded-lg">
        <button className="flex text-start items-center gap-3">
          <FaIdCardAlt className="text-2xl text-primary" />
          <div>
            <Text text="Staňte se dodavatelem" level="label7" fontWeight="lg" />
            <Text
              text="Tady by mohl být nějaký text stejně jako je na AirBnb"
              level="label8"
            />
          </div>
        </button>
        <Divider height={1} />
        <button
          onClick={openLoginModalHandler}
          className="flex items-center gap-3 group cursor-pointer"
        >
          <FaUser className="text-primary" />
          <Text
            text="Přihlásit se"
            level="label7"
            fontWeight="lg"
            className="group-hover:text-primary"
          />
        </button>
        <Divider height={1} />
        <button className="flex items-center gap-3">
          <RiFileUserFill className="text-primary" />
          <Text text="Zaregistrovat se" level="label7" fontWeight="lg" />
        </button>
      </div>
    </div>
  );
}
