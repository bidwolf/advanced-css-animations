import { useParams } from "react-router-dom";
import SectionPage from "./SectionPage";
function SectionRoot() {
const{ sectionId } = useParams<{sectionId:string}>()
    return sectionId?
    sectionId==='1'?
    (
        <section id={sectionId} className="container">
            <h1>{`Você está na sessão ${sectionId}`}</h1>
                    <SectionPage sectionId={sectionId}/>
        </section>
    ):
    (<div><h3>Essa sessão não existe!</h3></div>)
    :(<div><h3>Selecione uma sessão !</h3></div>)
}

export default SectionRoot;