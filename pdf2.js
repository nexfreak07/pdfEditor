const fs = require('fs');
const { PDFDocument, PDFName, PDFString, PDFDict } = require('pdf-lib');

async function modifyPDFMetadata(inputPath, outputPath) {
  const existingPdfBytes = fs.readFileSync(inputPath);
  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const title = ""
  // Set creation and modification dates
  const customDate = new Date('2025-07-03T12:33:31+05:30');
  pdfDoc.setCreationDate(customDate);
  pdfDoc.setTitle()
  pdfDoc.setModificationDate(customDate);

  // Get access to the low-level context
  const context = pdfDoc.context;

  // If the trailer is missing, create a new one
  if (!context.trailer) {
    context.trailer = context.obj({}); // create empty trailer
  }

  // Create Info dictionary
  const infoDict = context.obj({
    Producer: PDFString.of('Microsoft® Word 2016'),
  });

  const infoRef = context.register(infoDict);

  // Attach /Info to the trailer dictionary
  context.trailer.set(PDFName.of('Info'), infoRef);

  // Save PDF
  const modifiedPdfBytes = await pdfDoc.save();
  fs.writeFileSync(outputPath, modifiedPdfBytes);
  console.log(`✅ PDF metadata updated successfully at "${outputPath}"`);
}

modifyPDFMetadata('D:\\Script\\BCT.pdf', 'C:\\BCT\\Akash Dasgupta.pdf');
