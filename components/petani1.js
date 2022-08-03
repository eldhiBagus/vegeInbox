import Image from 'next/image';

export default function Petani1() {
  return (
    <div className="container my-5 mb-5">
        <div className="row">
            <div className="col-sm-5">
                <Image 
                src="/abang1.png"
                width="100%"
                layout="responsive"
                height={125}
                alt="petan2"
                 />
            </div>
            <div className="col-sm-7 p-5">
                <h4 className="m-5 text-center juduls">Fresh From Farm every day</h4>
                <p className="text-justify lh-lg">kami ingin anda tahu persis siapa yang menanam makanan anda dengan memiliki profil petani di setiap item dan halaman pertani. Kami berupaya keras untuk menemukan petani yan bersemangat yang memiliki nilai transparansi dan keberlanjutan yang sama. Anda dipersilahkan untuk mengunjungi dia bertani dan melihat cinta yang mereka berikan untuk menanam makanan anda !</p>
            <div className="garis"></div>
            </div>
        </div>
        <style jsx>{`
        .juduls {
          color:#7bfc03;
          text-shadow: 1px 1px 2px yellow;
        }
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
