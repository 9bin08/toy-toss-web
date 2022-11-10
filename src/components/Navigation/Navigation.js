import classNames from "classnames";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import HomeIconImage from "../../assets/icon/member-icon.svg";
// import { PATH } from "../../constants/path";
import useTokenContext from "../../hooks/useTokenContext";
import Icon from "../@common/Icon";
import styles from "./Navigation.module.css";

const Navigation = () => {
  //   const navigate = useNavigate();

  const { token, resetToken } = useTokenContext();

  const [isShowMemberMenu, setIsShowMemberMenu] = useState(false);

  const NavigationMenuList = [
    {
      id: 1,
      tabTitle: "홈",
      tabIconImage: HomeIconImage,
    },
    {
      id: 2,
      tabTitle: "헤택",
      tabIconImage: HomeIconImage,
    },
    {
      id: 3,
      tabTitle: "송금",
      tabIconImage: HomeIconImage,
    },
    {
      id: 4,
      tabTitle: "주식",
      tabIconImage: HomeIconImage,
    },
    {
      id: 5,
      tabTitle: "전체",
      tabIconImage: HomeIconImage,
    },
  ];

  return (
    <div className={styles["navigation-container"]}>
      <ul className={styles.menu}>
        {NavigationMenuList.map((tab) => (
          <li className={styles.list}>
            <Icon src={tab.tabIconImage} alt="네비게이션 이미지" />
            <span>{tab.tabTitle}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
