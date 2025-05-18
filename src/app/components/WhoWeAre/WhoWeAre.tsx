import InfoCard from "../InfoCard/InfoCard";
import styles from "./WhoWeAre.module.scss";
import { useTranslation } from "@/src/i18n";

const WhoWeAre = () => {
  const { t } = useTranslation();
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{t("whoweare")}</span>
      <div className={styles.container}>
        <InfoCard
          image={"/georgia.png"}
          title={"Georgia"}
          subtitle={
            "GlobalSoft operates in Georgia, offering innovative ECM solutions tailored to local business needs."
          }
          description={
            "GlobalSoft established its presence in Georgia in 2018, recognizing the country’s growing demand for advanced digital infrastructure and innovative connectivity solutions. Initially focused on enterprise content management (ECM) services, our operations quickly evolved to meet ....."
          }
        />
        <InfoCard
          image={"/israel.png"}
          title={"Israel"}
          subtitle={
            "GlobalSoft operates in Georgia, offering innovative ECM solutions tailored to local business needs."
          }
          description={
            "GlobalSoft established its presence in Georgia in 2018, recognizing the country’s growing demand for advanced digital infrastructure and innovative connectivity solutions. Initially focused on enterprise content management (ECM) services, our operations quickly evolved to meet ....."
          }
        />
        <InfoCard
          image={"/uk.png"}
          title={"UK"}
          subtitle={
            "GlobalSoft operates in Georgia, offering innovative ECM solutions tailored to local business needs."
          }
          description={
            "GlobalSoft established its presence in Georgia in 2018, recognizing the country’s growing demand for advanced digital infrastructure and innovative connectivity solutions. Initially focused on enterprise content management (ECM) services, our operations quickly evolved to meet ....."
          }
        />
        <InfoCard
          image={"/europe.png"}
          title={"Europe"}
          subtitle={
            "GlobalSoft operates in Georgia, offering innovative ECM solutions tailored to local business needs."
          }
          description={
            "GlobalSoft established its presence in Georgia in 2018, recognizing the country’s growing demand for advanced digital infrastructure and innovative connectivity solutions. Initially focused on enterprise content management (ECM) services, our operations quickly evolved to meet ....."
          }
        />
        <InfoCard
          image={"asia.png"}
          title={"Asia"}
          subtitle={
            "GlobalSoft operates in Georgia, offering innovative ECM solutions tailored to local business needs."
          }
          description={
            "GlobalSoft established its presence in Georgia in 2018, recognizing the country’s growing demand for advanced digital infrastructure and innovative connectivity solutions. Initially focused on enterprise content management (ECM) services, our operations quickly evolved to meet ....."
          }
        />
        <InfoCard
          image={"africa.png"}
          title={"Africa"}
          subtitle={
            "GlobalSoft operates in Georgia, offering innovative ECM solutions tailored to local business needs."
          }
          description={
            "GlobalSoft established its presence in Georgia in 2018, recognizing the country’s growing demand for advanced digital infrastructure and innovative connectivity solutions. Initially focused on enterprise content management (ECM) services, our operations quickly evolved to meet ....."
          }
        />
      </div>
    </div>
  );
};

export default WhoWeAre;
