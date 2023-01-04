import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { LoadingOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Context } from '../context';
import { useRouter } from 'next/router';

const forgotPassword = () => {
    // state
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState('');
    const [code, setCode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [loading, setLoading] = useState(false);

    // context
    const { state: { user } } = useContext(Context);
    // router
    const router = useRouter();

    // redirect
    useEffect(() => {
        if (user !== null) {
            router.push('/');
        }
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { data } = await axios.post('/api/forgot-password', { email });
            console.log(data);
            setSuccess(true);
            toast.success('Check your email for the secret code.');
        } catch (err) {
            setLoading(false);
            toast.error("Error Please try again.");
        }
    };

    return (
        <div>
            <h1 className="jumbotron text-center bg-primary square">Forgot Password</h1>
            <div className="container col-md-4 offset-md-4 pb-5">
                <form onSubmit={handleSubmit}>
                    <input className="form-control mb-2 p-2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email..." />
                    <br />
                    <button type="submit" className="btn btn-primary btn-block p-2" disabled={loading || !email}>{loading ? <LoadingOutlined spin /> : "Submit"}</button>
                </form>
            </div>
        </div>
    )

}

export default forgotPassword;