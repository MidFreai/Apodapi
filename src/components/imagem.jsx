export default function Imagem({src, alt}){
    return(
        <img
            className="imagem"
            src={ src } 
            alt={ alt } 
            style={{ width: "40vw", height: "100%", marginBottom: "15px" }}
        />
    )
}