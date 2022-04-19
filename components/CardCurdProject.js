export default function CardCurdProject({
  title,
  category,
  descripsi,
  onClick,
  id,
}) {
  return (
    <div
      onClick={() => onClick(id, title, category, descripsi)}
      className="w-11/12 hover:cursor-pointer p-4 ring ring-sky-500 transtition-all duration-300 rounded-md shadow-lg hover:scale-105 mb-4"
    >
      <h1 className="text-xl mb-2 font-bold tracking-wide">{title}</h1>
      <h3 className="text-md mb-2 text-slate-500 tracking-wide">{category}</h3>
      <p className="text-md tracking-wide">{descripsi}</p>
    </div>
  );
}
