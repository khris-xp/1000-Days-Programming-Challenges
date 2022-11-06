// let page: any = "1";
// let pageNumber = page as string;
var someElement = document.querySelector('.foo');
someElement.addEventListener('blur', function (event) {
    var target = event.target;
    console.log("Event", target.value);
});
