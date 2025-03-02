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

// a kert segedfuggvenyek

/**
 * label elem letrehozasa
 * @param {string} forCucc input elem azonositoja amire mutat a label
 * @param {string} text a label szovege
 * @returns {HTMLLabelElement} kesz label elem
 */
function createLabel(forCucc, text) { // label elem letrehozasa
    const label = document.createElement('label'); // label elem letrehozasa
    label.htmlFor = forCucc; // for beallitasa
    label.textContent = text; // szoveg beallitasa
    return label; // visszaadja a letrehozott elemet
}

/**
 * input elem letrehozasa
 * @param {string} id input elem azonosit o
 * @param {string} name input elem name attributuma
 * @returns {HTMLInputElement} kesz input elem
 */
function createInput(id, name) { // input elem letrehozasa
    const input = document.createElement('input'); // input elem letrehozasa
    input.type = 'text'; // tipus beallitasa
    input.id = id; // id beallitasa
    input.name = name; // nev beallitasa
    return input; // visszaadja a letrehozott elemet
}

/**
 * hibauzenet div letrehozasa
 * @param {string} id hibauzenet div azonositoja
 * @returns {HTMLDivElement} kesz hibauzenet div
 */
function createErrorDiv(id) { // hibauzenet div letrehozasa
    const div = document.createElement('div'); // div elem letrehozasa
    div.id = id; // id beallitasa
    div.className = 'error'; // class beallitasa
    return div; // visszaadja a letrehozott elemet
}

/**
 * komplett form mezo letrehozasa
 * @param {string} id a mezo azonositoja
 * @param {string} labelText a cimke szovege
 * @returns {HTMLDivElement} kesz form mezo container elem
 */
function createFormMezo(id, labelText) {
    const container = document.createElement('div'); // div elem letrehozasa a mezonek
    
    // label
    const label = createLabel(id, labelText); // label letrehozasa a createLabelel
    container.appendChild(label); // label hozzaadasa a containerhez
    container.appendChild(document.createElement('br')); // sortores hozzaadasa
    
    // input
    const input = createInput(id); // input letrehozasa a createInputtal
    container.appendChild(input); // input hozzaadasa a containerhez
    container.appendChild(document.createElement('br')); // sortores hozzaadasa
    container.appendChild(document.createElement('br')); // masodik sortores hozzaadasa
    
    // errordiv
    const errorDiv = createErrorDiv(id + '-error'); // errorDiv letrehozasa a createErrorDivel
    container.appendChild(errorDiv); // errorDiv hozzaadasa a containerhez
    container.appendChild(document.createElement('br')); // sortores hozzaadasa
    
    return container; // visszaadja a letrehozott mezot
}

/**
 * gomb (szab)
 * gomb elem a form szamara
 * @param {string} text a gomb szoveg
 * @returns {HTMLButtonElement} kesz gomb elem
 */
function createFormGomb(text) {
    const gomb = document.createElement('button'); // button elem letrehozasa
    gomb.textContent = text; // szoveg beallitasa
    return gomb; // visszaadja a letrehozott elemet
}

/**
 * input mezo erteke kitoltott vagy nem
 * @param {string} inputElem ellenorizendo input mezo ertek
 * @param {string} errorId hibauzenet id
 * @param {string} errorMessage megjelenites esetere a hibauzenet
 * @returns {boolean} igaz ha kitoltott hamis hanem
 */
function validateField(inputElem, errorId, errorMessage) { // validacios fuggveny definialasa
    let valid = true; // lokalis valid valtozo igaz ertekre allitasa
    if (inputElem === '') { // ha az input mezo ures
        const errorElement = document.getElementById(errorId); // hibauzenet elem kivalasztasa id alapjan
        if (errorElement) { // ha van ilyen hibauzenet elem 
            errorElement.innerHTML = errorMessage; // hibauzenet beallitasa
        }
        valid = false; // valid valtozo hamisra allitasa
    }
    return valid; // valid valtozo ertekenek visszaadasa
}

/**
 * masodik szerzo es mu ellenorzese
 * @param {string} szerzo2Ertek masodik szerzo mezoje
 * @param {string} szerzo2muErtek masodik szerzo muvenek mezoje
 * @returns {boolean} igaz ha mindketto kitoltott vagy mindketto ures de hamis egyebkent
 */
//osszetett validacio linearisan fuggvenybe rakasa
function validateSzerzok2(szerzo2Ertek, szerzo2muErtek) { // validacios fuggveny definialasa

    let valid = true; // valid valtozo igaz ertekre allitasa

    if (szerzo2Ertek !== '' && szerzo2muErtek === '') { // ha a szerzo2 kitöltött de a mu2 üres
        document.getElementById('szerzo2mu-error').innerHTML = 'A 2. szerző művét is meg kell adni!';
        valid = false; // valid valtozo hamisra allitasa
    }
    
    if (szerzo2Ertek === '' && szerzo2muErtek !== '') { // ha a szerzo2 üres de a mu2 kitöltött
        document.getElementById('szerzo2-error').innerHTML = 'A 2. szerzőt is meg kell adni!';
        valid = false; // valid valtozo hamisra allitasa
    }
    return valid; // valid valtozo ertekenek visszaadasa
}

