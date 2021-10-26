import { connect } from 'react-redux';
import { checkBoxToggle, CheckBoxActionType } from 'src/ActionCreator/checkBoxToggle.action';
import CustCheckBox, { CheckboxPropsType}  from '../CustCheckBox/CustCheckBox';

const mapDispatchToProps = (dispatch: (arg: CheckBoxActionType) => CheckBoxActionType, ownProps: Partial<CheckboxPropsType>) => {
  return {
    onChange: () => {
      dispatch(checkBoxToggle(ownProps.id))
    }
  }
}

const JizzCheckBox = connect(
  null,
  mapDispatchToProps
)(CustCheckBox)

export default JizzCheckBox