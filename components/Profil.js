import ProfilHello from "./ProfilHello";
import ProfilIMG from "./ProfilIMG";

export default function Profil() {
  return (
    <div
      id="about"
      className="container relative md:pt-20 md:px-32 max-w-full md:pb-14 sm:mb-6 md:mb-0"
    >
      <div className="md:flex w-full invisible md:visible">
        <ProfilHello />
        <ProfilIMG />
      </div>
      <div className="md:invisible absolute top-1 mb-6">
        <ProfilIMG />
        <ProfilHello />
      </div>
    </div>
  );
}
