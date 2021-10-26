// Models
import { User } from '../../Models/user.model';

// Enums
import { StorageType } from "src/Enums/storage-type.enum";

export class Storage {

  private static user: User = null;

  /**
   * 儲存資料進storage
   *
   * @static
   * @param {string} key - 鍵值
   * @param {*} data - 資料
   * @param {StorageType} type - storage 類別
   * @memberof Storage
   */
  static store(key: string, data: any, type: StorageType): void {

    switch(type) {
      case StorageType.LOCAL:
        localStorage.setItem(key, JSON.stringify(data));
        break;
      case StorageType.SESSION: 
        sessionStorage.setItem(key, JSON.stringify(data));
        break;

    }

  }

  /**
   * 清除storage指定資料
   *
   * @static
   * @param {string} key - 鍵值
   * @param {StorageType} type - storage 類別
   * @memberof Storage
   */
  static clear(key: string, type: StorageType): void {

    switch(type) {
      case StorageType.LOCAL:
        localStorage.removeItem(key);
        break;
      case StorageType.SESSION: 
        sessionStorage.removeItem(key);
        break;

    }
    
  }

  /**
   * 取得storage指定資料
   *
   * @static
   * @param {string} key - 鍵值
   * @param {StorageType} type - storage 類別
   * @returns {*}
   * @memberof Storage
   */
  static getData(key: string, type: StorageType): any {

    switch(type) {
      case StorageType.LOCAL:
        return JSON.parse(localStorage.getItem(key));
      case StorageType.SESSION: 
        return JSON.parse(sessionStorage.getItem(key));
    }
    
    
  }

  /**
   * 取得現在使用者帳號
   *
   * @readonly
   * @static
   * @type {User}
   * @memberof Storage
   */
  static get currentUser(): User {

    if (!this.user) {
      this.user = new User(this.getData('user', StorageType.SESSION));
    } 

    return this.user;
    
  }

} 