import Navbar from "../components/Navbar";
import Profil from "../components/Profil";
import Project from "../components/Project";
import Skils from "../components/Skils";
import Contact from "../components/Contact";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    window.onscroll = function () {
      const navbar = document.querySelector("#navbar");
      const fixNav = navbar.offsetTop;
      if (window.pageYOffset > fixNav) {
        navbar.classList.add("navbar-blur");
      } else {
        navbar.classList.remove("navbar-blur");
      }
    };
  }, []);

  return (
    <div id="home">
      <Navbar />
      <Profil />
      <Project />
      <Skils />
      <Contact />
    </div>
  );
}
