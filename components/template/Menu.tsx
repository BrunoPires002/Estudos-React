import {IconForms, IconHome2, IconNumber1, IconNumbers } from "@tabler/icons-react";
import MenuItem from "./MenuItem";

export default function Menu(){
    return(
        <aside className="bg-zinc-800 w-72 p-6">
            <nav className="flex flex-col gap-2">
                <MenuItem texto="Inicio" href="/" icone={<IconHome2 />}/>
                <MenuItem texto="Primeiro Componente" href="/primeiro" icone={<IconNumber1 />}/>
                <MenuItem texto="Componente com Estado" href="/contador" icone={<IconNumbers />}/>
                <MenuItem texto="Formulário" href="/formulario" icone={<IconForms />}/>        
            </nav>
        </aside>
    )
}