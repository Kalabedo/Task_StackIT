# Task StackIT

## Installation

Entwickelt und getestet wurde mit Mozilla Firefox.

- `npm install`
- `npm run dev`

## Anforderungen:

- 4h Zeit
- **Wichtig**! Komponentenentwicklung, Bewegung, Interaktion
- **Unwichtig**! Modellierung, Level Design
- Sinnvoller Projektaufbau
- Kommentare willkommen

## Aufgabe + Vorüberlegungen

### 🏛️ Setup

Vorgabe:

- Vite
- React + javascript
- React-three/fiber

Zusatz evtl:

- Leva (zum Testen)
- react-three/drei (Helpers)
- Character Controller [pmndrs/ecctrl](https://github.com/pmndrs/ecctrl)
- Physics [pmndrs/react-three-rapier](https://github.com/pmndrs/react-three-rapier)

Überlegungen:

- Vite als build tool, da bekannt
- Javascript, da schnellere Entwicklung und begrenzt Zeit
- Beim ersten durchlesen der Aufgabe evtl auch die Zusätzlichen dependencies.

### 🧊 3D Szene

- nur notwendiges
- Boden
- Licht
- Camera

Überlegungen:

- Szene sollte nur notwendiges enthalten: Boden (Floor 1), Boden (Floor 2), Rampe nach oben/unten, Plattform als Aufzug, Licht simple, Camera ergibt sich durch 3rd Person controller
- Evtl Erstellung Szene in Blender

### 🧍🏻3rd Person Controller

- Avatar oder Kapsel
- WASD Steuerung

Überlegungen:

- Character controller von pmdrs vor kurzem auf X gesehen
- Keine Erfahrung damit also erstmal nutzen, falls Zeit ist selbst versuchen
- Character erstmal Kapsel, falls Zeit: Animated char?

### 🛗 Aufzug mit Sensor-Trigger

- Beim Betreten Hochfahren
- Erst wenn Char Aufzug verlässt runterfahren
- Unten warten auf erneutes Betreten

Überlegungen:

- Raycast test ob character den Aufzug betritt, falls model wie Aufzug (ähnlich wie in echt)
- Oder nur Plattform (Plane) mit Test ob Char damit intersected

### 💠 Komponentenstruktur

- Wiederverwendbarkeit Aufzug

Überlegungen:

- Props die an die Aufzug Komponente gegeben werden machen die Komponente wiederverwendbar.
- Aufbau gut überlegen

### 🌟 Bonus

- Dynamisches Laden von 3D-Modellen
