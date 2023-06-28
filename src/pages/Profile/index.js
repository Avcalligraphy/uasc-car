import { onValue, ref, set } from "firebase/database";
import "maplibre-gl/dist/maplibre-gl.css";
import React, { useEffect, useState } from "react";
import {
  Camera,
  Cloud,
  ImageCar,
  Left,
  Logo1,
  Maps,
  Pause,
  Power,
  Right,
} from "../../components/assets";
import Clock from "../../components/Clock";
import MapsReact from "../../components/Maps/maps";
import PhotoRotation from "../../components/PhotoRotation";
import { database } from "../../Fire/Fire";
const Profile = () => {
  const [show, setShow] = useState(false);
  const [photo, setPhoto] = useState(false);
  const starCountRef = ref(database, "UASC_EV/UNISI_Kaliurang/" + "Power");
  const [power, setPower] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setData(data.power);
      console.log("Data Baru", data.power);
    });
  }, [starCountRef]);

  const handleSubmit = () => {
    setPower(power === 0 ? 1 : 0);
    set(ref(database, "UASC_EV/UNISI_Kaliurang/" + "Power"), {
      power,
    })
      .then(() => {
        console.log("Data berhasil diupdate");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="home relative h-screen mt-[-35px]   ">
      <div className="block margin">
        <div className="bg-transparent flex h-[496px] rounded-[33px] home_margin">
          <h1>Profile</h1>
        </div>
      </div>
    </div>
  );
};

export default Profile;
