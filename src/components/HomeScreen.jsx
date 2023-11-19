import React, { useState } from "react";
import { FaFilter, FaMars, FaUserClock, FaUserMinus, FaVenus } from "react-icons/fa";
import TabloPage from "./TabloPage";

const HomeScreen = () => {
  const [aramaText, setAramaText] = useState("");
  const [durum, setDurum] = useState("");
  const [cinsiyet, setCinsiyet] = useState("");

  const filtreYok = () => {
    setAramaText("");
    setDurum("");
    setCinsiyet("");
  };

  return (
    <div className="container mt-2">
      <form className="d-flex w-50" role="arama">
        <input
          type="search"
          className="form-control me-2"
          name="aramaText"
          value={aramaText}
          onChange={(e) => setAramaText(e.target.value)}
          placeholder="Arama..."
          aria-label="Arama"
        />
        <button className="btn btn-outline-success" type="submit">
          Arama
        </button>
      </form>
      <div className="d-flex justify-content-between gap-2 mt-2">
        <button
          className="btn btn-success btn-block"
          onClick={() => filtreYok()}
        >
          <FaFilter /> Tümü
        </button>
        <button className="btn btn-success btn-block"
        onClick={() => setDurum("1")}>
          <FaUserClock /> Aktif (Çalışan)
        </button>
        <button className="btn btn-success btn-block"
        onClick={() => setDurum("0")}>
          <FaUserMinus /> Pasif (Çalışmayan)
        </button>
        <button className="btn btn-success btn-block"
        onClick={() => setCinsiyet("E")}>
          <FaMars /> Erkek (Personel)
        </button>
        <button className="btn btn-success btn-block"
        onClick={() => setCinsiyet("K")}>
          <FaVenus /> Kadın (Personel)
        </button>
      </div>
      <hr />
      <TabloPage aramaText={aramaText} durum={durum} cinsiyet={cinsiyet}/>
    </div>
  );
};

export default HomeScreen;
