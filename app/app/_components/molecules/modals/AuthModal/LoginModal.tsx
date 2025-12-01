"use client";

import { useAppDispatch, useAppSelector } from "@/app/_redux/hooks";
import { authSlice } from "@/app/_redux/slices/authSlice/authSlice";
import { useCallback } from "react";
import ModalLayout from "../ModalLayout";
import AuthModalLoginMode from "./modes/AuthModalLoginMode";

type Props = {};

export default function LoginModal({}: Props) {
  const dispatch = useAppDispatch();
  const { authModalOpen, authModalMode } = useAppSelector(
    (store) => store.authSlice
  );

  const closeModalHandler = useCallback(() => {
    dispatch(authSlice.actions.changeModalIsOpen({ isOpen: false }));
  }, [dispatch]);

  return (
    <>
      {authModalOpen ? (
        <>
          <ModalLayout closeHandler={closeModalHandler}>
            {authModalMode === "login" && (
              <AuthModalLoginMode closeModalHandler={closeModalHandler} />
            )}
          </ModalLayout>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
