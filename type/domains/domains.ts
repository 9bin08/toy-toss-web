//domains
import { ResponseDataWithMessage } from '../utility'


//updates
export type UpdatesResponseData = ResponseDataWithMessage<{
     version: number;
     state: boolean;
     app_link: string;
     cs_link: string;
     minimum_value: number;
     non_withdrawal_time: string 
}>;

//users
export type User = {
     uid : string;
     nickname : string;
     thumnail: string;
     account : [
         {
             account_num : string,
             name : string,
             state : number,
             fincom : string
         }
     ],
     temp_token : string,
     token_limit : string,
     email: string,
     password : string
   };