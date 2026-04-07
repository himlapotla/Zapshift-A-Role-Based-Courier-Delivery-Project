import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { router } from './router/router'
import { RouterProvider } from 'react-router'
import AuthProvider from './Context/AuthContext/AuthProvider'
import Login from './pages/Auth/Login/Login'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  //   <AuthProvider>
  //     <RouterProvider router={router} />
  //   </AuthProvider>
  // </StrictMode>,

  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </QueryClientProvider>
)
