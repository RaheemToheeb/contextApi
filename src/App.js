import Counter from "./Component/Counter/Couter";
import Counter2 from "./Component/GlobalCounter/Counter2";

import { GlobalState } from "./Component/GlobalCounter/GlobalState";

function App() {
  return (
    <GlobalState>
      <div>
        <Counter2 />
      </div>
    </GlobalState>
  );
}

export default App;
