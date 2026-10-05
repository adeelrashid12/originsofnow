from PIL import Image

img = Image.open('D:/DIANA WEBSITE/frontend/public/assets/logo_transparent_cropped.png')
# Convert to RGBA if not already
img = img.convert('RGBA')

# Get bounding box of the non-transparent alpha channel
bbox = img.getbbox()

# The icon is likely the top part. Let's crop the top half.
width, height = img.size
# Crop top 60%
icon_crop = img.crop((0, 0, width, int(height * 0.55)))

# Get bounding box of just the icon to remove empty space
icon_bbox = icon_crop.getbbox()
if icon_bbox:
    icon_crop = icon_crop.crop(icon_bbox)

# Make it a square for favicon
w, h = icon_crop.size
size = max(w, h)
square_img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
square_img.paste(icon_crop, ((size - w) // 2, (size - h) // 2))

square_img.save('D:/DIANA WEBSITE/frontend/src/app/icon.png')
print('Favicon updated successfully')
