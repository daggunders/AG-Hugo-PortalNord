# Implementeringsplan - Gjenskaping av PortalNord Forside

Denne planen beskriver hvordan vi vil gjenskape den flotte og moderne forsiden til PortalNord i Hugo, nøyaktig slik den vises på skjermbildet (`images_pn/portalnord-front.png`).

---

## 1. Teknisk Tilnærming og CSS-løsning

> [!IMPORTANT]
> **Tailwind CSS og Stil-integrasjon**:
> Siden prosjektet ikke har en aktiv Tailwind CSS-kompileringsprosess i dag, vil vi laste inn Tailwind CSS via den offisielle **Tailwind Play CDN** direkte i vår egne `layouts/index.html`. 
> Dette gjør at vi kan bruke standard Tailwind-klasser for å treffe nøyaktig på farger, avstander (padding/margin), skygger og full responsivitet, uten å forstyrre resten av PaperMod-temaet på andre undersider.

---

## 2. Planlagte Endringer

Vi vil opprette/oppdatere følgende filer i prosjektet ditt:

### A. Ressurser og Bilder
* **[NY] [portalnord-hero-bg.png](file:///C:/Users/Dag1/Backup/AI-Prosjekter-2026/AG-Hugo-PortalNord/static/images/portalnord-hero-bg.png)**
  * Et høyoppløselig, vakkert generert bakgrunnsbilde som matcher nordlyset og fjellandskapet som reflekteres i vannet fra skjermbildet ditt.

### B. Maler og Struktur
* **[NY] [index.html](file:///C:/Users/Dag1/Backup/AI-Prosjekter-2026/AG-Hugo-PortalNord/layouts/index.html)**
  * Dette blir vår egne forside-mal som overstyrer temaet kun for startsiden.
  * **Navigasjonsbar**: Logo (med fjell-SVG), lenker (HJEM, METODE, TJENESTER...), og en skarp grønn/turkis CTA-knapp ("SE LØSNINGER").
  * **Hero-seksjon**: Overskrift, undertekst, kulepunkter og den mørkegrønne knappen ("FÅ EN STRATEGISK VURDERING").
  * **Overlappende kort**: De tre hvite kortene ("Norsk Kvalitets-standard", "Fullt Eierskap", "Rask Mestring") med elegante skygger og tilpassede SVG-ikoner.
  * **Presisjons-seksjon**: Venstrekolonne med hvit bakgrunn og mørk tekst, og høyrekolonne med den stilige tidslinjen/steg-oversikten (01, 02, 03, checkmark).
  * **Mørk Midtdel**: Starter med en lekker SVG-silhuett av fjelltopper, og går over i en dyp mørkegrønn/sort bakgrunn. Inneholder de tre tjenestekortene med egne merkelapper ("PLATTFORM", "SØK...", "KOMMUNIKASJON"), og de to boksene nederst ("Tilpasset Din situasjon" og "FRA VISJON...").
  * **Footer**: Enkel sort bunnlinje med navigasjonslenker.

---

## 3. Verifisering og Test

1. Vi kjører opp Hugos lokale utviklingsserver med `hugo server`.
2. Vi sjekker at siden kompilerer feilfritt og kan forhåndsvises på `http://localhost:1313`.
3. Vi verifiserer at designet er responsivt og fungerer utmerket på mobil, nettbrett og PC.
