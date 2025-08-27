import pikepdf

input_pdf = "D:/Script/102487884.pdf"
output_pdf = "C:/Concentrix/Arya Singh/102487884_UPDATED.pdf"

# Open the PDF
with pikepdf.open(input_pdf) as pdf:
    # Save the PDF with minimum version 1.7
    pdf.save(output_pdf, min_version="1.7")

print(f"✅ PDF version updated to 1.7 in '{output_pdf}'")
