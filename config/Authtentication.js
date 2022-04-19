import { useRouter } from "next/router";
import { useEffect } from "react";
import { authtentication } from "../utils/firebase";

export default function Authtentication() {
  const router = useRouter();

  const cekUserLogin = () => {
    authtentication().onAuthStateChanged((user) => {
      if (user) {
        console.log("User has been login", { user });
      } else {
        console.log("User not login");
        router.push("/auth/login");
      }
    });
  };

  useEffect(() => {
    if (router.pathname === "/auth/login" || router.pathname === "/")
      return false;
    cekUserLogin();
  }, []);

  return <></>;
}

