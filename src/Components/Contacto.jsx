import './ContactoStyles.scss'



function Contacto(){
    return(
        <>
  <div className="background">
  <div className="container">
    <div className="screen">
      <div className="screen-header">
        <div className="screen-header-left">
  
        </div>
        <div className="screen-header-right">
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
          <div className="screen-header-ellipsis"></div>
        </div>
      </div>
      <div className="screen-body">
        <div className="screen-body-item left">
          <div className="app-title">
            <span>CONTACTANOS!</span>
            <span></span>
          </div>
          <div className="app-contact">CONTACT INFO : +58 (424) 266-3931</div>
        </div>
        <div className="screen-body-item">
          <div className="app-form">
            <div className="app-form-group">
              <input className="app-form-control" placeholder="NAME"/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="EMAIL"/>
            </div>
            <div className="app-form-group">
              <input className="app-form-control" placeholder="CONTACT NO"/>
            </div>
            <div className="app-form-group message">
              <input className="app-form-control" placeholder="MESSAGE"/>
            </div>
            <div className="app-form-group buttons">
              <button className="app-form-button">Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="credits">
      
    </div>
  </div>
</div>

        </>
    )
}

export default Contacto;
