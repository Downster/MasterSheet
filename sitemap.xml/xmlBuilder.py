import xml.etree.ElementTree as ET
import areas

ET.register_namespace('',"http://www.sitemaps.org/schemas/sitemap/0.9")

tree = ET.parse('sitemap.xml')

root = tree.getroot()


urlEle = ET.SubElement(root, 'url')
locEle = ET.SubElement(urlEle, 'loc')
locEle.text = f'https://tacos.openbeta.io/areas/47667307-c0a0-5f50-873d-fffffffff'

b_xml = ET.tostring(root)

with open("sitemap.xml", "wb") as f:
    f.write(b_xml)
