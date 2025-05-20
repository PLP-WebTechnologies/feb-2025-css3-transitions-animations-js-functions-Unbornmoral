// Get references to the button and color picker elements
const btn = document.getElementById('animateBtn');
const colorPicker = document.getElementById('colorPicker');

// --- Local Storage: Load saved color preference on page load ---
const savedColor = localStorage.getItem('btnColor'); // Retrieve saved color from localStorage
if (savedColor) {
    btn.style.backgroundColor = savedColor; // Apply saved color to button
    colorPicker.value = savedColor;        // Set color picker to saved color
}

// --- Local Storage: Save color preference when user picks a color ---
colorPicker.addEventListener('input', function() {
    btn.style.backgroundColor = this.value;           // Change button color immediately
    localStorage.setItem('btnColor', this.value);     // Store new color in localStorage
});

// --- Animation: Trigger CSS animation on button click ---
btn.addEventListener('click', function() {
    btn.classList.remove('animated'); // Remove class to reset animation
    void btn.offsetWidth;             // Force reflow to restart animation
    btn.classList.add('animated');    // Add class to trigger animation
});
