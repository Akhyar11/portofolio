import NavProject from "./NavProject";
import Card from "./CardProject";

export default function Project() {
  return (
    <div
      id="project"
      className="flex flex-wrap max-w-full bg-biru1 md:px-32 md:py-24 p-8 justify-between"
    >
      <NavProject />
      <div className="md:pr-2 md:w-6/12">
        <Card
          title="Membuat website dengan NEXTJS dan Taillwind CSS"
          date="2 Mart 2022"
          category="Web Desing"
          describsi="Consectetur quae nemo doloremque tenetur eum? Reprehenderit a nam dolorum unde sequi cumque Natus aut?"
        />
        <p></p>
      </div>
      <div className="md:pl-2 md:w-6/12">
        <Card
          title="Belajar bersama membuat website portfolio dengan bantuan Taillwind CSS"
          date="2 Mart 2022"
          category="Web Desing"
          describsi="Adipisicing voluptatem provident sit ratione voluptate fuga Aliquid harum officiis beatae ullam neque Quas aperiam porro quo iure"
        />
      </div>
    </div>
  );
}
