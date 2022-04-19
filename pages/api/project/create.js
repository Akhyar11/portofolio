import { createProject } from "../../../utils/firebase";

export default async function create(req, res) {
  if (req.method !== "POST") res.status(400).end();
  const { title, descripsi, category } = req.body;
  const date = new Date().getTime();
  try {
    const resolve = await createProject(title, descripsi, date, category);
    res.status(200).json({ resolve });
  } catch (e) {
    console.log(e);
    res.status(400).json({ msg: e });
  }
}
