import NavProject from "./NavProject";
import Card from "./CardProject";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Project() {
  const [data, setData] = useState(null);
  useEffect(async () => {
    const resolve = await axios.get("http://localhost:5000/api/project");
    setData(resolve.data);
  }, []);

  return (
    <div
      id="project"
      className="flex flex-wrap max-w-full bg-biru1 md:px-32 md:py-24 p-8 justify-between"
    >
      <NavProject />
      {data
        ? data.map((i) => (
            <Card
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
