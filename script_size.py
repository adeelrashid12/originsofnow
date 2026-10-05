from PIL import Image
import sys

try:
    img = Image.open('D:/DIANA WEBSITE/frontend/public/assets/logo_transparent_cropped.png')
    print(f'Size: {img.size}')
except Exception as e:
    print(f'Error: {e}')
