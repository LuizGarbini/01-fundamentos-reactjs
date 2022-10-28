import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/luizGarbini.png"
          />
          <div className={styles.authorInfo}>
            <strong> Luiz Garbini Neto</strong>
            <span> Web Developer</span>
          </div>
        </div>

        <time title="27 de Outubro às 22:15" dateTime="2022-10-27 22:15:30">
          Publicado há 1h
        </time>

        <div className={styles.content}>
          <p>Fala galeraa 👋</p>

          <p>
            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
            no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare
            🚀
          </p>

          <p>
            👉 <a href="">jane.design/doctorcare</a>
          </p>

          <p>
            <a href="">#novoprojeto #nlw #rocketseat</a>
          </p>
        </div>
      </header>
    </article>
  );
}
