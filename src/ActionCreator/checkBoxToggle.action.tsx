
export type CheckBoxActionType = {
  type: string;
  id?: string;
  list?: any[],
  content?: string
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

/**
 * 新增 新的checkbox至列表的 Action Creator
 */
 export const addBoxSet = (content: string): CheckBoxActionType => ({
  type: 'ADD_CHECKBOX',
  content
})

