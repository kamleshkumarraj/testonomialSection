import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import EmptyWishlist from './pages/EmptyWishlist.jsx'
import OrderDetails from './components/OrderDetails.jsx/OrderDetails.jsx'
import MyOrder from './components/MyOrder/MyOrder.jsx'
import ActiveOrder from './components/MyOrder/ActiveOrder.jsx'
import CanceledOrder from './components/MyOrder/CanceledOrder.jsx'
import CompletedOrder from './components/MyOrder/CompletedOrder.jsx'
import ErrorPage from './components/ErrorPage.jsx'

const router = createBrowserRouter([{
  path : '/',
  element : <App />,
  errorElement : <ErrorPage />,
  children : [{
    path : '/empty-wishlist',
    element : <EmptyWishlist />
  },
  {
    path : '/order-details',
    element : <OrderDetails />
  },
  {
    path : '/',
    element : <MyOrder />,
    errorElement : <ErrorPage />,
    children : [{
      path : '/my-orders/active',
      element : <ActiveOrder />
    },
    {
      path : '/my-orders/canceledOrder',
      element : <CanceledOrder />
    },
    {
      path : '/my-orders/completed',
      element : <CompletedOrder />
    }
  
  ]
  }
]
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