/**
 * teljes form letrehozasa
 * @returns {HTMLFormElement} kesz form elem
 */
function createForm() { // form letrehozasa
    const form = document.createElement('form'); // form elem letrehozasa
    form.id = 'form'; // id beallitasa
    form.action = '#'; // action beallitasa
    
    const mezok = [ // mezok definialasa egy tombben
        { id: 'szarmazas', label: 'Származás:' }, // elso mezo
        { id: 'szerzo1', label: '1. szerző:' }, // masodik mezo
        { id: 'szerzo1mu', label: '1. szerző műve:' }, // harmadik mezo
        { id: 'szerzo2', label: '2. szerző:' }, // negyedik mezo
        { id: 'szerzo2mu', label: '2. szerző műve:' } // otodik mezo
    ];
    
    for (const mezo of mezok) { // vegigiteralas a mezokon
        const formMezo = createFormMezo(mezo.id, mezo.label); // mezo letrehozasa
        form.appendChild(formMezo); // mezo hozzaadasa a formhoz
    }
    
    // submit gomb(szab)
    const button = createFormGomb('Hozzáadás'); // gomb letrehozasa
    form.appendChild(button); // gomb hozzaadasa a formhoz
    
    // form esemenykezelo bekerul ide
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // alapertelmezett esemeny megakadalyozasa
        
        const szarmazasElem = document.getElementById('szarmazas'); // szarmazas input elem lekerese
        const szerzo1Elem = document.getElementById('szerzo1'); // szerzo1 input elem lekerese
        const szerzo1muElem = document.getElementById('szerzo1mu'); // szerzo1mu input elem lekerese
        const szerzo2Elem = document.getElementById('szerzo2'); // szerzo2 input elem lekerese
        const szerzo2muElem = document.getElementById('szerzo2mu'); // szerzo2mu input elem lekerese
    
        const thisForm = e.currentTarget; // az aktualis form elmentese
        const errorHtmlElements = thisForm.getElementsByClassName('error'); // hibauzenetek elemek lekerese
        for (const errorElement of errorHtmlElements) { // vegigmegy az osszes error elemen
            errorElement.innerHTML = ''; // az errorElement tartalmat uresre allitja
        }
    
        const szarmazasErtek = szarmazasElem.value; // szarmazas input kiolvasasa
        const szerzo1Ertek = szerzo1Elem.value; // szerzo1 input kiolvasasa
        const szerzo1muErtek = szerzo1muElem.value; // szerzo1mu input kiolvasasa
        const szerzo2Ertek = szerzo2Elem.value; // szerzo2 input kiolvasasa
        const szerzo2muErtek = szerzo2muElem.value; // szerzo2mu input kiolvasasa
    
        let valid = true; // validacios valtozo kezdeti ertekre allitasa
    
        if (!validateField(szarmazasErtek, 'szarmazas-error', 'A származás megadása kötelező!')) {
            valid = false; // validacios valtozo hamisra allitasa
        }
        
        if (!validateField(szerzo1Ertek, 'szerzo1-error', 'Az 1. szerző megadása kötelező!')) { 
            valid = false; // validacios valtozo hamisra allitasa
        }
        
        if (!validateField(szerzo1muErtek, 'szerzo1mu-error', 'Az 1. szerző művének megadása kötelező!')) { 
            valid = false; // validacios valtozo hamisra allitasa
        }
    
        if (!validateSzerzok2(szerzo2Ertek, szerzo2muErtek)) {
            valid = false; // ha nem valid akkor a valid valtozo false
        }
    
        if (valid) { // telenfonalas
            const ujElem = { // definialunk egy uj elemet
                nemzetiseg: szarmazasErtek, // nemzetiseg erteke a szarmazasErtek lesz
                szerzo1: szerzo1Ertek, // szerzo1 erteke a szerzo1Ertek lesz
                mu1: szerzo1muErtek, // mu1 erteke a szerzo1muErtek lesz
            };
            
            // ha van masodik szerzo
            if (szerzo2Ertek !== '' && szerzo2muErtek !== '') { // mindket masodik szerzo mezo ki van toltve
                ujElem.szerzo2 = szerzo2Ertek; // szerzo2 erteke a szerzo2Ertek lesz
                ujElem.mu2 = szerzo2muErtek; // mu2 erteke a szerzo2muErtek lesz
            }
            
            array.push(ujElem); // uj elem hozzaadasa a tombhoz
            menuContainer.innerHTML = ''; // tablazat tartalmanak torlese
            renderMenu(array); // tablazat ujrarajzolasa
            thisForm.reset(); // form resetelese
        }
    });

    return form; // visszaadja a letrehozott form elementet
}

/**
 * tablazat fejlec generalas
 * @param {HTMLTableElement} table table a tablazat elem
 * @param {Array} adatok az adatokat tartalmazo tomb
 */
