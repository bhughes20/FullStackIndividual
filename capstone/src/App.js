import "react-datepicker/dist/react-datepicker.css";
import theme from "./theme/Theme";
import "./theme/styles.css";
import { ChakraProvider } from "@chakra-ui/react"
import QuoteForm from "./components/QuoteForm/QuoteForm";
import Admin from "./components/Admin/Admin";
import DriverDetails from "./components/DriverDetails/DriverDetails";
import { BrowserRouter, Route } from 'react-router-dom';



function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Route exact path="/">
           <QuoteForm />
        </Route>
        <Route exact path="/admin">
    		  <Admin />
    	  </Route>
        <Route path="/driver-details/:id">
    		  <DriverDetails />
    	  </Route>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
