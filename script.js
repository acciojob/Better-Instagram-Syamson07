let draggedDiv = null;

document.querySelectorAll('.pic').forEach(div => {
  div.addEventListener('dragstart', e => {
    draggedDiv = e.target;
  });

  div.addEventListener('dragover', e => {
    e.preventDefault(); // necessary to allow dropping
  });

  div.addEventListener('drop', e => {
    if (draggedDiv && draggedDiv !== e.target) {
      // Swap background images
      const temp = draggedDiv.style.backgroundImage;
      draggedDiv.style.backgroundImage = e.target.style.backgroundImage;
      e.target.style.backgroundImage = temp;
    }
  });
});
