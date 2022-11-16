type RaceCar = {
    name: string
    maxSpeed: 200
    team: string
}

type CityCar = {
    name: string
    maxSpeed: 100
    space: string
}

type Car = RaceCar | CityCar


export default function Play() {

    const car: RaceCar = {
        name: "Race Car",
        maxSpeed: 200,
        team: "Ferari"
    }

    const logCarInfo = (car: Car) => {
        console.log((car as CityCar).maxSpeed);

        switch (car.maxSpeed) {
            case 200:
                console.log(car.team);
                break;
            case 100:
                console.log(car)
                break;
            default:
                console.log(car)
        }
    }

    logCarInfo(car)
}