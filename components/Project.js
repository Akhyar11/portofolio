import NavProject from "./NavProject";
import { ref, onValue } from "firebase/database";
import Card from "./CardProject";
import { useEffect, useState } from "react";
import { db } from "../utils/firebase";

export default function Project() {
  const [data, setData] = useState(null);
  const getData = async () => {
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
        console.log(data);
      });
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => getData(), []);

  return (
    <div
      id="project"
      className="flex flex-wrap max-w-full bg-biru1 md:px-32 md:py-24 p-8 justify-between"
    >
      <NavProject />
      {data
        ? data.map((i) => (
            <Card
              key={i.id}
              title={i.data.title}
              date={new Date(i.data.date).toLocaleDateString()}
              category={i.data.category}
              describsi={i.data.descripsi}
            />
          ))
        : null}
    </div>
  );
}
