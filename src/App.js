import { Component } from 'react';
import './App.css';
import PstList from './HTTP_GET_POST/GetRequest';
import PostRequest from './HTTP_GET_POST/PostRequest';
import ComponentA from './ContextAPI/ComponentA';
import { UserProvider } from './ContextAPI/userContext';
import ClickCounter2 from './RenderProps/ClickCounter2';
import HoverCounter2 from './RenderProps/HoverCounter2';
import Counter from './RenderProps/Counter';
import KeyPressCounter2 from './RenderProps/KeyPressCounter2';
import User from './RenderProps/User';
import ClickCounter from './HigherOrder/ClickCounter';
import HoverCounter from './HigherOrder/HoverCounter';
import KeyPressCounter from './HigherOrder/KeyPressCounter';
import Error1 from './ErrorBoundary/Error1';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Order from './LiftState/Order'
import ParentComp from './PureComponents/ParentComp';
import Pure from './PureComponents/PureComp'
import Updating from './LifecycleMethods/Updating';
import Fragment from './Fragments/Fragment';
import Table from './Fragments/Table';
import EventBind from './EventHandlers/EventBind';
import ParentComponent from './EventHandlers/ParentComponent';
import FunctionComponent from './components/FunctionComponent'
import ClassComponent from './components/ClassComponent';
import JSx from './Props_States_Jsx/WithJsx';
import Props from './Props_States_Jsx/Props';
import State from './Props_States_Jsx/State';
import SetState from './Props_States_Jsx/SetState';
import FunctionClick from './EventHandlers/FunctionClick';
import ClassClick from './EventHandlers/ClassClick';
import CondtionalRender from './Rendering/CondtionalRender';
import ListRender from './Rendering/ListRender';
import Stylesheet from './Styling/Stylesheet';
import Inline from './Styling/Inline';
import CSSModules from './Styling/CSSModules';
import Sampleform from './Forms/Sampleform';
import Mounting from './LifecycleMethods/Mounting';
import RefsDemo from './Refs/RefsDemo';
import FocusInput from './Refs/FocusInput';
import ForwardRefParent from './Refs/ForwardRefParent';
import PortalDemo from './PortalDemo';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>HTTP GET and POST</h1>
         <PstList /> 
        <PostRequest />
        <hr />
        <h1>Context</h1>
        <UserProvider value="Shiny">
          <ComponentA />
        </UserProvider>
        <hr />
        <h1>Render Props</h1>
        <Counter 
        render={(count, incrementCount)=>(
        <ClickCounter2 count={count} incrementCount={incrementCount}></ClickCounter2>
        )}></Counter>

        <Counter 
        render={(count, incrementCount)=>
        <HoverCounter2 count={count} incrementCount={incrementCount}></HoverCounter2>
        }></Counter>

        {/* <Counter>
        {(count, incrementCount)=>(
        <KeyPressCounter2 count={count} incrementCount={incrementCount}></KeyPressCounter2>
        )}
        </Counter> */}

        <ClickCounter2 />
        <HoverCounter2 />
        <KeyPressCounter2 />
        <User render={(isLoggedIn) => isLoggedIn ? 'Shiny' : 'Guest'}/>
        <hr />
        <h1>Higher Order Components</h1>
        <ClickCounter name="Mighty" />
        <HoverCounter />
        <KeyPressCounter />
        <hr />
        <h1>Error Boundaries</h1>
        // component level wrap 
        <ErrorBoundary>
        <Error1 heroName="Batman"/>
        </ErrorBoundary>

        <ErrorBoundary>
        <Error1 heroName="Superman"/>
        </ErrorBoundary>

        <ErrorBoundary>
        <Error1 heroName="Joker" />
        </ErrorBoundary>
        // top level component wrap 
        <ErrorBoundary>
        <Error1 heroName="Batman"/>
        <Error1 heroName="Superman"/>
        <Error1 heroName="Joker" />
        </ErrorBoundary>
        <hr />
        <h1>Portal example</h1>
        <PortalDemo />
        <hr />
        <h1>Refs</h1>
        <ForwardRefParent />
        <RefsDemo></RefsDemo>
        <FocusInput />
        <h1>Lift State Up</h1>
        <Order />
        <h1>Pure Component</h1>
        <ParentComp />
        <hr />
        <h1>Fragments</h1>
        <Fragment />
        <Table />
        <hr />
        <h1>LifeCycle methods</h1>
        <Updating />
        <Mounting />
        <hr />
        <h1>Different Components</h1>
        <FunctionComponent />
        <ClassComponent />
        <hr />
        <h1>Props,State,SetState,Jsx</h1>
        <Props name='Bruce' heroName='Batman'>
          <p>This is paragraph</p>
        </Props>
        <State />
        <SetState />
        <JSx name='Bruce' heroName='Batman'>
          <p>This is paragraph</p>
        </JSx>
        <JSx name='Carrie' heroName='Superman'>
          <button>Action</button>
        </JSx>
        <JSx name='Carrie' heroName='Superman'>
          <button>Action</button>
        </JSx>
        <hr />
        <h1>Event Handlers</h1>
        <ClassClick></ClassClick>
        <FunctionClick></FunctionClick>
        <ParentComponent></ParentComponent>
        <EventBind></EventBind>
        <hr />
        <h1>Rendering</h1>
        <CondtionalRender />
        <ListRender />
        <hr />
        <h1>Style</h1>
        <Stylesheet primary={false} />
        <Inline />
        <CSSModules />
        <hr />
        <h1>Form</h1>
        <Sampleform></Sampleform>
      </div>
    );
  }

}

export default App;
