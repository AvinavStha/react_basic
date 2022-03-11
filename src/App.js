import { Warning } from "@material-ui/icons";
import "./App.css";
import { Button } from "./components/Button";

function clickMe() {
  alert("You clicked me");
} 
function clickWarning() {
  console.warn("warning");
} 

function App() {
  return (
    <div className="App">
      <Button
        onClick={clickMe}
        type="button"
        buttonStyle="btn--primary--solid"
        buttonSize="btn--medium"
      >
        Primary
      </Button>
      <Button
        onClick={clickWarning}
        type="button"
        buttonStyle="btn--warning--solid"
        buttonSize="btn--large"
      >
        Warning
      </Button>
      <Button
        onClick={clickMe}
        type="button"
        buttonStyle="btn--danger--solid"
        buttonSize="btn--medium"
        
      >
        Danger
      </Button>
      <Button
        onClick={clickMe}
        type="button"
        buttonStyle="btn--rounded--solid"
        buttonSize="btn--medium"
      >
        Rounded Corner
      </Button>
      <Button
        type="button"
        buttonStyle="btn--transparent--solid"
        buttonSize="btn--medium"
        disabled
      >
        Transparent
      </Button>
      <Button
        type="button"
        buttonStyle="btn--boxShadow--solid"
        buttonSize="btn--medium"
      >
        Box-Shadow
      </Button>
    </div>
  );
}

export default App;
