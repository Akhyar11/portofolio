import Image from 'next/image'

export default function CardSkils({ classNameAdd, title, level, srcAdd }) {
  const size = 12 * 16
  return (
    <div className={`w-full mb-4 md:w-4/12 flex p-4 bg-slate-100 rounded-md ring ring-sky-200 border border-sky-200 ${classNameAdd} hover:scale-105 transition-all duration-300 hover:ring-pink-500
    `}>
        <div className="w-12 h-12 rounded-full bg-black">
          <Image src={srcAdd} alt="Image" className="h-12 w-12" width={`${size}`} height={`${size}`}/>
        </div>
        <div className="ml-2 tracking-wider text-left">
          <h1>{title}</h1>
          <h3 className="text-slate-500 text-sm">{level}</h3>
        </div>
      </div>
  )
}