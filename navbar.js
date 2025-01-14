function replace() {
    var replace = document.getElementById(`replace`);
    var nav = document.createElement('div');
    nav.className = "topnav"
    nav.innerHTML = `<a href="index.html">Home</a>   <a href="contact.html">Contact</a>   <a href="join.html">Apply</a>   <a href="about.html">About</a>   <a href="javascript:void(0);" class="icon" onclick="myFunction()">       </a> `
    replace.appendChild(nav)
}