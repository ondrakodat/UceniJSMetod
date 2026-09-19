document.getElementById("nactiData").addEventListener("click", getDataFromApi);

function getDataFromApi(){
    axios.get('http://localhost:8080/api/zamestnanec')
    .then(response => {
        naplnitData(response.data);
    }).catch(error => {console.error("Nastala chyba")});
};

function getDetailDataFromApi(id){
    axios.get(`http://localhost:8080/api/zamestnanec/${id}`)
    .then(response => {
        vypisDetaily(response.data);
    }).catch(error => {console.error("Nastala chyba při načítání detailu")});
}

function naplnitData(data){

    data.forEach(zamestnanec => {
        const radek = document.createElement("tr");


        const id = document.createElement("td");
        const jmeno = document.createElement("td");
        const prijmeni = document.createElement("td");
        const email = document.createElement("td");
        const detail = document.createElement("button");
        detail.classList.add("btn", "btn-danger");
        detail.addEventListener("click", () => {
            getDetailDataFromApi(zamestnanec.id);
        });

        id.textContent = zamestnanec.id;
        jmeno.textContent = zamestnanec.jmeno;
        prijmeni.textContent = zamestnanec.prijmeni;
        email.textContent = zamestnanec.email;
        detail.textContent = "Detail";

        radek.appendChild(id);
        radek.appendChild(jmeno);
        radek.appendChild(prijmeni);
        radek.appendChild(email);
        radek.appendChild(detail);

        document.getElementById("tableBody").appendChild(radek);

    })
}

function vypisDetaily(zamestnanec){
    const detailCard = document.getElementById("detailCard");
    detailCard.style.display = "block";
    const jmenoPrijmeni = document.getElementById("jmenoAprijmeni");
    const email = document.getElementById("email");

    jmenoPrijmeni.textContent = `${zamestnanec.jmeno}  ${zamestnanec.prijmeni}`;
    email.textContent = `${zamestnanec.email}`;
}





