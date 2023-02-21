import { client } from "./api";
import { UpdatesResponseData } from "../../type/domains/domains"


export const fetchServiceUpdates = () => client.get<UpdatesResponseData>('/toss/dev/v1/service/updates');