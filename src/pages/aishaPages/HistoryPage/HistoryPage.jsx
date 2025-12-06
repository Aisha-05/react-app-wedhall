import React, { useState, useMemo } from "react";
import Topbar from "../../../components/aishaComponents/Topbar/Topbar";
import "../../RequestsHistory.css";
import { useRequests } from "../../../context/useRequests";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";

function HistoryPage({ owner }) {
  const { history } = useRequests();

  // --- State for search & sorting ---
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  // --- Sorting Handler ---
  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  // --- Filtering & Sorting ---
  const filteredHistory = useMemo(() => {
    let data = [...history];

    // Search filter
    if (searchTerm.trim() !== "") {
      data = data.filter((item) =>
        Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      );
    }

    // Sorting logic
    if (sortConfig.key) {
      data.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key])
          return sortConfig.direction === "asc" ? -1 : 1;
        if (a[sortConfig.key] > b[sortConfig.key])
          return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
    }

    return data;
  }, [history, searchTerm, sortConfig]);

  return (
    <div className="app-main-container">
      <Topbar owner={owner} />

      <div className="app-main-dashboard reqhistory-requests-history">
        <div className="reqhistory-table-section">
          <div className="reqhistory-table-header">
            <h3>Booking History</h3>
            <input
              type="text"
              placeholder="Search bookings..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="reqhistory-search-bar"
            />
          </div>

          {/* === Table === */}
          {filteredHistory.length === 0 ? (
            <p className="reqhistory-empty-msg">No history found.</p>
          ) : (
            <div className="reqhistory-table-wrapper">
              <table className="reqhistory-styled-table">
                <thead>
                  <tr>
                    <th onClick={() => handleSort("client")}>
                      Client <FontAwesomeIcon icon={faSort} className="reqhistory-sort-icon" />
                    </th>
                    <th onClick={() => handleSort("hall")}>
                      Hall <FontAwesomeIcon icon={faSort} className="reqhistory-sort-icon" />
                    </th>
                    <th onClick={() => handleSort("from")}>
                      Period <FontAwesomeIcon icon={faSort} className="reqhistory-sort-icon" />
                    </th>
                    <th onClick={() => handleSort("status")}>
                      Status <FontAwesomeIcon icon={faSort} className="reqhistory-sort-icon" />
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredHistory.map((h) => (
                    <tr key={h.id}>
                      <td>{h.client}</td>
                      <td>{h.hall}</td>
                      <td>
                        {h.from} → {h.to}
                      </td>
                      <td>
                        <span className={`reqhistory-status completed`}>{h.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HistoryPage;
