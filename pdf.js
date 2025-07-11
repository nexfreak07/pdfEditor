const fs = require('fs');
const { PDFDocument } = require('pdf-lib');

async function modifyPDFMetadata(inputPath, outputPath) {
  const existingPdfBytes = fs.readFileSync(inputPath);
  const pdfDoc = await PDFDocument.load(existingPdfBytes);

  // Set metadata (dates in XMP ISO format are auto-converted)
  const customDate = new Date('2025-07-03T12:33:31+05:30');
  pdfDoc.setCreationDate(customDate);
  pdfDoc.setModificationDate(customDate);
  pdfDoc.set

  


  const modifiedPdfBytes = await pdfDoc.save();
  fs.writeFileSync(outputPath, modifiedPdfBytes);
  console.log(`✅ Dates updated in "${outputPath}"`);
}

modifyPDFMetadata('D:\\Script\\BCT.pdf', 'C:\\BCT\\Akash Dasgupta.pdf');