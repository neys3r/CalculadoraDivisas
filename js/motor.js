document.querySelector("#b1").addEventListener("click",calculo.bind(this, "1"));
document.querySelector("#b2").addEventListener("click",calculo.bind(this, "2"));

function calculo(tipo)
{
    let cantidad = document.querySelector("#cantidad").value;
    let origen = document.querySelector("#origen").value;
    let destino = document.querySelector("#destino").value;

    let origen2 = document.querySelector("#origen");
    let destino2 = document.querySelector("#destino");
    let selected1 = origen2.options[origen2.selectedIndex].text;
    let selected2 = destino2.options[destino2.selectedIndex].text;

    let p1 = document.querySelector("#p1");
    let resultado = "";
    let = resultado2 = "";

    if(origen === "o1" && destino === "d2")
    {
        resultado = cantidad*0.93188859;
    }
    else if (origen === "o1" && destino === "d3")
    {
        resultado = cantidad*140.61797;
    }
    else if (origen === "o1" && destino === "d4")
    {
        resultado = cantidad*0.8099367;
    }
    else if (origen === "o2" && destino === "d1")
    {
        resultado = cantidad/0.93188859;
    }
    else if (origen === "o2" && destino === "d3")
    {
        resultado = cantidad*150.90489;
    }
    else if (origen === "o2" && destino === "d4")
    {
        resultado = cantidad*0.86915096;
    }
    else if (origen === "o3" && destino === "d1")
    {
        resultado = cantidad*0.0071110921;
    }
    else if (origen === "o3" && destino === "d2")
    {
        resultado = cantidad*0.0066266907;
    }
    else if (origen === "o3" && destino === "d4")
    {
        resultado = cantidad*0.0057595945;
    }
    else if (origen === "o4" && destino === "d1")
    {
        resultado = cantidad*1.2346515;
    }
    else if (origen === "o4" && destino === "d2")
    {
        resultado = cantidad*1.1505481;
    }
    else if (origen === "o4" && destino === "d3")
    {
        resultado = cantidad*173.62333;
    }

    if (tipo == "1") {
        resultado2 += cantidad + " DE " + selected1+ " SON "+ resultado + " DE " + selected2;
    } else if(tipo == "2"){
        //console.log("Tipo2");
        resultado = 1 / resultado;
        resultado2 += cantidad + " DE " + selected2+ " SON "+ resultado + " DE " + selected1;
    }

    p1.innerHTML = resultado2.toString();


}