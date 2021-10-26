export class Menu {

  /**
   * id
   *
   * @memberof Menu
   */
  id = '';

  /**
   * icon
   *
   * @memberof Menu
   */
  icon = '';

  /**
   * 目錄名稱
   *
   * @memberof Menu
   */
  menuName = '';

  /**
   * 連接名稱
   *
   * @memberof Menu
   */
  link = '';

  /**
   * 子目錄
   *
   * @type {Menu[]}
   * @memberof Menu
   */
  subMenus: Menu[] = []

  /**
   * Creates an instance of Menu.
   * @param {*} [data] 後端資料
   * @memberof Menu
   */
  constructor(data?: any) {

    if (!data) {
      return;
    }

    this.id = data.id || '';
    this.icon = data.icon || '';
    this.menuName = data.menuName || '';
    this.link = data.link || '';

    if (
      data.subMenus &&
      Array.isArray(data.subMenus)
    ) {
      this.subMenus = data.subMenus.map((d: any) => new Menu(d));
    }

  }

}