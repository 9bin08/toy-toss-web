import axios from "axios";
import type { AxiosRequestConfig,AxiosInstance,AxiosResponse } from 'axios';

interface CustomInstance extends AxiosInstance {
  getUri(config?: AxiosRequestConfig): string;
  request<T>(config: AxiosRequestConfig): Promise<T>;
  get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  head<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  options<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
}

//TODO : 포스트맨 목 서버 추후 제거
const host = 'https://bc9c1d26-591a-4077-894f-4ded5bd9efc6.mock.pstmn.io'
    
export const client:CustomInstance = axios.create({ baseURL: host });
  
client.interceptors.response.use((response:AxiosResponse<any, any>) => {
  const hasResponseData = Object.prototype.hasOwnProperty.call(response, "data");
  
  return hasResponseData ? Promise.resolve(response.data) : Promise.resolve();
})

client.interceptors.request.use(request => {
  return request;
})


export const headers = ({ token }: { token: string }) => ({
  headers: {
    ...(token && { Authorization: `Bearer ${token}` }),
  },
});
