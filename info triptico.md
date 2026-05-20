**Actúa como un desarrollador Frontend experto en React, Tailwind CSS y diseño de interfaces de usuario (UI). Necesito crear un componente que servirá como plantilla de impresión para un 'Tarjetón' (folleto de doble cara, tamaño Media Carta) para la presentación de mi proyecto universitario de ingeniería.**

**Requisitos del Layout y CSS:**

1. El contenedor principal debe simular una hoja tamaño Carta (Letter) en orientación horizontal (`w-[11in]` x `h-[8.5in]`).
2. Dentro, coloca dos contenedores iguales, uno al lado del otro (`w-[5.5in]` x `h-[8.5in]` cada uno). El contenedor izquierdo será la Cara Trasera y el derecho será la Cara Frontal.
3. Usa clases de Tailwind. El diseño debe ser moderno, limpio, con fondo blanco, textos en gris oscuro (`text-gray-800`) y acentos visuales en color púrpura o azul tecnológico. Dado que hay mucha información, utiliza tamaños de texto compactos (`text-xs` o `text-[10px]`) y organiza la cara trasera en un layout de tipo _grid_ de 2 columnas o tarjetas pequeñas.
4. Agrega reglas `@media print` para asegurar márgenes cero, ocultar botones de la web y forzar los colores de fondo (`print-color-adjust: exact`).
5. Usa la librería de íconos `lucide-react` para ilustrar cada punto técnico.
6. **Manejo de Imágenes Locales:** Usa la etiqueta `<img>`. Usa `src="/logo.png"` para el logo y `src="/tutor.png"` para la imagen del avatar sin fondo. Asegúrate de darles un tamaño adecuado.

**Contenido Exacto - Lado Derecho (Cara Frontal):**

- **Encabezado:** Coloca la imagen del logo (`/logo.png`) centrada. **Debajo, pon en negritas: "Nombre técnico: Aprendizaje Inmersivo con IA en Realidad extendida"**^^.
- **Gráfico Principal:** Coloca la imagen del tutor sin fondo (`/tutor.png`) destacada en el centro.
- **El Problema:** La enseñanza de ciencias experimentales enfrenta barreras por horarios de laboratorio, costos de reactivos y riesgos físicos^^^^^^^^. **Los alumnos interactúan muy poco con instrumentos de precisión**^^.
- **La Solución:** HoloTutorXR simula procedimientos guiados, seguros y repetibles, basados en el aprendizaje experiencial de Kolb y el constructivismo, reduciendo la carga cognitiva^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^.
- **Autores (Pie de página frontal, alineado abajo):**
  - Grupo: 8P
  - **Daniel Osmar Garcia Cataño - 20310363 **^^
  - **Samuel Gutierrez Barona - 22310388 **^^
  - **Yahir Armando Mendoza Rios - 22310371 **^^

**Contenido Exacto - Lado Izquierdo (Cara Trasera - Divide en 4 tarjetas/secciones compactas):**

- **1. Arquitectura XR (Ícono de Gafas VR):**
  - **Motor:** Godot Engine 4.3^^. **Ejecución \***standalone\* en Meta Quest 3, eliminando la necesidad de PC externa^^^^^^^^^^^^^^^^.
  - **Interacción:** OpenXR y Meta XR SDK^^^^^^^^^^^^. **Soporte de Passthrough (Realidad Mixta) y Hand Tracking óptico para manipulación de UI 3D y objetos físicos (Laser Pull)**^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^.
- **2. Tutor IA Conversacional (Ícono de Bot/Cerebro):**
  - **Integración con API de OpenAI (Whisper STT, GPT-4o, TTS)**^^.
  - **Contexto dinámico: La IA conoce el estado del experimento y guía al usuario**^^.
  - **Avatar 3D \***low-poly* (15k polígonos) con sincronía labial mediante *blendshapes\*^^^^^^^^.
- **3. Viabilidad y Modelo de Negocio (Ícono de Gráfica/Moneda):**
  - **Ahorro Institucional:** Elimina costos en reactivos, equipamiento e infraestructura física^^^^^^^^.
  - **Viabilidad de Mercado:** Nicho con baja competencia en plataformas XR standalone con IA^^. **El 60% de los usuarios potenciales aprueban el modelo**^^.
  - **Licenciamiento:** Modelo de monetización accesible (rango de 10 a 20 dólares) enfocado a instituciones educativas públicas y sector B2B/B2C^^.
- **4. Calidad y Validación (Ícono de Escudo/Check):**
  - **6 módulos interactivos evaluables (ej. pipeta volumétrica, balanza analítica)**^^.
  - **Rendimiento sostenido de 72 fps exigido por estándares VR para evitar cinetosis**^^^^^^^^^^^^^^^^^^.
  - **100% de aprobación técnica validada mediante 76 pruebas de software (Unitarias, Integración y Regresión)**^^^^^^^^.
