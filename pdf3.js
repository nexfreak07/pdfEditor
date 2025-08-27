const { exiftool } = require('exiftool-vendored');
const fs = require('fs');

const inputPath = 'D:/Script/102487884.pdf';
const outputPath = 'C:/Concentrix/Arya Singh/102487884.22042025.pdf';

// Copy original to preserve it
fs.copyFileSync(inputPath, outputPath);
 const fixedDatePDF = `2025:04:22 19:35:14+05:30`; 
async function updateMetadata() {
  try {
    await exiftool.write(outputPath, {
       Producer: 'Microsoft® Excel® for Microsoft 365',
      Creator: 'Microsoft® Excel® for Microsoft 365',
      CreatorTool: 'Microsoft® Excel® for Microsoft 365',
      Subject: '-',
      CreateDate: fixedDatePDF,
      ModifyDate: fixedDatePDF,
    });

    const tags = await exiftool.read(outputPath);
    // console.log('CreateDate:', tags.CreateDate);
    // console.log('ModifyDate:', tags.ModifyDate);
    console.log('tags:', tags);

    console.log('✅ PDF metadata updated successfully!');
  } catch (err) {
    console.error('❌ Failed to update metadata:', err);
  } finally {
    await exiftool.end(); // Clean shutdown
  }
}

updateMetadata();
