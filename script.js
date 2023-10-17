let container=document.querySelector('#container');
let squareDiv;
let numberOfDivs;
let numberButtons=document.querySelector('#numberOfDivs');
let divArea;
numberButtons.addEventListener('click',()=>{
    divArea=1;
    func();
    numberOfDivs=parseInt(prompt('Enter number:'));
    divArea=numberOfDivs*numberOfDivs;
}
)
function func(){
for(let i=0;i<divArea;i++){
    squareDiv=document.createElement('div');
    squareDiv.setAttribute('class','squareDiv');
    container.appendChild(squareDiv);
};
let containerArea=640*640;
answer=Math.sqrt(containerArea/divArea);
let root=document.querySelector(':root');
let rootStyles=getComputedStyle(root);
root.style.setProperty('--n',answer);
let divs=document.querySelectorAll('.squareDiv');
let x,y,z;
divs.forEach((div)=>{
    div.addEventListener('mouseover',()=>{
        x=Math.floor(Math.random()*360)+1;
        y=Math.floor(Math.random()*360)+1;
        z=Math.floor(Math.random()*360)+1;
        div.style.cssText=`background:rgb(${x},${y},${z});`;
    });
});}