import React from "react";

const Pagination = ({ dataPerPage, totalDatas, currentPage, paginate }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalDatas / dataPerPage);

  // safya numarası
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // sayfa numarası düzenle
  let pageItems = [];
  if (totalPages <= 7) {
    // 7 sayfadan az ise hepsini göster
    pageItems = pageNumbers;
  } else {
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(currentPage + 2, totalPages);
    // ilk ve son sayfa ekleme
    pageItems.push(1);
    if (startPage > 2) {
      pageItems.push("...");
    }
    // aralıktaki safyalar
    for (let i = startPage; i <= endPage; i++) {
      pageItems.push(i);
    }
    if (endPage < totalPages - 1) {
      pageItems.push("...");
    }
    pageItems.push(totalPages);
  }

  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <a className="page-link" onClick={() => paginate(1)}>
            İlk Sayfa
          </a>
        </li>
        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
          <a className="page-link" onClick={() => paginate(currentPage - 1)}>
            Önceki
          </a>
        </li>
        {pageItems
          .filter((number) => (currentPage === 1 ? number + 1 : number - 1))
          .map((number, index) => (
            <li
              className={`page-item ${number === "..." ? "disabled" : ""} 
                                                        ${
                                                          number === currentPage
                                                            ? "active"
                                                            : ""
                                                        }`}
            >
              <a
                className="page-link"
                onClick={() => (number !== "..." ? paginate(number) : null)}
              >
                {number}
              </a>
            </li>
          ))}
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <a className="page-link" onClick={() => paginate(currentPage + 1)}>
            Sonraki
          </a>
        </li>
        <li
          className={`page-item ${
            currentPage === totalPages ? "disabled" : ""
          }`}
        >
          <a className="page-link" onClick={() => paginate(totalPages)}>
            Son Sayfa
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
