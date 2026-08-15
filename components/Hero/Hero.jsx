import styles from "./Hero.module.css";
import Credits from "../Credits/Credits";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.filter}></div>
      {/* <div className={styles.creditsHeader}>
    
        <p>Credits</p>
      </div> */}

      <div className={styles.credits}>
        <Credits />
      </div>

      <div className={styles.profile}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>Fabian Prynn</h1>
          <p className={styles.heroSubtitle}>
            Producer / Mixer / Engineer / Drums
          </p>
        </div>

        <img
          className={styles.portrait}
          src="/images/fab.jpg"
          alt="Fabian Prynn"
        />

        <a className={styles.contact} href="mailto:...">
          Get In Touch →
        </a>
      </div>
    </section>
  );
}
