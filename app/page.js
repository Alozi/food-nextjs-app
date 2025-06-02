import Link from "next/link";
import styles from "./page.module.css";
import Header from "./components/header";

export default function Home() {
  console.log('executing..');

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Header />
        <p><Link href="/about">About us</Link></p>
      </main>
    </div>
  );
}
