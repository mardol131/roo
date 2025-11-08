import Text from "@/app/_components/atoms/Text";
import React, { FormEvent, useCallback } from "react";
import { FormTextInput } from "../../../inputs/FormTextInput";
import Button from "@/app/_components/atoms/Button";
import { useAppDispatch } from "@/app/_redux/hooks";
import {
  AuthModalModes,
  authSlice,
} from "@/app/_redux/slices/authSlice/authSlice";
import image from "@/app/_images/place.jpg";

type Props = { closeModalHandler: () => void };

export default function AuthModalLoginMode({ closeModalHandler }: Props) {
  const dispatch = useAppDispatch();

  const onSubmitHandler = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    dispatch(authSlice.actions.loginUser({ email: "", password: "" }));
  }, []);

  return (
    <div className="bg-white grid grid-cols-2 max-w-200">
      <form
        onSubmit={onSubmitHandler}
        className="w-full flex flex-col items-center gap-10 p-10"
      >
        <Text
          level="label4"
          text="Přihlásit se"
          color="primary"
          className="font-semibold"
        />
        <div className="w-full flex flex-col gap-2">
          <FormTextInput
            placeholder="email@email.com"
            label="Uživatelský email"
            type="text"
            name="username"
            className=" rounded-md w-full"
            required="true"
          />
          <FormTextInput
            placeholder="*****"
            label="Heslo"
            type="password"
            name="passwrod"
            className=" rounded-md w-full"
            required={true}
          />

          <button
            onClick={closeModalHandler}
            className="text-start cursor-pointer"
            type="button"
          >
            <Text
              text="Zapomenuté heslo"
              level="label7"
              color="placeholder"
              className="hover:text-primary"
              link="/zapomenute-heslo"
            />
          </button>
        </div>

        <Button
          text="Přihlásit se"
          size="xl"
          bgColor="primaryTertiary"
          textColor="white"
          rounding="full"
          type="submit"
        />
        <div className="flex gap-2">
          <Text level="paragraph3" color="black" text="Ještě nemáš účet?" />

          <button onClick={closeModalHandler}>
            <Text
              level="paragraph3"
              color="primary"
              text="Registrovat se"
              link="/registrovat-se"
              fontWeight="lg"
            />
          </button>
        </div>
      </form>
      <div
        style={{
          backgroundImage: `url('${image.src}')`,
          backgroundSize: "cover",
        }}
        className="flex items-center justify-center"
      >
        <div className="bg-tertiaryDark/60 text-start shadow-xl p-10 gap-5 backdrop-blur-xs rounded-lg flex flex-col items-center w-full h-full">
          <Text
            text="Tady by mohl být jakýkoliv text si jenom přeješ"
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
