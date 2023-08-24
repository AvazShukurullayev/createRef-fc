import "./Footer.css"

const Footer = () => {
    return (
        <footer className="footer mt-5 py-3 bg-warning shadow">
            <div className="container">
                <h5 className="text-center">&copy; Copyright Reserved {new Date().getFullYear()}</h5>
            </div>
        </footer>
    )
}

export default Footer