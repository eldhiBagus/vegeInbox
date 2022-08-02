
export default function Caption() {
  return (
    <>
        <div className="container mb-4">
            <h4 className="juduls text-center my-5">Fresh From Farm every day</h4>
            <p className="text-center">Pilih kebutuhan anda, kami antar. Panen setiap hari, jangan khawatir Anda tidak </p>
            <p className="text-center">dapat membuat hidangan favorit Anda. Kami memiliki banyak petani yang</p>
            <p className="text-center">bekerja keras sepenuh hati untuk membuat hidup Anda lebih sehat</p>
            <div className="d-flex justify-content-center">
            <div className="garis"></div>
            </div>
            <style jsx>{`
        .juduls {
          color:#7bfc03;
          text-shadow: 1px 1px 2px yellow;
        }
        .garis {
          color:#7bfc03;
          width:10%;
          border-width: 6px;
          border-style: solid;
        }
      `}</style>
        </div>
    </>
  )
}
