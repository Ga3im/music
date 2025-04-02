import Image from "next/image";
import classNames from "classnames";
import styles from "./page.module.css";
import { Navigation } from "@/components/Navigation/Navigation";
import { Filter } from "@/components/Filter/Filter";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Player } from "@/components/Player/Player";
import { Playlist } from "@/components/Playlist/Playlist";

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
        <Navigation/>
          <div className={styles.main__centerblock}>
         <Filter/>
          <Playlist/>
          </div>
         <Sidebar/>
        </main>
       <Player/>
        <footer></footer>
      </div>
    </div>
  );
}
