import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../../../Providers/AuthProvider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFillEyeFill } from "react-icons/bs";
import { RiEyeCloseFill } from "react-icons/ri";
import { AiFillGoogleCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import Swal from "sweetalert2";

const Login = () => {
  let [eye, setEye] = useState(false);
  const { signIn } = useContext(AuthContex);
  const { googleLOgin } = useContext(AuthContex);
  const { facebookLOgin } = useContext(AuthContex);

  const location = useLocation();
  const Navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  let handleLogin = (e) => {
    e.preventDefault();
    let form = new FormData(e.currentTarget);
    let email = form.get("email");
    let password = form.get("password");
    signIn(email, password)
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login successfully!",
          showConfirmButton: false,
          timer: 1500
        });
        // setTimeout(() => {
        //   Navigate(location?.state ? location.state : "/");
        // }, 900);
          Navigate(from,{replace:true});
      })
      .catch((error) => {
        toast("invalid email or password");
      });
  };

  const handleGoogle = () => {
    
    googleLOgin()
    
    
    
    setTimeout(() => {
      Navigate('/');
    }, 7000);
    // if(user){
      // <Navigate to='/' state={location.pathname} replace='true' />

    // }
  };
  const handleFacebook = () => {
    facebookLOgin();
    Navigate(location?.state ? location.state : "/");
  };
  return (
    <>
      <div className="container mx-auto bg-gradient-to-r from-yellow-400 to-cyan-500">
        <div className="lg:w-1/2 mx-auto bg-white px-10 border-2 rounded-xl py-5">
          <h2 className="text-3xl font-Poppins font-bold">Log in</h2>
          <p className="mb-4 font-playfair">
            Continue to{" "}
            <span className="font-Lora font-semibold text-red-500">
              Visit BD Land
            </span>
          </p>
          <form onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={eye ? "text" : "password"}
                placeholder="password"
                className="input input-bordered"
                required
                name="password"
              />
              <div onClick={() => setEye(!eye)}>
                {eye ? <BsFillEyeFill /> : <RiEyeCloseFill />}
              </div>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary font-Lora text-white">Login</button>
              <div className="text-center mt-4">
                <p>
                  Do not have an account?{" "}
                  <Link to="/register" className="font-bold">
                    Register
                  </Link>
                </p>
                <ToastContainer></ToastContainer>
              </div>
            </div>
          </form>

          <div className="flex flex-col text-center mt-6 gap-y-3">
            <p className="font-worksans font-bold">Continue with</p>

            <div className="flex justify-center items-center gap-x-3">
              <button
                onClick={handleGoogle}
                className="flex justify-center items-center w-10 h-10 font-bold font-worksans rounded-full bg-red-700"
              >
                <AiFillGoogleCircle className="w-10 h-10 bg-white rounded-full text-red-500" />
              </button>
              <button
                onClick={handleFacebook}
                className="flex justify-center items-center w-10 h-10 font-bold font-worksans rounded-full bg-red-700"
              >
                <FaFacebook className="w-10 h-10 bg-white rounded-full text-blue-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
