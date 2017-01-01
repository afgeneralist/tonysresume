document.getElementById("unicorn").animate([
  // keyframes
  { transform: 'translateY(0px)' }, 
  { transform: 'translateY(-200px)' }
], { 
  // timing options
  delay: 5000,
  duration: 1000,
  iterations: Infinity
});