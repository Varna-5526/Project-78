var img=["Varna.png" , "fsmily.jpg" , "2021-03-07.png" , "IMG_8790.jpg"];
var names=["Varna" , "Cousins" , "No Idea" , "Anu ma"];
var i=0;
function update()
{
i++;
var familyimages=3;
if (i > familyimages){
     i=0;
}
var updatedimages=img[i];
var updatednames=names[i];
document.getElementById("family_member_img").src=updatedimages;
document.getElementById("family_member_name").innerHTML=updatednames;
}