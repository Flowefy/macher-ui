# Macher UI

**Macher UI** ist ein modulares, responsives React-UI-Framework, entwickelt von **flowefy** für digitale Macher, Startups und kreative Webprojekte. Es bietet eine umfangreiche Sammlung von individuell anpassbaren Komponenten – von Headern und Footern über Sections bis hin zu einzelnen UI-Elementen.

---

## Features

- ⚙️ **Modulare Komponenten:** Header, Footer, Hero Sections, Call-to-Action, Testimonials und viele weitere  
- 🎨 **Vollständig anpassbar:** Umfangreiche Props und Parameter für flexible Gestaltung  
- 📱 **Responsiv & mobil-optimiert:** Mobile-first-Design für alle Geräte  
- ⚡ **Performance-orientiert:** Sauberer, schlanker Code für schnelle Ladezeiten  
- 🔌 **Einfache Integration:** Perfekt für Startups, Landingpages und Web-Apps  

---

## Installation

```bash
npm install @flowefy/macher-ui
```

## Beispiel

```jsx
import React from "react";
import { Header, HeroSection, Footer } from "@flowefy/macher-ui";

function App() {
  return (
    <>
      <Header title="Willkommen bei Macher UI" links={["Home", "About", "Contact"]} />
      <HeroSection headline="Starte dein Projekt mit uns" description="Flexible Komponenten für dein Webdesign." />
      <Footer copyright="© 2025 flowefy" />
    </>
  );
}

export default App;
```

## License

Diese Software wird unter der Proprietary Non-Commercial License bereitgestellt.

Nutzung, Kopieren und Modifikation ist nur für nicht-kommerzielle Zwecke erlaubt.

Kommerzielle Nutzung und Weiterverbreitung nur mit schriftlicher Genehmigung von flowefy.

Siehe die Datei [LICENSE.md](https://github.com/Flowefy/macher-ui/blob/main/LICENSE.md) für Details.



