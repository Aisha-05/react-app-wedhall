import React, { useState } from "react";
import Topbar from "../Components/Topbar";
import "./RequestsHistory.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";

function RequestsHistory({ owner }) {
  const [requests, setRequests] = useState([
    {
      id: 1,
      client: "Emma Davis",
      hall: "Golden Palace",
      phone: "0556789345",
      from: "2025-11-10",
      to: "2025-11-12",
    },
    {
      id: 2,
      client: "James Wilson",
      hall: "Dream Hall",
      phone: "0798823456",
      from: "2025-12-01",
      to: "2025-12-02",
    },
    {
      id: 3,
      client: "ellin Davis",
      hall: "Golden Palace",
      phone: "0556789345",
      from: "2025-11-10",
      to: "2025-11-12",
    },
        {
      id: 4,
      client: "ellin JAckob",
      hall: "Golden Palace",
      phone: "0556789345",
      from: "2025-11-10",
      to: "2025-11-12",
    },
        {
      id: 5,
      client: "Mary Cooper",
      hall: "Golden Palace",
      phone: "0556789345",
      from: "2025-11-10",
      to: "2025-11-12",
    },
  ]);

  const [history, setHistory] = useState([
    {
      id: 101,
      client: "Lina Roberts",
      hall: "Royal Orchid",
      from: "2025-10-10",
      to: "2025-10-11",
      status: "Completed",
    },
        {
      id: 102,
      client: "Lina Roberts",
      hall: "Royal Orchid",
      from: "2025-10-10",
      to: "2025-10-11",
      status: "Completed",
    },
        {
      id: 103,
      client: "Lina Roberts",
      hall: "Royal Orchid",
      from: "2025-10-10",
      to: "2025-10-11",
      status: "Completed",
    },
        {
      id: 104,
      client: "Lina Roberts",
      hall: "Royal Orchid",
      from: "2025-10-10",
      to: "2025-10-11",
      status: "Completed",
    },
        {
      id: 105,
      client: "Lina Roberts",
      hall: "Royal Orchid",
      from: "2025-10-10",
      to: "2025-10-11",
      status: "Completed",
    },
  ]);

  const [confirmReject, setConfirmReject] = useState(null); // request ID for confirmation

  const handleAccept = (req) => {
    setHistory([
      ...history,
      {
        id: Date.now(),
        client: req.client,
        hall: req.hall,
        from: req.from,
        to: req.to,
        status: "Completed",
      },
    ]);
    setRequests(requests.filter((r) => r.id !== req.id));
  };

  const handleReject = (req) => {
    setConfirmReject(req);
  };

  const confirmRejection = (confirm) => {
    if (confirm && confirmReject) {
      setRequests(requests.filter((r) => r.id !== confirmReject.id));
    }
    setConfirmReject(null);
  };

  return (
    <div className="app-container">
      <Topbar owner={owner} />
      <div className="dashboard requests-history">
        {/* <h2 className="page-title">Requests & History</h2> */}

        {/* === Pending Requests Table === */}
        <div className="table-section">
          <h3>Pending Requests</h3>
          {requests.length === 0 ? (
            <p className="empty-msg">No requests yet.</p>
          ) : (
            <div className="table-wrapper">
              <table className="styled-table">
                <thead>
                  <tr>
                    <th>Client</th>
                    <th>Hall</th>
                    <th>Phone</th>
                    <th>Period</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((req) => (
                    <tr key={req.id}>
                      <td>{req.client}</td>
                      <td>{req.hall}</td>
                      <td>{req.phone}</td>
                      <td>{req.from} → {req.to}</td>
                      <td className="action-buttons">
                        <button className="accept" onClick={() => handleAccept(req)}>
                          <FontAwesomeIcon icon={faCheckCircle} />
                        </button>
                        <button className="reject" onClick={() => handleReject(req)}>
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

        {/* === Booking History Table === */}
        <div className="table-section">
          <h3>Booking History</h3>
          {history.length === 0 ? (
            <p className="empty-msg">No history yet.</p>
          ) : (
            <div className="table-wrapper">
              <table className="styled-table">
                <thead>
                  <tr>
                    <th>Client</th>
                    <th>Hall</th>
                    <th>Period</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {history.map((h) => (
                    <tr key={h.id}>
                      <td>{h.client}</td>
                      <td>{h.hall}</td>
                      <td>{h.from} → {h.to}</td>
                      <td><span className="status completed">{h.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* === Confirmation Modal === */}
        {confirmReject && (
          <div className="confirm-overlay">
            <div className="confirm-box">
              <h4>Reject Request</h4>
              <p>
                Are you sure you want to reject the request from{" "}
                <strong>{confirmReject.client}</strong>?
              </p>
              <div className="confirm-buttons">
                <button className="yes" onClick={() => confirmRejection(true)}>Yes, Reject</button>
                <button className="no" onClick={() => confirmRejection(false)}>Cancel</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RequestsHistory;
