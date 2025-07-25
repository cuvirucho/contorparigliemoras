
import React, { useState } from "react";
import { doc, getDoc } from "firebase/firestore";

import './App.css'
import { db } from "./firbse";

function App() {
 const [idUsuario, setIdUsuario] = useState("");     // Para ingresar el ID
  const [usuario, setUsuario] = useState(null);       // Estado con los datos
  const [cargando, setCargando] = useState(false);    // Cargando...
  const [error, setError] = useState(null);           // Errores

 

const fotospormod = [
  'https://res.cloudinary.com/db8e98ggo/image/upload/v1753396321/4_zkyxzv.png',
  'https://res.cloudinary.com/db8e98ggo/image/upload/v1753396321/2_wulqrl.png',
  'https://res.cloudinary.com/db8e98ggo/image/upload/v1753396321/5_rr09j9.png',
  'https://res.cloudinary.com/db8e98ggo/image/upload/v1753396321/1_jhxl5l.png',
  'https://res.cloudinary.com/db8e98ggo/image/upload/v1753396321/3_v7ehbr.png',
 
]
 const buscarPorID = async () => {
    setCargando(true);
    setError(null);
    setUsuario(null);

 
 
 if (idUsuario) {
  
    try {
      const ref = doc(db, "coidgodeinfu", idUsuario);     // Reemplaza "usuarios" con el nombre real de tu colección
      const snapshot = await getDoc(ref);

      if (snapshot.exists()) {
        setUsuario(snapshot.data());    
              // Guardar en el estado
      } else {
        setError("No se encontró el usuario con ese ID");
      }
    } catch (e) {
      console.error("Error al buscar usuario:", e);
      setError("Error al buscar el usuario");
    }

    setCargando(false);
 }else{
   setError("Ingresa un codigo valido");
    setCargando(false);
 }
 
 
 
 
  };


  const convertirFecha = (timestamp) => {
    if (!timestamp || !timestamp.toDate) return "Sin fecha";
    return timestamp.toDate().toLocaleDateString(); 
  };



  console.log(usuario);
  









/*solo esta semna  codigo usad*/
const obtenerRangoSemanaActual = () => {
  const ahora = new Date();

  // Establece el día de inicio (lunes)
  const primerDia = new Date(ahora);
  primerDia.setDate(ahora.getDate() - ((ahora.getDay() + 6) % 7));
  primerDia.setHours(0, 0, 0, 0);

  // Establece el día final (domingo)
  const ultimoDia = new Date(primerDia);
  ultimoDia.setDate(primerDia.getDate() + 6);
  ultimoDia.setHours(23, 59, 59, 999);

  return { inicio: primerDia, fin: ultimoDia };
};




/*revsipagopendeois*/

  return (
   <>
   

   
   <section className="contepinsipalusuaro" >






      {usuario? (
        <>




    <article className="heder" >
<img  className="logo2" src="https://res.cloudinary.com/db8e98ggo/image/upload/v1753376617/Dise%C3%B1o_sin_t%C3%ADtulo_1_qt0v2q.png" alt="" />
</article>

      {  /*dtode ususo */}
        <div className="CONTEdetllesprinciplaes">




          <h3 className="tulobinevb"  >Hola {usuario.nombre} </h3>
      <p  className="textudga"   >Tus gancias semanales </p>
     
     <div className="gantec">

    <p className="gantex"> ${usuario.Gancias?.toFixed(2)} </p>

      </div>

        </div>







{
 Object.keys(usuario.Pagosrelisdos).length === 0 && Object.keys(usuario.codigosusados ).length === 0 ?
  
<p className="tilopaogs3"  > 
 Tu código aún no ha sido utilizado
</p>
  
  :
  
  <section>
  
{/*pagos relisados */}

<h3 className="tilopaogs">Pagos realizados</h3>

{(() => {
  const pagosRealizados = Object.entries(usuario.Pagosrelisdos || {})
    .filter(([_, pago]) => pago.estado === "Realizado");

  return pagosRealizados.length > 0 ? (
    <div className="contepaggorealisdo">
      {pagosRealizados.map(([key, pago]) => (
        <div key={key} className="itmepagocar">
          <h4>Codigo: {key}</h4>
          <p><strong>Fecha de pago:</strong> {convertirFecha(pago.fchadefin)}</p>
          <p><strong>Estado:</strong> {pago.estado}</p>
          <p><strong>Cantidad:</strong> {pago.cantidades}</p>
          <a
            href={pago.comprobanteURL}
            download={`comprobante_${key}.jpg`}
            target="_blank"
            rel="noopener noreferrer"
            className="botondescarga"
          >
            Ver comprobante
          </a>
        </div>
      ))}
    </div>
  ) : (
    <p className="texprimpaog">Tu primer pago será el Domingo</p>
  );
})()}

  













{/*Pesonas que usaron tu coisog*/ }



    
<h4 className="tilopaogs2">Códigos Usados</h4>

{(() => {
  const { inicio, fin } = obtenerRangoSemanaActual();
  const codigosUsadosEstaSemana = Object.entries(usuario.codigosusados || {})
    .filter(([_, us]) => {
      const fechaUso = us.fechdeuso?.toDate?.(); // Asegura que es un objeto Date
      return fechaUso >= inicio && fechaUso <= fin;
    });

  return codigosUsadosEstaSemana.length > 0 ? (
    <div className="cotecodifusados">
      {codigosUsadosEstaSemana.map(([key, us]) => (
        <div key={key} className="carcodugo">
          <p><strong>Nombre del usuario:</strong> {us.Nombre}</p>
          <p><strong>Ganancia recibida:</strong> $ {us.porsentajeparaelinflu?.toFixed(2)}</p>
        </div>
      ))}
    </div>
  ) : (
    <p className="texprimpaog">No hay códigos usados hasta ahora</p>
  );
})()}










  
  </section>
}

  
  <div className="carrusel-container">
     <h2 className='tulotarjetas'   >Promociones que tus usuarios reciven</h2>
      <div
        className="carrusel-slider"
      >
        {fotospormod.map((foto, i) => (
          <img key={i} src={foto} alt={`foto-${i}`} className="carrusel-img" />
        ))}
      </div>
    </div>

<div className="foo"   >
  
</div>





        </>


   


)
  



   
    :
    
    <section className="nohyususpcontepriopñl"   >
    
    <article className="heder" >
<img  className="logo" src="https://res.cloudinary.com/db8e98ggo/image/upload/v1731124196/Que_esperas_._dqfhgg.png" alt="" />
</article>

<div className="coocmofuna">
<h2    >Como funciona</h2>
<p className="comofr"  >1. Ingresa con tu codigo</p>
<p className="comofr"   >2. Puedes revisar tus gancias</p>
<p className="comofr" >3. Lleva el control de tus pagos relisaldos</p>
<p className="comofr" >4. Mira quien uso tu cupon</p>
</div>




  <div className="conteigersarcful">

  <h2 className="tuloingr"  >Ingresa con tu codigo</h2>

      <input
        type="text"
        placeholder="Ingresa tu codigo"
        className="imputcodigo"
        value={idUsuario}
        onChange={(e) => setIdUsuario(e.target.value)}
      />
      <button className="btngo"   onClick={buscarPorID}>Entrar</button>

      {cargando && <p>Cargando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

  </div>



    </section>
    }
   
   
   
   
    </section>
      
      
      
      
      
      
       </>
  );
}

export default App
 