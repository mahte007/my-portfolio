import PriceCard from "../common/card/priceCard";
import tick from "/public/tick.svg";
import clock from "/public/clock.svg";

import * as styles from "./packagesSection.css";
import Button from "../common/button/button";
import PackageFeature from "./packageFeature";
import CustomTitle from "../common/customTitle/customTitle";
import { useTranslations } from "next-intl";

export default function PackagesSection() {
  const t = useTranslations("PackagesSection");

  return (
    <section id="packages">
      <CustomTitle
        heading="h2"
        position="center"
        subTitle={t("subTitle")}
        subTitlePosition="above"
      >
        {t("title")}
      </CustomTitle>
      <div className={styles.mainContainer}>
        <PriceCard
          title={t("starterPackage.title")}
          price={t("starterPackage.price")}
          subTitle={t("starterPackage.subTitle")}
        >
          <div className="flex flex-col gap-3">
            <PackageFeature icon={tick} text={t("starterPackage.features.bookingForm")} />
            <PackageFeature icon={tick} text={t("starterPackage.features.design")} />
            <PackageFeature icon={clock} text={t("starterPackage.features.delivery")} />
            <div className="text-center mt-4">
              <Button variant="secondary" href="#contact">{t("starterPackage.getStarted")}</Button>
            </div>
          </div>
        </PriceCard>
        <PriceCard
          title={t("professionalPackage.title")}
          price={t("professionalPackage.price")}
          subTitle={t("professionalPackage.subTitle")}
          glow
        >
          <div className="flex flex-col gap-3">
            <PackageFeature icon={tick} text={t("professionalPackage.features.gallery")} />
            <PackageFeature icon={tick} text={t("professionalPackage.features.maintenance")} />
            <PackageFeature icon={clock} text={t("professionalPackage.features.delivery")} />
            <div className="text-center mt-4">
              <Button variant="primary" href="#contact">{t("professionalPackage.mostPopular")}</Button>
            </div>
          </div>
        </PriceCard>
        <PriceCard title={t("premiumPackage.title")} price={t("premiumPackage.price")} subTitle={t("premiumPackage.subTitle")}>
          <div className="flex flex-col gap-3">
            <PackageFeature icon={tick} text={t("premiumPackage.features.bookingSystem")} />
            <PackageFeature icon={tick} text={t("premiumPackage.features.support")} />
            <PackageFeature icon={clock} text={t("premiumPackage.features.delivery")} />
            <div className="text-center mt-4">
              <Button variant="secondary" href="#contact">{t("premiumPackage.letsTalk")}</Button>
            </div>
          </div>
        </PriceCard>
      </div>
    </section>
  );
}
