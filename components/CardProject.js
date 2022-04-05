export default function Card({ title, date, category, describsi }) {
  return (
    <div className="w-full shadow-md bg-white rounded-md p-6 mt-6">
      <h1 className="font-bold text-[26px] font-heebo">{title}</h1>
      <div className="flex text-slate-400 text-[18px] font-heebo justify-between mt-6">
        <div className="w-4/12">
          <p>{date}</p>
        </div>
        <div className="w-1/12 text-black">
          <p>|</p>
        </div>
        <div className="w-7/12">
          <p>{category}</p>
        </div>
      </div>
      <p className="text-[16px] mt-6 font-heebo">{describsi}</p>
      <a
        href=""
        className="max-w-full block w-full font-semibold text-heebo text-white text-center py-4 bg-sky-700 shadow-md rounded-md mt-4"
      >
        CEK
      </a>
    </div>
  );
}
