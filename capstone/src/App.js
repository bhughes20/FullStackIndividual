import "semantic-ui-css/semantic.min.css";
import "react-datepicker/dist/react-datepicker.css";
import { ChakraProvider } from "@chakra-ui/react"
import QuoteForm from "./components/QuoteForm/QuoteForm";

import theme from "./theme/Theme";
import "./theme/styles.css";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <QuoteForm />
    </ChakraProvider>
  );
}

export default App;
