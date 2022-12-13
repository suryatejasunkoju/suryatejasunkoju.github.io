function openPDF(){
    window.open("https://drive.google.com/file/d/1k2e07UUy_CJs55NrRxmzrgh0rwwwZk_k/view",'_blank');
}
function animateSkills(){
    const arr=document.getElementsByClassName("progress-bar");
    // console.log("len="+arr.length+"arr="+arr);
    for (let index = 0; index < arr.length; index++) {   
        const progressBar=arr[index];
        // console.log(progressBar);
        (progressBar)=>
        {
            let innerBar=progressBar.innerHTML;
            console.log(innerBar);
            // console.log(innerBar.data-value);
            // innerBar.style.width=
        }
    }
    // arr.forEach(bar => {
    //     bar.style.width=(bar[data-value]*3)+"px";
    // });
}
var i=0;
document.addEventListener('keydown',(scrollEvent)=>{
    animateSkills();
    // console.log("scrolling");
    function animateSkills(){
        const progressBarArr=document.getElementsByClassName("progress-bar");
        for (let index = 0; index < progressBarArr.length; index++) {   
            const progressBar=progressBarArr[index];
            let interval=setInterval(100,progressing(i++));
            function progressing(i) 
            {
                console.log("scrolling && progressing");
                console.log(progressBar.children[0].style.width);
                // for (let i = 0; i < progressBar.children[0].getAttribute("data-value"); i++) {
                // i+=;    
                console.log("i="+i);
                progressBar.children[0].style.width=i+"%";
                // }   
                // console.log(progressBar.children[0].style.width);
                console.log(progressBar.children[0].style.width)
                if(i==progressBar.children[0].getAttribute("data-value"))
                {
                    i=0;
                    interval=null;
                }
                // i+=1;
            }
            // progressBar.children[0].style.width=progressBar.children[0].getAttribute("data-value")+"%";
            // console.log(progressBar.children[0].style.width);
        }
    };
    const skillSection=document.getElementById("#skills");
    // console.log("while scrolling");
    // const skillsRectanglePos=sillSection.getBoundingClientRect();
    // const skillsDistFromTopLeft=skillsRectanglePos.top+window.scrollY;
    // console.log(skillSection.scrollX+","+skillSection.scrollY);
    // console.log("x="+scrollEvent.pageX+",y="+scrollEvent.pageY);
    // console.log("x="+window.scrollX+",y="+window.scrollY);//giving the current cursor's position
});
// document.addEventListener('')
// console.log("x="+window.pageX+",y="+window.pageY);
document.addEventListener('DOMContentLoaded', () => {
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
