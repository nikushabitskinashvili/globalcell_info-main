import styles from "./page.module.scss";
import NewsNavigation from "../../components/NewsNavigation/NewsNavigation";
import About from "./components/About/About";
import Brand from "./components/Brand/Brand";
import InfoCard from "./components/InfoCard/InfoCard";
import Hero from "./components/Hero/Hero";
import AntSelect from "./components/Select/Select";

const CountryInfo = () => {
  return (
    <div className={styles.wrapper}>
      <Hero />
      <div className={styles.newsNavigation}>

        <NewsNavigation />

        <div className={styles.select}>
          <AntSelect />
        </div>

        <div className={styles.about}>
          <About />
        </div>
        <div className={styles.about}>
          <Brand />
        </div>
        <div className={styles.InfoContainer}>
          <InfoCard />
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
    { id: "10" },
    { id: "11" },
    { id: "12" },
    { id: "13" },
    { id: "14" },
    { id: "15" },
    { id: "16" },
    { id: "17" },
    { id: "18" },
    { id: "19" },
    { id: "20" },
  ];
}
