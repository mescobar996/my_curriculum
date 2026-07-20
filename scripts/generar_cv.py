# -*- coding: utf-8 -*-
"""Genera public/cv-matias-escobar.pdf a partir del contenido real de my_curriculum (src/App.tsx, bloque 'es')."""
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import mm
from reportlab.lib.colors import HexColor
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
)

OUT = r"C:\Proyectos\my_curriculum\public\cv-matias-escobar.pdf"

SKY = HexColor("#0284c7")
DARK = HexColor("#0f172a")
GRAY = HexColor("#475569")
LIGHT_GRAY = HexColor("#94a3b8")

styles = getSampleStyleSheet()

name_style = ParagraphStyle("name", parent=styles["Title"], fontName="Helvetica-Bold",
                             fontSize=20, textColor=DARK, spaceAfter=1, alignment=TA_LEFT, leading=23)
role_style = ParagraphStyle("role", parent=styles["Normal"], fontName="Helvetica-Bold",
                             fontSize=11, textColor=SKY, spaceAfter=6)
contact_style = ParagraphStyle("contact", parent=styles["Normal"], fontName="Helvetica",
                                fontSize=8.5, textColor=GRAY, spaceAfter=10, leading=12)
section_style = ParagraphStyle("section", parent=styles["Normal"], fontName="Helvetica-Bold",
                                fontSize=11, textColor=DARK, spaceBefore=9, spaceAfter=4)
about_style = ParagraphStyle("about", parent=styles["Normal"], fontName="Helvetica",
                              fontSize=8.8, textColor=GRAY, leading=12.5, spaceAfter=2)
item_title_style = ParagraphStyle("item_title", parent=styles["Normal"], fontName="Helvetica-Bold",
                                   fontSize=9.5, textColor=DARK, spaceAfter=0)
item_sub_style = ParagraphStyle("item_sub", parent=styles["Normal"], fontName="Helvetica-Oblique",
                                 fontSize=8.3, textColor=SKY, spaceAfter=1)
item_body_style = ParagraphStyle("item_body", parent=styles["Normal"], fontName="Helvetica",
                                  fontSize=8.3, textColor=GRAY, leading=11.5, spaceAfter=4)
skill_style = ParagraphStyle("skill", parent=styles["Normal"], fontName="Helvetica",
                              fontSize=8.8, textColor=GRAY, leading=13)

story = []

# --- Header ---
story.append(Paragraph("Matías Alejandro Escobar", name_style))
story.append(Paragraph("Personal de la FFSS / Estudiante QA &mdash; Transición a QA Automation", role_style))
story.append(Paragraph(
    "Rosario, Argentina &nbsp;·&nbsp; Remoto / Reubicación &nbsp;·&nbsp; "
    "matialeescobar96@gmail.com &nbsp;·&nbsp; 3794-543712 &nbsp;·&nbsp; "
    '<link href="https://www.linkedin.com/in/matias-escobar-09241523a/" color="#0284c7">LinkedIn</link> &nbsp;·&nbsp; '
    '<link href="https://github.com/mescobar996" color="#0284c7">GitHub</link>',
    contact_style
))
story.append(HRFlowable(width="100%", thickness=1, color=LIGHT_GRAY, spaceAfter=6))

# --- Perfil ---
story.append(Paragraph("Perfil", section_style))
story.append(Paragraph(
    "Cuento con más de 9 años de experiencia como Oficial (PNA) en distintos entornos de alta exigencia y "
    "responsabilidad. Actualmente en transición hacia el mundo tech: estudio la Diplomatura en Control de "
    "Calidad de Software en UNTREF y me especializo en automatización de pruebas.",
    about_style
))

# --- Experiencia ---
story.append(Paragraph("Experiencia Laboral", section_style))
story.append(Paragraph("Oficial Subalterno &mdash; Prefectura Naval Argentina", item_title_style))
story.append(Paragraph("2017 &ndash; Presente", item_sub_style))
story.append(Paragraph("Actualmente cumpliendo funciones en la Prefectura de Zona Bajo Paraná (Rosario).", item_body_style))

