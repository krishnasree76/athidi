import fitz
import sys
import os

pdf_path = sys.argv[1]
output_prefix = sys.argv[2]
doc = fitz.open(pdf_path)

zoom = 2.0
mat = fitz.Matrix(zoom, zoom)

for i in range(len(doc)):
    page = doc.load_page(i)
    pix = page.get_pixmap(matrix=mat)
    out_file = f"{output_prefix}-{i+1}.png"
    pix.save(out_file)
    print(f"Saved {out_file}")
