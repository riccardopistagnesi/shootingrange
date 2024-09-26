const target = document.getElementById('target');
let redDots = []; // Array to keep track of red dots

target.addEventListener('click', (event) => {
  // Check if click is inside an existing red dot
  for (let i = redDots.length - 1; i >= 0; i--) {
    const redDot = redDots[i];
    if (
      event.clientX >= redDot.offsetLeft &&
      event.clientX <= redDot.offsetLeft + redDot.offsetWidth &&
      event.clientY >= redDot.offsetTop &&
      event.clientY <= redDot.offsetTop + redDot.offsetHeight
    ) {
      target.removeChild(redDot);
      redDots.splice(i, 1); // Remove from array
      return; // Stop further processing
    }
  }

  // If click is not inside a red dot, create a new one
  const redDot = document.createElement('div');
  redDot.style.width = '10px';
  redDot.style.height = '10px';
  redDot.style.backgroundColor = 'red';
  redDot.style.borderRadius = '50%';
  redDot.style.position = 'absolute';

  // Calculate the position accounting for scroll offset
  const scrollTop = target.scrollTop; // Get the scrollTop of the target container
  redDot.style.left = `${event.clientX - 5}px`;
  redDot.style.top = `${event.clientY - 5 + scrollTop}px`; // Add scrollTop to event.clientY

  target.appendChild(redDot);
  redDots.push(redDot); // Add to array
});