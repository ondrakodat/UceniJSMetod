document.getElementById("nactiData").addEventListener("click", getDataFromApi);

function getDataFromApi(){
    axios.get('http://localhost:8080/api/zamestnanec')
    .then(response => {
        naplnitData(response.data);
    }).catch(error => {console.error("Nastala chyba")});
};

function naplnitData(data){
    const tablebody = document.getElementById("tableBody");

    data.forEach(zamestnanec => {
        const radek = document.createElement("tr");


        const id = document.createElement("td");
        const jmeno = document.createElement("td");
        const prijmeni = document.createElement("td");
        const email = document.createElement("td");
        const detail = document.createElement("button");
        detail.classList.add("btn", "btn-danger");

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

        tablebody.appendChild(radek);


    })

}