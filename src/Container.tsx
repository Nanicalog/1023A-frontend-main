// Importa o useState do React (para criar estados no componente)
import { useState } from "react";
interface ContainerProps { // Define o tipo das props que o componente vai receber
  nome: string;  // Propriedade 'nome' do tipo string
}
function Container(props: ContainerProps) {
  const [texto, setTexto] = useState("") // Cria um estado chamado 'valor'

  function trataInput(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(event.currentTarget.value)
    setTexto(event.currentTarget.value)
  }
  return (
    <>
      <h1>{props.nome}</h1>
      <p>Texto:{texto}</p>
      <input type="text"
        placeholder="Mostrar Texto"
        onChange={trataInput} />
    </>
  )
}
export default Container

