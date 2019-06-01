import React from "react";

const Register = () => {
  return (
	<>
  <br/>
<div class="jumbotron">
<div class="row justify-content-center">
<h2>Nuevo Deportista</h2>

<form class="form-horizontal">
  <div class="row">

  <div class="form-group col-md-12">
  <br/>
    <div class="form-group row">
    <label for="Nombre" class="col-sm-3 col-form-label">Nombre</label>
    <div class="col-sm-9">
      <input type="text" class="form-control" id="nombre" placeholder="Nombre" required/>
    </div>
  </div>

  <div class="form-group row">
    <label for="Apellido" class="col-sm-3 col-form-label">Apellido</label>
    <div class="col-sm-9">
      <input type="text" class="form-control" id="apellido" placeholder="Apellido" required/>
    </div>
  </div>

  <div class="form-group row">
    <label for="DNI" class="col-sm-3 col-form-label">DNI</label>
     <div class="col-sm-9">
      <input type="text" class="form-control" id="dni" placeholder="DNI" required/>
    </div>
  </div>

  <div class="form-group row">
    <label for="Nacimiento" class="col-sm-3 col-form-label">Nacimiento</label>
     <div class="col-sm-5">
      <input type="date" class="form-control" id="fecha_nacimiento" required/>
    </div>
  </div>

  <div class="form-group row">
    <label for="Nacionalidad" class="col-sm-3 col-form-label">Nacionalidad</label>
     <div class="col-sm-9">
      <input type="text" class="form-control" id="nacionalidad" placeholder="Nacionalidad" required/>
    </div>
  </div>

  <div class="form-group row">
    <label for="Provincia" class="col-sm-3 col-form-label">Provincia</label>
    <div class="col-sm-9">
      <select class="form-control col-sm-3" id="provincia">
      <option>BSAS - Buenos Aires</option>
      <option>CAT - Catamarca</option>
      <option>CHA - Chaco</option>
      <option>CHU - Chubut</option>
      <option>CBA - Cordoba</option>
      <option>CRR - Corrientes</option>
      <option>ERS - Entre Rios</option>
      <option>FOR - Formosa</option>
      <option>JUJ - Jujuy</option>
      <option>LPA - La Pampa</option>
      <option>LRJ - La Rioja</option>
      <option>MZA - Mendonza</option>
      <option>MIS - Misiones</option>
      <option>NQN - Neuquen</option>
      <option>RNG - Rio Negro</option>
      <option>SAL - Salta</option>
      <option>SJN - San Juan</option>
      <option>STC - Santa Cruz</option>
      <option>SFE - Santa Fe</option>
      <option>SGO - Santiago del Estero</option>
      <option>TFU - Tierra del Fuego</option>
      <option>TUC - Tucuman</option>
      </select>
    </div>
  </div><br/>

  <div class="form-group row">
    <label for="FotoCarnet" class="col-sm-4 col-form-label">Foto carnet del deportista</label>
    <input type="file" id="FotoCarnet" class="btn btn-primary col-sm-8" required/>
    <p class="text-muted">Foto relacion 1:1 de frente</p>
  </div>

<div class="form-group row">
    <label for="CertificadoIPC" class="col-sm-4 col-form-label">Certificado Internacional</label>
    <input type="file" id="CertificadoIPC" class="btn btn-primary col-sm-8"/>
    <p class="text-muted">Solo en caso de contar con clasificacion internacional IPC</p>
  </div>


 <br/>
  <div class="form-group row">
    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary btn-lg">Agregar deportista</button>
    </div>
  </div>

  </div>   
  </div>
</form>
</div>
</div>
</>
  );
}

export default Register;
