import React, { useEffect, useState } from "react";
import * as Api from "../api";
import { ServiceContext } from "../hooks/useServiceContenxt.js";

const ServiceProvider = ({ children }) => {
  const [appServiceInfo, setAppServiceInfo] = useState([]);

  useEffect(() => {
    fetchServiceData();
  }, []);

  const fetchServiceData = async () => {
    try {
      const response = await Api.fetchServiceUpdates();
      setAppServiceInfo(response);
    } catch (error) {
      setAppServiceInfo([]);
    }
  };
  return <ServiceContext.Provider value={{ appServiceInfo }}>{children}</ServiceContext.Provider>;
};

export default ServiceProvider;
