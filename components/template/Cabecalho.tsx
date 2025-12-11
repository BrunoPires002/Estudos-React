import { IconBrandReact } from "@tabler/icons-react";

export default function Cabecalho(){
    return(
        <header className="bg-zinc-700 px-6 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
                <IconBrandReact size={36} stroke={1} className="text-blue-500"/>
                <span className="font-black">Estudos React</span>
            </div>
            <div className="flex justify-center items-center w-12 h-12 bg-purple-500 rounded-full">US</div>
        </header>
    )
}