
import 'bootstrap/dist/css/bootstrap.css'
import 'antd/dist/reset.css';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <ToastContainer position='top-center' />
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}
