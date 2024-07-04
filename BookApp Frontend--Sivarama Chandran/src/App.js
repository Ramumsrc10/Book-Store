import logo from './logo.svg';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Addbook from './Admin/Addbooks';
import Landpage from './Customer/Landpage';
import Signup from './signup';
import SearchBook from './Customer/SearchBook';
//import Navbar from './Customer/Navbar';
import SearchResults from './Customer/searchresults';
import Layout from './Layout';
import Orders from './Customer/orders';
import Login from './Login';
import Buy from './Customer/Buy';
import { AuthProvider } from './Customer/AuthContext';
import Conformation from './Customer/Conformation';
import AdminLayout from './Admin/AdminLayout';
import UserOrders from './Admin/UseOrders';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Landpage/>}/>
            <Route path='orders' element={<Orders/>}/>
            <Route path='login' element={<Login/>}/>
            <Route path='search' element={<SearchBook/>}/>
            <Route path='signup' element={<Signup/>}/>
            <Route path='books/:title' element={<Buy/>}/>
            <Route path='confirmation' element={<Conformation/>}/>
          </Route>
          <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Landpage/>}/>
          <Route path='userorders' element={<UserOrders/>}></Route>
          <Route path='addbook' element={<Addbook />} />
              {/* Add more admin routes as needed */}
            </Route>
        </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
