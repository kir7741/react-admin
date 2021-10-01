import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';

// type Props = {
//   title: string;
// };

// type State = {
//   isLogin: boolean
// }

class App extends React.Component {


  render() {
    
    return (
      <div className="App">
        
        <Login/>
        {/* <Dashboard/> */}
      </div>
    );
  }
}

// class App extends React.Component<Partial<Props>, Partial<State>> {

//   constructor(props: Partial<Props>) {
//     super(props);
//     this.state = {
//       isLogin: false
//     };
//   }

//   handleClick(e: React.MouseEvent, name: string) {
//     this.setState((prevState) => ({ isLogin: !prevState.isLogin }));
//   }

//   getGreetingComponent(): JSX.Element {
//     const isLogin = this.state.isLogin;
//     if (isLogin) {
//       return <p>welcome back!</p>
//     }

//     return <p>login first!</p>
//   }

//   getListCompoent(): JSX.Element {

//     const list = [
//       {
//         id: 1,
//         name: 'Leo'
//       },
//       {
//         id: 2,
//         name: 'Andy'
//       },
//       {
//         id: 3,
//         name: 'Joseph'
//       }
//     ]

//     const ListEle = list.map((ele) => {
//       return (
//           <option 
//             key={ele.id}
//             value={ele.id}
//           >
//             {ele.name}
//           </option>
//       );
//     });

//     return (
//       <select>
//         {ListEle}
//       </select>
//     )

//   }

//   render() {

//     const Greeting = () => this.getGreetingComponent();
//     const PeopleSelect = () => this.getListCompoent();

//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 onClick={(e) => this.handleClick(e, 'Andy')}>{this.props.title}</h1>
//           <Greeting/>
//           <PeopleSelect/>
//           <p>
//             Edit <code>src/App.tsx</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
