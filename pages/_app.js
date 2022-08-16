import Nav from '../components/Nav/Nav'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div className='app_wrapper'>
      <Nav/>
     <Component {...pageProps} />
  </div>
  )
}

export default MyApp
