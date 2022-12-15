// code to open resume pdf in google drive
function openPDF(){
    window.open("https://drive.google.com/file/d/1k2e07UUy_CJs55NrRxmzrgh0rwwwZk_k/view",'_blank');
}

// function animateSkills(){
//     const arr=document.getElementsByClassName("progress-bar");
//     // console.log("len="+arr.length+"arr="+arr);
//     for (let index = 0; index < arr.length; index++) {   
//         const progressBar=arr[index];
//         // console.log(progressBar);
//         (progressBar)=>
//         {
//             let innerBar=progressBar.innerHTML;
//             console.log(innerBar);
//             // console.log(innerBar.data-value);
//             // innerBar.style.width=
//         }
//     }
    // arr.forEach(bar => {
    //     bar.style.width=(bar[data-value]*3)+"px";
    // });
// }
// document.addEventListener('keydown',(scrollEvent)=>{
//     var i=0;
//     animateSkills();
//     // console.log("scrolling");
//     function animateSkills(){
//         const progressBarArr=document.getElementsByClassName("progress-bar");
//         for (let index = 0; index < progressBarArr.length; index++) {   
//             const progressBar=progressBarArr[index];
//             let interval=setInterval(progressing(i++), 10);
//             function progressing(i) 
//             {
//                 console.log("scrolling && progressing");
//                 console.log(progressBar.children[0].style.width);
//                 // for (let i = 0; i < progressBar.children[0].getAttribute("data-value"); i++) {
//                 // i+=;    
//                 console.log("i="+i);
//                 progressBar.children[0].style.width=i+"%";
//                 // }   
//                 // console.log(progressBar.children[0].style.width);
//                 console.log(progressBar.children[0].style.width)
//                 if(i==progressBar.children[0].getAttribute("data-value"))
//                 {
//                     i=0;
//                     interval=null;
//                 }
//                 // i+=1;
//             }
//             // progressBar.children[0].style.width=progressBar.children[0].getAttribute("data-value")+"%";
//             // console.log(progressBar.children[0].style.width);
//         }
//     };
    // const skillSection=document.getElementById("#skills");
    // console.log("while scrolling");
    // const skillsRectanglePos=sillSection.getBoundingClientRect();
    // const skillsDistFromTopLeft=skillsRectanglePos.top+window.scrollY;
    // console.log(skillSection.scrollX+","+skillSection.scrollY);
    // console.log("x="+scrollEvent.pageX+",y="+scrollEvent.pageY);
    // console.log("x="+window.scrollX+",y="+window.scrollY);//giving the current cursor's position
// });
// document.addEventListener('')
// console.log("x="+window.pageX+",y="+window.pageY);



//baffle animation
document.addEventListener('DOMContentLoaded', () => {
    makeProgress();
    document.cookie="name=Name; SameSite=Strict";
    const text = baffle(".data");
    text.set({
        characters : '{}&&||//^%░░▒ ▓██▓▓ ░/▒░█ ▓▒▓ <▓▓/< >█░▓ ▓░█ █▓█░ <░█░',
        speed: 120
    });
    text.start();
    text.reveal(4000);
    text.stop();
});

// function animateSkills(divEle,limit) {
//     // console.log("came to animation");
//     // var width = divEle.style.width;
//     console.log(width);
//     // var parentWidth = $('.xyz').offsetParent().width();
//     // var percent = Math.round(100 * width / parentWidth);
//     while (divEle.style.width==limit) {
//         divEle.style.width= (divEle.style.width+1)+"%"; 
//         console.log(divEle.style.width);  
//     }
// }
var b=null;
function makeProgress() 
{
    // const innerBarArr=Array.from(document.getElementsByClassName("inner-bar"));
    // // console.log(typeof innerBarArr);
    // for (const element in innerBarArr) {
    //    // console.log(innerBarArr[element].getAttribute("data-value"));
    //     // console.log(innerBarArr[element]);
    //     animateSkills(innerBarArr[element], innerBarArr[element].getAttribute("data-value"));
    // }
    
    const progress_bars = document.querySelectorAll('.inner-bar');
    progress_bars.forEach(
    bar => 
    {
        setTimeout(
        () => 
        {
            const size = bar.dataset.size;
            bar.style.width = size +"%";
        }, 1000);
    });
}