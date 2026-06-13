export default function Imagem({src, alt}){
    return(
        <img
            className="imagem"
            src={ src } 
            alt={ alt } 
            style={{ width: "90%", height: "90%", marginBottom: "15px" }}
        />
    )
}