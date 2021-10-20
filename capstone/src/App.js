import theme from "./theme/Theme";
import "./theme/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer} from "react-toastify";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import QuoteForm from "./components/QuoteForm/QuoteForm";
import Admin from "./components/Admin/Admin";
import DriverDetails from "./components/DriverDetails/DriverDetails";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <BrowserRouter>
        <Navbar />
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
