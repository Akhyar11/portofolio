export default function ProfilHello() {
  return (
    <div className="md:w-8/12 p-4 pt-20 w-full">
      <div className="w-10/12 font-heebo font-bold">
        <h1 className="text-md flex flex-wrap">
          <span className="text-pink-500 opcity leading-loose font-thin -mb-2 block md:w-full">
            Hello semua 👋, saya
          </span>
          <span className="text-[44px] block md:w-full">Muhammad Akhyar</span>
        </h1>
      </div>
      <div className="text-[16px] md:mt-8 font-heebo text-slate-600 hover:text-pink-400 transtition duration-300">
        <p>
          Hai, saya seorang web developer saya sedang bersekolah di SMA N 1
          KEMUSU saat aplikasi ini di buat saya berusia 18. Salam kenal semuanya
          👋.
        </p>
      </div>
      <div className="my-8 rounded-sm flex bg-pink-700 text-white w-5/12 text-md md:text-[20px] font-heebo font-semibold items-center hover:ring hover:border hover:ring-pink-200 hover:border-red-200 hover:bg-pink-800 transtition duration-150">
        <a
          className="mx-auto block w-full text-center h-full md:p-4 px-2 py-3"
          href=""
        >
          Contact Me
        </a>
      </div>
    </div>
  );
}
