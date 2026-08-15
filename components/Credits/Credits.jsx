import styles from "./Credits.module.css";
import credits from "@/data/credits.json";

export default function Credits() {
  return (
    <section className={styles.credits}>
      <div className={styles.nav}>
        <a href="/">Back</a>
      </div>
      <div className={styles.creditsGrid}>
        {credits.map((credit) => (
          <article key={credit.filename} className={styles.credit}>
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

            <div className={styles.overlay}>
              <div className={styles.meta}>
                <div>
                  <h2>{credit.artist}</h2>
                  <p className={styles.release}>{credit.release}</p>
                </div>

                <p className={styles.roles}>{credit.roles.join(" / ")}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <button className={styles.seeMoreButton}>
        <a className={styles.seeMore} href="/credits">
          Full List Of Credits
        </a>
      </button>
    </section>
  );
}
