import LinkContact from "./LinkContact";

export default function SosmedContact() {
  return (
    <div className="flex">
      <LinkContact
        href="https://github.com/Akhyar11"
        src="/github.svg"
        alt="github"
      />
      <LinkContact src="/email.svg" alt="gmail" />
      <LinkContact src="/ig.svg" alt="instagram" />
    </div>
  );
}
