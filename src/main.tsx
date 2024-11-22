import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from "@/components/ui/sonner";
import App from './App.tsx'
import './global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Toaster
      className='sonnerCustom'
      toastOptions={{
        unstyled: true,
        classNames: {
          toast: 'flex gap-2 items-center bg-background p-2 rounded-md text-white',
          title: 'text-white',
          description: 'text-red-400',
          icon: 'text-white',
          error: 'bg-red-900',
          success: 'bg-green-900',
          loading: 'bg-yellow-900',
        },
      }}
    />
  </StrictMode>,
)
