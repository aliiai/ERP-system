import { atom } from "recoil";

export const $ServerUrl = atom({
  key: "$ServerUrl",
  default: "https://porshtal-backend.mongizz.com/public/api",
  // default: "http://localhost:1337/api",
  // default: "https://www.easetasks.com/abaad",
});