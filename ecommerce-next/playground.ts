type RaceCar = {
    name: string
    maxSpeed: number
}

type CityCar = {
    name: string
    space: string
}


export default function Play() {

    const logCarInfo = (car: RaceCar | CityCar) => {
        console.log(car.name);
    }

}