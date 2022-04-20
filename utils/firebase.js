import { initializeApp, getApps } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { getDatabase, ref, push, set, remove } from "firebase/database";
import config from "../env_local.json";

const {
  APIKEY,
  AUTHDOMAIN,
  PROJECTID,
  STORAGEBUCKET,
  MSGSENDRID,
  APPID,
  DATABASEURL,
} = config;

const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: MSGSENDRID,
  appId: APPID,
  databaseURL: DATABASEURL,
};

if (!getApps().length) {
  initializeApp(firebaseConfig);
}

export const firebaseAuth = getAuth();
export const database = getDatabase();

export const db = () => {
  return database;
};

// Database (membuat project data)
export const createProject = async (title, descripsi, date, category) => {
  const resolve = await push(ref(database, `projects/`), {
    title,
    date,
    descripsi,
    category,
  });
  return resolve;
};

// update project
export const updateProjectApi = async (
  title,
  date,
  descripsi,
  projectId,
  category
) => {
  const resolve = await set(ref(database, `projects/${projectId}`), {
    title,
    date,
    descripsi,
    category,
  });
  return resolve;
};

// delete project
export const deleteProject = async (id) => {
  const resolve = await remove(ref(database, `projects/${id}`));
  return resolve;
};

// Authentication
export const authtentication = () => {
  return firebaseAuth;
};

export const singUp = async (email, password) => {
  const resolve = await createUserWithEmailAndPassword(
    firebaseAuth,
    email,
    password
  );
  return resolve;
};

export const singIn = async (email, password) => {
  const resolve = await signInWithEmailAndPassword(
    firebaseAuth,
    email,
    password
  );
  return resolve;
};

export const singOut = async () => {
  const resolve = await signOut(firebaseAuth);
  return resolve;
};
