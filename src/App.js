//Routing example in react

import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { Home } from './Router/Home';
// import About from './Router/About';
import { Navbar } from './Router/Navbar';
import { OrderSummary } from './Router/OrderSummary';
import { NoMatch } from './Router/NoMatch';
import { NestedRoute } from './Router/NestedRoute';
import { Featured } from './Router/Featured';
import { New } from './Router/New';
import { Users } from './Router/Users';
import { UserDetails } from './Router/UserDetails';
import { Admin } from './Router/Admin';
import { Profile } from './Router/Profile';
import { AuthProvider } from './Router/auth';
import { Login } from './Router/Login';
const LazyAbout = React.lazy(()=>import('./Router/About'))

function App() {
  return (
    <AuthProvider>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='about' element = {<React.Suspense fallback="Loading..."><LazyAbout /></React.Suspense>}></Route>
      <Route path='order-summary' element = {<OrderSummary></OrderSummary>}></Route>
      <Route path="products" element={<NestedRoute></NestedRoute>}>
        <Route index element={<Featured></Featured>}/>
        <Route path="featured" element={<Featured></Featured>}></Route>
          <Route path="new" element={<New></New>}></Route>
      </Route>
      <Route path="users" element={<Users></Users>}>
      <Route path=":userId" element={<UserDetails></UserDetails>}></Route>
      <Route path="admin" element={<Admin></Admin>}></Route>
      </Route>
      <Route path="profile" element={<Profile></Profile>}></Route>
      <Route path="login" element={<Login></Login>}></Route>
      <Route path="*" element={<NoMatch></NoMatch>}></Route>
      </Routes>
    </AuthProvider>
  )
}

export default App








// Hook examples in react
 
// import React from 'react';
// import './App.css';
// import ComponentA from './Hooks/UseContext/ComponentA';
// import ExampleComponent from './Hooks/UseReducer/UseReducerHook';
// import UseReducer_fetch from './Hooks/UseReducer/UseReducer_fetch';
// import UseReducer_fetch2 from './Hooks/UseReducer/UseReducer_fetch2';
// import ParentComp_callback from './Hooks/Usecallback/ParentComp_callback';
// import Memo from './Hooks/UseMemo/Memo';
// import Useref from './Hooks/useref.js/Useref';
// import Hooktimer from './Hooks/useref.js/Hooktimer';
// import UseEffect_Render from './Hooks/UseEffect/UseEffect_Render';
// import UseEffect_ConditionalRun from './Hooks/UseEffect/UseEffect_ConditionalRun';
// import UseEffect_once from './Hooks/UseEffect/UseEffect_once';
// import UseEffect_CleanUp from './Hooks/UseEffect/UseEffect_CleanUp';
// import UseEffect_incorrectDependency from './Hooks/UseEffect/UseEffect_incorrectDependency';
// import UseEffect_FetchData from './Hooks/UseEffect/UseEffect_FetchData';
// import UseState1 from './Hooks/UseStateHook/UseStateHook';
// import UseState2 from './Hooks/UseStateHook/UseState_PreviousState';
// import UseState3 from './Hooks/UseStateHook/UseState_Object';
// import UseState4 from './Hooks/UseStateHook/UseState_Array';
 
// export const userContext = React.createContext();
// export const ChannelContext = React.createContext()
 
// function App() {
//   return (
//     <div className='App'>
//       <h1>Use State</h1>
//       <UseState1></UseState1>
//       <UseState2></UseState2>
//       <UseState3></UseState3>
//       <UseState4></UseState4>
//       <hr></hr>
//        <h2>Use Effect</h2>
//       <UseEffect_Render></UseEffect_Render>
//       <UseEffect_ConditionalRun></UseEffect_ConditionalRun>
//       <UseEffect_once></UseEffect_once>
//       <UseEffect_CleanUp></UseEffect_CleanUp>
//       <UseEffect_incorrectDependency></UseEffect_incorrectDependency>
//       <UseEffect_FetchData></UseEffect_FetchData>
//       <hr></hr>
//        <h1>Use Context</h1>
//       <userContext.Provider value={'Shiny'}>
//         <ChannelContext.Provider value={'Melingi'}>
//           <ComponentA></ComponentA>
//         </ChannelContext.Provider>
//       </userContext.Provider>
//       <ExampleComponent></ExampleComponent>
//       <UseReducer_fetch></UseReducer_fetch>
//       <UseReducer_fetch2></UseReducer_fetch2>
//       <ParentComp_callback></ParentComp_callback>
//       <Memo></Memo>
//       <Useref></Useref>
//       <Hooktimer></Hooktimer>
//       <hr></hr>
//     </div>
//   )
// }
 
// export default App



















// Basics of React examples

