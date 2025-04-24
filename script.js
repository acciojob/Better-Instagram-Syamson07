//your code here
document.addEventListener("DOMContentLoaded", () => {
  const divs = document.querySelectorAll(".image");

  divs.forEach(div => {
    div.addEventListener("dragstart", dragStart);
    div.addEventListener("dragover", dragOver);
    div.addEventListener("drop", drop);
    div.addEventListener("dragend", dragEnd);
  });

  let draggedElement = null;

  function dragStart(e) {
    draggedElement = e.target;
    setTimeout(() => {
      e.target.style.opacity = "0.5";
    }, 0);
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function drop(e) {
    e.preventDefault();
    if (draggedElement !== e.target) {
      // Swap images/content between divs
      const draggedImage = draggedElement.style.backgroundImage;
      draggedElement.style.backgroundImage = e.target.style.backgroundImage;
      e.target.style.backgroundImage = draggedImage;
    }
  }

  function dragEnd(e) {
    e.target.style.opacity = "1";
  }
});
