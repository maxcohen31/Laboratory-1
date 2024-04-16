interface FormaGeometrica {
    area: () => number,
    perimetro: () => number
}

class NessunaForma extends Error{}

class Rettangolo implements FormaGeometrica{
    protected _base:number
    protected _altezza:number
    constructor(_base:number, _altezza:number){
        this._base = _base
        this._altezza = _altezza
    }
    get base():number{
        return this._base
    }
    get altezza():number{
        return this._altezza
    }
    area():number{
        return this.base*this.altezza
    }
    perimetro():number{
        return (this.base + this.altezza) * 2
    }
}

class Quadrato extends Rettangolo{
    constructor(lato){
        super(lato,lato)
    }
    get lato():number{
        return this._base
    }

}

class Cerchio implements FormaGeometrica{
    private raggio : number
    constructor(raggio:number){
        this.raggio = raggio
    }
    area():number{
        return Math.PI*this.raggio**2
    }
    perimetro(): number{
        return Math.PI*this.raggio*2
    }
}

function sommaAreaRettangoli(forme : FormaGeometrica[]){
    if(forme.length == 0) throw new NessunaForma("Non ci sono forme")
    let somma:number = 0
    for(let f of forme){
        if(f instanceof Rettangolo){
            somma += f.area()
        }
    }
    return somma
}