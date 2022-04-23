import CardCurdProject from "../../components/CardCurdProject";
import { useEffect, useState } from "react";
import Link from "next/link";
import { onValue, ref } from "firebase/database";
import {
  createProject,
  db,
  deleteProjectApi,
  updateProjectApi,
} from "../../utils/firebase";

export default function Curdproject() {
  const [data, setData] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [descripsi, setDesc] = useState("");
  const [ifUpdate, setUpdate] = useState("save");
  const [id, setId] = useState("");

  const getData = () => {
    try {
      const starCountRef = ref(db(), "projects/");
      onValue(starCountRef, (callback) => {
        const resolve = callback.val();
        const data = [];
        Object.keys(resolve).map((key) => {
          data.push({
            id: key,
            data: resolve[key],
          });
        });
        setData(data);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const cencelUpdate = () => {
    setUpdate("save");
    const inputTitle = document.querySelector("#title");
    const inputCategory = document.querySelector("#category");
    const inputDescripsi = document.querySelector("#descripsi");
    inputTitle.value = null;
    inputCategory.value = null;
    inputDescripsi.value = null;
  };

  const daleteProject = async () => {
    try {
      await deleteProjectApi(id);
      const inputTitle = document.querySelector("#title");
      const inputCategory = document.querySelector("#category");
      const inputDescripsi = document.querySelector("#descripsi");
      inputTitle.value = null;
      inputCategory.value = null;
      inputDescripsi.value = null;
    } catch (e) {
      console.log(e);
    }
  };
  const getDataFromCard = (id, title, category, descripsi) => {
    setUpdate("update");
    setId(id);
    const inputTitle = document.querySelector("#title");
    const inputCategory = document.querySelector("#category");
    const inputDescripsi = document.querySelector("#descripsi");
    inputTitle.value = title;
    inputCategory.value = category;
    inputDescripsi.value = descripsi;
    setTitle(title);
    setCategory(category);
    setDesc(descripsi);
  };

  const updateProject = async (e) => {
    e.preventDefault();
    const date = new Date().getTime();
    try {
      await updateProjectApi(title, date, descripsi, id, category);
      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";
      getData();
    } catch (e) {
      console.log(e);
    }
  };

  const saveProject = async (e) => {
    e.preventDefault();
    const date = new Date().getTime();
    try {
      await createProject(title, descripsi, date, category);
      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";
      getData();
    } catch (e) {
      console.log(e);
    }
  };
  const setState = (e) => {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "category":
        setCategory(e.target.value);
        break;
      case "descripsi":
        setDesc(e.target.value);
        break;
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="p-8 relative text-center max-w-full w-full">
      <div className="hidden md:block absolute left-8 top-8">
        <Link href="/admin/dashboard">
          <a className="py-2 px-3 text-lg rounded-md shadow-lg bg-sky-500 hover:bg-sky-60    0 transtition duration-300 text-white">
            DASHBOARD
          </a>
        </Link>
      </div>
      <div className="w-full text-left flex justify-center">
        <form
          action=""
          className="w-full md:w-5/12"
          onSubmit={ifUpdate === "update" ? updateProject : saveProject}
        >
          <input
            required
            id="title"
            name="title"
            type="text"
            className="py-2 mb-6 px-3 w-full text-lg placeholder:tracking-wide placeholder:italic placeholder:text-md placeholder:text-slate-500 outline-none ring ring-sky-500 border boreder-sky-500 rounded-md shadow-lg"
            placeholder="title"
            onChange={setState}
          />
          <input
            id="category"
            name="category"
            onChange={setState}
            required
            type="text"
            className="py-2 mb-6 px-3 w-full text-lg placeholder:tracking-wide placeholder:italic placeholder:text-md placeholder:text-slate-500 outline-none ring ring-sky-500 border boreder-sky-500 rounded-md shadow-lg"
            placeholder="category"
          />
          <textarea
            id="descripsi"
            name="descripsi"
            required
            className="py-2 px-3 text-lg w-full placeholder:tracking-wide placeholder:italic placeholder:text-md mb-2 placeholder:text-slate-500 outline-none ring ring-sky-500 border boreder-sky-500 rounded-md shadow-lg h-36"
            cols="30"
            rows="10"
            onChange={setState}
            placeholder="descripsi"
          ></textarea>
          <div className="flex justify-between">
            <div>
              <button
                type="submit"
                className="py-2 px-3 text-lg rounded-md shadow-lg bg-sky-500 transtition duration-300 hover:bg-sky-600 text-white"
              >
                {ifUpdate === "update" ? "UPDATE" : "SAVE"}
              </button>
              {ifUpdate === "update" ? (
                <div className="mt-4">
                  <button
                    type="button"
                    className="py-2 px-3 text-lg rounded-md shadow-lg bg-red-500 hover:bg-red-600 transtition duration-300 text-white"
                    onClick={cencelUpdate}
                  >
                    CENCEL
                  </button>
                  <button
                    type="button"
                    className="py-2 px-3 text-lg rounded-md shadow-lg bg-red-500 hover:bg-red-600 transtition duration-300 text-white ml-4"
                    onClick={daleteProject}
                  >
                    DELETE
                  </button>
                </div>
              ) : null}
            </div>
            <Link href="/admin/dashboard">
              <a className="block md:hidden py-2 px-3 text-lg rounded-md shadow-lg bg-sky-500 hover:bg-sky-600 text-white transtition duration-300">
                DASHBOARD
              </a>
            </Link>
          </div>
        </form>
      </div>
      <div className="h-[1px] w-full mt-6 bg-black"></div>
      <h1 className="text-xl font-bold">Data</h1>
      <div className="flex justify-center md:p-4 pt-4 text-left flex-wrap">
        {data
          ? data.map((i) => (
              <CardCurdProject
                key={i.id}
                title={i.data.title}
                descripsi={i.data.descripsi}
                category={i.data.category}
                onClick={getDataFromCard}
                id={i.id}
              />
            ))
          : null}
      </div>
    </div>
  );
}
