import React from "react";

const Parameters = () => {
  const [altura, setAltura] = React.useState(1.8);
  const [medida, setMedida] = React.useState(1.17);
  const [base, setBase] = React.useState(100000);

  const calcularValor = () => {
    return (medida * altura + base).toFixed(2);
  };
  return (
    <div className="p-4 border rounded-xl shadow-lg max-w-sm mx-auto">
      <h2 className="text-xl font-bold mb-4">Configuracion Calculadora de Vidrio</h2>
      <label className="block mb-2">
        Altura:
        <input
          type="number"
          value={altura}
          onChange={(e) => setAltura(parseFloat(e.target.value))}
          className="ml-2 p-2 border rounded w-full"
        />
      </label>
      <label className="block mb-2">
        Medida:
        <input
          type="number"
          value={medida}
          onChange={(e) => setMedida(parseFloat(e.target.value))}
          className="ml-2 p-2 border rounded w-full"
        />
      </label>
      <label className="block mb-2">
        Base:
        <input
          type="number"
          value={base}
          onChange={(e) => setBase(parseFloat(e.target.value))}
          className="ml-2 p-2 border rounded w-full"
        />
      </label>
    </div>
  );
}

export default Parameters;