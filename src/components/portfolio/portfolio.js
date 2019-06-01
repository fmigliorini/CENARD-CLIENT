import React from "react";

const Portfolio = () => {
  return (
    <>
  <br/>
<div class="jumbotron">
<div class="row">
<h2>Portfolio</h2>

<form class="form-horizontal">
<br/><br/>

<div class="container">
  <div class="row justify-content-md-center">
      <div class="col-10">
  <div class="form-group">
    <div class="form-group row">
    <label for="Nombre" class="col-sm-4 col-form-label">Nombre</label>
    <div class="col-sm-8">
      <input type="text" class="form-control-plaintext" id="nombre" placeholder="Juan" required/>
    </div>
  </div>

  <div class="form-group row">
    <label for="Apellido" class="col-sm-4 col-form-label">Apellido</label>
    <div class="col-sm-8">
      <input type="text" class="form-control-plaintext" id="apellido" placeholder="Menendez" required/>
    </div>
  </div>

  <div class="form-group row">
    <label for="DNI" class="col-sm-4 col-form-label">DNI</label>
     <div class="col-sm-8">
      <input type="text" class="form-control-plaintext" id="dni" placeholder="38594939" required/>
    </div>
  </div>

  <div class="form-group row">
    <label for="Nacimiento" class="col-sm-4 col-form-label">Nacimiento</label>
     <div class="col-sm-8">
     <input type="text" class="form-control-plaintext" id="nacimiento" placeholder="14/06/1998" required/>
    </div>
  </div>

  <div class="form-group row">
    <label for="Nacionalidad" class="col-sm-4 col-form-label">Nacionalidad</label>
     <div class="col-sm-8">
      <input type="text" class="form-control-plaintext" id="nacionalidad" placeholder="Argentina" required/>
    </div>
  </div>

  <div class="form-group row">
    <label for="Provincia" class="col-sm-4 col-form-label">Provincia</label>
     <div class="col-sm-8">
      <input type="text" class="form-control-plaintext" id="provincia" placeholder="CHA - Chaco" required/>
    </div>
  </div>

  <div class="form-group row">
    <label for="clasificacionF" class="col-sm-4 col-form-label">Clasificacion de campo</label>
     <div class="col-sm-8">
      <input type="text" class="form-control-plaintext" id="clasificacionF" placeholder="F34" required/>
    </div>
  </div>

  <div class="form-group row">
    <label for="vigenciaF" class="col-sm-4 col-form-label">Vigencia en campo</label>
     <div class="col-sm-8">
      <input type="text" class="form-control-plaintext" id="vigenciaF" placeholder="24/05/2020" required/>
    </div>
  </div>


  <div class="form-group row">
    <label for="clasificacionT" class="col-sm-4 col-form-label">Clasificacion de pista</label>
     <div class="col-sm-8">
      <input type="text" class="form-control-plaintext" color="red" id="clasificacionT" placeholder="T32" required/>
    </div>
  </div>

  <div class="form-group row">
    <label for="vigenciaF" class="col-sm-4 col-form-label">Vigencia en pista</label>
     <div class="col-sm-8">
      <input type="text" class="form-control-plaintext" color="red" id="vigenciaT" placeholder="24/05/2020" required/>
    </div>
  </div>

  <div class="form-group row">
    <label for="clasificacionT" class="col-sm-4 col-form-label">Clasificacion acuatica</label>
     <div class="col-sm-8">
      <input type="text" class="form-control-plaintext" id="clasificacionS" placeholder="S34" required/>
    </div>
  </div>

  <div class="form-group row">
    <label for="vigenciaS" class="col-sm-4 col-form-label">Vigencia en acuatica</label>
     <div class="col-sm-8">
      <input type="text" class="form-control-plaintext" id="vigenciaS" placeholder="22/02/2020" required/>
    </div>
  </div>



  </div>   
  </div>
  
  <div class="col">
  <div class="form-group row">
  <img src="...\public\img\foto-carnet-test.jpg" alt="public\img\foto-carnet-test.jpg" class="img-thumbnail"/>
  </div>
  </div>
  </div>
</div>
</form>
</div>
</div>
</>
  );
};

export default Portfolio;

