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

function renderMenu() {
    const table = document.createElement('table'); // table elem letrehozasa
    menuContainer.appendChild(table); // hozzafuzes a menuContainer-hez

    const colgroup = document.createElement('colgroup'); // colgroup elem letrehozasa
    table.appendChild(colgroup); // hozzafuzes a tablazathoz

    const col1 = document.createElement('col'); // col1 elem letrehozasa
    col1.className = 'columbia'; // osztaly beallitas
    colgroup.appendChild(col1); // hozzafuzes a colgrouphoz

    const col2 = document.createElement('col'); // col2 elem letrehozasa
    colgroup.appendChild(col2); // hozzafuzes a colgrouphoz

    const col3 = document.createElement('col'); // co3l elem letrehozasa
    col3.className = 'columbia'; // osztaly beallitas
    colgroup.appendChild(col3); // hozzafuzes a colgrouphoz
    
    // fejlec letrehozasa
    const fejlec = document.createElement('thead'); // thead letrehozasa a tablazat fejlecehez
    table.appendChild(fejlec); // fejlec hozzafuzese a tablazathoz
    
    const fejlecSor = document.createElement('tr'); // tr elem letrehozasa a fejlec sorahoz
    fejlec.appendChild(fejlecSor); // sor hozzafuzese a fejlechez
    
    const fejlecCella1 = document.createElement('th'); // th elem letrehozasa az elso fejlec cellahoz
    fejlecCella1.innerHTML = array[0].nemzetiseg; // cella tartalma az elso elem nemzetiseg tulajdonsaga
    fejlecSor.appendChild(fejlecCella1); // cella hozzafuzese a fejlec sorhoz
    
    const fejlecCella2 = document.createElement('th'); // th elem letrehozasa a masodik fejlec cellahoz
    fejlecCella2.innerHTML = array[0].szerzo1; // cella tartalma az elso elem szerzo1 tulajdonsaga
    fejlecSor.appendChild(fejlecCella2); // cella hozzafuzese a fejlec sorhoz
    
    const fejlecCella3 = document.createElement('th'); // th elem letrehozasa a harmadik fejlec cellahoz
    fejlecCella3.innerHTML = array[0].mu1; // cella tartalma az elso elem mu1 tulajdonsaga
    fejlecSor.appendChild(fejlecCella3); // cella hozzafuzese a fejlec sorhoz
    
    // torzs
    const torzs = document.createElement('tbody'); // tbody elem letrehozasa a tablazat torzsehez
    table.appendChild(torzs); // torzs hozzafuzese a tablazathoz

    // sorok
    for (let i = 1; i < array.length; i++) { // vegigiteralok az arrayen, az elso elemet kihagyva
        const currentElement = array[i]; // az aktualis elem elmentese

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

renderMenu(); // kezdeti render

const form = document.getElementById('form'); // form elem lekerese ami a form idval van definialva

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

    //osszetett validacio linearisan
    if (szerzo2Ertek !== '' && szerzo2muErtek === '') { // ha a szerzo2 kitöltött de a mu2 üres
        document.getElementById('szerzo2mu-error').innerHTML = 'A 2. szerző művét is meg kell adni!';
        valid = false; // valid valtozo hamisra allitasa
    }
    
    if (szerzo2Ertek === '' && szerzo2muErtek !== '') { // ha a szerzo2 üres de a mu2 kitöltött
        document.getElementById('szerzo2-error').innerHTML = 'A 2. szerzőt is meg kell adni!';
        valid = false; // valid valtozo hamisra allitasa
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
        renderMenu(); // tablazat ujrarajzolasa
        thisForm.reset(); // form resetelese
    }
});