// $(function () {
//     $('#name').keyup(function () {
//         $('#greet').text('Hello ' + $('#name').val());
//     })
// })

document.getElementById('name').addEventListener('keyup',changeHeading);


function changeHeading(){
    let text = document.getElementById('name').value;
    document.getElementById('greet').innerText = `Hello ${text}`;
}