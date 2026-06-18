export default function Imagem({src, alt}){
    return(
        <img
            className="imagem"
            src={ src } 
            alt={ alt } 
            style={{ width: "95%", height: "95%", marginBottom: "10px",marginTop: "10px", }}
        />
    )
}