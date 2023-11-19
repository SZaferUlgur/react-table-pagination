import React, { useState } from "react";
import { FaMars, FaVenus } from "react-icons/fa";
import data from "../mockdata.json";
import Pagination from "./Pagination";

const TabloPage = ({ aramaText, durum, cinsiyet }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);

  const filteredData =
    data &&
    data.length > 0 &&
    data.filter((veri) => {
      if (aramaText === "" && durum === "") {
        return veri;
      } else if (durum === "1") {
        return veri.durumu === true;
      } else if (durum === "0") {
        return veri.durumu === false;
      } else {
        return (
          veri.adi.toLowerCase().includes(aramaText) ||
          veri.soyadi.toLowerCase().includes(aramaText)
        );
      }
    });

  const filteredCinsData =
    filteredData &&
    filteredData.length > 0 &&
    filteredData.filter((veri) => {
      if (cinsiyet === "") {
        return veri;
      } else if (cinsiyet === "E") {
        return veri.cinsiyet === "Erkek";
      } else if (cinsiyet === "K") {
        return veri.cinsiyet === "Kadın";
      }
    });

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData =
    filteredCinsData &&
    filteredCinsData.length > 0 &&
    filteredCinsData.slice(indexOfFirstData, indexOfLastData);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="table-responsive">
      <table className="table">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Adı Soyadı</th>
            <th>E-Mail</th>
            <th>Cinsiyet</th>
            <th>Adres</th>
            <th className="rakam">Borç</th>
            <th className="rakam">Tahsilat</th>
            <th className="rakam">Kalan</th>
            <th>Durum</th>
          </tr>
        </thead>
        {data && data.length > 0 ? (
          <tbody>
            {currentData &&
              currentData.length > 0 &&
              currentData.map((veri, index) => (
                <tr key={index}>
                  <td>{veri.id}</td>
                  <td>
                    {veri.adi} {veri.soyadi}
                  </td>
                  <td>{veri.email}</td>
                  <td>
                    {veri.cinsiyet === "Erkek" ? (
                      <FaMars color="blue" />
                    ) : (
                      <FaVenus color="red" />
                    )}
                  </td>
                  <td>{veri.adres}</td>
                  <td className="rakam">{veri.borc}</td>
                  <td className="rakam">{veri.tahsilat}</td>
                  <td className="rakam">{parseFloat(veri.borc - veri.tahsilat).toFixed(2)}</td>
                  <td className="text-center">{veri.durumu ? "✅" : "⛔"}</td>
                </tr>
              ))}
          </tbody>
        ) : null}
      </table>
      <Pagination
        dataPerPage={dataPerPage}
        totalDatas={filteredCinsData.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default TabloPage;
