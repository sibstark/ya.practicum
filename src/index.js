import { sum } from "./modules/sum";
const root = document.querySelector("#root");
root.textContent = sum(505, -1).toString();