import { deleteProject } from "../../../../utils/firebase";

export default async function hendler(req, res) {
  if (req.method !== "DELETE") res.status(400).end();
  const id = req.query.id;
  try {
    const resolve = await deleteProject(id);
    res.status(200).json({ resolve });
  } catch (e) {
    res.status(400).json("error", { e });
  }
}
