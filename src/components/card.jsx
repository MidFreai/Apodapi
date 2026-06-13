import Imagem from "./imagem.jsx"
import Info from "./info.jsx"
import Botao from "./botao.jsx"

export default function Card({src=null, nome="", descricao="", estilo={
    backgroundColor: "#fff", 
    borderRadius: "12px", 
    padding: "20px", 
     
    margin: "0 auto 20px auto", 
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    border: "2px solid #38BDF8"
}}){
    return(
        <div className="card" style={{ ...estilo }}>

        <Imagem src={ src } alt={ nome }/>
        <Info nome={ nome } descricao={ descricao }/>

      </div>
    )
}