import { atom } from "jotai";

const nicknameAtom = atom("");
const passwordAtom = atom("");
const RegisterName = atom("");
const RegisterBirthDay = atom(new Date());
const RegisterPassword = atom("");
const RegisterCheckBox = atom(false);
const RegisterImage = atom("");
const Authed = atom(false);
const CurrentUserData = atom([]);
const notifications = atom([]);
const socketAtom = atom();
const isLoadingAtom = atom(false);
export default {
  RegisterBirthDay,
  RegisterName,
  RegisterPassword,
  RegisterCheckBox,
  nicknameAtom,
  passwordAtom,
  RegisterImage,
  Authed,
  CurrentUserData,
  notifications,
  socketAtom,
  isLoadingAtom,
};
