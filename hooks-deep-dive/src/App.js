import './App.css';
import { UseStateExample1 } from './components/use-state-example/use-state-example-1.component';
import { UseStateExample2 } from './components/use-state-example/use-state-example-2.component';
import { UseMemoExample } from './components/use-effect-example/use-memo-example.component';
import { UseCallbackExample } from './components/use-effect-example/use-callback-example.component';
import { UseLayoutEffectExample } from './components/use-layout-effect-example/use-layout-effect-example.component';

const App = () => {
  return (
    <div className="App">
      {/* <UseStateExample1 /> */}
      {/* <UseStateExample2 /> */}
      {/* <UseCallbackExample /> */}
      {/* <UseMemoExample /> */}
      <UseLayoutEffectExample />
    </div>
  );
};

export default App;
