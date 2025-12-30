import "./Login.scss";

export default function Login() {
  return (
    <div className="login">
      <h2>Hello 👋 Welcome Back</h2>
      <input placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button className="btn-primary">Login</button>
    </div>
  );
}
