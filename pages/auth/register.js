import FormSingUp from "../../components/formSingUp";

export default function Register() {
  return (
    <div className="max-w-full max-h-full items-center flex justify-center pt-6">
      <div className="px-8 w-[300px] shadow-md border flex rounded-md ring ring-pink-500 flex-wrap justify-center text-center p-8">
        <h1 className="text-xl font-semibold w-full block">Sing Up</h1>
        <div className="w-full h-[1px] bg-pink-500"></div>
        <FormSingUp></FormSingUp>
      </div>
    </div>
  );
}
