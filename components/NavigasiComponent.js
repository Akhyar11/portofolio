import Ancor from "./NavigasiAncor";
export default function Navigasi() {
  return (
    <nav className="font-heebo md:justify-between md:shadow-none md:rounded-none md:block md:max-w-full md:static md:bg-transparent scale-0 md:scale-100 transtition-all duration-300 ease-in-out absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full md:flex right-4 top-full">
      <ul className="w-1"></ul>
      <ul className="block md:flex">
        <Ancor href="#home" text="HOME" />
        <Ancor href="#about" text="ABOUT" />
        <Ancor href="#project" text="PROJECT" />
        <Ancor href="#skils" text="SKILS" />
        <Ancor href="#contact" text="CONTACT" />
      </ul>
    </nav>
  );
}
