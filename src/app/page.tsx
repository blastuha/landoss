import styles from "./page.module.css";
import { Header } from "./components/layout/Header/Header";
import Container from "./components/container/Container";
import MainSection from "./components/sections/MainSection/MainSection";

export default function Home() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Container>
          <MainSection />
        </Container>
      </main>
    </div>
  );
}
