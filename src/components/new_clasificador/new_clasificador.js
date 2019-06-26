import React from "react";

const new_clasificador = () => {
  return (
    <>
  <br/>
<div className="jumbotron col-6 offset-3">
<div className="row">
    <h2>Nuevo clasificador</h2>

<form className="col-12">
<br/>

  <div className="form-group row">
    <label htmlFor="Nombre" className="col-sm-4 col-form-label">Nombre</label>
    <div className="col-sm-8">
      <input type="text" className="form-control" id="Nombre" placeholder="Nombre" />
    </div>
  </div>

  <div className="form-group row">
    <label htmlFor="Apellido" className="col-sm-4 col-form-label">Apellido</label>
    <div className="col-sm-8">
      <input type="text" className="form-control" id="Apellido" placeholder="Apellido" />
    </div>
  </div>

  <div className="form-group row">
    <label htmlFor="Email" className="col-sm-4 col-form-label">Email</label>
    <div className="col-sm-8">
      <input type="email" className="form-control" id="Email" placeholder="Email" />
    </div>
  </div>

  <div className="form-group row">
    <label htmlFor="FechaNac" className="col-sm-4 col-form-label">Fecha de Nacimiento</label>
    <div className="col-sm-4">
      <input type="date" className="form-control" id="FechaNac" />
    </div>
  </div>

  <fieldset className="form-group">
    <div className="row">
      <legend className="col-form-label col-sm-4 pt-0">Posibilidad de viajar</legend>
      <div className="col-sm-8">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="Viaja" id="Viaja1" value="si"  />
          <label className="form-check-label" htmlFor="Viaja1">
            Si
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="Viaja" id="Viaja2" value="no" />
          <label className="form-check-label" htmlFor="Viaja2">
            No
          </label>
        </div>
      </div>
    </div>
  </fieldset>

  <fieldset className="form-group">
    <div className="row">
      <legend className="col-form-label col-sm-4 pt-0">Licencia Internacional</legend>
      <div className="col-sm-8">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="Licencia" id="Licencia" value="si"  />
          <label className="form-check-label" htmlFor="Licencia1">
            Si
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="Licencia" id="Licencia2" value="no" />
          <label className="form-check-label" htmlFor="Licencia2">
            No
          </label>
        </div>
      </div>
    </div>
  </fieldset>

  <div className="form-group row">
    <div className="col-sm-4 col-form-label">Tipo de clasificador</div>
    <div className="col-sm-8">
      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="TipoClasificacion" />
        <label className="form-check-label" htmlFor="TipoClasificacion">
          Clasificador de Campo
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="TipoClasificacion" />
        <label className="form-check-label" htmlFor="TipoClasificacion">
        Clasificador de Pista
        </label>
      </div>

      <div className="form-check">
        <input className="form-check-input" type="checkbox" id="TipoClasificacion" />
        <label className="form-check-label" htmlFor="TipoClasificacion">
        Clasificador de deportes acuaticos
        </label>
      </div>

    </div>
  </div>



  <div className="form-group row">
    <div className="col-sm-8">
      <button type="submit" className="btn btn-primary">Agregar</button>
    </div>
  </div>


</form>


</div>
</div>
</>
  );
};

export default new_clasificador;