import firebase from "../../utils/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function handler(req, res) {
  if (req.method !== "POST") return res.status(400).end();
  const { email, passwoard } = req.body;
  try {
    const auth = getAuth(firebase);
    signInWithEmailAndPassword(auth, email, passwoard)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log("error catch ===>", error);
      });
  } catch (e) {
    console.log("error fire ===>", e);
  }
  res.status(200).json({ name: "John Doe" });
}
