# Documentación trabajo Belén
### La base de datos inicia fue esta: dragrace-database-CLEAN-FINAL-.xlsx#
### Nueva base de datos
Después se hizo otra nueva base, poniendo solo los estados de las concursan (no las ciudades) y el total de participantes que provienen de ahí a lo largo de las 17 temporadas.
### 1. Instalación y confguración de bibiotecas 
import pandas as pd

import altair as alt

from google.colab import files temporadas.
###  2. Cargar el archivo para que lo lea
df = pd.read_csv('nombre_del_archivo.csv')  
temporadas.
### 3. Limpieza y tipado de datos
df['Participantes'] = pd.to_numeric(df['Participantes'], errors='coerce')
df['Estados'] = df['Estados'].astype(str)
### 4. Generador de gráfico de barras
chart = alt.Chart(df).mark_bar().encode(
    x=alt.X('Estados:N', title='Estados'),
    y=alt.Y('Participantes:Q', title='Participantes'),
    tooltip=[
        alt.Tooltip('Participantes:Q', title='Participantes'),
        alt.Tooltip('Estados:N', title='Estado')
    ]
).properties(
    width=600,
    height=400,
    title='Cantidad de participantes por estado'
).interactive()

chart
