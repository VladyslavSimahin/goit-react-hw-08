import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm/LoginForm";

export default function Login() {
  return (
    <div>
      <p>Please log in</p>
      <LoginForm />

      <p>
        or <Link to="/register">register</Link>
      </p>
    </div>
  );
}
