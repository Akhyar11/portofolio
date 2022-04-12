import InputFormContact from "./InputFormContact";

export default function FormContact() {
  return (
    <form action="" className="text-left">
      <InputFormContact type="emali" id="email" label="EMAIL" />
      <InputFormContact className="h-44" id="pesan" label="PESAN" type="text" />
    </form>
  );
}
