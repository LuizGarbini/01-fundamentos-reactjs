import { Header } from "./components/Header.jsx";
import { Post } from "./Post";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar.jsx";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Luiz Garbini Neto"
            content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi odio deserunt similique, odit repellendus omnis incidunt velit nobis blanditiis nulla dignissimos laboriosam rerum ullam illo ipsa soluta vitae explicabo eos."
          />
          <Post author="Gabriel Buzzi" content="Um novo post muito legal" />
        </main>
      </div>
    </div>
  );
}
