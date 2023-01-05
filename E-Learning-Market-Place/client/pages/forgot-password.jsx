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
    const [success, setSuccess] = useState(false);
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
    }, [user]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(false);
            const { data } = await axios.post('/api/forgot-password', { email });
            console.log(data);
            setSuccess(true);
            toast.success('Check your email for the secret code.');
        } catch (err) {
            setLoading(false);
            toast.error(err.response.data);
        }
    };

    const handleResetPassword = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { data } = await axios.post('/api/reset-password', {
                email,
                code,
                newPassword
            })
            setEmail('');
            setCode('');
            setNewPassword('');
            setLoading(false);
            toast.success('Reset Password Success.');
        } catch (err) {
            setLoading(false);
            console.log(err);
            toast.error(err.response.data);
        }
    }

    return (
        <div>
            <h1 className="jumbotron text-center bg-primary square">Forgot Password</h1>
            <div className="container col-md-4 offset-md-4 pb-5">
                <form onSubmit={success ? handleResetPassword : handleSubmit}>
                    <input className="form-control p-2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email ..." />
                    <br />

                    {success && (
                        <>
                            <input className="form-control mb-4 p-2" type="text" value={code} onChange={(e) => setCode(e.target.value)} placeholder="Enter secret code ..."></input>
                            <input className="form-control mb-4 p-2" type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} placeholder="Enter new password ..."></input>
                        </>)}

                    <button type="submit" className="btn btn-primary btn-block p-2" disabled={loading || !email}>{loading ? <LoadingOutlined spin /> : "Submit"}</button>
                </form>
            </div >
        </div >
    )

}

export default forgotPassword;