import { useRouter } from "next/router";
import LoginUI from "./Login.presenter";

export default function Login() {
  const router = useRouter();
  const onClickSignUp = () => {
    router.push("/signUp");
  };

  return <LoginUI onClickSignUp={onClickSignUp} />;
}
