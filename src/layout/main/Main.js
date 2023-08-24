import "./Main.css"
import CreateRef from "../../components/create-ref/CreateRef";

const Main = () => {
    return (
        <main className="main my-5">
            <section className="create-ref-section">
                <div className="container">
                    <div className="row">
                        <div className="col-4 mx-auto">
                            <div className="card py-4 shadow px-3">
                                <CreateRef/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Main