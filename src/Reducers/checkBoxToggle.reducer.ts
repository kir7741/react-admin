
import { CheckBoxActionType } from 'src/ActionCreator/checkBoxToggle.action';
import { CheckedBoxInfo } from '../Models/check-box-info.model';

/**
 * 單個checkbox Info狀態更新
 *
 * @param {CheckedBoxInfo} state
 * @param {CheckBoxActionType} action
 * @returns {CheckedBoxInfo}
 */
const checktoggle = (state: CheckedBoxInfo, action: CheckBoxActionType): CheckedBoxInfo => {

  switch (action.type) {

    case 'CHECKBOX_TOGGLE':

      if (state.id !== action.id) {
        return state;
      }

      const patams = Object.assign({}, state, { checked: !state.checked })
      return new CheckedBoxInfo(patams);

    default:
      return state;

  }
  
}

/**
 * checkboxList 更新
 *
 * @param {CheckedBoxInfo[]} [state=[]]
 * @param {CheckBoxActionType} action
 * @returns {CheckedBoxInfo[]}
 */
const checktoggleList = (state: CheckedBoxInfo[] = [], action: CheckBoxActionType): CheckedBoxInfo[] => {
  switch (action.type) {

    case 'SET_CHECKBOX': 
      return action.list.map(d => new CheckedBoxInfo(d));
      
    case 'CHECKBOX_TOGGLE':
      return state.map(checkInfo =>
        checktoggle(checkInfo, action)
      );
    case 'ADD_CHECKBOX':
        const id = Math.max(...state.map(info => +info.id));
        action.id = (id + 1) + '';
        return state.concat(new CheckedBoxInfo(action));
    
    default:
      return state
  }

}

export default checktoggleList