import re

with open('D:/DIANA WEBSITE/frontend/src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace colors
content = content.replace('#d4af37', '#6B8E7B')  # Gold -> Sage Green
content = content.replace('#b5952f', '#5A7A68')  # Dark Gold -> Darker Sage
content = content.replace('#eadd87', '#9CCCA5')  # Light Gold -> Lighter Sage
content = content.replace('#0a110e', '#1C2826')  # Very Dark -> Deep Forest Green
content = content.replace('#1a2b23', '#273832')  # Dark -> Forest Green
content = content.replace('bg-gray-900', 'bg-[#1C2826]')
content = content.replace('text-gray-900', 'text-[#1C2826]')
content = content.replace('bg-black', 'bg-[#F4F1EA]') # Video section bg

# Text changes
content = content.replace('Our Tech', 'Foundations')
content = content.replace('Intelligent Hydration', 'Structured Hydration')

with open('D:/DIANA WEBSITE/frontend/src/app/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print('Replaced globally!')
