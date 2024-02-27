import { Component } from 'react';
import './App.css';
// import Order from './LiftState/Order'
// import ParentComp from './PureComponents/ParentComp';
// import Pure from './PureComponents/PureComp'
// import Updating from './LifecycleMethods/Updating';
// import Fragment from './Fragments/Fragment';
// import Table from './Fragments/Table';
// import EventBind from './EventHandlers/EventBind';
// import ParentComponent from './EventHandlers/ParentComponent';
// import FunctionComponent from './components/FunctionComponent'
// import ClassComponent from './components/ClassComponent';
// import JSx from './Props_States_Jsx/WithJsx';
// import Props from './Props_States_Jsx/Props';
// import State from './Props_States_Jsx/State';
// import SetState from './Props_States_Jsx/SetState';
// import FunctionClick from './EventHandlers/FunctionClick';
// import ClassClick from './EventHandlers/ClassClick';
// import CondtionalRender from './Rendering/CondtionalRender';
// import ListRender from './Rendering/ListRender';
// import Stylesheet from './Styling/Stylesheet';
// import Inline from './Styling/Inline';
// import CSSModules from './Styling/CSSModules';
// import Sampleform from './Forms/Sampleform';
// import Mounting from './LifecycleMethods/Mounting';
// import RefsDemo from './Refs/RefsDemo';
// import FocusInput from './Refs/FocusInput';
import ForwardRefParent from './Refs/ForwardRefParent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Refs</h1>
        <ForwardRefParent />
        {/* <RefsDemo></RefsDemo> */}
        {/* <FocusInput /> */}
        {/* <h1>Lift State Up</h1>
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
        <Mounting/>
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
        <hr/>
        <h1>Style</h1>
        <Stylesheet primary = {false}/>
        <Inline />
        <CSSModules />
        <hr />
        <h1>Form</h1>
        <Sampleform></Sampleform> */}
      </div>
    );
  }

}

export default App;
