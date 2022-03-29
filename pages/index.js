import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Home() {
  return (
    <div>
      <h1>Demo APP</h1>
      <div style={{ width: 200, height: 200 }}>
        <CircularProgressbar
          value={66}
          strokeWidth={10}
          styles={buildStyles({
            // Colors
            pathColor: `rgb(75, 15, 199)`,
            trailColor: "#d6d6d6",
          })}
        />
      </div>
    </div>
  );
}