function renderTableHeader(table, adatok) { // fejlec fuggveny definialasa
    const colgroup = document.createElement('colgroup'); // colgroup elem letrehozasa
    table.appendChild(colgroup); // hozzafuzes a tablazathoz

    const col1 = document.createElement('col'); // col1 elem letrehozasa
    col1.className = 'columbia'; // osztaly beallitas
    colgroup.appendChild(col1); // hozzafuzes a colgrouphoz

    const col2 = document.createElement('col'); // col2 elem letrehozasa
    colgroup.appendChild(col2); // hozzafuzes a colgrouphoz

    const col3 = document.createElement('col'); // col3 elem letrehozasa
    col3.className = 'columbia'; // osztaly beallitas
    colgroup.appendChild(col3); // hozzafuzes a colgrouphoz
    
    // fejlec letrehozasa
    const fejlec = document.createElement('thead'); // thead letrehozasa a tablazat fejlecehez
    table.appendChild(fejlec); // fejlec hozzafuzese a tablazathoz
    
    const fejlecSor = document.createElement('tr'); // tr elem letrehozasa a fejlec sorahoz
    fejlec.appendChild(fejlecSor); // sor hozzafuzese a fejlechez
    
// Ciklus a fejlec oszlopainak generalasahoz
    const fejlecOszlopok = [ // fejlec oszlopok definialasa
        { nev: 'nemzetiseg', szoveg: adatok[0].nemzetiseg}, // elso oszlop definialasa
        { nev: 'szerzo1', szoveg: adatok[0].szerzo1}, // masodik oszlop definialasa
        { nev: 'mu1', szoveg: adatok[0].mu1,} // harmadik oszlop definialasa
    ];
    for (const oszlop of fejlecOszlopok) { // vegigiteralas az oszlopokon
        const fejlecCella = document.createElement('th'); // th elem letrehozasa a fejlec cellahoz
        fejlecCella.innerHTML = oszlop.szoveg; // cella tartalmanak beallitasa
        fejlecSor.appendChild(fejlecCella); // cella hozzafuzese a fejlec sorhoz
    }
}

/**
 * teljes tablazat
 * @param {Array} adatok adatokat tombje
 */
function renderMenu(adatok) {
    const table = document.createElement('table'); // table elem letrehozasa
    menuContainer.appendChild(table); // hozzafuzes a menuContainer-hez

    renderTableHeader(table, adatok); // fejlec generalasa

    // torzs
    const torzs = document.createElement('tbody'); // tbody elem letrehozasa a tablazat torzsehez
    table.appendChild(torzs); // torzs hozzafuzese a tablazathoz

    // sorok
    for (let i = 1; i < adatok.length; i++) { // vegigiteralok az adatokon, az elso elemet kihagyva
        const currentElement = adatok[i]; // az aktualis elem elmentese

        const sor1 = document.createElement('tr'); // tr elem letrehozasa az uj sorhoz
        torzs.appendChild(sor1); // sor hozzafuzese a torzshoz

        const nemzetisegCella = document.createElement('td'); // td elem letrehozasa a nemzetiseg cellahoz
        nemzetisegCella.innerHTML = currentElement.nemzetiseg; // cella tartalma az aktualis elem nemzetiseg tulajdonsaga
        if (currentElement.szerzo2) { // ha van masodik szerzo
            nemzetisegCella.rowSpan = 2; // a cella osszevonasa ket sorra
        }
        sor1.appendChild(nemzetisegCella); // cella hozzafuzese a sorhoz

        const szerzo1Cella = document.createElement('td'); // td elem letrehozasa a szerzo1 cellahoz
        szerzo1Cella.innerHTML = currentElement.szerzo1; // cella tartalma az aktualis elem szerzo1 tulajdonsaga
        sor1.appendChild(szerzo1Cella); // cella hozzafuzese a sorhoz

        const mu1Cella = document.createElement('td'); // td elem letrehozasa a mu1 cellahoz
        mu1Cella.innerHTML = currentElement.mu1; // cella tartalma az aktualis elem mu1 tulajdonsaga
        sor1.appendChild(mu1Cella); // cella hozzafuzese a sorhoz
        
        if (currentElement.szerzo2) { // ha van masodik szerzo
            const sor2 = document.createElement('tr'); // tr elem letrehozasa a masodik sorhoz
            torzs.appendChild(sor2); // sor hozzafuzese a torzshoz
            
            const szerzo2Cella = document.createElement('td'); // td elem letrehozasa a szerzo2 cellahoz
            szerzo2Cella.innerHTML = currentElement.szerzo2; // cella tartalma az aktualis elem szerzo2 tulajdonsaga
            sor2.appendChild(szerzo2Cella); // cella hozzafuzese a sorhoz
            
            const mu2Cella = document.createElement('td'); // td elem letrehozasa a mu2 cellahoz
            mu2Cella.innerHTML = currentElement.mu2; // cella tartalma az aktualis elem mu2 tulajdonsaga
            sor2.appendChild(mu2Cella); // cella hozzafuzese a sorhoz
        }
    }
}
const formElement = createForm(); // form elem letrehozasa
document.body.insertBefore(formElement, menuContainer); // hozzafuzes a bodyhoz
renderMenu(array); // kezdeti render atadva az arrayt