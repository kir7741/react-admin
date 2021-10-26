// Models
import { Menu } from 'antd';

/**
 * 使用者
 *
 * @export
 * @class User
 */
export class User {

  /**
   * 帳號名稱
   *
   * @memberof User
   */
  name = '';

  /**
   * logo url
   *
   * @memberof User
   */
  logo = '';

  /**
   * 目錄
   *
   * @type {any[]}
   * @memberof User
   */
  menuList: any[] = [];

  /**
   *Creates an instance of User.
   * @param {*} [data]
   * @memberof User
   */
  constructor(data?: any) {

    if (!data) {
      return;
    }

    this.name = data.name || '';
    this.logo = data.logo || '';

    if (
      data.menuList &&
      Array.isArray(data.menuList)
    ) {
      this.menuList = data.menuList.map((d: any) => new Menu(d));
    }

  }

}