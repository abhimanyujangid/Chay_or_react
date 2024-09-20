import conf from "../conf/conf.js"
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client  = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
            this.account = new Account(this.client);
    }
// For createAccount
    async createAccount({email,password,name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if(userAccount){
               // call another function
               // here  we can use return but if we create register sucessfully then we direct login
               return this.login({email, password});
            }else{
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }
// For login
    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    //For getCurrentinfo
    async getCurrentUser(){
        try {
            return await this.account.get();
        } catch (error) {
          console.log("Appwrite service :: getCurrentUser :: error", error);
        }
        return null;
    }

    //For Logout
    async logout(){
        try {
            await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: error", error);
        }
    }
}
const authService = new AuthService();

export default AuthService;