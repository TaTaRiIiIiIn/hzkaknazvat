import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TransportList.css";
import { CheckboxGroup, Checkbox } from '@createnl/grouped-checkboxes';
const Tables = () => {
  const [groupedData, setGroupedData] = useState({});
  const [summaryData, setSummaryData] = useState([]);
  const [selectedTruckID, setSelectedTruckID] = useState(null); // Track the clicked TruckID
  const [showComponent, setShowComponent] = useState(false);

  useEffect(() => {
    // Fetch grouped data
    axios
      .get("http://26.218.223.232:5000/api/data")
      .then((response) => setGroupedData(response.data))
      .catch((error) => console.error("Error fetching grouped data:", error));

    // Fetch summary data
    axios
      .get("http://26.218.223.232:5000/api/summary")
      .then((response) => setSummaryData(Object.entries(response.data))) // Convert object to array for rendering
      .catch((error) => console.error("Error fetching summary data:", error));
  }, []);

  const handleRowClick = (truckID) => {
    setSelectedTruckID(selectedTruckID === truckID ? null : truckID); // Toggle visibility
  };

  const renderDetailedTable = (truckID) => {
    if (
      !selectedTruckID ||
      selectedTruckID !== truckID ||
      !groupedData[truckID]
    )
      return null;

    const records = groupedData[truckID];
    const columnOrder = [
      "Start Time",
      "Distance (km)",
      "Driver ID",
      "Fuel Used (liters)",
      "Time Spent (hours)",
      "Truck Load (kg)",
      "Anomaly",
    ];

    return (
      <tr>
        <td colSpan="6">
          {" "}
          {/* Spans all columns */}
          <table border="1" style={{ margin: "10px 0" }}>
            <thead>
              <tr>
                {columnOrder.map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {records.map((row, index) => (
                <tr key={index}>
                  {columnOrder.map((key) => (
                    <td key={key}>{row[key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </td>
      </tr>
    );
  };

  const renderSummaryTable = () => (
    <CheckboxGroup onChange={setOnChange}>
    <table border="1">
      <thead>
        <tr>
          <th>Номер машины</th>
          <th>Растояние</th>
          <th>Топливо потрачено</th>
          <th>Время потрачено</th>
          <th>Загрузка</th>
          <th>Аномалия</th>
        </tr>
      </thead>
      <tbody>
        {summaryData.map(([truckID, stats]) => (
          <React.Fragment key={truckID}>
            <tr
              onClick={() => handleRowClick(truckID)}
              style={{ cursor: "pointer" }}
            >
              <td><Checkbox name={truckID} /> {truckID}</td> 
              <td>{stats["Distance (km)"]}</td>
              <td>{stats["Fuel Used (liters)"]}</td>
              <td>{stats["Time Spent (hours)"]}</td>
              <td>{stats["Truck Load (kg)"]}</td>
              <td>{stats["Anomaly Percentage"]}%</td>
            </tr>
            {renderDetailedTable(truckID)}
          </React.Fragment>
        ))}
      </tbody>
    </table>
    </CheckboxGroup>
    
  );
  const [onChange, setOnChange] = React.useState({});
  return (
    <div className="TransportList">
      <div className="List">
        <div className="List__title">
          <div className="List__title__icon">
            <svg
              width="15"
              height="18"
              viewBox="0 0 15 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.536435 9.13297C0.536435 6.78908 0.535462 4.44568 0.536921 2.10179C0.537894 1.3864 0.955548 0.849367 1.61971 0.708704C1.74272 0.682602 1.87254 0.680669 1.99944 0.680669C5.85023 0.679219 9.70052 0.679219 13.5513 0.679702C14.3803 0.679702 14.9623 1.25153 14.9628 2.07859C14.9652 6.78425 14.9657 11.4899 14.9628 16.1951C14.9623 17.2106 14.0895 17.8318 13.1191 17.5118C12.8614 17.4267 12.611 17.3165 12.364 17.2034C11.4786 16.7974 10.5947 16.7858 9.719 17.2198C8.4145 17.8661 7.11486 17.8724 5.80793 17.2276C4.91378 16.7862 4.01819 16.7993 3.1114 17.2155C2.76814 17.3731 2.40445 17.519 2.03493 17.579C1.26964 17.7037 0.567552 17.0995 0.545187 16.327C0.525738 15.6634 0.537407 14.9982 0.537407 14.3341C0.536921 12.6002 0.537407 10.8668 0.537407 9.13297H0.536435ZM7.69685 13.8212C7.84855 13.8212 8.00025 13.8212 8.15146 13.8212C9.17007 13.8212 10.1892 13.8236 11.2078 13.8188C11.533 13.8174 11.7786 13.5742 11.7903 13.2663C11.8019 12.9574 11.5753 12.7027 11.253 12.666C11.1869 12.6587 11.1198 12.6611 11.0532 12.6611C8.82729 12.6611 6.60191 12.6611 4.37604 12.6621C4.27977 12.6621 4.18107 12.665 4.08723 12.6848C3.88156 12.7278 3.74396 12.8569 3.67346 13.0531C3.53392 13.4418 3.81689 13.8188 4.25789 13.8198C5.40388 13.8232 6.55037 13.8207 7.69637 13.8212H7.69685ZM7.73332 6.4802C7.64823 6.4802 7.56363 6.4802 7.47854 6.4802C6.39916 6.4802 5.31977 6.47875 4.24038 6.48165C3.92824 6.48262 3.69534 6.67742 3.64526 6.96164C3.60004 7.22122 3.74639 7.49384 4.00165 7.5881C4.10619 7.62677 4.22628 7.63789 4.33957 7.63837C6.58926 7.64127 8.83945 7.64079 11.0891 7.63982C11.1674 7.63982 11.2472 7.63595 11.324 7.62097C11.5671 7.57311 11.7475 7.38363 11.7854 7.14388C11.8223 6.91234 11.7047 6.65567 11.4844 6.55464C11.3741 6.50389 11.2404 6.48407 11.1169 6.48359C9.98885 6.47827 8.86084 6.48069 7.73283 6.48069L7.73332 6.4802ZM8.679 10.7305C9.51576 10.7305 10.352 10.7325 11.1888 10.7296C11.5311 10.7281 11.7873 10.4787 11.7907 10.1568C11.7941 9.83434 11.5389 9.57235 11.2015 9.57187C9.52209 9.56897 7.8432 9.57042 6.16383 9.57139C5.96205 9.57139 5.7982 9.65598 5.68491 9.82178C5.55899 10.0055 5.54051 10.2061 5.64213 10.4052C5.75396 10.6232 5.94066 10.7305 6.18766 10.7305C7.0181 10.7305 7.84855 10.7305 8.679 10.7305ZM8.6717 4.53994C9.51431 4.53994 10.3569 4.54235 11.199 4.53849C11.4878 4.53703 11.7027 4.36592 11.7728 4.10151C11.8364 3.86031 11.7305 3.5843 11.5 3.46878C11.3862 3.41174 11.2457 3.38419 11.1173 3.3837C9.49923 3.37839 7.88064 3.37984 6.26253 3.38129C6.17842 3.38129 6.09139 3.3866 6.01067 3.40739C5.80063 3.46153 5.66303 3.59929 5.6042 3.80666C5.49675 4.18562 5.76806 4.53558 6.18085 4.53849C7.0113 4.5438 7.84174 4.53994 8.67219 4.53994H8.6717ZM4.23066 10.7296C4.54718 10.7252 4.80487 10.4622 4.80293 10.1466C4.80098 9.83096 4.5394 9.57187 4.22288 9.57139C3.89809 9.57139 3.63359 9.83918 3.6404 10.1621C3.64672 10.4714 3.91997 10.7344 4.23115 10.73L4.23066 10.7296ZM4.22774 4.53752C4.54815 4.53462 4.80341 4.27891 4.80293 3.96134C4.80196 3.64714 4.54135 3.38515 4.2258 3.38225C3.91073 3.37935 3.63408 3.65923 3.63991 3.97439C3.64575 4.291 3.90587 4.54042 4.22774 4.53752Z"
                fill="#FF697A"
              />
            </svg>
          </div>
          <div className="List__title__text">Список транспорта</div>
        </div>
        <div className="List__buttons">
          <div className="List__input">
            <div className="List__input__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
              >
                <path
                  d="M19.072 18.6118L17.3884 16.9282M18.2302 9.77273C18.2302 14.1895 14.6497 17.77 10.2329 17.77C5.81611 17.77 2.2356 14.1895 2.2356 9.77273C2.2356 5.35595 5.81611 1.77544 10.2329 1.77544C14.6497 1.77544 18.2302 5.35595 18.2302 9.77273Z"
                  stroke="#BFBFBF"
                  stroke-width="1.26273"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <input type="text" placeholder="Поиск..." />
          </div>
          <div className="List__filtr">
            <div className="List__filtr__icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M14.5784 4.57665H10.6325M4.05611 4.57665H1.42554M14.5784 11.8107H11.9478M5.37139 11.8107H1.42554M8.98843 4.57665C8.98843 5.84787 7.9579 6.8784 6.68668 6.8784C5.41546 6.8784 4.38493 5.84787 4.38493 4.57665C4.38493 3.30543 5.41546 2.2749 6.68668 2.2749C7.9579 2.2749 8.98843 3.30543 8.98843 4.57665ZM11.619 11.8107C11.619 13.0819 10.5885 14.1125 9.31725 14.1125C8.04603 14.1125 7.0155 13.0819 7.0155 11.8107C7.0155 10.5395 8.04603 9.50897 9.31725 9.50897C10.5885 9.50897 11.619 10.5395 11.619 11.8107Z"
                  stroke="#BFBFBF"
                  stroke-width="0.986464"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="List__filtr__text">Фильтры</div>
          </div>
          <div className="List__restart">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
            >
              <path
                d="M16.844 9.19363C16.844 13.2383 13.5614 16.5209 9.51672 16.5209C5.47207 16.5209 3.00278 12.4469 3.00278 12.4469M3.00278 12.4469H6.31471M3.00278 12.4469V16.1106M2.18945 9.19363C2.18945 5.14898 5.44276 1.86636 9.51672 1.86636C14.404 1.86636 16.844 5.94033 16.844 5.94033M16.844 5.94033V2.27669M16.844 5.94033H13.5907"
                stroke="white"
                stroke-width="1.09909"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {renderSummaryTable()}
      <div>
        <h1>Values</h1>
        <pre>{JSON.stringify(onChange, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Tables;
