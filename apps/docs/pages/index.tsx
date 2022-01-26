import { Navbar } from "navbar";
import { data } from "./navbar-items";

export default function Docs() {
  return (
    <div>
      <Navbar items={data} />
    </div>
  );
}
