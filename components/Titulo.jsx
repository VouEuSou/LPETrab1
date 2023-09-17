import Link from "next/link";

export default function Titulo() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <div className="container-fluid">
        <Link href="/">
        <h2  style={{fontFamily: "fantasy", color: "white"}} className="float-end mt-2 ms-4">Avenida Play 
            <svg xmlns="http://www.w3.org/2000/svg" width="42" height="45" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
            </svg>
        </h2>
        </Link>
        <ul className="navbar-nav d-flex align-items-center">
            <li className="nav-item">
                <Link className="nav-link" href="/listar">Lista de álbuns</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/cadastro">Cadastro</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" href="/estatisticas">Estatísticas</Link>
            </li>
        </ul>
    </div>
</nav>
  )
}