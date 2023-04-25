const accoradion = document.getElementsByClassName('content-container');

for(i=0;i<accoradion.length;i++){
    accoradion[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}