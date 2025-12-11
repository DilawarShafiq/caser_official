from PIL import Image
import os

try:
    img = Image.open("frontend/public/caser_logo.tif")
    img.save("frontend/public/caser_logo.png", "PNG")
    print("Conversion successful: frontend/public/caser_logo.png created")
except Exception as e:
    print(f"Error converting image: {e}")
