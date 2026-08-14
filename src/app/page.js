import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../../components/Hero/Hero";

export default function Home() {
  return (
    <div className={styles.site}>
      <div className={styles.backdrop} />

      <main className={styles.content}>
        <Hero />
      </main>
    </div>
  );
}
