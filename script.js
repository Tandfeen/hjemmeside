const veggieData = [
    { name: 'Agurker', image: 'cucumber.jpg', bgColor: '#4CAF50' },
    { name: 'Tomater', image: 'tomatoes.jpg', bgColor: '#FF6347' }
    // Add more vegetable data here
  ];
  
  let current = 0;
  
  function changeVeggie() {
    // Fade out the image and description
    const image = document.getElementById('veggieImage');
    const desc = document.getElementById('veggieDesc');
    const btn = document.getElementById('veggieBtn');
    const showcase = document.querySelector('.showcase');
    image.style.opacity = '0';
    desc.style.transform = 'rotateX(90deg)';
    desc.style.opacity = '0';
  
    setTimeout(() => {
      // Change the content
      const veggie = veggieData[current];
      image.src = veggie.image;
      image.alt = veggie.name;
      document.getElementById('veggieName').textContent = veggie.name;
      btn.textContent = veggie.name;
      showcase.style.backgroundColor = veggie.bgColor;
  
      // Rotate and fade in the new content
      desc.style.transform = 'rotateX(0)';
      desc.style.opacity = '1';
      image.style.opacity = '1';
  
      // Prepare for next change
      current = (current + 1) % veggieData.length;
    }, 1000); // This should be less than the interval time to ensure content is ready
  }
  
  // Initial display
  changeVeggie();
  
  // Set interval for changing veggies
  setInterval(changeVeggie, 10000);
  