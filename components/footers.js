import Image from 'next/image';
import Link from 'next/Link';

export default function Footers() {
  return (
    <div className='mt-5'>
        <div className='row warna py-3'>
            <div className="col-sm-3">
                <Image 
                src="/f1.png"
                width="100%"
                layout="responsive"
                height={100}
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
                src="/f2.png"
                width="100%"
                layout="responsive"
                height={100}
                />
            </div>
        </div>
        <div className='container p5'>
            <div className="row m-5">
                <div className="col-sm-3">
                <Image
              alt="app"
              src="/caca.png"
              width="100"
              height="50"
              className="d-inline-block align-top"
            />
                </div>
                <div className="col-sm-3">
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/product">Product</Link></li>
                    <li><Link href="/abouts">About Us</Link></li>
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
