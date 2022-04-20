import axios from "axios";
import { useState } from "react";

export default function CardCurdProject({
  title,
  category,
  descripsi,
  onClick,
  id,
}) {
  const deleteProject = async () => {
    try {
      const resolve = await axios.delete(
        `http://localhost:5000/api/project/delete${id}`
      );
      console.log(resolve);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div
      onClick={() => onClick(id, title, category, descripsi)}
      className="w-11/12 hover:cursor-pointer p-4 ring ring-sky-500 transtition-all duration-300 rounded-md shadow-lg hover:scale-105 mb-4"
    >
      <h1 className="text-xl mb-2 font-bold tracking-wide">{title}</h1>
      <h3 className="text-md mb-2 text-slate-500 tracking-wide">{category}</h3>
      <p className="text-md tracking-wide">{descripsi}</p>
      <button
        onClick={deleteProject}
        className="py-2 px-3 text-lg rounded-md shadow-lg bg-red-500 hover:bg-red-600 transtition duration-300 text-white ml-4"
      >
        delete
      </button>
    </div>
  );
}
