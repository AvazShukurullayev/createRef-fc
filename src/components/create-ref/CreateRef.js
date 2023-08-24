import "./CreateRef.css"

const CreateRef = () => {
    return (
        <form>
            <div className="my-3">
                <label htmlFor="firstName" className="form-label">First name:</label>
                <input type="text" className="form-control" placeholder="John" id="firstName" name="firstName"/>
            </div>
            <div className="my-3">
                <label htmlFor="lastName" className="form-label">Last name:</label>
                <input type="text" placeholder="Doe" name="lastName" id="lastName" className="form-control"/>
            </div>
            <div className="my-3">
                <label htmlFor="phoneNumber" className="form-label">Phone number:</label>
                <input type="number" name="phoneNumber" id="phoneNumber" className="form-control"
                       placeholder="+998991234567"/>
            </div>
            <div className="my-3 d-flex justify-content-end">
                <button className="btn btn-primary">Submit</button>
            </div>
        </form>
    )
}
export default CreateRef