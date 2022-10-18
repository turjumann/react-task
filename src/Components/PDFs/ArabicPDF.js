import React from "react";
import calandar from "../../Assets/calandar.jpg";
import { useSelector } from "react-redux";
import "./pdfStyles.css";

const ArabicPDF = (props) => {
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

      <div dir="rtl" id="arabic">
        <div className="container" id="container">
          <div className="page-title">
            <h1>تأكيد أمر شراء</h1>
          </div>

          <div className="page-subtitle css-fix">
            <p>
              <strong>التاريخ: &emsp;</strong>الاثنين، 23 اغسطس 2022
              {"\n"}
              <strong>رقم الطلب:&emsp;</strong>
              #338E4B9
            </p>
          </div>
          <hr />

          <div className="first-section">
            <div className="sub-first-section-1">
              <h1>معلومات المورد/البائع: </h1>
              <h2>
                <strong>أسم المورد: </strong> XYD For Building Materials
              </h2>
              <h2>
                <strong>معرف سبلايد:</strong> SPS1004
              </h2>
              <h2>
                <strong>السجل التجاري:</strong> 1010395504
              </h2>
              <h2>
                <strong>الرقم الضريبي: </strong>381088080004
              </h2>
              <h3 className="css-fix">
                4462 أنس بن مالك، 12543، الملقا {"\n"}الرياض، المملكة العربية
                السعودية
              </h3>
            </div>
            <div className="sub-first-section-2">
              <h1>معلومات المشتري: </h1>
              <h2>
                <strong>أسم المشتري:</strong> XYD For Building Materials
              </h2>
              <h2>
                <strong>معرف سبلايد:</strong> SPS1004
              </h2>
              <h2>
                <strong>السجل التجاري:</strong> 1010395504
              </h2>
              <h2>
                <strong>الرقم الضريبي: </strong>381088080004
              </h2>
              <h3 className="css-fix">
                4462 أنس بن مالك، 12543، الملقا {"\n"}الرياض، المملكة العربية
                السعودية
              </h3>
            </div>
          </div>
          <hr />
          <div>
            <h1 style={{ marginBottom: -10, paddingLeft: 10 }}>
              البنود والأسعار
            </h1>
            <table className="ar">
              <tbody>
                <tr>
                  <th>رقم</th>
                  <th>وصف البند</th>
                  <th>الكمية</th>
                  <th>الوحدة</th>
                  <th> </th>
                  <th>الضريبة</th>
                  <th className="css-fix">السعر الإجمالي شامل الضريبة</th>
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
                          <th style={{ color: "black" }}>التاريخ</th>
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
                            <h2>التوصيل: </h2>
                          </td>
                          <td>إسم المستلم</td>
                        </tr>
                        <tr>
                          <td className="secondary"> </td>
                          <td>العنوان</td>
                        </tr>
                        <tr>
                          <td className="secondary"> </td>
                          <td>رقم الجوال</td>
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
                <h3>
                  <strong>المجموع</strong>
                </h3>
                <div
                  className="css-fix"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <h2 style={{ color: "#898e99" }}> 216.00</h2> 
                  <h3 style={{ color: "#898e99" }}>ريال سعودي</h3>
                </div>
              </div>
              <div className="in-third-section-1">
                <h3>
                  <strong>التوصيل</strong>
                </h3>
                <div
                  className="css-fix"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <h2 style={{ color: "#898e99" }}> 216.00</h2> 
                  <h3 style={{ color: "#898e99" }}>ريال سعودي</h3>
                </div>
              </div>
              <div className="in-third-section-1">
                <h3>
                  <strong>الضريبة المضافة</strong>
                </h3>
                <div
                  className="css-fix"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <h2 style={{ color: "#898e99" }}> 216.00</h2> 
                  <h3 style={{ color: "#898e99" }}>ريال سعودي</h3>
                </div>
              </div>
            </div>

            <div className="third-section-2">
              <div>
                <h2>
                  <strong>إجمالي المبلغ المستحق</strong>
                </h2>
              </div>
              <div
                className="css-fix"
                style={{ display: "flex", alignItems: "center" }}
              >
                <h1 style={{ fontWeight: "30px", lineHeight: "100%" }}>
                  2,256,00 
                </h1>
                <h2 style={{ fontWeight: "30px" }}>ريال سعودي </h2>
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
            <h2 style={{ marginLeft: "30px" }}>
              <a style={{ color: "#2683e1" }} href="http://www.sas.com/">
                <strong>الشروط والأحكام</strong>
              </a>
            </h2>
            <h2>
              <a style={{ color: "#2683e1" }} href="http://www.sas.com/">
                <strong>سياسة الخصوصية</strong>
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
                <strong>البلد: </strong>
                {cityInfo.country}
              </p>
              <p>
                <strong>المنطقة: </strong>
                {cityInfo.city}
              </p>
              <p>
                <strong>الرمزالجغرافي: </strong>
                {cityInfo.lat}, {cityInfo.lng}
              </p>
              <p>
                <strong>الحرارة: </strong>
                {cityInfo.temp} مئوية
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ArabicPDF;
