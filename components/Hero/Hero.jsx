import styles from "./Hero.module.css";
import Credits from "../Credits/Credits";
import ContactModal from "../ContatModal/ContactModal";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* <div className={styles.filter}></div> */}
      {/* <div className={styles.creditsHeader}>
    
        <p>Credits</p>
      </div> */}
      <div className={styles.creditsTitle}>
        <h2>Credits</h2>
      </div>

      <div className={styles.credits}>
        <Credits />
      </div>
      <div className={styles.profileContainer}>
        <div className={styles.profile}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>Fabian Prynn</h1>
            {/* <p className={styles.heroSubtitle}>
            Producer / Mixer / Engineer / Drums
          </p> */}
          </div>

          <div className={styles.imgContainer}>
            {" "}
            <img
              className={styles.portrait}
              src="/images/fab.jpg"
              alt="Fabian Prynn"
            />
          </div>

          <div className={styles.cta}>
            {" "}
            <ContactModal />
          </div>
          <div className={styles.mobileCreditsTitle}>
            <h2>Credits</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
