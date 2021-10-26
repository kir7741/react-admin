
export type CheckBoxActionType = {
  type: string;
  id?: string;
  list?: any[]
}
/**
 * 點擊checkbox的 Action Creator
 */
export const checkBoxToggle:(id: string) => CheckBoxActionType = (id: string) => ({
  type: 'CHECKBOX_TOGGLE',
  id
})

/**
 * 設定 checkbox列表的 Action Creator
 */
export const checkBoxSet:(checkList: any[]) => CheckBoxActionType = (list: any[]) => ({
  type: 'SET_CHECKBOX',
  list
})