# --- Educación ---
story.append(Paragraph("Educación", section_style))
education = [
    ("Licenciado en Seguridad Marítima", "Instituto Universitario de Seguridad Marítima", "2025"),
    ("Especialización en Gestión de la Seguridad Marítima y la Protección Portuaria", "Instituto Universitario de Seguridad Marítima", "2026 (En curso)"),
    ("Diplomatura en Control de Calidad de Software", "Universidad Nacional de Tres de Febrero", "2025 &ndash; 2026 (En curso)"),
]
for degree, inst, period in education:
    story.append(Paragraph(degree, item_title_style))
    story.append(Paragraph(f"{inst} &mdash; {period}", item_body_style))

# --- Proyectos ---
story.append(Paragraph("Proyectos Destacados", section_style))
projects = [
    ("Healify", "Detecta y repara selectores rotos en pruebas E2E automáticamente: analiza el fallo, genera "
                "una corrección con IA y abre un Pull Request en GitHub antes de que el equipo lo note.",
     "Next.js · TypeScript · Playwright · AI", "github.com/mescobar996/Healify"),
    ("QA Manual Pro", "Testing manual sobre un e-commerce demo: Test Plan completo, 32 casos de prueba "
                       "ejecutados y 10 bugs reales documentados con evidencia, severidad y prioridad "
                       "&mdash; incluyendo 2 defectos críticos que bloquean el checkout.",
     "Test Plan · Manual Testing · Bug Reporting", "github.com/mescobar996/qa-manual-ecommerce"),
    ("QA API Testing", "Colección de Postman con 15 requests y 34 assertions sobre una API REST, cubriendo "
                        "GET/POST/PUT/PATCH/DELETE con casos positivos y negativos. Corrida y verificada "
                        "con Newman: 0 fallos.",
     "Postman · Newman · API Testing", "github.com/mescobar996/qa-api-testing"),
]
for title, desc, tech, link in projects:
    story.append(Paragraph(title, item_title_style))
    story.append(Paragraph(desc, item_body_style))
    story.append(Paragraph(f"<i>{tech}</i> &nbsp;·&nbsp; {link}", item_sub_style))
    story.append(Spacer(1, 2))

# --- Habilidades ---
story.append(Paragraph("Habilidades", section_style))
skills_table = Table(
    [[Paragraph("<b>Hard Skills</b><br/>Python, Git, Playwright, Postman, API Testing, SQL", skill_style),
      Paragraph("<b>Soft Skills</b><br/>Metodologías Ágiles, Resolución de problemas, Trabajo en equipo, Adaptabilidad", skill_style)]],
    colWidths=[85 * mm, 85 * mm]
)
skills_table.setStyle(TableStyle([
    ("VALIGN", (0, 0), (-1, -1), "TOP"),
    ("LEFTPADDING", (0, 0), (-1, -1), 0),
    ("RIGHTPADDING", (0, 0), (-1, -1), 10),
]))
story.append(skills_table)

# --- Cursos y certificaciones ---
story.append(Paragraph("Cursos y Certificaciones", section_style))
courses = [
    ("Playwright JS/TS Automation Testing from Scratch & Framework", "Rahul Shetty Academy", "2026"),
    ("Google Cybersecurity Professional", "Coursera", "2025"),
    ("Gestión de Proyectos y Fundamentos de metodología Agile", "Santander Open Academy", "2025"),
]
for name, platform, year in courses:
    story.append(Paragraph(name, item_title_style))
    story.append(Paragraph(f"{platform} &mdash; {year}", item_body_style))

doc = SimpleDocTemplate(
    OUT, pagesize=A4,
    topMargin=14 * mm, bottomMargin=12 * mm, leftMargin=18 * mm, rightMargin=18 * mm,
    title="CV - Matías Escobar", author="Matías Escobar"
)
doc.build(story)
print("Generado:", OUT)
