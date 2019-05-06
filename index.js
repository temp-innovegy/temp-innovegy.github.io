

var array=[
{id:"#bfe",url:"https://www.felizemprendiendo.com"},
{id:"#tr",url:"https://demos.desarrollospyme.com/pw-trabajos.html"},
{id:"#nos-l",url:"#nos"},
{id:"#design",url:"https://demos.desarrollospyme.com/pw-trabajos.html?d=2"},
{id:"#face",url:"#"},
{id:"#insta",url:"#"},
,{id:"#pwi",url:"https://www.desarrollospyme.com/paginas-web#Paginas-institucionales"},
{id:"#pw24",url:"https://www.desarrollospyme.com/paginas-web#Paginas-24hs"},
{id:"#gM",url:"https://www.desarrollospyme.com/paginas-web#GoogleMaps"},
{id:"#price",url:"https://www.desarrollospyme.com/paginas-web#Precios"}]

array.forEach(element => {
    
    $(element.id).on("click",function(e){
        e.stopPropagation()
        window.location=element.url
    }) 
});
