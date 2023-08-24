import "./Header.css"

const Header = () => {
    return (
        <header className="header py-3 mb-5 bg-warning">
            <div className="container">
                <nav className="nav d-flex align-items-center justify-content-between">
                    <a href="#!" className="nav__logo text-decoration-none fs-3">Create ref</a>
                    <ul className="nav__list d-flex align-items-center gap-4">
                        <li className="nav__item"><a href="#!" className="nav__link text-decoration-none fs-6">About</a></li>
                        <li className="nav__item"><a href="#!" className="nav__link text-decoration-none fs-6">Contact</a></li>
                        <li className="nav__item"><a href="#!" className="nav__link text-decoration-none fs-6">Support &amp; Help</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header