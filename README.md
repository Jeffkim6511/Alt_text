🖼️ Alt Text

Alt Text is a simple, hackathon-built web tool that enhances image accessibility. With a single click, it helps users generate and insert descriptive text for images directly into an HTML file — improving web usability for screen readers and visually impaired users.
🚀 Features

    Adds a "Describe Image" button below each image on the page.

    On click, inserts a line of HTML that contains a short alt-text description.

    Encourages better accessibility practices in web development.

    Fast, minimal, and easy to integrate into any existing HTML page.

🛠️ How It Works

    Include the script in your HTML file.

    Each image on the page gets a "Describe Image" button beneath it.

    When the button is clicked, the script prompts the user to enter a description of the image.

    The entered text is appended to the HTML as a descriptive line (e.g., in a <p> tag or inserted into the image’s alt attribute).

📄 Example

<img src="dog.jpg" id="image1">
<button onclick="describeImage('image1')">Describe Image</button>
<p id="desc-image1"></p>

After clicking the button and entering a description like "A happy golden retriever in the park", the HTML becomes:

<p id="desc-image1">Description: A happy golden retriever in the park</p>
