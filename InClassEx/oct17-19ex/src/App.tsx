import DisplayAll from "./SomeThing.tsx";
import {CountButton, UpdateTextField, AreaCalculations} from "./AnotherThing.tsx";
function App() 
{
    return(
    <div>
        <DisplayAll/>
        <h3> Count Button </h3>
        <CountButton/>
        <h3> Double Value </h3>
        <UpdateTextField/>
        <h3> Area </h3>
        <AreaCalculations/>
    </div>);
}

export default App;
