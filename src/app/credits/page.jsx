import styles from "./page.module.css";
import credits from "@/data/credits.json";

export default function CreditsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.nav}>
        <button className="btn">
          <a href="/">← Back</a>
        </button>
      </div>
      <header className={styles.header}>
        <div className={styles.headingRow}>
          <h1>Credits</h1>

          <div className={styles.summary}>
            {/* <span>{credits.length} Records</span> */}
            <span>Archive / Selected Work</span>
          </div>
        </div>
      </header>

      <section className={styles.creditsTable}>
        <div className={`${styles.row} ${styles.tableHeader}`}>
          <div className={styles.number}>No.</div>
          <div className={styles.imageColumn}>Ref.</div>
          <div className={styles.artist}>Artist</div>
          <div className={styles.release}>Release</div>
          <div className={styles.roles}>Work</div>
        </div>

        {credits.map((credit, index) => (
          <article key={credit.filename} className={styles.row}>
            <div className={styles.number}>
              {String(index + 1).padStart(3, "0")}
            </div>

            <div className={styles.imageColumn}>
              <div className={styles.thumbnail}>
                <picture>
                  <source
                    media="(max-width: 768px)"
                    srcSet={`/images/covers/mobile/${credit.filename}`}
                  />

                  <img
                    src={`/images/covers/desktop/${credit.filename}`}
                    alt=""
                  />
                </picture>
              </div>
            </div>

            <div className={styles.artist}>
              <span className={styles.mobileLabel}>Artist</span>
              {credit.artist}
            </div>

            <div className={styles.release}>
              <span className={styles.mobileLabel}>Release</span>
              {credit.release}
            </div>

            <div className={styles.roles}>
              <span className={styles.mobileLabel}>Credit</span>
              {credit.roles.join(" / ")}
            </div>
          </article>
        ))}
      </section>

      <footer className={styles.footer}>
        <span>End of Credits</span>
        {/* <span>{String(credits.length).padStart(3, "0")} Entries</span> */}
      </footer>
    </main>
  );
}
