import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";
import EnglishPDF from "./Components/EnglishPDF/EnglishPDF";
import ArabicPDF from "./Components/ArabicPDF/ArabicPDF";

// <button onClick={() => window.print()}>PRINT</button>
// document.documentElement.dir = "rtl";

// TODO
// Create 1 pdf file, give it eng or arab props.
// Inside the pdf component, change the direction.
// Render/Generate the same component twice, but give each one a lang prop.
// OR
// Create 2 different PDFs, but use one css file and change direction respectively.
// Render/Generate both of them.

function App() {
  const exportPDF = async () => {
    const arabicInput = document.getElementById("arabic");
    const englishInput = document.getElementById("english");

    const arabicH2C = await html2canvas(arabicInput);
    const arImgData = arabicH2C.toDataURL("image/png");
    const arPdf = new jsPDF("p", "px", "a4", true);
    var arWidth = arPdf.internal.pageSize.getWidth();
    var arHeight = arPdf.internal.pageSize.getHeight();
    arPdf.addImage(arImgData, "JPEG", 0, 0, arWidth, arHeight);
    arPdf.save("ArabicPDF.pdf");

    const englishH2C = await html2canvas(englishInput);
    const enImgData = englishH2C.toDataURL("image/png");
    const enPdf = new jsPDF("p", "px", "a4", true);
    var enWidth = enPdf.internal.pageSize.getWidth();
    var enHeight = enPdf.internal.pageSize.getHeight();
    enPdf.addImage(enImgData, "JPEG", 0, 0, enWidth, enHeight);
    enPdf.save("EnglishPDF.pdf");

    // html2canvas(arabicInput).then((canvas) => {
    //   const imgData = canvas.toDataURL("image/png");
    //   const pdf = new jsPDF("p", "px", "a4", true);
    //   var width = pdf.internal.pageSize.getWidth();
    //   var height = pdf.internal.pageSize.getHeight();

    //   pdf.addImage(imgData, "JPEG", 0, 0, width, height);
    //   pdf.save("test.pdf");
    // });
  };
  return (
    <>
      <div style={{ height: "0px", overflowY: "scroll" }}>
        <ArabicPDF />
        <EnglishPDF />
      </div>

      <button onClick={() => exportPDF()}>Generate</button>
    </>
  );
}

export default App;
