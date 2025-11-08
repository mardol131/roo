"use client";

import { useClickOutside } from "@/app/_hooks/useClickOutside";
import { useAppSelector } from "@/app/_redux/hooks";
import { authSlice } from "@/app/_redux/slices/authSlice/authSlice";
import React, { PropsWithChildren, useCallback, useRef } from "react";
import { FaXmark } from "react-icons/fa6";
import { useDispatch } from "react-redux";

type Props = {
  closeHandler: () => void;
  options?: { clickOutsideActivatesCloseHandler: boolean };
} & PropsWithChildren;

export default function ModalLayout({
  children,
  closeHandler,
  options = { clickOutsideActivatesCloseHandler: true },
}: Props) {
  const modalRef = useRef(null);
  useClickOutside(modalRef, closeHandler);

  return (
    <div className="z-50 bg-black/70 fixed top-0 left-0 w-full h-screen flex items-center justify-center">
      <div className="relative">
        <FaXmark
          onClick={closeHandler}
          className="text-white text-3xl absolute left-[100%] bottom-[100%]"
        />
        <div ref={modalRef} className="bg-white rounded-xl overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
