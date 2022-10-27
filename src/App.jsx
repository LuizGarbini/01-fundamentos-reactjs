import { Header } from "./components/Header.jsx";
import { Post } from "./Post";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Luiz Garbini Neto"
        content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi odio deserunt similique, odit repellendus omnis incidunt velit nobis blanditiis nulla dignissimos laboriosam rerum ullam illo ipsa soluta vitae explicabo eos."
      />
      <Post author="Gabriel Buzzi" content="Um novo post muito legal" />
    </div>
  );
}
