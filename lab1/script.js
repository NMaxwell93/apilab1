fetch("https://www.reddit.com/r/aww/.json")
  .then((response) => response.json())
  .then((data) => {
    const postSection = document.getElementById("posts");

    for (let postsData of data.data.children) {
      const createTitle = document.createElement("h2");
      createTitle.classList.add("title");
      createTitle.innerText = postsData.data.title;
      postSection.appendChild(createTitle);

      const images = document.createElement("img");
      images.classList.add("images");
      imageSrc = postsData.data.thumbnail;
      images.src = imageSrc;
      postSection.appendChild(images);

      const addLink = document.createElement("a");
      linkSource = postsData.data.url;
      addLink.setAttribute("href", linkSource);
      addLink.innerText = postsData.data.url;
      postSection.appendChild(addLink);
    }
  });
