import { useState } from "react";
import { singIn } from "../utils/firebase";
import { useRouter } from "next/router";

export default function FormSingIn() {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const router = useRouter();
  const submitSingIn = async (e) => {
    e.preventDefault();
    try {
      await singIn(email, password);
      router.push("/admin/dashboard");
    } catch (e) {
      console.log(e);
    }
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePass = (e) => {
    setPass(e.target.value);
  };

  return (
    <div className="w-full">
      <form onSubmit={submitSingIn} className="w-full pt-8 text-left">
        <label htmlFor="email" className="w-full">
          <input
            type="email"
            className="p-2 px-3 text-sm outline-none placeholder:text-sm shadow-lg rounded-md mb-4 w-full ring ring-pink-500"
            placeholder="Email"
            required
            onChange={onChangeEmail}
          />
        </label>
        <label htmlFor="password" className="w-full">
          <input
            type="password"
            className="p-2 text-sm px-3 mb-4 placeholder:text-sm outline-none shadow-lg rounded-md w-full ring ring-pink-500"
            placeholder="Passwoard"
            onChange={onChangePass}
          />
        </label>
        <div className="w-full flex ">
          <button
            type="submit"
            className="px-3 py-2 ring ring-slate-300 hover:ring-pink-300 transtition-all duration-300 hover:bg-pink-700 text-sm font-semibod rounded-md shadow-md text-black hover:text-white"
          >
            sing in
          </button>
        </div>
      </form>
    </div>
  );
}
