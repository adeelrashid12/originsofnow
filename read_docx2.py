import zipfile
import xml.etree.ElementTree as ET

def extract_text(path):
    try:
        with zipfile.ZipFile(path) as z:
            xml_content = z.read('word/document.xml')
        tree = ET.fromstring(xml_content)
        ns = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
        paras = []
        for p in tree.findall('.//w:p', ns):
            texts = [node.text for node in p.findall('.//w:t', ns) if node.text]
            if texts:
                paras.append(''.join(texts))
        return '\n'.join(paras)
    except Exception as e:
        return f'Error reading {path}: {e}'

content1 = extract_text(r'C:\Users\Windows 10\Downloads\web content 1.docx')
content2 = extract_text(r'C:\Users\Windows 10\Downloads\Web Design review 1.docx')

with open('client_docs.txt', 'w', encoding='utf-8') as f:
    f.write('--- WEB CONTENT 1 ---\n')
    f.write(content1)
    f.write('\n\n=================================\n\n')
    f.write('--- WEB DESIGN REVIEW 1 ---\n')
    f.write(content2)
