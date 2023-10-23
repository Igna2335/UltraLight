import React from "react";

import "../css/conocenos.css";

import logoU from "../img/logoU.jpg"; // Importa la imagen

const conocenos = () => {
  return (
    <div className="conocenos-container">
      <h1>Conócenos</h1>
      <div className="image-container">
        <img src={logoU} alt="Descripción de la imagen" />
      </div>
      <div className="info-container">
        <h2 className="h2conocenos">Misión</h2>
        <p>
          En Agua Ultra Light, nuestra misión es brindar un servicio de
          excelencia a nuestros clientes, con la óptima pureza, sabor, higiene y
          calidad en la producción y distribución de agua para el consumo
          humano, el uso alimentario y médico.
        </p>
        <h2 className="h2conocenos">Visión</h2>
        <p>
          Nuestra visión es expandir la empresa en todo el estado de Guanajuato
          y Michoacán, así como posicionar nuestra marca como líder regional
          dentro del top 5 de marcas más reconocidas de la región, manteniendo
          nuestra filosofía de control de calidad, servicio y distribución a
          nuestros clientes.
        </p>
        <h2 className="h2conocenos">Valores</h2>
        <p>
          La constancia y la disciplina en la responsabilidad, ya que cumplimos
          con nuestra filosofía de servir integralmente a nuestros clientes. La
          confianza y la fidelidad, al ofrecer a nuestros clientes siempre una
          excelente calidad, amabilidad y fidelidad en nuestro servicio.
          Competitividad e innovación, que promueven una cultura empresarial que
          este visualizando proyectos que mejoren los procesos laborales, de
          producción y de nuevos servicios. Evaluación, que significa destinar
          tiempo para evaluar las fortalezas y debilidades de nuestra gestión
          administrativa, para ser consistentes y coherentes con nuestra misión
          y visión de empresa, de tal manera que aseguremos excelentes
          resultados en nuestra competitividad y calidad, en relación a nuestros
          competidores.
        </p>
      </div>
    </div>
  );
};

export default conocenos;
