import { client, headers } from "./api";
import { ResponseDataWithMessage } from "../../type/utility"
import { User } from "../../type/domains/domains";


type FetchLogWithTokenResponseData = ResponseDataWithMessage<string>;
type FetchLoginResponseData = ResponseDataWithMessage<string>;
type FetchLoginRequest = Pick<User, "email" | "password">;


export const fetchLogWithToken = ({ token }: any) => client.post<FetchLogWithTokenResponseData>('/toss/dev/v1/service/signin', headers({token}))

export const fetchLogin = ({email , password} : FetchLoginRequest) => client.post<FetchLoginResponseData>("/toss/dev/v1/service/updates", { email, password });