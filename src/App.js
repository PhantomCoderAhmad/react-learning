import './App.css';
import FirstComponent from './Components/FirstComponent';
import Parent from './Components/Parent';
import Child from './Components/Child';
import InputChange from './Components/InputChange';
import Hideshow from './Components/HIdeshow';
import FormHandling from './Components/FormHandling';
import ConditionalRendering from './Components/ConditionalRendering';
import FormValidation from './Components/FormValidation';
import ConstructorMethod from './LifeCycleMethods/ConstructorMethod';
import RenderMethod from './LifeCycleMethods/RenderMethod';
import ComponentDidMount from './LifeCycleMethods/ComponentDidMount';
import ComponentDidUpdate from './LifeCycleMethods/ComponentDidUpdate';
import ShouldComponentUpdate from './LifeCycleMethods/ShouldComponentUpdate';
import ComponentWillUnmount from './LifeCycleMethods/ComponentWillUnmount';
import UseStateHook from './Hooks/UseStateHook';
import UseEffectHook from './Hooks/UseEffectHook';
import Styling from './Components/Styling';
import Arraylisting from './Components/Arraylisting';
import DatatableListing from './Components/DatatableListing';
import ReuseComponentListing from './Components/ReuseComponentListing';
import FragmentUse from './Components/FragmentUse';
import LiftingStateUpParent from './Components/LiftingStateUpParent';
import PureComponent from './Components/PureComponent';
import UseMemoHook from './Hooks/UseMemoHook';
import RefComponentClassBased from './Components/RefComponentClassBased';
import UseRefHook from './Hooks/UseRefHook';
import ControlledComponent from './Components/ControlledComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppRoutes from './routes';
import Navbar from './Pages/Navbar';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <AppRoutes/>

      {/* <FirstComponent/> */}
      {/* <Parent /> */}
      {/* <InputChange/> */}
      {/* <Hideshow/> */}
      {/* <FormHandling/> */}
      {/* <ConditionalRendering/> */}
      {/* <FormValidation/> */}
      {/* <Styling/> */}
      {/* <Arraylisting/> */}
      {/* <DatatableListing/> */}
      {/* <ReuseComponentListing/> */}
      {/* <FragmentUse/> */}
      {/* lifting state up component means datra sending from child to parent */}
      {/* <LiftingStateUpParent/> */}
      {/* lifting state up component means datra sending from child to parent */}
      {/* <ControlledComponent/> */}

      {/* Life Cycle Methods */}
      {/* <div> */}
        {/* <h1>Life Cycle Methods</h1> */}
        {/* <ConstructorMethod/> */}
        {/* <RenderMethod  /> */}
        {/* <ComponentDidMount/> */}
        {/* <ComponentDidUpdate/> */}
        {/* <ShouldComponentUpdate/> */}
        {/* <ComponentWillUnmount/> */}
      {/* </div> */}
      {/* <PureComponent/> */}
      {/* <RefComponentClassBased/> */}


      {/* <div> */}
        {/* <h1>React js Hooks</h1> */}
        {/* <UseStateHook/> */}
        {/* <UseEffectHook/> */}
        {/* <UseMemoHook/> */}
        {/* <UseRefHook/> */}
      {/* </div> */}


    </div>
  );
}

export default App;
