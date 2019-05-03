
var array=[
{id:"#site",url:"#"},
{id:"#tr",url:"#"},
{id:"#nos-l",url:"#nos"},
{id:"#design",url:"#"},
{id:"#face",url:"#"},
{id:"#insta",url:"#"}]

array.forEach(element => {
    
    $(element.id).on("click",function(e){
        e.stopPropagation()
        window.location=element.url
    }) 
});
