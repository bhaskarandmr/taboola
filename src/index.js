import { App } from "./app/app";
import "./styles.css";

const appDiv = document.getElementById("app");
const app = new App(appDiv);
app.init();
