---

title: Ubicaciones Predefinidas

description: Aprende cómo configurar rutas fijas, áreas y precios para que los clientes solo puedan reservar rutas de traslado específicas.

---

# Ubicaciones de Recogida y Entrega Predefinidas

Esta guía explica cómo configurar tu cuenta de Transfervista para que los clientes puedan **solo reservar traslados entre ubicaciones fijas específicas**, tales como:

* Aeropuerto → Hotel
* Hotel → Aeropuerto
* Cualquier otro par de puntos de destino predefinidos

Esta configuración es ideal para empresas que **no** ofrecen traslados a direcciones libres y quieren restringir las reservas a un conjunto limitado de rutas.

---

## 1. Agrega tus Vehículos

Antes de definir precios o rutas, debes agregar tus vehículos.

Todas las reglas de precios deben estar vinculadas al menos a un vehículo.

1. Ve a **Configuración → Vehículos**
2. Haz clic en **Agregar Vehículo**
3. Completa los detalles requeridos (capacidad, maletas, tipo de vehículo, etc.)
4. Guarda tu vehículo
5. Repite para cada vehículo adicional que operes

> **Importante:** No puedes crear reglas de precios a menos que existan vehículos.

---

## 2. Define tus Zonas de Disponibilidad

Las Zonas de Disponibilidad definen dónde tu empresa está autorizada a operar.

Los clientes *no* pueden reservar traslados fuera de estas zonas.

Para configurar:

1. Ve a **Configuración → Zonas de Disponibilidad**
2. Haz clic en **Crear Zona**
3. Dibuja una zona alrededor de tu primera ubicación (por ejemplo, un aeropuerto)
4. Crea una segunda zona alrededor de tu segunda ubicación (por ejemplo, un hotel)
5. Guarda ambas zonas

**Escenario de ejemplo:**

* Zona 1 → Aeropuerto de Antalya
* Zona 2 → Hotel Rixos Premium

Con estas zonas, el sistema permitirá reservas **solo entre estos dos puntos**.

---

## 3. Crea Áreas para Ubicaciones Fijas

Las áreas se usan para definir **puntos de recogida y entrega fijos** que aparecen:

* En el selector de direcciones del formulario de reservas
* En la Lista de Precios (cuando se usa precio por ruta)

Para configurar:

1. Ve a **Configuración → Áreas**
2. Crea un Área para tu primera ubicación (por ejemplo, Aeropuerto de Antalya)
3. Dibuja el límite o punto en el mapa
4. Habilita **Mostrar esta área en el selector de direcciones del formulario de reservas**
5. Repite para tu segunda ubicación (por ejemplo, Hotel Rixos Premium)
6. Guarda ambas áreas

---

## 4. Crea tus Reglas de Precios (Por Ruta)

Ahora que tus vehículos, zonas y áreas existen, configura tu precio fijo:

1. Ve a **Configuración → Lista de Precios**
2. Haz clic en **Nuevas Entradas**
3. Selecciona **Agregar Precios por Ruta**
4. Selecciona el vehículo al que deseas asignar un precio
5. Elige:

   * **Área de Recogida**
   * **Área de Entrega**
6. Ingresa tu precio fijo
7. Habilita **Ruta Inversa** para generar automáticamente el precio de regreso
8. Guarda

Repite para todos los vehículos o rutas adicionales.

---

## 5. Prueba tu Formulario de Reservas

Para verificar que todo funcione correctamente:

1. Abre la URL pública de tu formulario de reservas
2. Selecciona una ubicación de recogida
3. Asegúrate de que solo aparezcan tus áreas fijas definidas
4. Selecciona una ubicación de entrega
5. Comprueba que se muestre el precio correcto
6. Confirma que **no haya otras rutas ni opciones de dirección libre disponibles**

Si todo se configuró correctamente, los clientes solo podrán reservar las rutas que definiste explícitamente.

---

## Resumen

Para ofrecer traslados exclusivamente entre ubicaciones predefinidas, debes:

1. **Crear Vehículos** – el precio requiere al menos un vehículo
2. **Dibujar Zonas de Disponibilidad** – restringir los límites operativos
3. **Crear Áreas** – definir puntos fijos de recogida/entrega
4. **Agregar Reglas de Precios por Ruta** – asignar precios fijos a rutas específicas
5. **Probar tu Formulario de Reservas** – asegurar que solo tus rutas sean seleccionables

Con esta configuración, tu sistema de reservas admitirá **solo las rutas específicas que deseas**, con precios fijos y sin entradas de direcciones aleatorias.
