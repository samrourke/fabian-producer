import styles from "./Credits.module.css";
import credits from "@/data/credits.json";

const layoutPattern = [
  "farLeft",
  "insetRight",
  "centre",
  "insetLeft",
  "farRight",
  "centre",
];

export default function Credits() {
  return (
    <section className={styles.credits}>
      <header className={styles.header}>
        <p>Selected Work</p>
        <span>{credits.length}</span>
      </header>

      <div className={styles.creditsList}>
        {credits.map((credit, index) => {
          const layout = layoutPattern[index % layoutPattern.length];

          return (
            <article
              key={credit.filename}
              className={`${styles.credit} ${styles[layout]}`}
            >
              <div className={styles.creditInner}>
                <span className={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <picture className={styles.picture}>
                  <source
                    media="(max-width: 768px)"
                    srcSet={`/images/covers/mobile/${credit.filename}`}
                  />

                  <img
                    className={styles.cover}
                    src={`/images/covers/desktop/${credit.filename}`}
                    alt={`${credit.artist} - ${credit.release}`}
                  />
                </picture>

                <div className={styles.meta}>
                  <div>
                    <h2>{credit.artist}</h2>
                    <p className={styles.release}>{credit.release}</p>
                  </div>

                  <p className={styles.roles}>{credit.roles.join(" / ")}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
