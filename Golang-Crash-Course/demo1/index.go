package main

import (
	"fmt"
)

func main() {
	var arr1 = [4]string{"Hello", "John", "Doe", "Jane"}
	fmt.Println(arr1)
	exercise1()
	exercise2()
	exercise3()
}

func exercise1() {
	var cars = [4]string{"Volvo", "BMW", "Ford", "Mazda"}
	fmt.Println(cars)
}

func exercise2() {
	var cars = [4]string{"Volvo", "BMW", "Ford", "Mazda"}
	fmt.Println(cars[1])
}

func exercise3() {
	var cars = [4]string{"Volvo", "BMW", "Ford", "Mazda"}
	cars[0] = "Opel"
	fmt.Println(cars)
}

// func exercise3() {
// 	var x = 5
// 	var y = 10
// 	var z = x + y
// 	fmt.Println(z)
// }

// func exercise4() {
// 	var x, y, z = 5, 10, 15
// 	fmt.Println(x, y, z)
// }
