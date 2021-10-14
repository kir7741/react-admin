import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import ProgressDIY from '../../shared/Progress/ProgressDIY';
import { ProgressContext } from '../../Context/ProgressContext';



const TableDemo: React.FC<Partial<RouteComponentProps>> = () => {

  const [processVal, setProcessVal] = useState(0);

  return (

    <ProgressContext.Provider value={{
      processVal,
      setProcessVal
    }}>

      <ProgressDIY 
        onClick={ 
          (e: any) => { 
            setProcessVal(e.target.value) 
          } 
      }>


      </ProgressDIY>
    </ProgressContext.Provider>
  )

}


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
export default TableDemo;