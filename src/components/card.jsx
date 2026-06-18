import Imagem from "./imagem.jsx"
import Info from "./info.jsx"


export default function Card({src="", nome="", key="", descricao="", estilo={
    backgroundColor: "#fff", 
    borderRadius: "12px",
    margin: " 5px ", 
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "2px solid #5f5f5fa2",
    width:"440px ",
}}){
    return(
        <div className="card" style={{ ...estilo }}>

        <Imagem src={ src } alt={ nome }/>
        <Info nome={ nome } descricao={ descricao } />

      </div>
    )
}