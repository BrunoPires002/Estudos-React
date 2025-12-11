export default function Rodape(){
    return(
        <footer className="flex justify-end bg-zinc-700 px-6 py-3">
            <span className="text-zinc-400 text-sm">
                Todos os direitos reservador &copy; {new Date().getFullYear()}
            </span>
        </footer>
    )
}