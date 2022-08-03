import Image from 'next/image';
import Link from 'next/link';
import caca from '../public/caca.png';
import f2 from '../public/f2.png';
import f1 from '../public/f1.png';

export default function Footers() {
  return (
    <div className='mt-5'>
        <div className='row warna py-3'>
            <div className="col-sm-3">
                <Image 
                src={f1}
                width="100%"
                layout="responsive"
                height={100}
                alt="f1"
                />
            </div>
            <div className="col-sm-6 align-self-center">
                <div>
                <h4 className="text-center juduls my-4">Health is what You eat.</h4>
                <p className="text-center">Sehat bergabung dengan vegeInbox. Segar, sehat dan dengan saran nutrisi</p>
                <p className="text-center">akan dikirimkan ke pintu anda setiap hari.</p>
                <p className="text-center">jangan khawatir, dan Salam sehat.</p>   
                </div>
            </div>
            <div className="col-sm-3">
            <Image 
                src={f2}
                width="100%"
                layout="responsive"
                height={100}
                alt="F2"
                />
            </div>
        </div>
        <div className='container p5'>
            <div className="row m-5">
                <div className="col-sm-3">
                <Image
              alt="app"
              src={caca}
              width="100"
              height="50"
              className="d-inline-block align-top"
            />
                </div>
                <div className="col-sm-3">
                <ul>
                    <li><Link href="/" passHref><a><b>Home</b></a></Link></li>
                    <li><Link href="/product" passHref><a><b>Products</b></a></Link></li>
                    <li><Link href="/abouts" passHref><a><b>About Us</b></a></Link></li>
                </ul>
                </div>
                <div className="col-sm-3">
                <ul>
                    <li>Sosial Media</li>
                    <li>github</li>
                    <li>WhatsApp</li>
                </ul>
                </div>
                <div className="col-sm-3">
                <ul>
                    <li>Created By:</li>
                    <li>Eldhi ganteng</li>
                    <li>in rubicLabs</li>
                </ul>
                </div>
            </div>
        </div>
        <style jsx>{`
        .warna {
          background-color:#e4ede6;}
          .juduls {
            color:#7bfc03;
            text-shadow: 1px 1px 2px yellow;
          }
          ul {list-style-type:none;}
          li {list-style-type:none;}
      `}</style>
    </div>
  )
}
