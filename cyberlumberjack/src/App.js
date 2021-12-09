import ReactRouter from "./router/router.jsx";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <ReactRouter />
    </ChakraProvider>
  );
}

export default App;
