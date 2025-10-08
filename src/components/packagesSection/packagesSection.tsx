import Image from "next/image";
import PriceCard from "../common/card/priceCard";
import tick from "/public/tick.svg";
import clock from "/public/clock.svg";

import * as styles from "./packagesSection.css";
import Button from "../common/button/button";
import PackageFeature from "./packageFeature";
import CustomTitle from "../common/customTitle/customTitle";

export default function PackagesSection() {
  return (
    <section id="packages">
      <CustomTitle
        heading="h2"
        position="center"
        subTitle="The prices are informative and can be varied"
        subTitlePosition="above"
      >
        Website Packages
      </CustomTitle>
      <div className={styles.mainContainer}>
        <PriceCard
          title="Starter"
          price="120 000 Ft"
          subTitle="1-page modern design"
        >
          <div className="flex flex-col gap-3">
            <PackageFeature icon={tick} text="Booking Form" />
            <PackageFeature icon={tick} text="Mobile friendly design" />
            <PackageFeature icon={clock} text="5 days delivery" />
            <div className="text-center mt-4">
              <Button variant="secondary">{"Get Started"}</Button>
            </div>
          </div>
        </PriceCard>
        <PriceCard
          title="Professional"
          price="220 000 Ft"
          subTitle="SEO optimization"
        >
          <div className="flex flex-col gap-3">
            <PackageFeature icon={tick} text="Gallery & Events page" />
            <PackageFeature icon={tick} text="1-month free maintenance" />
            <PackageFeature icon={clock} text="10 days delivery" />
            <div className="text-center mt-4">
              <Button variant="primary">{"Most Popular"}</Button>
            </div>
          </div>
        </PriceCard>
        <PriceCard title="Premium" price="400 000 Ft" subTitle="Custom design">
          <div className="flex flex-col gap-3">
            <PackageFeature icon={tick} text="Online booking system" />
            <PackageFeature icon={tick} text="6 months support" />
            <PackageFeature icon={clock} text="14 days delivery" />
            <div className="text-center mt-4">
              <Button variant="secondary">{"Let's Talk"}</Button>
            </div>
          </div>
        </PriceCard>
      </div>
    </section>
  );
}
