import Hunburger from "./Hunburger";
import Navigasi from "./NavigasiComponent";

export default function navbar() {
  return (
    <div
      id="navbar"
      className="bg-transparent fixed top-0 left-0 w-full flex items-center z-10"
    >
      <div className="container max-w-full">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <a
              href="#home"
              className="font-bold text-lg font-dancing block py-6 text-pink-500"
            >
              muhammadakhyar
            </a>
          </div>
          <div className="flex md:hidden items-center px-4">
            <Hunburger />
          </div>
          <Navigasi />
        </div>
      </div>
    </div>
  );
}
