import FormSingIn from "../../components/FormSingIn";

export default function Login() {
  return (
    <div className="max-w-full max-h-full items-center flex justify-center pt-6">
      <div className="px-8 w-[300px] shadow-lg border flex rounded-md flex-wrap justify-center text-center p-8">
        <h1 className="text-xl font-semibold w-full block">Sing In</h1>
        <div className="w-full h-[1px] bg-pink-500"></div>
        <FormSingIn></FormSingIn>
      </div>
    </div>
  );
}
