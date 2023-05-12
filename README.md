# Cvičení: Vlastní DOM elementy

Cvičení do breakrooms pro kurz JavaScript 2 od Czechitas.

## 2. Kontakty

Vytvoříme aplikaci, která zobrazuje seznam kontaktů. U každého kontaktu budeme evidovat jméno, email a telefonní číslo.

- Založte si nový projekt příkazem

```javascript
npm init kodim-app@latest cviceni-kontakty-dom html-css-js
```

- Otevřete si ve VS Code vytvořenou složku `cviceni-kontakty-dom`.

- Vytvořte jednoduchou stránku s prázdným elementem `#app`.

- Uvnitř souboru `index.js` pomocí `document.createElement` vytvořte element `div` a uložte jej do proměnné `contact1`.

- Na váš element přidejte CSS třídu `contact`.

- Nastavte `innerHTML` vašeho elementu na následujicí obsah

```html
<span class="name">Jaromír Bystřina</span>
<span class="phone">+420 777 666 323</span>
<span class="email">lesni.bystrina@gmail.com</span>
```

- Vyberte ze stránky element `#app` a vložte do něj element s kontaktem.

- Stejným postupem přidejte na stránku ještě další dva kontakty `contact2` a `contact3`.

- Nepovinně si můžete pohrát se stylováním. U každého kontaktu se vám například může hodit takováto hezká [ikonka](https://kodim.cz/cms/assets/kurzy/daweb/js2/dom-elementy/cv-vlastni-elementy/cvlekce%3Ekontakty/contact.png).