import Contador from "@/components/contador";
import Pagina from "@/components/template/Pagina"

export default function PaginaContador() {
    return (
        <div>
            <Pagina>
                <Contador valorInicial={100}/>
            </Pagina>
        </div>
    )
}