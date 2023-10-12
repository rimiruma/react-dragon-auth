import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";


const Login = () => {

    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
    const from = new FormData(e.currentTarget);
    console.log(from.get('email'));
    }

    

    return (
        <div>
            <Navbar></Navbar>
            <div className="w-96">
            <n2 className="text-3xl my-10 text-center">Please Login</n2>
            <from onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                </div>
            </from>
            <p className="mt-4">Do not have an account <Link to="/register" className="text-red-800 font-bold">Register</Link></p>
            </div>
        </div>
    );
};

export default Login;