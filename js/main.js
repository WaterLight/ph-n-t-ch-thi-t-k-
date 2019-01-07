
var thoiGian = document.getElementById('thoi-gian');

thoiGian.addEventListener('click', onclick);

var save = [];
var b = -1;

function onclick(event) {
	var button = event.target;
	var btn = document.getElementsByClassName('number');
	var i = parseInt(button.dataset.id);
	save.push(i);

	if (save.length > 1) {
		b++;
		var a = save[b];
		btn[a].style.backgroundColor = '#fff';
		btn[a].style.color = '#000';
	}
	btn[i].style.backgroundColor = '#000';
	btn[i].style.color = '#fff';
}
