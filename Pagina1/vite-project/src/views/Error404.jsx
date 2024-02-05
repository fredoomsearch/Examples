import { Link } from "react-router-dom"

export const Error404 = () => {
  return (
    <div className="text-center text-black position-absolute top-50 start-50 translate-middle">
        <h1>404 Page Not Found</h1>
        <Link to={"/"} className="btn btn-success">Ir a inicio</Link>
    </div>
  )
}