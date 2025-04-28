let draggedDiv = null;

// When drag starts
document.querySelectorAll('.draggable').forEach(div => {
  div.addEventListener('dragstart', (e) => {
    draggedDiv = e.target;
  });

  // Allow dropping
  div.addEventListener('dragover', (e) => {
    e.preventDefault();
  });

  // Handle drop
  div.addEventListener('drop', (e) => {
    e.preventDefault();
    if (draggedDiv && draggedDiv !== e.target) {
      // Swap background images
      const temp = draggedDiv.style.backgroundImage;
      draggedDiv.style.backgroundImage = e.target.style.backgroundImage;
      e.target.style.backgroundImage = temp;
    }
  });
});
