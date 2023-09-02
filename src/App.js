import './App.css';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';
import { Fragment } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootLayout from './pages/Root';
import Contact from './pages/Contact';
import About from './pages/About';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Authentication from './pages/Authentication';
import Signup from './components/Authentication/Signup';
import { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { authActions } from './store/auth-slice';
import Footer from './components/footer/footer';
import { cartActions } from './store/cart-slice';


//creatig routes
const router = createBrowserRouter([
  { 
    path :'/' , 
    element : <RootLayout/>,
    children: [
      { path:'/', element: <MainPage/>},
      { path:'/home', element: <MainPage/>},
      { path:'/contact', element:<Contact/>},
      { path:'/about', element:<About/>},
      { path:'/shop', element:<Shop/>},
      { path:'/cart', element:<Cart/>},
      { path:'/login', element:<Authentication/>},
      { path:'/signup', element:<Signup/>}
    ]
  }
]);



function App() {
  //const cart = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  useEffect(()=>{
    const token=localStorage.getItem('token');
    if(token)
    {
      dispatch(authActions.refresh());
    }
  },[])

  // useEffect(()=>{
  //   localStorage.setItem("cart",JSON.stringify(cart))
  // },[cart])

  useEffect(()=>{
    const getCartData= async () => {

    const response = await fetch('https://brand-home-cart-data-default-rtdb.firebaseio.com/cart.json');
    if(!response.ok)
      {
        throw new Error('Problem in fetching cart data!');
      }

      const data = await response.json();
      if(data.totalQuantity===0)
      {
        return;
      }
      dispatch(cartActions.replaceCart(data));
  }
  getCartData();
},[dispatch])
  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
    
  );
}

export default App;
