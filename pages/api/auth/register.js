import { singUp } from "../../../utils/firebase";

export default async function hendler(req, res) {
  if (req.method !== "POST") res.status(400).end();
  const { email, password } = req.body;
  try {
    const resolve = await singUp(email, password);
    res.status(200).json({ resolve });
  } catch (e) {
    console.log("error from try catch ===>", e);
    res
      .status(400)
      .json({
        msg: "bad request",
      })
      .end();
  }
}
