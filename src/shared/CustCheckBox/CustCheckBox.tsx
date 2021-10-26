import React from 'react';

import { Checkbox } from 'antd';

export interface CheckboxPropsType {
  children?: any[],
  onChange: () => void,
  id: string
}

const CustCheckBox: React.FC<CheckboxPropsType> = ({onChange, id}) => {

  return (
    <Checkbox onChange={onChange}></Checkbox>
  )

}

export default CustCheckBox;