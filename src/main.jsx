import React from 'react'
import ReactDOM from 'react-dom/client'
import Routes from './router/index.jsx'
import "./assets/css/tailwind.css"
import { Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import { Provider } from 'react-redux'
import store from './store/index.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={Routes}/>
  </Provider>
  ) 