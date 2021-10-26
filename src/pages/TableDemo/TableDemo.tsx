import React, { useEffect, useRef } from 'react';
import { RouteComponentProps } from 'react-router-dom';
// import ProgressDIY from '../../Shared/Progress/ProgressDIY';
// import { ProgressContext } from '../../Context/ProgressContext';
import JizzCheckBox from '../../Shared/JizzCheckBox/JizzCheckBox';
import { CheckedBoxInfo } from 'src/Models/check-box-info.model';
// import { Provider, useStore, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { CheckBoxActionType } from 'src/ActionCreator/checkBoxToggle.action';
import { checkBoxSet } from '../../ActionCreator/checkBoxToggle.action';

// css 
import './TableDemo.css';

interface TableProps extends RouteComponentProps {
  list: CheckedBoxInfo[];

  setList: () => void;
}

const checkList = [
  {
    id: '1',
    content: '我是checkbox1',
    checked: false
  },
  {
    id: '2',
    content: '我是checkbox2',
    checked: false
  },
  {
    id: '3',
    content: '我是checkbox3',
    checked: false
  }
];

const mapStateToProps = (state: CheckedBoxInfo[]) => {
  return {
    list: state  
  };
};

const mapDispatchToProps = (dispatch: (arg: CheckBoxActionType) => CheckBoxActionType) => {
  return {
    setList: () => {
      dispatch(checkBoxSet(checkList))
    }
  };
};


let TableDemo: React.FC<Partial<TableProps>> = (props: Partial<TableProps>) => { 

  const mounted = useRef(false);
  // const dispatch = useDispatch();

  useEffect(() => {

    if (!mounted.current) {
      // DidMount
      mounted.current = true;
      // dispatch(checkBoxSet(checkList))
      props.setList();

    }

  })

  return (
    <div>
      <table>
        <thead>
        <tr>
          <th>操作</th>
          <th>內容</th>
          <th>id</th>
        </tr>
        </thead>

        <tbody>
          {

            
            props.list.map((d) => {
              return (
                
                <tr 
                  key={d.id}
                  style={d.checked ? {backgroundColor: '#88d'} : null }
                >
                  <td>
                    <JizzCheckBox 
                      id={d.id}
                    ></JizzCheckBox>
                  </td>
                  <td>{d.content}</td>
                  <td>{d.id}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </div>
   
  )

}


// const TableDemo: React.FC<Partial<RouteComponentProps>> = () => {
//   const [processVal, setProcessVal] = useState(0);

//   return (

//     <ProgressContext.Provider value={{
//       processVal,
//       setProcessVal
//     }}>

//       <ProgressDIY 
//         onClick={ 
//           (e: any) => { 
//             setProcessVal(e.target.value) 
//           } 
//       }>


//       </ProgressDIY>
//     </ProgressContext.Provider>
//   )

// }


// class TableDemo extends React.Component<Partial<RouteComponentProps>, any> {

//   constructor(prop: Partial<RouteComponentProps>) {
//     super(prop);
//     this.state = {
//       value: 0
//     }
//   }

//   setValue(value: number): void {
//     this.setState({
//       value
//     })
//   }

//   render() {
//     return (

//         <ProgressContext.Provider value={{
//           processVal
//           setProcessVal
//         }}>

//           <ProgressDIY value={this.state.value} onClick={(e: any)=>{this.setValue(e.target.value)}}>


//           </ProgressDIY>
//         </ProgressContext.Provider>
//     )

//   }

// }

// export default connect(mapStateToProps)(MyComponent);
TableDemo = connect(
  mapStateToProps,
  mapDispatchToProps
)(TableDemo)
export default  TableDemo;
