// let page: any = "1";
// let pageNumber = page as string;

const someElement = document.querySelector('.foo') as HTMLInputElement;

someElement.addEventListener('blur', (event) => {
    const target = event.target as HTMLInputElement
    console.log("Event", target.value);
})