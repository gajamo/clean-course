
export abstract class Vehiculo {
    abstract getNumberOfSeats(): number;
}


export class Tesla extends Vehiculo{

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }

}

export class Audi extends Vehiculo{

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}

export class Toyota extends Vehiculo{

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats(): number {
        return this.numberOfSeats
    }
}

export class Honda extends Vehiculo{

    constructor( private numberOfSeats: number ) {
        super();
    }

    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}


export class Volvo extends Vehiculo{
    
    constructor( private numberOfSeats: number ){
        super();
    }

    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}

export class Ford extends Vehiculo{
    constructor( private numberOfSeats: number){
        super();
    }

    getNumberOfSeats(): number {
        return this.numberOfSeats;
    }
}
