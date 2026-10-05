with open('D:/DIANA WEBSITE/frontend/src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('Hydration Quiz', 'Home Assessment')
content = content.replace('Hydration & EMF Assessment', 'Home Environment Assessment')

with open('D:/DIANA WEBSITE/frontend/src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print('Text Updated!')
