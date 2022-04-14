export default function () {
  return (
    <div className="max-w-full max-h-full items-center flex justify-center pt-6">
      <div className="px-8 w-[350px] shadow-md border w-8/12 flex rounded-md ring ring-pink-500 flex-wrap justify-center text-center p-8">
        <h1 className="text-xl font-semibold w-full block">Sing Up</h1>
        <div className="w-full h-[1px] bg-pink-500"></div>
        <form action="" className="w-full pt-8 text-left">
          <label for="email" className="w-full">
            <input
              type="email"
              className="p-2 px-3 text-sm outline-none placeholder:text-sm shadow-md rounded-md mb-4 w-full ring ring-pink-500"
              placeholder="Email"
            />
          </label>
          <label for="password" className="w-full">
            <input
              type="password"
              className="p-2 text-sm px-3 mb-4 placeholder:text-sm outline-none shadow-md rounded-md w-full ring ring-pink-500"
              placeholder="Passwoard"
            />
          </label>
        </form>
        <div className="w-full flex ">
          <button
            type="submit"
            className="px-3 py-2 ring ring-slate-300 hover:ring-pink-300 transtition-all duration-300 hover:bg-pink-700 text-sm font-semibod rounded-md shadow-md text-black hover:text-white"
          >
            sing up
          </button>
        </div>
      </div>
    </div>
  );
}
