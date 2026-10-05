import zipfile
import xml.etree.ElementTree as ET
import sys

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

print('--- WEB CONTENT 1 ---')
print(extract_text(r'C:\Users\Windows 10\Downloads\web content 1.docx'))
print('\n=================================\n')
print('--- WEB DESIGN REVIEW 1 ---')
print(extract_text(r'C:\Users\Windows 10\Downloads\Web Design review 1.docx'))
