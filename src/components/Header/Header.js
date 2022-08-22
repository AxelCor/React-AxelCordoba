

const Header = () => {
		return (
			<header class="p-3 bg-dark text-white">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"> 
        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 navBar">
          <li><a href="index.html" class="nav-link px-2 fw-bold text-secondary">INICIO</a></li>
          <li><a href="./pages/indumentaria.html" class="nav-link px-2 text-white">Indumentaria</a></li>
          <li><a href="./pages/comprando.html" class="nav-link px-2 text-white">Guia de Compra</a></li>
          <li><a href="./pages/contacto.html" class="nav-link px-2 text-white">Contacto</a></li>
        </ul>
        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
          <input type="search" class="form-control form-control-dark" placeholder="Busqueda.." aria-label="Search"></input>
        </form>
        <div class="text-end">
          <a href="./pages/usuario.html"><button type="button" class="btn btn-outline-light me-2">Perfil</button></a>
          <a href="./pages/login.html"><button type="button" class="btn btn-warning">Login</button></a>
        </div>
      </div>
    </div>
  </header>
				
			);
};

export default Header;

