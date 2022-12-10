import Welcome from './pages/Welcome';
import Products from './pages/Products';
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to ="/">Home</Link>
          </li>
          <li>
            <Link to = "/auth">Authenticate</Link>

          </li>

        </ul>


      <Switch>
        {/* <Route path="/auth" element={<Home />} /> */}

				<Route exact path="/" element={<Home />} />
				<Route exact path="/auth" element={<auth />} />
        
        {/* <Route path="/invoices" element={<Welcome />} />

				<Route path="/products" element={<ProductList />} />
        <Route path="/products/id" element={<ProductList />} />

				<Route path="/cart" element={<ProductList />} />
        
        <Route path="/profile" element={<ProductList />} />
        <Route path="/profile/id" element={<ProductList />} />

				<Route path="/about" element={<ProductList />} /> */}

      </Switch>
      </div>
    </Router>
  );
}
// /auth
// 	/login
// 	/register
// /
// 	/products
// 		/:id
// 	/invoices
// 		/:id
// 	/cart
// 	/profile
// 	/about

function Home(){

}

function auth(){

}

export default App;
