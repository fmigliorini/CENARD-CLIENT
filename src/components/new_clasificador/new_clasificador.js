import React from "react";

const new_clasificador = () => {
  return (
    <>
  <br/>
<div class="jumbotron">
<div class="row">
<h2>Nuevo clasificador</h2>

<form>
  <div class="form-group row">
    <label for="Nombre" class="col-sm-2 col-form-label">Nombre</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="Nombre" placeholder="Nombre" />
    </div>
  </div>

  <div class="form-group row">
    <label for="Apellido" class="col-sm-2 col-form-label">Apellido</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" id="Apellido" placeholder="Apellido" />
    </div>
  </div>

  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0">Posibilidad de viajar</legend>
      <div class="col-sm-10">
        <div class="form-check">
          <input class="form-check-input" type="radio" name="Viaja" id="Viaja1" value="option1" checked />
          <label class="form-check-label" for="Viaja1">
            Si
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="Viaja" id="Viaja2" value="option2" />
          <label class="form-check-label" for="Viaja2">
            No
          </label>
        </div>
      </div>
    </div>
  </fieldset>

  <div class="form-group row">
    <div class="col-sm-2">Tipo de clasificador</div>
    <div class="col-sm-10">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="TipoClasificacion" />
        <label class="form-check-label" for="TipoClasificacion">
          Clasificador de Campo
        </label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="TipoClasificacion" />
        <label class="form-check-label" for="TipoClasificacion">
        Clasificador de Pista
        </label>
      </div>

      <div class="form-check">
        <input class="form-check-input" type="checkbox" id="TipoClasificacion" />
        <label class="form-check-label" for="TipoClasificacion">
        Clasificador de deportes acuaticos
        </label>
      </div>

    </div>
  </div>



  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Agregar</button>
    </div>
  </div>
</form>


</div>
</div>
</>
  );
};

export default new_clasificador;