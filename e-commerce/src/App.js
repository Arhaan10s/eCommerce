import './App.css';
import Main from './components/main/Main';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import FilteredProducts from './components/FilteredProducts/FilteredProducts';
import SingleProduct from './components/FilteredProducts/SingleProduct';

function App() {
  return (
    <div>
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
          <Route
            path='/filteredProducts/:type/:id'
            element={<SingleProduct />}
            >
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    )
}

export default App;
