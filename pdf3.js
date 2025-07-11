const { exiftool } = require('exiftool-vendored');
const fs = require('fs');

const inputPath = 'D:/Script/BCT.pdf';
const outputPath = 'C:/BCT/Akash Dasgupta.pdf';

// Copy original to preserve it
fs.copyFileSync(inputPath, outputPath);

async function updateMetadata() {
  try {
    await exiftool.write(outputPath, {
      Producer: 'Microsoft® Word 2016',
      Creator: 'Microsoft® Word 2016',
      CreateDate: '2025:07:03 12:33:31+05:30',
      ModifyDate: '2025:07:03 12:33:31+05:30'
    });

    console.log('✅ PDF metadata updated successfully!');
  } catch (err) {
    console.error('❌ Failed to update metadata:', err);
  } finally {
    await exiftool.end(); // Clean shutdown
  }
}

updateMetadata();
