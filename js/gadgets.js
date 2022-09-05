fetchD()

            let slideIndex = 0;
            showSlides();
            
            function showSlides() {
              let i;
              let slides = document.getElementsByClassName("mySlides");
              let dots = document.getElementsByClassName("dot");
              for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
              }
              slideIndex++;
              if (slideIndex > slides.length) {slideIndex = 1}    
              for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
              }
              slides[slideIndex-1].style.display = "block";  
              dots[slideIndex-1].className += " active";
              setTimeout(showSlides, 2000); // Change image every 2 seconds
            }

            document.addEventListener('DOMContentLoaded', () => {
                document.getElementById("display").addEventListener('click', (e) => {
                  e.preventDefault
                })
                mydisplay()
              })
              function mydisplay() {
                var x = document.getElementById("row");
                if (x.style.display === "none") {
                  x.style.display = "block";
                } else {
                  x.style.display = "none";
               }
              }
              
              function fetchD() {
                fetch("https://my-json-server.typicode.com/D-Micheni/jsonapi/electronic")
                .then((resp) => resp.json())
                .then((data) => {
                  console.log(data);
                  data.forEach((elem)=>{
                  console.log(elem.image)
                  let column=document.createElement("div")
                  column.addEventListener("click", function(){ alert(elem.description); });
                  let row=document.getElementById("row")
                  column.className="column"
                  row.appendChild(column)
                  img=document.createElement("img")
                  img.src=elem.image
                  column.appendChild(img)
                  let header=document.createElement("p")
                  header.innerText=elem.title
                  column.appendChild(header)
                  let price=document.createElement("p")
                  price.innerText=elem.price + " Ksh"
                  column.appendChild(price)
                 })
                });
              }