import styles from "./styles.module.css";

import SplashBanner from "@/components/SplashBanner/view";

export default function SplashPage() {
  return (
    <main className={styles.viewport}>
      <SplashBanner />
    </main>
  );
}
