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
      path: "/",
    },
    {
      id: 2,
      tabTitle: "헤택",
      tabIconImage: HomeIconImage,
      path: "/event",
    },
    {
      id: 3,
      tabTitle: "송금",
      tabIconImage: HomeIconImage,
      path: "/payment",
    },
    {
      id: 4,
      tabTitle: "주식",
      tabIconImage: HomeIconImage,
      path: "/stock",
    },
    {
      id: 5,
      tabTitle: "전체",
      tabIconImage: HomeIconImage,
      path: "/all",
    },
  ];

  return (
    <div className={styles["navigation-container"]}>
      <ul className={styles.menu}>
        {NavigationMenuList.map((tab) => (
          <Link to={tab.path}>
            <li className={styles.list} key={tab.path}>
              <Icon src={tab.tabIconImage} alt="네비게이션 이미지" />
              <span>{tab.tabTitle}</span>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
