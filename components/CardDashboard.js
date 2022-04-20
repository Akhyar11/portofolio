import { useState } from "react";
import { useRouter } from "next/router";

export default function CardDashboard({ className, content }) {
  const [isAction, setAction] = useState("");
  const router = useRouter();
  const cardAction = (content) => {
    setAction(content);
    switch (isAction) {
      case "CURD Project":
        router.push("/admin/curdproject");
        break;
      case "CURD Skil":
        router.push("/admin/curdskil");
        break;
      case "Pesan":
        router.push("/admin/pesan");
        break;
    }
  };
  return (
    <div
      onClick={() => cardAction(content)}
      className={`hover:scale-105 hover:cursor-pointer transtition-all duration-300 flex items-center justify-center w-full mb-4 md:w-[200px] rounded-md ${className} shadow-lg h-[200px]`}
    >
      <h1 className="text-lg font-bold">{content}</h1>
    </div>
  );
}
