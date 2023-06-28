import * as React from "react";

import { signInWithEmailAndPassword } from "firebase/auth";
import App from "../../App";
import { Logo1 } from "../../components/assets";
import { auth } from "../../Fire/Fire";

function Login() {
  const [inputType, setInputType] = React.useState("password");
  const [toggleText, setToggleText] = React.useState(
    <i class="bx bxs-show"></i>
  );

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = () => {
    if (email !== null && password !== null) {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          return <App />;
        })
        .catch((err) => alert(err));
    }
  };

  const handleToggle = () => {
    if (inputType === "password") {
      setInputType("text");
      setToggleText(<i class="bx bxs-hide"></i>);
    } else {
      setInputType("password");
      setToggleText(<i class="bx bxs-show"></i>);
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <div className=" w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100">
          <div className="flex items-center">
            <img src={Logo1} alt="Logo" className="w-[70px] h-[70px]" />
            <div className="block ml-[10px]">
              <h1 className="text-black">UNISI Kaliurang</h1>
              <p className="mt-[9px]">Ulil Albab Students Center</p>
            </div>
          </div>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Welcome back! Please enter you details.
          </p>
          <div className="mt-8">
            <div className="flex flex-col">
              <label className="text-lg font-medium text-black">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent text-black"
                placeholder="Enter your email"
              />
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-lg font-medium text-black">Password</label>
              <div className="flex justify-between items-center border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className=" text-black"
                  placeholder="Enter your email"
                  type={inputType}
                />
                <button onClick={handleToggle} className="text-black">
                  {toggleText}
                </button>
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button
                onClick={handleLogin}
                className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-black rounded-xl text-white font-bold text-lg"
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden relative w-1/2 h-full lg:flex items-center justify-center bg-gray-200">
        <div className="w-60 h-60 rounded-full bg-gradient-to-tr from-gray-500 to-black animate-spin" />
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
      </div>
    </div>
  );
}

export default Login;
