import Button from "@/app/_components/atoms/Button";
import Text from "@/app/_components/atoms/Text";
import image from "@/app/_images/place.jpg";
import { useAppDispatch } from "@/app/_redux/hooks";
import { authSlice } from "@/app/_redux/slices/authSlice/authSlice";
import { FormEvent, useCallback } from "react";
import { FormTextInput } from "../../../inputs/FormTextInput";

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
          tag="h2"
          size="headingMd"
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
            required={true}
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
              tag="p"
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
          <Text
            tag="p"
            size="headingXs"
            color="black"
            text="Ještě nemáš účet?"
          />

          <button onClick={closeModalHandler}>
            <Text
              tag="p"
              color="primary"
              text="Registrovat se"
              link="/registrovat-se"
              fontWeight="semibold"
              size="headingXs"
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
        <div className="bg-black/60 text-start shadow-xl p-10 gap-5 backdrop-blur-xs rounded-lg flex flex-col items-start w-full h-full">
          <Text
            text="Tady by mohl být jakýkoliv text si jenom přeješ"
            color="white"
            tag="h4"
            fontWeight="semibold"
            size="headingSm"
          />
          <Text
            text="Tady by mohl být jakýkoliv text si jenom přeješ"
            color="white"
            tag="p"
          />
          <Text
            text="Tady by mohl být jakýkoliv text si jenom přeješ"
            color="white"
            tag="p"
          />
        </div>
      </div>
    </div>
  );
}
