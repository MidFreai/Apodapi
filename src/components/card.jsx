import Imagem from "./imagem.jsx"
import Info from "./info.jsx"


export default function Card({src="", nome="", descricao="", estilo={
    backgroundColor: "#fff", 
    borderRadius: "12px", 
    padding: "15px", 
    margin: " 5px ", 
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "2px solid #38BDF8",
    
}}){
    return(
        <div className="card" style={{ ...estilo }}>

        <Imagem src={ src } alt={ nome }/>
        <Info nome={ nome } />

      </div>
    )
}