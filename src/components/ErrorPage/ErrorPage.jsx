import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Oopss!!!</h1>
            <Link to="/">      
            <button className="btn btn-primary">Back Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;