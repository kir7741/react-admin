// const
import { env } from '../Constants/enviroment.config';

export class AccountSvc {

  static async getUser() {
    const response = await fetch(env.api + '/account');
    return await response.json();
  }

  // static async getOther() {
  //   const response = await fetch('/api2/dashboard');
  //   return await response.json();
  // }

}
