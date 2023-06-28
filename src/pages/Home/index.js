import { onValue, ref, set } from "firebase/database";
import "maplibre-gl/dist/maplibre-gl.css";
import React, { useEffect, useState } from "react";
import {
  Cloud,
  Left,
  Logo1,
  Pause,
  Power,
  Right,
} from "../../components/assets";
import Clock from "../../components/Clock";
import MapsReact from "../../components/Maps/maps";
import PhotoRotation from "../../components/PhotoRotation";
import { database } from "../../Fire/Fire";

const Home = () => {
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
        <img
          className="flex height_mobile home_margin object-cover"
          src="/images/car-1.png"
          alt="esp-cam"
        />
        <div className="mt-[27px] box_car tall color_bg rounded-[33px]">
          <div className="display_box py-[31px] px-[34px] justify-between">
            <div className="block">
              <h1>Smart Vehicle Kaliurang UNISI</h1>
              <div className="flex mt-[10px] justify-between ">
                <div className="block">
                  <h2>Specification</h2>
                  <h3 className="mt-[27px]">Blue</h3>
                  <p className="text_spec">Color</p>
                  <h3 className="mt-[27px]">100 kg</h3>
                  <p className="text_spec">Weight</p>
                  <h3 className="mt-[27px]">72 V/45 A</h3>
                  <p className="text_spec">Battery</p>
                </div>
                <div className=" line w-[1px] h-[230px] bg-white" />
                <div className="mr-[3px]">
                  <div className="block">
                    <h2>Legality</h2>
                    <h3 className="mt-[27px]">Go-Car</h3>
                    <p className="text_spec">Car</p>
                    <h3 className="mt-[27px]">2023/02/16</h3>
                    <p className="text_spec">Manufacture Date</p>
                    <h3 className="mt-[27px]">QS Motor 4Kw</h3>
                    <p className="text_spec">Motor</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => setPhoto(!photo)}
              className="flex height_box bg-black rounded-[34px] margin_box p-[7px]"
            >
              <img
                src="/images/car-1.png"
                alt="ImageCar"
                className="rounded-[34px] max_car object-cover"
              />
            </div>
            {photo && (
              <>
                <div className="fixed inset-0 b-color px-[1rem] grid place-items-center duration-[.4s]">
                  <div className="relative bg-[#1C1C1E] pt-[40px] px-[1.5rem] pb-[2.5rem] rounded-[33px]">
                    <i
                      onClick={() => setPhoto(!photo)}
                      class="bx bx-x absolute top-[1.5rem] right-[1.5rem] text-[1.5rem] cursor-pointer"
                    ></i>
                    <PhotoRotation />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <h1 className="copy justify-center mt-[20px] text-center mb-[35px]">
          Copyright 2023. All Rights Reserved. Ulil Albab Students Center
        </h1>
      </div>
      <div className="block">
        <div className="flex power_margin justify-center unisi_height">
          <div className="power h-[345px] color_bg rounded-[33px] px-[26.5px] py-[27.5px]">
            <div className="flex justify-between">
              <div className="block">
                <h1>UNISI Kaliurang</h1>
                <p className="text_unisi">Ulil Albab Students Center</p>
              </div>
              <img src={Logo1} alt="Logo" />
            </div>
            <div className="flex mt-[15px] mb-[11px] h-[1px] bg-[#575757]" />
            <div className="flex mt-[11px] justify-between ">
              <div className="block">
                <h2 className="mb-[11px]">Batery Status</h2>
                <p className="text_kaliurang">75 km/hour max</p>
                <h2 className="my-[11px]">Voltage</h2>
                <p className="text_kaliurang">80 V max</p>
              </div>
              <div className="block">
                <h2 className="mb-[37px] text-[#178809]">100%</h2>
                <h2 className="text-[#178809]">100%</h2>
              </div>
            </div>
            <div className="flex mt-[12px] mb-[10px] h-[1px] bg-[#575757]" />
            <div className="flex bg-[#151516] h-[60px] rounded-[7px] p-[6px] justify-between">
              <div className="h-full bg-[#00D1FF] rounded-[7px] px-[16px] py-[9px] w-full">
                <div className="flex items-center justify-center">
                  <img src={Cloud} alt="cloud" className="" />
                  <h4 className="ml-3">
                    30 <span>C</span>
                  </h4>
                </div>
              </div>
              <div className="block ml-[20px]">
                <p className="text_clock text-center">Time</p>
                <Clock />
                <p className="text_clock text-center">WIB</p>
              </div>
            </div>
            <div className="flex mt-[12px] h-[1px] bg-[#575757]" />
          </div>
        </div>
        <div className="flex power_margin justify-between mt-[27px] items-center">
          <div className="block w-full px-[25px] py-[22px] h-[124px] rounded-[40px] color_bg">
            <p className="text-[13px] text-white font-medium text-center">
              Love Story
            </p>
            <p className="text-[13px] text-white font-medium text-center">
              Taylor Swift
            </p>
            <div className="flex justify-between mt-[22px]">
              <img src={Left} alt="left" />
              <img src={Pause} alt="Pause" />
              <img src={Right} alt="Right" />
            </div>
          </div>
          <div className="ml-[50px]">
            <div
              onClick={handleSubmit}
              className={
                data === 0
                  ? "w-[68px] h-[68px] rounded-full border-white border-2   pt-[17px] px-[16px] pb-[16.25px]"
                  : "w-[68px] h-[68px] rounded-full bg-green-500  pt-[17px] px-[16px] pb-[16.25px]"
              }
            >
              <img src={Power} alt="Power" className="bg-transparent" />
            </div>
          </div>
        </div>
        <div
          onClick={() => setShow(!show)}
          className="flex h-[364px] power_margin p-[10px] color_bg mt-[27px] rounded-[33px]"
        >
          {/* <Map
            mapLib={maplibregl}
            initialViewState={{
              longitude: 110.416759391,
              latitude: -7.69358928344,
              zoom: 14,
            }}
            style={{
              width: "100%",
              height: " calc(47.8vh - 100px)",
              borderRadius: "33px",
            }}
            mapStyle="https://api.maptiler.com/maps/streets/style.json?key=sVLnYoaj7y0PsT1a4jsL"
          >
            {/* <NavigationControl position="top-left" /> */}
          {/* </Map>  */}
          <img
            src="/images/maps.png"
            className="rounded-[33px] object-cover w-full"
            alt="Maps"
          />
        </div>
        <h1 className="copy1 justify-center text-center mb-[35px] mt-[20px]">
          Copyright 2023. All Rights Reserved. Ulil Albab Students Center
        </h1>
        {show && (
          <>
            <div className="fixed inset-1 z-30 b-color mt-[15px] px-[1rem] place-items-center duration-[.4s]">
              <i
                onClick={() => setShow(!show)}
                class="bx bx-x absolute top-[20px] right-16 text-[#7A7A7A] text-[1.5rem] cursor-pointer z-30 "
              ></i>
              <div className="relative ">
                <MapsReact />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
