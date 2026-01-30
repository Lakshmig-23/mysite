export default function decorate(block) {
  // Add a small effect on hover using JavaScript (optional)
  block.addEventListener('mouseenter', () => {
    console.log('Hover started on red text block');
  });

  block.addEventListener('mouseleave', () => {
    console.log('Hover ended on red text block');
  });
}
