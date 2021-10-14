import { Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

// class FormDemo extends React.Component<Partial<RouteComponentProps>> {
//   render() {
//     return (
//       <div>Form Demo</div>
//     )

//   }

// }

interface FormProps extends RouteComponentProps {
  joseph: string

}

const FormDemo: React.FC<FormProps> = (props: FormProps) => {

  console.log(props)

  const [isShow, setIsShow] = useState(false);

  useEffect(()=>{
    
    console.log('trig')
    // if (isShow) {
    //   (document.getElementsByClassName('g8')[0] as HTMLElement).style.backgroundColor = '#f00';
    // } else {
    //   (document.getElementsByClassName('g8')[0] as HTMLElement).style.backgroundColor = '#0f0';
    // }

    return () => {
      console.log('destroy')
    }

  },[props.joseph]);


  return (
    <div>
      <div>Form Demo</div>
      <Button
        type="primary" 
        htmlType="button"
        onClick={() => setIsShow(!isShow)}
      >
        click
      </Button>
      <p>
        是否顯示：{ isShow ? '是' : '否' }
      </p>
      <div className="g8">asd</div>
    </div>
  );

}



export default FormDemo;