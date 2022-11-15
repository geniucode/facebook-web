import { useRecoilState, useRecoilValue } from "recoil";
import { counterState } from "../atoms/counter";
import DecreaseCounter from "../components/decreaseCounter";
import IncreaseCounter from "../components/increaseCounter";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [counter] = useRecoilState(counterState);
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome {counter} times</h1>
      <IncreaseCounter />
      <DecreaseCounter />
    </div>
  );
}
