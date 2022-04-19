import { onValue, ref } from "firebase/database";
import { db } from "../../../utils/firebase";

export default async function getProjectApi(req, res) {
  if (req.method !== "GET") res.status(400).end();
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
      res.status(200).json(data);
    });
  } catch (e) {
    res.status(400).json({ e });
  }
}
