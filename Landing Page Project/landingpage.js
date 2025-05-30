// Order button functionality
document.querySelector('.cta').addEventListener('click', function() {
    const originalText = this.textContent;
    const originalColor = this.style.backgroundColor;
    
    // Visual feedback
    this.textContent = 'Added to Cart!';
    this.style.backgroundColor = '#27ae60'; 
    this.style.transform = 'scale(1.05)';
    
    // Revert after 2 seconds
    setTimeout(() => {
        this.textContent = originalText;
        this.style.backgroundColor = originalColor;
        this.style.transform = '';
    }, 2000);
});