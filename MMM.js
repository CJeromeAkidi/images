
function checkPassword() {
    var password = document.getElementById("password").value;
    var correctPassword = "chiagozie";
    var message = document.getElementById("message");
    var content = document.getElementById("content");
    var gallery = document.getElementById("gallery");
    if (password === correctPassword){
        message.textContent = "Password is correct!";
        message.style.color = "green";
        content.style.display = "block";
        gallery.style.display = "block";
        } 
        else {
        message.textContent = "Incorrect password. Please try again.";
        message.style.color = "red";
        content.style.display = "none";
        gallery.style.display = "none";
    }
}