import { useState } from "react";

interface ContainerProps {
  nome: string;
}

function Container({ nome }: ContainerProps) {
  const [texto, setTexto] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTexto(e.target.value);
  };

  return (
    <div>
      <h1>{nome}</h1>
      <p>Texto: {texto}</p>
      <input
        type="text"
        placeholder="Mostrar Texto"
        onChange={handleInputChange}
        value={texto}
      />
    </div>
  );
}

export default Container;