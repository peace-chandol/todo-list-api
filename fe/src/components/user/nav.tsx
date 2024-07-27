import { Link } from "react-router-dom"

export default function LoginNav() {

    return (
        <>
            <nav>
                <div>Todo-List</div>
                <div>
                    <ul>
                        <li>
                            <Link to={`/login`}>Login</Link>
                        </li>
                        <li>
                            <Link to={`/register`}>Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}