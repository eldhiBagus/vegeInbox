import Image from 'next/image';
import abang3 from '../public/abang3.png';

export default function Petani3() {
  return (
    <div className="container my-5 mb-5">
        <div className="row">
            <div className="col-sm-5">
                <Image 
                src={abang3}
                width="100%"
                layout="responsive"
                height={125}
                alt="petani"
                 />
            </div>
            <div className="col-sm-7 p-5">
                <h4 className="m-5 juduls">Support Local Farmers</h4>
                <p className="text-justify lh-lg rata">Perlahan tapi pasti, dengan memotong rantai pasokan dan sistem pangan yang kompleks, kami berharap dapat meningkatkan kesejahteraan petani dengan memberi mereka imbalan yang mereka terima dari kerja keras mereka !</p>
                <div className="garis"></div>
                <br></br><br></br>
                <h4 className="m-5 juduls">Not just about health, You will practicipate something that have social impact.</h4>
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
