export default function Home() {

  const message: string = "Hello World"

  let a: AddEventListenerOptions;
  let b: NodeJS.Process

  let person: Person = {
    name: "Khris"
  }

  console.log(person.name)

  return (

    <div>{message}</div>
  )
}