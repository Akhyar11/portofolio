import FormContact from "./FormContact";
import SosmedContact from "./SosmedContact";

export default function Contact() {
  return (
    <div
      className="bg-biru1 text-center w-full max-w-full md:px-32 md:py-24 p-8"
      id="contact">
      <h1 className="text-pink-500 text-2xl">Contact</h1>
      <div className="w-full h-[1px] bg-pink-500 mb-20" />
      <FormContact />
      <div className="flex items-center justify-between">
        <a
          href=""
          className="text-lg text-white rounded-md flex items-start justify-center p-4 bg-sky-400 w-[85px] py-3 hover:bg-sky-600 transition-all duration-300">
          Kirim
        </a>
        <SosmedContact />
      </div>
    </div>
  );
}
