// src/pages/aishaPages/RequestsPage/RequestsPage.jsx
import React, { useState } from "react";
import Topbar from "../../../components/aishaComponents/Topbar/Topbar";
import "../../RequestsHistory.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle, faSort } from "@fortawesome/free-solid-svg-icons";
import { useRequests } from "../../../context/useRequests";

function RequestsPage({ owner }) {
  const { requests, handleAccept, handleReject } = useRequests();
  const [confirmReject, setConfirmReject] = useState(null);
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState("");

  const confirmRejection = (confirm) => {
    if (confirm && confirmReject) handleReject(confirmReject.id);
    setConfirmReject(null);
  };

  // Sort logic
  const sortedRequests = [...requests].sort((a, b) => {
    if (!sortField) return 0;
    const valA = a[sortField].toString().toLowerCase();
    const valB = b[sortField].toString().toLowerCase();
    if (valA < valB) return sortOrder === "asc" ? -1 : 1;
    if (valA > valB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  // Search filter
  const filteredRequests = sortedRequests.filter((req) =>
    Object.values(req)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  const handleSort = (field) => {
    const order = sortField === field && sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(order);
  };

  return (
    <div className="app-main-container">
      <Topbar owner={owner} />
      <div className="app-main-dashboard reqhistory-requests-history">
        <div className="reqhistory-table-section">
          <div className="reqhistory-table-header">
            <h3>Pending Requests</h3>
            <input
              type="text"
              className="reqhistory-search-bar"
              placeholder="Search by client, hall, or phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {filteredRequests.length === 0 ? (
            <p className="reqhistory-empty-msg">No requests found.</p>
          ) : (
            <div className="reqhistory-table-wrapper">
              <table className="reqhistory-styled-table">
                <thead>
                  <tr>
                    <th onClick={() => handleSort("client")}>
                      Client
                      <FontAwesomeIcon icon={faSort} />
                    </th>
                    <th onClick={() => handleSort("hall")}>
                      Hall <FontAwesomeIcon icon={faSort} />
                    </th>
                    <th onClick={() => handleSort("phone")}>
                      Phone <FontAwesomeIcon icon={faSort} />
                    </th>
                    <th>Period</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRequests.map((req) => (
                    <tr key={req.id}>
                      <td>{req.client}</td>
                      <td>{req.hall}</td>
                      <td>{req.phone}</td>
                      <td>
                        {req.from} → {req.to}
                      </td>
                      <td className="reqhistory-action-buttons">
                        <button className="reqhistory-accept" onClick={() => handleAccept(req)}>
                          <FontAwesomeIcon icon={faCheckCircle} />
                        </button>
                        <button className="reqhistory-reject" onClick={() => setConfirmReject(req)}>
                          <FontAwesomeIcon icon={faTimesCircle} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {confirmReject && (
          <div className="reqhistory-confirm-overlay">
            <div className="reqhistory-confirm-box">
              <h4>Reject Request</h4>
              <p>
                Reject request from <strong>{confirmReject.client}</strong>?
              </p>
              <div className="reqhistory-confirm-buttons">
                <button className="yes" onClick={() => confirmRejection(true)}>
                  Yes
                </button>
                <button className="no" onClick={() => confirmRejection(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RequestsPage;
