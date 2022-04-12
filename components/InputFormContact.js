export default function InputFormContact({ className, label, type, id }) {
  const addClassName = className;
  return (
    <label htmlFor={id}>
      <span className="max-w-full text-lg font-semibold">{label}</span>
      <input
        type={type}
        id={id}
        className={`w-full mb-4 py-3 px-4 rounded-md ring ring-slate-200 hover:ring-pink-500 transition-all duration-300 border border-slate-200 hover:border-pink-500 ${addClassName}`}
      />
    </label>
  );
}
