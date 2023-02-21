import classNames from "classnames";
import { Link } from "react-router-dom";
import Icon from "../Icon";
import styles from "./TabItem.module.css";
import HomeIconImage from "../../../assets/icon/member-icon.svg";

type TabItemtab = {
  name : string,
  label : string,
  icon : string
  children: React.ReactNode;
};

const TabItem = ({name, label, icon, children} : TabItemtab) => {
  return (
    <Link to={name}>
    <li className={styles.list} key={name}>
      <Icon src={HomeIconImage} alt="네비게이션 이미지" />
      { children }
    </li>
  </Link>
  );
};

export default TabItem;
