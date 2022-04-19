import InputFormContact from "./InputFormContact";

export default function FormContact() {
  return (
    <form action="" className="text-left">
      <InputFormContact
        type="emali"
        id="email"
        label="EMAIL"
        className="outline-none"
      />
      <label htmlFor="pesan">
        <span className="max-w-full text-lg font-semibold">PESAN</span>
        <textarea
          id="pesan"
          name="pesan"
          cols="30"
          rows="10"
          className="w-full mb-4 py-3 px-4 rounded-md ring ring-slate-200 outline-none hover:ring-pink-500 transition-all duration-300 border border-slate-200 hover:border-pink-500 h-36"
        ></textarea>
      </label>
    </form>
  );
}
