with open("D:/DIANA WEBSITE/frontend/src/app/page.tsx", "r", encoding="utf-8") as f:
    content = f.read()

content = content.replace("const fadeUp = {", "const fadeUp: any = {")

with open("D:/DIANA WEBSITE/frontend/src/app/page.tsx", "w", encoding="utf-8") as f:
    f.write(content)
print("Fixed!")
