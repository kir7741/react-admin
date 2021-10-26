/**
 * checkBox 資料模型
 *
 * @export
 * @class CheckedBoxInfo
 */
export class CheckedBoxInfo {

  /**
   * id
   *
   * @memberof CheckedBoxInfo
   */
  id = '';

  /**
   * 內容
   *
   * @memberof CheckedBoxInfo
   */
  content = '';

  /**
   * 是否已經以勾選
   *
   * @memberof CheckedBoxInfo
   */
  checked = false;

  /**
   * Creates an instance of CheckedBoxInfo.
   * @param {*} [data] 後端資料
   * @memberof CheckedBoxInfo
   */
  constructor(data?: any) {

    if (!data) {
      return;
    }

    this.id = data.id || '';
    this.content = data.content || '';
    this.checked = data.checked || false;

  }

}