export default function Hunburger() {
  const hunburgerToggel = () => {
    const hunburger = document.querySelector("#hunburger");
    const naviToggle = document.querySelector("nav");
    naviToggle.classList.toggle("scale-100");
    hunburger.classList.toggle("hunburger-active");
  };

  return (
    <button
      onClick={hunburgerToggel}
      id="hunburger"
      name="hunburger"
      className="absolute block right-4"
    >
      <span className="hunburger transtition origin-top-left"></span>
      <span className="hunburger transtition"></span>
      <span className="hunburger transtition origin-bottom-left"></span>
    </button>
  );
}
