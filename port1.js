document.addEventListener('DOMContentLoaded',function(){
    const content = document.getElementById('main2');
    const originalcontent=content;
    function loadpage(page){
        switch (page){
            case 'about':
                content.innerHTML=
                <h1>this is inner html</h1>
        }
    }
    document.getElementById('home').addEventListener('mouseover',function(event){
        event.preventDefault();
        loadpage=originalcontent;
    })
    document.getElementById('about').addEventListener('mouseover',function(event){
        event.preventDefault();
        loadpage('about');
    })
})