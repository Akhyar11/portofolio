import { updateProjectApi } from "../../../utils/firebase";

export default async function update(req, res) {
  if (req.method !== "PUT") res.status(400).end();
  const { title, descripsi, id, category } = req.body;
  const date = new Date().getTime();
  try {
    const resolve = await updateProjectApi(
      title,
      date,
      descripsi,
      id,
      category
    );
    res.status(200).json({ resolve });
  } catch (e) {
    res.status(400).json({ e });
  }
}
