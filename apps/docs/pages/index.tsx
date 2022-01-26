import { Navbar } from "navbar";
import { data } from "./navbar-items";

export default function Docs() {
  return (
    <div>
      <h1>Docs</h1>

      <Navbar items={data} />
    </div>
  );
}
