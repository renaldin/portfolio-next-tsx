import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class'>
      <div className='grid grid-cols-12 gap-6 my-14 lg:px-48 px-5 sm:px-20 md:px-32'>
        <div className='col-span-12 p-4 text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl'>
          <Sidebar />
        </div>
        <div className='col-span-12 bg-white lg:col-span-9 rounded-2xl flex flex-col overflow-hidden dark:bg-dark-500'>
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </ThemeProvider>
  )
}
