import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loading from "./components/Loading/loading";
import Navbar from "./components/Navbar";
import { auth } from "./Fire/Fire";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Settings from "./pages/settings";

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [loginTime, setLoginTime] = useState(null);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async (authenticatedUser) => {
        if (authenticatedUser) {
          setUser(authenticatedUser.email);
          setLoginTime(Date.now());
        } else {
          setUser(null);
        }
        setLoading(false);
      }
    );

    return unsubscribeAuth;
  }, []);

  useEffect(() => {
    if (user && loginTime) {
      const maxSessionTime = 12 * 60 * 60 * 1000;
      const elapsedTime = Date.now() - loginTime;
      if (elapsedTime >= maxSessionTime) {
        signOut(auth)
          .then(() => {
            setUser(null);
            return <Login />;
          })
          .catch((err) => console.log(err));
      }
    }
  }, [user, loginTime]);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      {user ? (
        <BrowserRouter>
          <div class="fixed top-0 left-0 right-0 z-20 py-[12px] bg-black text-center" />
          <section className="container">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </section>
        </BrowserRouter>
      ) : (
        <Login />
      )}
    </>
  );
}

export default App;
