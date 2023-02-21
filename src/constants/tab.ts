export const NAVIGATION_TAB = {
  HOME: {
    name: "Home",
    label: "홈",
    icon : '../../assets/icon/member-icon.svg',
  },
  EVENT: {
    name: "Event",
    label: "혜택",
    icon : '../../assets/icon/member-icon.svg',
  },
  PAYMENT: {
    name: "Payment",
    label: "토스페이",
    icon : '../../assets/icon/member-icon.svg',
  },
  STOCK: {
    name: "Stock",
    label: "주식",
    icon : '../../assets/icon/member-icon.svg',
  },
  ALL: {
    name: "All",
    label: "전체",
    icon : '../../assets/icon/member-icon.svg',
  },
} as const;

export const NAVIGATION_TAB_LIST = [
  NAVIGATION_TAB.HOME,
  NAVIGATION_TAB.EVENT,
  NAVIGATION_TAB.PAYMENT,
  NAVIGATION_TAB.STOCK,
  NAVIGATION_TAB.ALL,
] as const;


