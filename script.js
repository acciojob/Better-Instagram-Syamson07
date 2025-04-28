let draggedDiv = null;

// When drag starts
document.querySelectorAll('.draggable').forEach(div => {
  div.addEventListener('dragstart', (e) => {
    draggedDiv = e.target;
  });

  div.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  div.addEventListener('drop', (e) => {
    e.preventDefault();
    if (draggedDiv && draggedDiv !== e.currentTarget) {
      const draggedImg = draggedDiv.querySelector('img');
      const targetImg = e.currentTarget.querySelector('img');

      // Swap image src
      const tempSrc = draggedImg.src;
      draggedImg.src = targetImg.src;
      targetImg.src = tempSrc;
    }
  });
});
