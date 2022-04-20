export default function Card({ title, date, category, describsi }) {
  return (
    <div className="w-full min-h-[320px] shadow-md bg-white rounded-md p-6 mt-6 md:w-6/12 md:mr-4 md:-mr-4 relative">
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
      <div className="w-full left-0 px-6 absolute bottom-4">
        <a
          href=""
          className="w-full mx-auto block w-full font-semibold text-heebo text-white text-center py-4 bg-sky-700 shadow-md rounded-md"
        >
          CEK
        </a>
      </div>
    </div>
  );
}
