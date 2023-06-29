import Image from "next/image";
import styles from "./page.module.css";

import { FilterByPriority } from "./components/FilterByPriority/FilterByPriority";
import { FilterBar } from "./components/FilterBar/FilterBar";

export default function Home() {
  return (
    <main className={styles.main}>
      <FilterBar />
    </main>
  );
}
