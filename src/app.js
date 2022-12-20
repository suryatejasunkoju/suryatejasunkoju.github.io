// code to open resume pdf in google drive
function openPDF(){
    window.open("https://drive.google.com/file/d/1k2e07UUy_CJs55NrRxmzrgh0rwwwZk_k/view",'_blank');
}

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
function makeProgress() 
{
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