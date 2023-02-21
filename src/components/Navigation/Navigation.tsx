import { NAVIGATION_TAB_LIST } from "../../constants/tab";
import styles from "./Navigation.module.css";
import TabItem from "../@common/TabItem/TabItem";

const Navigation = () => {
  return (
    <div className={styles["navigation-container"]}>
      <ul className={styles.menu}>
        {NAVIGATION_TAB_LIST.map((tab) => (
          <TabItem name={tab.name} label={tab.label} icon={tab.icon} key={tab.name}>
          <span>{tab.label}</span>
          </TabItem>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
