<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ComfortPro - Office Swivel Chair</title>
    <link rel="stylesheet" href="landing page.css">
</head>
<body>
    <header>
        <h1>ComfortPro</h1>
        <p>Premium Office Swivel Chair</p>
    </header>
  <main>     
  <section class="product-display">
                                                                                                
        <img class="chair" src="download.webp">
        
           
        </section>

        <section class="features">
            <h2>Features</h2>
            <ul>
                <li>360° smooth rotation</li>
                <li>Adjustable height</li>
                <li>Comfortable head rest</li>
                <li>Accomodating lumbar support</li>
            </ul>
        </section>

        <button class="cta">Order Now ($100)</button>
    </main>

    <footer>


        <p>© 2025 ComfortPro Chairs</p>
    </footer>

    <script src="landingpage.js"></script>
</body>
</html>
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.6;
    color: #333;
}

header {
    background: #2c3e50;
    color: white;
    padding: 32px;
    text-align: center;
}

main {
    max-width: 600px;
    margin: 32px auto;
    padding: 0 16px;
}

.product-display {
    text-align: center;
   
}

.chair {
    position: relative;
    width: 350px;
    height: 350px;
    margin:32px;
}

.cta {
    display: block;
    width: 70%;
    padding: 16px;
    margin: 32px auto;
    background: #ad372a;
    color: white;
    font-size: 1.1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: all 0.3s ease;
      transition: color: 0.9s;   
}

.cta:hover{
 transform: translateY(-5px);
}

.cta:hover{
    background-color: #58130c;
}
.features {
    background: #f9f9f9;
    padding: 24px;
    border-radius: 5px;
    margin: 32px 0;
}

.features ul {
    padding-left: 24px;
}

footer {
    text-align: center;
    padding: 24px;
    background: #ecf0f1;
}

[Uploading landingpage.js…// Order button functionality
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
});]()

![download](https://github.com/user-attachments/assets/44b48b5e-99f5-465f-bf6a-42737d90f605)
