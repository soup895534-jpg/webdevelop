let demo = document.getElementById('demo');
fetch('http://localhost:3000/products')
    .then(res => res.json())
    .then(data =>{
        // console.log(data);
        data.forEach(item => {
            demo.innerHTML +=`
                <img src="image/${item.image}" alt"" width="300">  
            `;
        })
    }) 