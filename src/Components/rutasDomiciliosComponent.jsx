import React, { useState } from 'react';
import '../css/RutasDomiciliosComponent.css'; // Importa el archivo CSS

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';

import imgmap from '../img/map-image.png'
import { Button } from 'primereact/button';


const data = {
  rutas: [
    { id: 0, nombre: 'Ruta A' },
    { id: 1, nombre: 'Ruta B' },
    { id: 2, nombre: 'Ruta C' },
    { id: 3, nombre: 'Ruta D' },
  ],
  domicilios: [
    {
      id: 1,
      rutaId: 1,
      ciudad: 'Jiquilpan',
      colonia: 'San Pedro',
      calle: 'Calle 123',
      nombreCliente: 'Ignacio Ismael',
      telefono: '123-456-7890',
      codigoPostal: '12345',
      estado: 'Michoacán',
      enlace : 'http://localhost:3000/map.html'    },
    {
      id: 2,
      rutaId: 2,
      ciudad: 'Sahuayo',
      colonia: 'San Martin',
      calle: 'Calle 456',
      nombreCliente: 'Rafael Galvez',
      telefono: '987-654-3210',
      codigoPostal: '54321',
      estado: 'Michoacán',
      enlace : 'http://localhost:3000/map.html'
    },
    {
      id: 3,
      rutaId: 1,
      ciudad: 'Jiquilpan',
      colonia: 'La Loma',
      calle: 'Calle 789',
      nombreCliente: 'María López',
      telefono: '555-555-5555',
      codigoPostal: '67890',
      estado: 'Michoacán',
      enlace : 'http://localhost:3000/map.html'
    },
    {
      id: 4,
      rutaId: 3,
      ciudad: 'Ciudad X',
      colonia: 'Colonia Y',
      calle: 'Calle Z',
      nombreCliente: 'Juan Pérez',
      telefono: '333-333-3333',
      codigoPostal: '44444',
      estado: 'Estado Z',
      enlace : 'http://localhost:3000/map.html'

    },
    {
      id: 5,
      rutaId: 4,
      ciudad: 'Ciudad X',
      colonia: 'Colonia Z',
      calle: 'Calle W',
      nombreCliente: 'Laura González',
      telefono: '777-777-7777',
      codigoPostal: '99999',
      estado: 'Estado Y',
      enlace : 'http://localhost:3000/map.html'
    },
  ],
};

function RutasDomiciliosComponent() {
  const [selectedRuta, setSelectedRuta] = useState(null);

  const handleRutaChange = (event) => {
    const rutaId = data.rutas[event.target.value];
    console.log(rutaId)
    setSelectedRuta(rutaId);
  };

  const filteredDomicilios = data.domicilios.filter(
    (domicilio) => domicilio.rutaId === selectedRuta
  );


  const header = (
    <img alt="Card" src={imgmap} />
  );

  const footer = (
    <>
    <div className='Button'>

        <Button label="Visualizar" icon="pi pi-map" onClick={() => {
          document.getElementById('etiqueta').click()
        }}/>
    </div>
    </>
);

  return (
    <div>
      <h1>Selecciona una Ruta</h1>
      <select onChange={handleRutaChange}>
        <option value="">Selecciona una ruta</option>
        {data.rutas.map((ruta) => (
          <option key={ruta.id} value={ruta.id}>
            {ruta.nombre}
          </option>
        ))}
      </select>
  

      {selectedRuta !== null && (
        // <div id="tabla-container">
        //   <h2>Domicilios para la Ruta Seleccionada</h2>
        //   <table>
        //     <thead>
        //       <tr>
        //         <th>ID</th>
        //         <th>Ciudad</th>
        //         <th>Colonia</th>
        //         <th>Calle</th>
        //         <th>Cliente</th>
        //         <th>Número de Teléfono</th>
        //         <th>Código Postal</th>
        //         <th>Estado</th>
        //         <th>Ruta Maps</th>
        //       </tr>
        //     </thead>
        //     <tbody>
        //       {filteredDomicilios.map((domicilio) => (
        //         <tr key={domicilio.id}>
        //           <td>{domicilio.id}</td>
        //           <td>{domicilio.ciudad}</td>
        //           <td>{domicilio.colonia}</td>
        //           <td>{domicilio.calle}</td>
        //           <td>{domicilio.nombreCliente}</td>
        //           <td>{domicilio.telefono}</td>
        //           <td>{domicilio.codigoPostal}</td>
        //           <td>{domicilio.estado}</td>
        //           <td><i className="pi pi-map-marker"></i>
        //            {' '} <a href={domicilio.enlace} target='_blank'>Ver en maps</a></td>
        //         </tr>
        //       ))}
        //     </tbody>
        //   </table>
        // </div>

        <div>
          <br /><br />
      <div className="card flex justify-content-center tag-container" >
          <Card subTitle={'Visualizar mapa de '+selectedRuta.nombre} footer={footer} header={header} className="md:w-10rem card-map">
            <a href="http://localhost:3000/map.html" target='_blank' id='etiqueta'></a>
          </Card>
        </div>
      <br /><br />
        
        <DataTable value={data.domicilios} tableStyle={{ minWidth: '50rem' }}>
            <Column field="ciudad" header="Ciudad"></Column>
            <Column field="colonia" header="Colonia"></Column>
            <Column field="calle" header="Calle"></Column>
            <Column field="nombreCliente" header="Cliente"></Column>
            <Column field="telefono" header="Telefono"></Column>
        </DataTable>
        </div>
      )}

    </div>


  );
}

export default RutasDomiciliosComponent;