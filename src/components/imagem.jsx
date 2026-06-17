export default function Imagem({src, alt}){
    return(
        <img
            className="imagem"
            src={ src } 
            alt={ alt } 
            style={{ width: "80%", height: "80%", marginBottom: "10px",marginTop: "10px", }}
        />
    )
}