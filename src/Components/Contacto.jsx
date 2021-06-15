import './ContactoStyles.scss'



function Contacto(){
    return(
        <>
  <div class="background">
  <div class="container">
    <div class="screen">
      <div class="screen-header">
        <div class="screen-header-left">
  
        </div>
        <div class="screen-header-right">
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
          <div class="screen-header-ellipsis"></div>
        </div>
      </div>
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>CONTACTANOS!</span>
            <span></span>
          </div>
          <div class="app-contact">CONTACT INFO : +58 (424) 266-3931</div>
        </div>
        <div class="screen-body-item">
          <div class="app-form">
            <div class="app-form-group">
              <input class="app-form-control" placeholder="NAME"/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="EMAIL"/>
            </div>
            <div class="app-form-group">
              <input class="app-form-control" placeholder="CONTACT NO"/>
            </div>
            <div class="app-form-group message">
              <input class="app-form-control" placeholder="MESSAGE"/>
            </div>
            <div class="app-form-group buttons">
              <button class="app-form-button">Enviar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="credits">
      
    </div>
  </div>
</div>

        </>
    )
}

export default Contacto;
