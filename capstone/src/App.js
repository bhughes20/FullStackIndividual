import "semantic-ui-css/semantic.min.css";
import "react-datepicker/dist/react-datepicker.css";
import { ChakraProvider } from "@chakra-ui/react"
import "./App.css";
import QuoteForm from "./components/QuoteForm/QuoteForm";

function App() {
  return (
    <div className="App">
    <ChakraProvider>
      <QuoteForm />
    </ChakraProvider>
    </div>
  );
}

export default App;
