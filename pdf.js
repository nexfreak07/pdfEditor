const hummus = require('hummus');

function changePDFVersion(inputPath, outputPath, version = '1.7') {
  const pdfWriter = hummus.createWriterToModify(inputPath, {
    modifiedFilePath: outputPath,
    version: version
  });

  pdfWriter.end();
  console.log(`✅ PDF version set to ${version} in "${outputPath}"`);
}

changePDFVersion(
  'D:\\Script\\102487884.pdf',
  'C:\\BCT\\102487884NEW.pdf',
  '1.7'
);
