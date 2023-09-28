const btn = document.querySelectorAll(".kotak");
let tabel =[[,,],[,,],[,,]];
let end = false;
let turn = 1;
let step = 0;

btn.forEach(function (e,a) {
	e.addEventListener('click', function () {
		if(end == false){
			let baris = e.value[0];
			let kolom = e.value[1];
			if (tabel[baris][kolom] === undefined) {
        step++;
				if (turn === 1) {
					e.classList.add("x");
					tabel[baris][kolom] = 1;
					turn++;
				}else{
					e.classList.add("o");
					tabel[baris][kolom] = 2;
					turn--;
				}
			}
			let check = cek();
			if (check != 0) {
				const name = document.getElementsByTagName('span')[0];
				name.innerHTML = check;
			}
		}
	})
})

function cek() {
	
	//line
	if (tabel[0][0] === 1 && tabel[0][1] === 1 && tabel[0][2] === 1) {end = true;return `player 1 WIN`;}
	if (tabel[0][0] === 2 && tabel[0][1] === 2 && tabel[0][2] === 2) {end = true;return `player 2 WIN`;}

	if (tabel[1][0] === 1 && tabel[1][1] === 1 && tabel[1][2] === 1) {end = true;return `player 1 WIN`;}
	if (tabel[1][0] === 2 && tabel[1][1] === 2 && tabel[1][2] === 2) {end = true;return `player 2 WIN`;}

	if (tabel[2][0] === 1 && tabel[2][1] === 1 && tabel[2][2] === 1) {end = true;return `player 1 WIN`;}
	if (tabel[2][0] === 2 && tabel[2][1] === 2 && tabel[2][2] === 2) {end = true;return `player 2 WIN`;}

	//column
	if (tabel[0][0] === 1 && tabel[1][0] === 1 && tabel[2][0] === 1) {end = true;return `player 1 WIN`;}
	if (tabel[0][0] === 2 && tabel[1][0] === 2 && tabel[2][0] === 2) {end = true;return `player 2 WIN`;}

	if (tabel[0][1] === 1 && tabel[1][1] === 1 && tabel[2][1] === 1) {end = true;return `player 1 WIN`;}
	if (tabel[0][1] === 2 && tabel[1][1] === 2 && tabel[2][1] === 2) {end = true;return `player 2 WIN`;}

	if (tabel[0][2] === 1 && tabel[1][2] === 1 && tabel[2][2] === 1) {end = true;return `player 1 WIN`;}
	if (tabel[0][2] === 2 && tabel[1][2] === 2 && tabel[2][2] === 2) {end = true;return `player 2 WIN`;}

	//diagonal
	if (tabel[0][0] === 1 && tabel[1][1] === 1 && tabel[2][2] === 1) {end = true;return `player 1 WIN`;}
	if (tabel[0][0] === 2 && tabel[1][1] === 2 && tabel[2][2] === 2) {end = true;return `player 2 WIN`;}

	if (tabel[0][2] === 1 && tabel[1][1] === 1 && tabel[2][0] === 1) {end = true;return `player 1 WIN`;}
	if (tabel[0][2] === 2 && tabel[1][1] === 2 && tabel[2][0] === 2) {end = true;return `player 2 WIN`;}

	if (step >= 9) {return "draw"}
	return 0;
}