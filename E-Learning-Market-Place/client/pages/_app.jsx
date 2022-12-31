
import 'bootstrap/dist/css/bootstrap.css'
import 'antd/dist/reset.css';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from '../context/index';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Provider>
        <ToastContainer position='top-center' />
        <Navbar />
        <Component {...pageProps} />
      </Provider>
    </div>
  )
}
