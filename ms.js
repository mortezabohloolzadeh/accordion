function _acc(self) {
    let _li = document.querySelectorAll(".acc li")
    let _div_p = self.children
    
        for(i=0; i<_li.length; i++){
_li[i].children[1].style.display = "none"
_li[i].children[0].children[0].style.background = "brown"
_li[i].children[0].children[1].children[0].style.transform = 'rotate(0deg)'
        }
if(self.getAttribute("data-status") == "off"){
for(i=0; i<_li.length; i++){
_li[i].setAttribute("data-status", "off")
        }
        self.children[0].children[0].style.background = "yellow"
        self.children[0].children[1].children[0].style.transform = 'rotate(90deg)'
_div_p[1].style.display = "flex"
self.setAttribute("data-status", "on")
}
else if(self.getAttribute("data-status") == "on"){
for(i=0; i<_li.length; i++){
_li[i].children[1].style.display = "none"
_li[i].setAttribute("data-status", "off")
_li[i].children[0].children[0].style.background = "brown"
_li[i].children[0].children[1].children[0].style.transform = 'rotate(0deg)'

        }
                   
}
}

