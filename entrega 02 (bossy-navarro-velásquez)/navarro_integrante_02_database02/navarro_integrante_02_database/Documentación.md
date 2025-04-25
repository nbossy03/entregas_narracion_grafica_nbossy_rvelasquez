# Documentación 
Para la construcción de esta base de datos sobre las ganadoras de las 17 temporadas de RuPaul’s Drag Race, se utilizaron diversas fuentes confiables que permitieran tanto obtener la información como verificar su veracidad:

**1. Wiki Fandom: 	Wiki Fandom (RuPaul’s Drag Race Wiki):** Esta fue la fuente principal, ya que presenta un desglose detallado del desempeño de cada participante por temporada, sus características, y datos como edad, signo zodiacal, tipo de drag que realiza, entre otros. Elegimos esta fuente porque se actualiza constantemente, tiene una estructura clara y permite acceder fácilmente a información específica, con referencias cruzadas.
m

**2. The Daily Tar Heel, The Wrap y Sentido G:** Estas fuentes periodísticas se usaron para complementar y verificar los datos obtenidos desde la Wiki. Por ejemplo, en algunos casos donde las edades no estaban claras o había contradicciones, se recurrió a artículos específicos que analizaban la trayectoria de cada ganadora o hacían reportajes especiales sobre los hitos del programa. La diversidad de medios también aportó una visión más amplia sobre los estilos de drag y los contextos culturales de las ganadoras.
### Una vez recopilada la información, se procedió a ordenarla y limpiarla para asegurar su utilidad y coherencia. El proceso de limpieza incluyó los siguientes pasos:
**a. Recolección y volcado en Excel:**
Los datos se traspasaron manualmente a una tabla de Excel con las siguientes columnas: season, winners, age, zodiac_sign, ethnicity y type_drag. La información se extrajo desde múltiples artículos y páginas, y se consolidó en esta única fuente para facilitar el análisis.

**b. Cálculo de edad de las ganadoras:**
En algunos casos, la edad al momento de ganar no estaba publicada directamente. Para resolver esto, se calculó utilizando la fórmula:
Edad = Año de la temporada - Año de nacimiento de la ganadora
Esta operación se realizó utilizando una calculadora, y los resultados fueron incorporados directamente en la columna “age”.

**c. Unificación de categorías:**
Uno de los principales desafíos fue estandarizar los valores en las columnas ethnicity y type_drag, ya que algunas fuentes usaban descripciones distintas para referirse a lo mismo. Por ejemplo:

* “Latina” y “Hispanic” se unificaron como Hispanic
* “Mixed race” fue acortado a Mixed
* Tipos de drag como “Pageant queen”, “Pageant”, “Pageantry” se consolidaron como Pageant

Se optó por una codificación homogénea y lo más representativa posible para evitar ambigüedades. También se cuidó que las etiquetas fueran en inglés, ya que era el idioma original de las fuentes y permite mayor compatibilidad con herramientas como Excel y phyton.

### Estás son algunas de las preguntas que se pueden responder con la tabla:
*1. ¿Existe alguna relación entre la edad de las ganadoras y el tipo de drag que hacen?*

*2. ¿Cuál es el signo zodiacal más común entre las ganadoras?*

*3. ¿Cuántas ganadoras son de etnia Black?*

*4. ¿Cuál ha sido la ganadora más joven?*

*5. ¿Qué tipo de drag a ganado más veces?* 
