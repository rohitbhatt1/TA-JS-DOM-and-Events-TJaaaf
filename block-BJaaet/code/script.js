let form = document.querySelector("form");
let ul = document.querySelector("ul");
let input = document.querySelector("input");
let movies = [];

function deleteMovie(event) {
  let id = event.target.dataset.id;
  movies.splice(id, 1);
  event.target.parentElement.remove();
}

function handleSubmit(event) {
  event.preventDefault();
  let movie = event.target.elements.movieInput.value;

  // Create Array
  movies.push({
    name: movie,
    watched: false,
  });
  console.log(movies);

  // Create UI
  ul.innerHTML = "";
  movies.forEach((movie, i) => {
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    let label = document.createElement("label");
    let icon = document.createElement("i");
    checkbox.style.marginRight = "1rem";
    checkbox.type = "checkbox";
    checkbox.id = i;
    label.for = i;
    checkbox.checked = movies.watched;
    label.innerText = movie.name;
    icon.style.color = "red";
    icon.style.marginLeft = "2rem"
    icon.setAttribute("data-id", i);
    icon.classList.add("fas", "fa-times");
    li.append(checkbox, label, icon);
    li.style.borderBottom = "1px dashed white"
    li.style.marginBottom    = "1.5rem"
    
    li.classList.add("flex", "justify-start", "align-center");
    ul.append(li);

    input.value = "";
    // Deleting Movie
    icon.addEventListener("click", deleteMovie);
  });
}

form.addEventListener("submit", handleSubmit);