function myFunction(){
    let jmeno = "Ondra";
    jmeno = "Bohumil";
    const prijmeni = "Kodat";
    document.getElementById("demo").innerHTML = "Jmeno: " + jmeno + "<br> Prijmeni: " + prijmeni;
}

function pozdrav(){
    let jmeno = document.getElementById("inputJmeno").value;
    let delka = jmeno.length;
    let zmenaJmenaNaPozdrav = jmeno.substring(0,delka-1);
    let kontrola = kontrolaJmeno(jmeno);
    if(kontrola == false){
        return;
    }
    
    let prijmeni = document.getElementById("inputPrijmeni").value;
    document.getElementById("demo").innerHTML = "Ahoj: " + zmenaJmenaNaPozdrav + "o " + prijmeni + "e.";

}

function kontrolaJmeno(jmeno){
    let delka = jmeno.length;
    if (delka < 3){
        alert("Jmeno je moc kratke");
        return false;
    }
    let obsahujeMezetu = jmeno.incldes(" ");
    if(obsahujeMezetu){
        alert("Jmeno nesmi obsahovat mezery");
        return false;
    }else {
        return true;
    }

}