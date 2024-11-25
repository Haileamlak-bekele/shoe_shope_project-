/* for aboutpage*/
function changePumaBg(){
    const puma=[
        'url("./images/puma2.png")',
        'url("./images/puma3.png")',
        'url("./images/puma4.png")',
        'url("./images/puma5.png")',
        'url("./images/puma2.png")',
        'url("./images/PUMA1.png")'
    ]
    const container1=document.querySelector(".container1")
    const pumaBg=puma[Math.floor(Math.random()*puma.length)];
    container1.style.backgroundImage=pumaBg;

}
setInterval(changePumaBg,1000)


function changeNikeBg(){
    const nike=[
        'url("./images/nike2.png")',
        'url("./images/NIKE1.png")',
        'url("./images/nike4.png")',
        'url("./images/NIKE1.png")',
        'url("./images/nike4.png")',
        'url("./images/NIKE.png")'
    ]
    const container2=document.querySelector(".container2")
    const nikeBg=nike[Math.floor(Math.random()*nike.length)];
    container2.style.backgroundImage=nikeBg;

}
setInterval(changeNikeBg,1000)

function changeJordanBg(){
    const jordan=[
        'url("./images/jordan2.png")',
        'url("./images/JORDAN1.png")',
        'url("./images/jordan2.png")',
        'url("./images/JORDAN.png")',
        'url("./images/JORDAN1.png")',
        'url("./images/JORDAN2.png")'
    ]
    const container3=document.querySelector(".container3")
    const jordanBg=jordan[Math.floor(Math.random()*jordan.length)];
    container3.style.backgroundImage=jordanBg;

}
setInterval(changeJordanBg,1000)
