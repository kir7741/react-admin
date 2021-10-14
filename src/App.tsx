import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
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
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route exact path="/login" component={Login} />
            {/* 確認一下是否有其他寫法 */}
            <Route path="/dashboard" component={Dashboard} />

            {/* 預設路由 */}
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
            {/* 路由錯誤處理 */}
            <Redirect to="/dashboard" />
          </Switch>
        </div>
      </BrowserRouter>
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
