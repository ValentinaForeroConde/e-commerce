import './styles/styles.css';
import Layout from './containers/Layout';
import Login from './pages/Login';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
