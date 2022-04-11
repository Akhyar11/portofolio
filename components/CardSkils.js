function CardSkils({ classNameAdd, title, level, srcAdd }) {
  return (
    <div className={`w-full mb-4 md:w-4/12 flex p-4 bg-slate-100 rounded-md ring ring-sky-200 border border-sky-200 ${classNameAdd} hover:scale-105 transition-all duration-300 hover:ring-pink-500
    `}>
        <div className="w-12 h-12 rounded-full bg-black">
          <img src={srcAdd} className="h-12 w-12"/>
        </div>
        <div className="ml-2 tracking-wider text-left">
          <h1>{title}</h1>
          <h3 className="text-slate-500 text-sm">{level}</h3>
        </div>
      </div>
  )
}

export default CardSkils