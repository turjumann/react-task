import React from "react";
import calandar from "../../Assets/calandar.jpg";
import { useSelector } from "react-redux";
import "./pdfStyles.css";

const EnglishPDF = () => {
  const { cityInfo } = useSelector((state) => state.app);

  const createItems = () => {
    const items = [];
    for (let i = 1; i <= 6; i++) {
      items.push({
        no: `0${i}`,
        nameOfItem: "Metal Sheet",
        qty: "100",
        unit: "3.60",
        extra: "3.60",
        vat: "3.60",
        total: "3.60",
      });
    }
    return items;
  };
  return (
    <>
      {/* <div className="page-num-div">
        <p>Page 1 of 2</p>
      </div> */}
      <div id="english">
        <div className="container" id="container">
          <div className="page-title">
            <h1>Order Confirmation</h1>
          </div>

          <div className="page-subtitle css-fix">
            <p>
              <strong>Date:&emsp;</strong>Monday, Aug 23, 2022
              {"\n"}
              <strong>Order ID:&emsp;</strong>
              #338E4B9
            </p>
          </div>
          <hr />

          <div className="first-section">
            <div className="sub-first-section-1">
              <h1>Supplier Information:</h1>
              <h2>
                <strong>Supplier Name:</strong> XYD For Building Materials
              </h2>
              <h2>
                <strong>SPLYD ID:</strong> SPS1004
              </h2>
              <h2>
                <strong>CR Number:</strong> 1010395504
              </h2>
              <h2>
                <strong>VAT Number: </strong>381088080004
              </h2>
              <h3 className="css-fix">
                4462 Anas Bin Malik, 12543, Almalqa {"\n"}Riyadh, Saudi Arabia
              </h3>
            </div>
            <div className="sub-first-section-2">
              <h1>Buyer Information: </h1>
              <h2>
                <strong>Buyer Name:</strong> XYD For Building Materials
              </h2>
              <h2>
                <strong>SPLYD ID:</strong> SPS1004
              </h2>
              <h2>
                <strong>CR Number:</strong> 1010395504
              </h2>
              <h2>
                <strong>VAT Number: </strong>381088080004
              </h2>
              <h3 className="css-fix">
                4462 Anas Bin Malik, 12543, Almalqa {"\n"}Riyadh, Saudi Arabia
              </h3>
            </div>
          </div>
          <hr />
          <div>
            <h1 style={{ marginBottom: -10, paddingLeft: 10 }}>
              Items And Prices
            </h1>
            <table>
              <tbody>
                <tr>
                  <th>No</th>
                  <th>Name of item</th>
                  <th>Qty</th>
                  <th>Unit</th>
                  <th> </th>
                  <th>VAT</th>
                  <th className="css-fix">Total Including VAT</th>
                </tr>
                {createItems().map((data, index) => {
                  return (
                    <tr key={index}>
                      <td>{data.no}</td>
                      <td style={{ width: "100%" }}>{data.nameOfItem}</td>
                      <td>{data.qty}</td>
                      <td>{data.unit}</td>
                      <td>{data.extra}</td>
                      <td>{data.vat}</td>
                      <td>{data.total}</td>
                    </tr>
                  );
                })}
                <tr>
                  <td className="secondary"></td>
                  <td className="secondary">
                    <table>
                      <tbody>
                        <tr>
                          <th> </th>
                          <th style={{ color: "black" }}>Date</th>
                        </tr>
                        <tr>
                          <td className="secondary"></td>

                          <td
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div>22/08/2022</div>
                            <img
                              width={45}
                              height={45}
                              src={calandar}
                              alt="horse"
                            />
                          </td>
                        </tr>
                        <tr>
                          <td style={{ color: "black" }} className="secondary">
                            <h2>Delivery: </h2>
                          </td>
                          <td>Contact Person Name</td>
                        </tr>
                        <tr>
                          <td className="secondary"> </td>
                          <td>Address</td>
                        </tr>
                        <tr>
                          <td className="secondary"> </td>
                          <td>Phone Number</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="third-section">
            <div className="third-section-1">
              <div className="in-third-section-1">
                <h2>
                  <strong>Total</strong>
                </h2>
                <div
                  className="css-fix"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <h3 style={{ color: "#898e99" }}>SAR</h3>
                  <h2 style={{ color: "#898e99" }}> 216.00</h2>
                </div>
              </div>
              <div className="in-third-section-1">
                <h2>
                  <strong>Delivery</strong>
                </h2>
                <div
                  className="css-fix"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <h3 style={{ color: "#898e99" }}>SAR</h3>
                  <h2 style={{ color: "#898e99" }}> 216.00</h2>
                </div>
              </div>
              <div className="in-third-section-1">
                <h2>
                  <strong>Total VAT</strong>
                </h2>
                <div
                  className="css-fix"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <h3 style={{ color: "#898e99" }}>SAR</h3>
                  <h2 style={{ color: "#898e99" }}> 216.00</h2>
                </div>
              </div>
            </div>

            <div className="third-section-2">
              <div>
                <h2>
                  <strong>Total Amount</strong>
                </h2>
              </div>
              <div
                className="css-fix"
                style={{ display: "flex", alignItems: "center" }}
              >
                <h2 style={{ fontWeight: "30px" }}>SAR </h2>
                <h1 style={{ fontWeight: "30px", lineHeight: "100%" }}>
                  2,256,00
                </h1>
              </div>
            </div>
          </div>
          <hr
            style={{
              marginTop: "100px",
              backgroundColor: "#dddfe0",
              border: 0,
              height: "3px",
            }}
          />

          <hr
            style={{
              marginTop: "100px",
              backgroundColor: "#dddfe0",
              border: 0,
              height: "3px",
            }}
          />

          <div className="footer">
            <h2 style={{ marginRight: "30px" }}>
              <a style={{ color: "#2683e1" }} href="http://www.sas.com/">
                <strong>Terms of Service</strong>
              </a>
            </h2>
            <h2>
              <a style={{ color: "#2683e1" }} href="http://www.sas.com/">
                <strong>Privacy Policy</strong>
              </a>
            </h2>
          </div>
          {cityInfo.temp !== "NaN" && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                margin: 8,
                width: "100%",
              }}
            >
              <p>
                <strong>Country: </strong>
                {cityInfo.country}
              </p>
              <p>
                <strong>City: </strong>
                {cityInfo.city}
              </p>
              <p>
                <strong>Coordinates: </strong>
                {cityInfo.lat}, {cityInfo.lng}
              </p>
              <p>
                <strong>Temperature: </strong>
                {cityInfo.temp} Celsius
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EnglishPDF;
