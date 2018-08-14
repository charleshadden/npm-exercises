"use strict";
(function() {

    beerBuilder();

    const app = document.getElementById('root');

    const container = document.createElement('div');
    container.setAttribute('class', 'container');

    app.appendChild(container);

    function beerBuilder() {

    let request = new XMLHttpRequest();
    request.open('GET', 'https://api.punkapi.com/v2/beers', true);

    request.onload = function () {

        let data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            data.forEach(beer => {

                const card = document.createElement('div');
                card.setAttribute('class', 'card');

                console.log(beer);

                // let html = "";
                //
                // html += `<div>`;
                // html += `<h1>${beer.name}</h1>`;
                // html += `<p>${beer.description}</p>`;
                // html += `<img src= ${beer.image_url}>`;
                // html += `</div>`;




                const h1 = document.createElement('h1');
                beer.name = beer.name.substring(0, 300);
                h1.textContent = `${beer.name}`;

                let img = document.createElement("img");
                img.src = beer.image_url;
                img.setAttribute('class', 'beerPhoto');


                const p = document.createElement('p');
                beer.description = beer.description.substring(0, 300);
                p.textContent = `${beer.description}`;

                container.appendChild(card);
                card.appendChild(h1);
                card.appendChild(p);
                card.appendChild(img);


            });
        } else {
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = `Not working!`;
            app.appendChild(errorMessage);
        }
    };

    request.send();
    }

}());
