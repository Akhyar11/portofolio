export default function Ancor({ href, text }) {
  return (
    <li className="group">
      <a
        href={href}
        className="text-base text-dark py-2 mx-8 flex group-hover:text-pink-500 transtition duration-300"
      >
        {text}
      </a>
    </li>
  );
}
