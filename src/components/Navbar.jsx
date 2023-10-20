const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark px-5" data-bs-theme="dark">
        <div className="container p-0">
            <a className="navbar-brand text-white" href="#">Start Bootstrap</a>
            <button className="navbar-toggler border border-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#appNavbar" aria-controls="#appNavbar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="appNavbar">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary fw-light" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary fw-light" href="#">Service</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-secondary fw-light" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
</nav>

    )
}

export default Navbar
