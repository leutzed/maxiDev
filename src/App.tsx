import GlobalStyles from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from "./routes/index";

function App() {

  return (
    <>
      <BrowserRouter>
        <AppRoutes />
        <GlobalStyles />
      </BrowserRouter>
    </>
  )
}

export default App
