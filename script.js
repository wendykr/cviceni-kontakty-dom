const appElm = document.querySelector('#app');

const contact1 = document.createElement('div');
const contact2 = document.createElement('div');
const contact3 = document.createElement('div');

contact1.classList.add('contact');
contact2.classList.add('contact');
contact3.classList.add('contact');

contact1.innerHTML = `
    <span class="icon"><img class="icon__img" src="https://kodim.cz/cms/assets/kurzy/daweb/js2/dom-elementy/cv-vlastni-elementy/cvlekce%3Ekontakty/contact.png"></span>
    <span class="name">Jaromír Bystřina</span>
    <span class="phone">+420 777 666 323</span>
    <span class="email">lesni.bystrina@gmail.com</span>
`;

contact2.innerHTML = `
    <span class="icon"><img class="icon__img" src="https://kodim.cz/cms/assets/kurzy/daweb/js2/dom-elementy/cv-vlastni-elementy/cvlekce%3Ekontakty/contact.png"></span>
    <span class="name">Lubomír Větvička</span>
    <span class="phone">+420 777 666 322</span>
    <span class="email">lucni.vetvicka@gmail.com</span>
`;

contact3.innerHTML = `
    <span class="icon"><img class="icon__img" src="https://kodim.cz/cms/assets/kurzy/daweb/js2/dom-elementy/cv-vlastni-elementy/cvlekce%3Ekontakty/contact.png"></span>
    <span class="name">Květoslav Voňavý</span>
    <span class="phone">+420 777 666 321</span>
    <span class="email">kvetina.vonavy@gmail.com</span>
`;

appElm.append(contact1, contact2, contact3);
