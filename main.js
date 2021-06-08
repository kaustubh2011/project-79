menu_list_array = ["Veg Margherita Pizza","Veg Supreme Pizza","Veg Extravaganza Pizza","Paneer tikka pizza","Deluxe veggie pizza"
                    ];

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>";
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++)
{
    htmldata=htmldata+'<li>'+menu_list_array[i]+'</li>';
}
htmldata=htmldata+'</ol>';
document.getElementById("display_menu").innerHTML=htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
//Complete the code

}

function add_top(){
//Complete the code
}