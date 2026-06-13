export default function Botao({ msg, click=()=>{}, estilo={
  backgroundColor: "#38BDF8",
  color: "white",
  border: "none",
  padding: "8px 16px",
  margin: "0 auto 5px auto",
  borderRadius: "6px",
  cursor: "pointer"
} }){
  return(
    <button className="botao" onClick={ () => click() } style={ {...estilo} }>
      { msg }
    </button>
  )
}