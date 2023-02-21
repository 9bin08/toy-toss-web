import { useContext, createContext } from "react";
import { ERROR_MESSAGE } from "../constants/messages";

export const ServiceContext = createContext();

const useServiceContext = () => {
  const SerivceContext = useContext(ServiceContext);

  if (!SerivceContext) throw Error(ERROR_MESSAGE.HOOKS.CAANOT_FIND_SERVICE_CONTEXT);

  return SerivceContext;
};

export default useServiceContext;
