import Image from 'next/image';

export default function Petani2() {
  return (
    <div className='warna'>
    <div className="container my-5 mb-5">
        <div className="row">
            <div className="col-sm-7 p-5">
                <h4 className="m-5 text-center juduls">Pesticide Free</h4>
                <p className="text-justify lh-lg rata">Dengan jumlah pertanian organik yang rendah dan jauh dari kota. Ini adalah cara kami membiarkan rumah tangga memiliki akses ke produk organik dan bebas pestisida. Namun, kami memisahkan setiap item kedalam kategori yang berbeda agar setransparan mungkin - organik, hidroponik, atau kualitas terjamin !</p>
                <div className="garis"></div>
            </div>
            <div className="col-sm-5">
                <Image 
                src="/abang2.png"
                width="100%"
                layout="responsive"
                height={125}
                alt="petan1"
                 />
            </div>
        </div>
    </div>
        <style jsx>{`
        .juduls {
          color:#7bfc03;
          text-shadow: 1px 1px 2px yellow;
        }
        .rata {
         text-align:justify;
        }
        .warna {
            background-color:#f5f7f6;}
        .garis {
          color:#7bfc03;
          width:15%;
          border-width: 6px;
          border-style: solid;
        }
      `}</style>
    </div>
  )
}
