import { useState } from "react";

const Auth = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onChange = (event) => {
		console.log(event.target.name);
	};

	const onSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<div>
			<form onSubmit={onSubmit}>
				<input name="email" type="email" placeholder="Email" required value={email} onChange={onChange}/>
				<input name="password" type="password" placeholder="Password" required />
				<input type="submit" placeholder="submit" required value={password} onChange={onChange} />
			</form>
			<div>
		<button>Continue with Goole</button>
		<button>Continue with Github</button>
		</div>
		</div>
	)
}

export default Auth;