import React, { useState,useEffect,useRef} from 'react';


// class ProgressDIY extends React.Component<any, any>{

//   tm: any = null;
//   tmtwo: any = null;
//   constructor(props: any) {
//     super(props);
//     this.state={ 
//         percent:0,
//     }
//   }

//   componentDidMount(){
//     console.log('Did Mount')
//     this.setState({percent:this.props.value})
//   }


//   componentDidUpdate(prevProps: any, prevState: any){
//     console.log('Did Update')
//     console.log(this.state)
//     console.log('------')
//     console.log(this.props)

//     if((prevProps.value!==this.props.value)||(prevState.percent!=this.state.percent)){
//         if((this.state as any).percent>this.props.value){
//           if(this.tm)  
//             clearTimeout(this.tm)
//           this.tmtwo=setTimeout(()=>{this.setState({percent:this.state.percent-1})}, 20)
//         }
//         else if((this.state as any).percent<this.props.value){
//           if(this.tmtwo)  
//             clearTimeout(this.tmtwo)
//           this.tm=setTimeout(()=>{this.setState({percent:this.state.percent+1})}, 20)
//         }
//     }
//   }

//     render(){
//         return(
//         <div>
//             <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
//               <div className="progress-bar" style={{backgroundColor:"#fe5196",width:this.state.percent.toString()+"%",height:"100%",borderRadius:"10px"}}></div>
//             </div>
//             目前比率: {this.state.percent}%
//             <button value={90} onClick={this.props.onClick}>增加比率至90</button>
//             <button value={10} onClick={this.props.onClick}>減少比率至10</button>
//         </div>
//         );
//     }
// }
const ProgressDIY = (props: any) => {

  const [percent, setPercent]=useState(10); 

  const mounted = useRef(false);
  const tm = useRef<ReturnType<typeof setTimeout>>();
  const tmTwo = useRef<ReturnType<typeof setTimeout>>();
  
  useEffect(() => {

    if (!mounted.current) {
      // DidMount
      setPercent(props.value);
      mounted.current = true;
    } else {
      // DidUpdate
      if (percent > props.value) {
        tmTwo.current=setTimeout(() => { setPercent(percent - 1) }, 20);
      }
      else if (percent < props.value) {
        tm.current=setTimeout(() => { setPercent(percent + 1) }, 20);
      }

    }

    return () => {
      if (tm.current) {
        clearTimeout(tm.current)
      }

      if (tmTwo.current) {
        clearTimeout(tmTwo.current)
      }

    }

  },[props.value, percent])

  return (
    <div>
      <div className="progress-back" style={{backgroundColor:"rgba(0,0,0,0.2)",width:"200px",height:"7px",borderRadius:"10px"}}>
        <div className="progress-bar" style={{backgroundColor:"#fe5196",width: percent.toString()+"%",height:"100%",borderRadius:"10px"}}></div>
      </div>
      目前比率: {percent}%
      <button value={90} onClick={props.onClick}>增加比率至90</button>
      <button value={10} onClick={props.onClick}>減少比率至10</button>

      

    </div>
  );
}


export default ProgressDIY;