import './App.css';
import Main from './components/main/Main';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import FilteredProducts from './components/FilteredProducts/FilteredProducts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
              path='/'
              element={<Main />}
          >
          </Route>
          <Route 
              path='/filteredProducts/:type'
              element={<FilteredProducts />}
          >
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    )
}

export default App;
