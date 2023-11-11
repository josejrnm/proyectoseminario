const height = document.querySelector('#height');
const consult = document.querySelector('#consult')
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area');

imgArea.addEventListener('click', function () {
	inputFile.click();
})

inputFile.addEventListener('change', function () {
	const image = this.files[0]
	if(image.size < 4000000) {
		const reader = new FileReader();
		reader.onload = ()=> {
			const allImg = imgArea.querySelectorAll('img');
			allImg.forEach(item=> item.remove());
			const imgUrl = reader.result;
			const img = document.createElement('img');
			img.src = imgUrl;
			imgArea.appendChild(img);
			imgArea.classList.add('active');
			imgArea.dataset.img = image.name;
            console.log(image);
		}
		reader.readAsDataURL(image);
	} else {
		alert("Image size more than 5MB");
	}
})

consult.addEventListener('click',function (params) {
    fetch('http://127.0.0.1:8000/img/photos', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
            })
        }).then(() => {
            setTextName('')
            setTextPassword('')
        })    
})