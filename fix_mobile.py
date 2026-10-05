with open("D:/DIANA WEBSITE/frontend/src/app/page.tsx", "r", encoding="utf-8") as f:
    content = f.read()

# Kangen Image Side
old_kangen = 'className="order-1 md:order-2 sticky top-32 relative rounded-[3rem] overflow-hidden shadow-2xl h-[600px] bg-white flex items-center justify-center p-8 border border-gray-100"'
new_kangen = 'className="order-1 md:order-2 md:sticky top-32 relative rounded-[3rem] overflow-hidden shadow-2xl h-[400px] md:h-[600px] bg-white flex items-center justify-center p-4 md:p-8 border border-gray-100 z-10"'

# emGuarde Image Side
old_emg = 'className="sticky top-32 relative w-full h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100"'
new_emg = 'className="md:sticky top-32 relative w-full h-[400px] md:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-gray-200 border border-gray-100 z-10"'

content = content.replace(old_kangen, new_kangen)
content = content.replace(old_emg, new_emg)

with open("D:/DIANA WEBSITE/frontend/src/app/page.tsx", "w", encoding="utf-8") as f:
    f.write(content)
print("Mobile sticky issue fixed!")
