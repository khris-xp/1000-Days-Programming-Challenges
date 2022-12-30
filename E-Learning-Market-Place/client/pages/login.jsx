import { useState } from "react";
import axios from "axios";
import { toast } from 'react-toastify';
import { LoadingOutlined } from '@ant-design/icons';
import Link from 'next/link';

const Login = () => {
    const [email, setEmail] = useState("user01@gmail.com");
    const [password, setPassword] = useState("1234567");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { data } = await axios.post(`/api/login`, {
                email,
                password,
            });
            toast.success('Login Success');
            setLoading(false);
            console.log(data);
        } catch (err) {
            toast.error(err.response.data);
            setLoading(false);
        }
    };

    return (
        <>
            <h1 className="jumbotron text-center bg-primary square">Register</h1>

            <div className="container col-md-4 offset-md-4 pb-5">
                <form onSubmit={handleSubmit}>

                    <input
                        type="email"
                        className="form-control mb-4 p-4"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        required
                    />

                    <input
                        type="password"
                        className="form-control mb-4 p-4"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        required
                    />

                    <button type="submit" className="btn btn-block btn-primary" disabled={!email || !password}>
                        {loading ? <LoadingOutlined spin /> : "Submit"}
                    </button>
                </form>
                <p className="text-center p-4">
                    Not yet Registred ? { }
                    <Link href="/register">
                        Register
                    </Link>
                </p>
            </div>
        </>
    );
};

export default Login;