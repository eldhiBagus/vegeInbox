import Head from 'next/head';
import Banner from './banner';
import Navigasi from './navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footers from './footers';

export default function Layouts({ children,title }) {
  return (
    <div>
        <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <main>
        <Navigasi></Navigasi>
        <Banner></Banner>
        <div>{children}</div>
        <Footers/>
        </main>
    </div>
  )
}
