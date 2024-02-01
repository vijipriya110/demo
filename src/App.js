import React from 'react';
import './App.css';

function App() {


  const data = [

    {
      model: "Free",
      month: "$0",
      user: "Single user",
      Storage: "50Gb storage",
      publicpro: "Unllimitted buplic Projects",
      access: "Community Access",
      pvtpro: "Unlimited Private Projects",
      support: "Dedicated to phone Support",
      domaim: "Free SubDomain",
      report: "Monthly Status Reports"

    },
    {
      model: "Plus",
      month: "$9",
      user: "Five user",
      Storage: "50Gb storage",
      publicpro: "Unllimitted buplic Projects",
      access: "Community Access",
      pvtpro: "Unlimited Private Projects",
      support: "Dedicated to phone Support",
      domaim: "Free SubDomain",
      report: "Monthly Status Reports"

    },
    {
      model: "Pro",
      month: "$49",
      user: "Unlimited user",
      Storage: "50Gb storage",
      publicpro: "Unllimitted buplic Projects",
      access: "Community Access",
      pvtpro: "Unlimited Private Projects",
      support: "Dedicated to phone Support",
      domaim: "Free SubDomain",
      report: "Monthly Status Reports"

    }

  ]


  return (
    <div className="App pricing py-5">
      <div className="container">


        {
          data.map((obj, index) => (

            <PriceCard
              key={index}
              model={obj.model}
              month={obj.month}
              user={obj.user}
              Storage={obj.Storage}
              publicpro={obj.publicpro}
              access={obj.access}
              pvtpro={obj.pvtpro}
              support={obj.support}
              domaim={obj.domaim}
              report={obj.report}

            />
          ))
        }
      </div>
    </div>
  );
}

export default App;


function PriceCard({ model, month, user, Storage, publicpro, access, pvtpro, support, domaim, report }) {

  return (
    <div className='price-card'>
      <div className="row">
        <div className="card mb-5">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{model}</h5>
            <h6 className="card-price text-center">{month}<span className="period">/month</span></h6>
            <hr></hr>
            <ul className="">
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{user}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{Storage}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{publicpro}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{access}</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{pvtpro}</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{support}</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{domaim}</li>
              <li className="text-muted"><span className="fa-li"><i className="fas fa-times"></i></span>{report}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}




