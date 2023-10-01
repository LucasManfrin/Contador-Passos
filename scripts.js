function contar() {
    let ini = document.getElementById("input-inicio")
    let fim = document.getElementById("input-fim")
    let passo = document.getElementById("input-passo")
    let res = document.getElementById("res")
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = "Contando: "
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert("Passo inválido! Considerando PASSO 1")
            p = 1
        }
        if (i < f) {
            // Ordem Crescente
            for (let c = i; c <= f; c += p ) {
                res.innerHTML += `${c} `
            }
        } else {
            // Ordem Decrescente
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += `${c} `
            }
        }
        
    }
}