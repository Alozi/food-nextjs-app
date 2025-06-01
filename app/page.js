import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  console.log('executing..');
  
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image src="/logo.png" alt="A server surrounded by magic sparkles." width={200} height={180} />
        <p>🔥 Let&apos;s get started! 🔥</p>
      </main>
    </div>
  );
}
