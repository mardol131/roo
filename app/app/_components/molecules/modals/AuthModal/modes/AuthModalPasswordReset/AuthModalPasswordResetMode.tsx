import Text from "@/app/_components/atoms/Text";
import React, { FormEvent, useCallback, useState } from "react";
import { FormTextInput } from "../../../../inputs/FormTextInput";
import Button from "@/app/_components/atoms/Button";
import { useAppDispatch } from "@/app/_redux/hooks";
import {
  AuthModalModes,
  authSlice,
} from "@/app/_redux/slices/authSlice/authSlice";
import image from "@/app/_images/place.jpg";
import InsertEmailStep from "./InsertEmailStep";
import CodeVerifiactionStep from "./CodeVerificationStep";

type Props = {};

export default function AuthModalPasswordResetMode({}: Props) {
  const [codeSent, setCodeSent] = useState(false);
  const dispatch = useAppDispatch();

  const onSubmitHandler = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    dispatch(authSlice.actions.loginUser({ email: "", password: "" }));

    setCodeSent(true);
  }, []);

  const changeModalMode = useCallback((mode: AuthModalModes) => {
    dispatch(authSlice.actions.changeAuthModalMode(mode));
  }, []);

  return (
    <div className="bg-white grid grid-cols-2 max-w-200">
      {!codeSent && (
        <InsertEmailStep
          onSubmitHandler={onSubmitHandler}
          changeModalModeHandler={changeModalMode}
        />
      )}
      {codeSent && (
        <CodeVerifiactionStep
          onSubmitHandler={onSubmitHandler}
          changeModalModeHandler={changeModalMode}
        />
      )}
      <div
        style={{
          backgroundImage: `url('${image.src}')`,
          backgroundSize: "cover",
        }}
        className="flex items-center justify-center"
      >
        <div className="bg-tertiaryDark/60 text-start shadow-xl p-10 gap-5 backdrop-blur-xs rounded-lg flex flex-col items-center w-full h-full">
          <Text
            text="Zapomenuté heslo není problém"
            color="white"
            level="h4"
            fontWeight="xl"
          />
          <Text
            text="Tady by mohl být jakýkoliv text si jenom přeješ"
            color="white"
            level="paragraph2"
          />
          <Text
            text="Tady by mohl být jakýkoliv text si jenom přeješ"
            color="white"
            level="paragraph2"
          />
        </div>
      </div>
    </div>
  );
}
