import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const exportPDF = async (dispatch, startExporting, finishExporting) => {
  dispatch(startExporting());
  try {
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
  } catch (err) {
    alert(err);
    dispatch(finishExporting());
  }
  dispatch(finishExporting());
};
