import Image from 'next/image'

export default function ProfilIMG() {
  const size = 40*16
  return (
    <div className="w-40 h-40  bg-pink-800 ring-8 ring-slate-500 rounded-full md:w-56 md:h-56 md:ml-14 md:mb-0 -mb-8 mt-20 mx-auto justify-center flex">
      <Image
        className="h-40 rounded-full md:h-56"
        src="/icon3.png"
        alt="Muhammad Akhyar"
        width={`190%`}
        height={`${size}`}
      />
    </div>
  );
}
