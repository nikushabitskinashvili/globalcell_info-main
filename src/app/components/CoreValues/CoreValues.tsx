import { useTranslation } from "@/src/i18n";
import CoreCard from "./components/CoreCard/CoreCard";
import styles from "./CoreValues.module.scss";

const CoreValues = () => {
  const { t } = useTranslation();
  return (
      <div className={styles.mainWrapper}>
        <div className={styles.wrapper}>
          <span className={styles.title}>{t("core")}</span>
          <div className={styles.container}>
            <CoreCard
              title={t("innovation")}
              description={t("innovationtext")}
              image={"/innovation.svg"}
            />
            <CoreCard
              title={t("affordability")}
              description={t("affordabilitytext")}
              image={"/affordability.svg"}
            />
            <CoreCard
              title={t("customer")}
              description={t("customertext")}
              image={"/customer.svg"}
            />
            <CoreCard
              title={t("accessibility")}
              description={t("accessibilitytext")}
              image={"/accessibility.svg"}
            />
            <CoreCard
              title={t("reliability")}
              description={t("reliabilitytext")}
              image={"/reliability.svg"}
            />
            <CoreCard
              title={t("collaboration")}
              description={t("collaborationtext")}
              image={"/collaboration.svg"}
            />
            <CoreCard
              title={t("social")}
              description={t("socialtext")}
              image={"/social.svg"}
            />
          </div>
        </div>
      </div>
  );
};

export default CoreValues;
