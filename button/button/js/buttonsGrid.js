var Button = document.createElement('button');
Button.id = 'btn';
Button.innerHTML = 0;
document.body.appendChild(Button);
var i = 0;
var btn = document.getElementById('btn');
btn.onclick= function() {
    i++;
    btn.innerHTML = i;
};