// import { Component } from 'react';
// import './App.css';
// import PstList from './Basics/HTTP_GET_POST/GetRequest';
// import PostRequest from './Basics/HTTP_GET_POST/PostRequest';
// import ComponentA from './Basics/ContextAPI/ComponentA';
// import { UserProvider } from './Basics/ContextAPI/userContext';
// import ClickCounter2 from './Basics/RenderProps/ClickCounter2';
// import HoverCounter2 from './Basics/RenderProps/HoverCounter2';
// import Counter from './Basics/RenderProps/Counter';
// import KeyPressCounter2 from './Basics/RenderProps/KeyPressCounter2';
// import User from './Basics/RenderProps/User';
// import ClickCounter from './Basics/HigherOrder/ClickCounter';
// import HoverCounter from './Basics/HigherOrder/HoverCounter';
// import KeyPressCounter from './Basics/HigherOrder/KeyPressCounter';
// import Error1 from './Basics/ErrorBoundary/Error1';
// import ErrorBoundary from './Basics/ErrorBoundary/ErrorBoundary';
// import Order from './Basics/LiftState/Order'
// import ParentComp from './Basics/PureComponents/ParentComp';
// import Updating from './Basics/LifecycleMethods/Updating';
// import Fragment from './Basics/Fragments/Fragment';
// import Table from './Basics/Fragments/Table';
// import EventBind from './Basics/EventHandlers/EventBind';
// import ParentComponent from './Basics/EventHandlers/ParentComponent';
// import FunctionComponent from './Basics/components/FunctionComponent'
// import ClassComponent from './Basics/components/ClassComponent';
// import JSx from './Basics/Props_States_Jsx/WithJsx';
// import Props from './Basics/Props_States_Jsx/Props';
// import State from './Basics/Props_States_Jsx/State';
// import SetState from './Basics/Props_States_Jsx/SetState';
// import FunctionClick from './Basics/EventHandlers/FunctionClick';
// import ClassClick from './Basics/EventHandlers/ClassClick';
// import CondtionalRender from './Basics/Rendering/CondtionalRender';
// import ListRender from './Basics/Rendering/ListRender';
// import Stylesheet from './Basics/Styling/Stylesheet';
// import Inline from './Basics/Styling/Inline';
// import CSSModules from './Basics/Styling/CSSModules';
// import Sampleform from './Basics/Forms/Sampleform';
// import Mounting from './Basics/LifecycleMethods/Mounting';
// import RefsDemo from './Basics/Refs/RefsDemo';
// import FocusInput from './Basics/Refs/FocusInput';
// import ForwardRefParent from './Basics/Refs/ForwardRefParent';
// import PortalDemo from './Basics/PortalDemo';
// import PureComp from './Basics/PureComponents/PureComp';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>HTTP GET and POST</h1>
//          <PstList /> 
//         <PostRequest />
//         <hr />
//         <h1>Context</h1>
//         <UserProvider value="Shiny">
//           <ComponentA />
//         </UserProvider>
//         <hr />
//         <h1>Render Props</h1>
//         <Counter 
//         render={(count, incrementCount)=>(
//         <ClickCounter2 count={count} incrementCount={incrementCount}></ClickCounter2>
//         )}></Counter>

//         <Counter 
//         render={(count, incrementCount)=>
//         <HoverCounter2 count={count} incrementCount={incrementCount}></HoverCounter2>
//         }></Counter>

//         {/* <Counter>
//         {(count, incrementCount)=>(
//         <KeyPressCounter2 count={count} incrementCount={incrementCount}></KeyPressCounter2>
//         )}
//         </Counter> */}

//         <ClickCounter2 />
//         <HoverCounter2 />
//         <KeyPressCounter2 />
//         <User render={(isLoggedIn) => isLoggedIn ? 'Shiny' : 'Guest'}/>
//         <hr />
//         <h1>Higher Order Components</h1>
//         <ClickCounter name="Mighty" />
//         <HoverCounter />
//         <KeyPressCounter />
//         <hr />
//         <h1>Error Boundaries</h1>
//         // component level wrap 
//         <ErrorBoundary>
//         <Error1 heroName="Batman"/>
//         </ErrorBoundary>

//         <ErrorBoundary>
//         <Error1 heroName="Superman"/>
//         </ErrorBoundary>

//         <ErrorBoundary>
//         <Error1 heroName="Joker" />
//         </ErrorBoundary>
//         // top level component wrap 
//         <ErrorBoundary>
//         <Error1 heroName="Batman"/>
//         <Error1 heroName="Superman"/>
//         <Error1 heroName="Joker" />
//         </ErrorBoundary>
//         <hr />
//         <h1>Portal example</h1>
//         <PortalDemo />
//         <hr />
//         <h1>Refs</h1>
//         <ForwardRefParent />
//         <RefsDemo></RefsDemo>
//         <FocusInput />
//         <h1>Lift State Up</h1>
//         <Order />
//         <h1>Pure Component</h1>
//         <ParentComp />
//         <PureComp />
//         <hr />
//         <h1>Fragments</h1>
//         <Fragment />
//         <Table />
//         <hr />
//         <h1>LifeCycle methods</h1>
//         <Updating />
//         <Mounting />
//         <hr />
//         <h1>Different Components</h1>
//         <FunctionComponent />
//         <ClassComponent />
//         <hr />
//         <h1>Props,State,SetState,Jsx</h1>
//         <Props name='Bruce' heroName='Batman'>
//           <p>This is paragraph</p>
//         </Props>
//         <State />
//         <SetState />
//         <JSx name='Bruce' heroName='Batman'>
//           <p>This is paragraph</p>
//         </JSx>
//         <JSx name='Carrie' heroName='Superman'>
//           <button>Action</button>
//         </JSx>
//         <JSx name='Carrie' heroName='Superman'>
//           <button>Action</button>
//         </JSx>
//         <hr />
//         <h1>Event Handlers</h1>
//         <ClassClick></ClassClick>
//         <FunctionClick></FunctionClick>
//         <ParentComponent></ParentComponent>
//         <EventBind></EventBind>
//         <hr />
//         <h1>Rendering</h1>
//         <CondtionalRender />
//         <ListRender />
//         <hr />
//         <h1>Style</h1>
//         <Stylesheet primary={false} />
//         <Inline />
//         <CSSModules />
//         <hr />
//         <h1>Form</h1>
//         <Sampleform></Sampleform>
//       </div>
//     );
//   }

// }

// export default App;
