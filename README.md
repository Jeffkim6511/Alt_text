# 🖼️ Alt Text

Alt Text is a simple, hackathon-built web tool that enhances image accessibility. With a single click, it helps users generate and insert descriptive text for images directly into an HTML file — improving web usability for screen readers and visually impaired users.

## 🚀 Features

- Adds a **"Describe Image"** button below each image on the page.
- On click, inserts a line of HTML that contains a short alt-text description.
- Encourages better accessibility practices in web development.
- Fast, minimal, and easy to integrate into any existing HTML page.

## 🛠️ How It Works
- Launch the application in your preferred code editor or development environment.
- Load an HTML page with images — each image will automatically have a "Describe Image" button appear beneath it.
- Click the button to generate a description — the image is sent to a Django backend, where an AI-powered image recognition model analyzes it and generates a descriptive text prompt.
- The AI-generated description is then inserted into the HTML, either as a <p> tag below the image or as the image's alt attribute, improving accessibility.
