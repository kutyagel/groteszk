const array = [ // tomb letrehozasa
    { // tomb elso elemenek letrehozasa
        nemzetiseg: "Nemzetiség", // elso elem nemzetiseg tulajdonsaganak erteke
        szerzo1: "Szerző", // elso elem szerzo1 tulajdonsaganak erteke
        mu1: "Mű" // elso elem mu1 tulajdonsaganak erteke
    },
    { // tomb masodik elemenek letrehozasa
        nemzetiseg: 'Orosz', // masodik elem nemzetiseg tulajdonsaganak erteke
        szerzo1: 'Gogol', // masodik elem szerzo1 tulajdonsaganak erteke
        mu1: 'A köpönyeg', // masodik elem mu1 tulajdonsaganak erteke
        szerzo2: 'Csehov', // masodik elem szerzo2 tulajdonsaganak erteke
        mu2: 'A csinovnyik halála' // masodik elem mu2 tulajdonsaganak erteke
    },
    { // tomb harmadik elemenek letrehozasa
        nemzetiseg: 'Cseh', // harmadik elem nemzetiseg tulajdonsaganak erteke
        szerzo1: 'Franz Kafka', // harmadik elem szerzo1 tulajdonsaganak erteke
        mu1: 'Az átváltozás' // harmadik elem mu1 tulajdonsaganak erteke
    },
    { // tomb negyedik elemenek letrehozasa
        nemzetiseg: 'Magyar', // negyedik elem nemzetiseg tulajdonsaganak erteke
        szerzo1: 'Örkény István', // negyedik elem szerzo1 tulajdonsaganak erteke
        mu1: 'Egyperces Novellák', // negyedik elem mu1 tulajdonsaganak erteke
        szerzo2: 'József Attila', // negyedik elem szerzo2 tulajdonsaganak erteke
        mu2: 'Klárisok' // negyedik elem mu2 tulajdonsaganak erteke
    },
    { // tomb otodik elemenek letrehozasa
        nemzetiseg: 'Svájc', // otodik elem nemzetiseg tulajdonsaganak erteke
        szerzo1: 'Friedrich Dürrenmatt', // otodik elem szerzo1 tulajdonsaganak erteke
        mu1: 'A fizikusok', // otodik elem mu1 tulajdonsaganak erteke
    }
];

const menuContainer = document.createElement('div'); // div elem letrehozasa ami a tartalmazza a tablazatot

document.body.appendChild(menuContainer); // hozzafuzes a bodyhoz

const formElement = createForm(); // form elem letrehozasa

document.body.insertBefore(formElement, menuContainer); // hozzafuzes a bodyhoz

renderMenu(array); // kezdeti render atadva az arrayt