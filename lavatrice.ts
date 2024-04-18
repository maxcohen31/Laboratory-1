enum TipoLavaggio{
    Intensivo = 90,
    Secco = 60,
    Delicati = 30
}

enum TipoTessuto{
    Cotone = 1.1,
    Seta = 2,
    Sintetico = 0.9,
    Lana = 1.75
}

type Lavaggio = [TipoTessuto, TipoLavaggio]

function processa(lavaggi: Lavaggio[]) : void {
    lavaggi.sort((a:Lavaggio, b:Lavaggio) => (a[0]*a[1]-b[0]*b[1]))
}

let a : Lavaggio[] = [
    [TipoTessuto.Cotone, TipoLavaggio.Delicati],
    [TipoTessuto.Lana, TipoLavaggio.Delicati],
    [TipoTessuto.Sintetico, TipoLavaggio.Intensivo],
    [TipoTessuto.Cotone, TipoLavaggio.Secco],
    [TipoTessuto.Sintetico, TipoLavaggio.Delicati],
    [TipoTessuto.Cotone, TipoLavaggio.Intensivo]
]
processa(a)
console.log(a)