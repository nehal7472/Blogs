📘 Simple Blog App
A modern blog listing app built with React and Tailwind CSS, featuring:

📚 Bookmarking system

⏱ Reading time tracker

🌗 Dark/light mode support

🚀 Features
📰 View a list of curated tech blogs

⭐ Bookmark your favorite articles

🕒 Track total reading time

🎨 Switch between light and dark mode

💡 Responsive and clean UI

📁 Project Structure
├── public/
│   ├── nav-pic.png
│   └── blogs.js
├── src/
│   ├── components/
│   │   ├── Blog.jsx
│   │   ├── Blogs.jsx
│   │   ├── BookMark.jsx
│   │   ├── BookMarks.jsx
│   │   ├── Footer.jsx
│   │   └── Nav.jsx
│   ├── Router.jsx
│   └── index.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md

📦 Tech Stack
React (Functional Components, Hooks)

Tailwind CSS (with dark mode)

JavaScript (ES6+)

Vite or CRA (your choice of React bundler)

⚙️ Installation & Setup
Clone the repository

bash
Copy
Edit
git clone https://github.com/your-username/simple-blog.git
cd simple-blog
Install dependencies

bash
Copy
Edit
npm install
Run the app

bash
Copy
Edit
npm run dev  # or npm start if using CRA
View in browser
Visit http://localhost:5173

🌑 Enabling Dark Mode
Tailwind dark mode is set to class mode.

To toggle dark mode manually, apply the dark class to your <html> or <body> tag:

html
Copy
Edit
<html class="dark">
Or implement a toggle button that toggles the dark class dynamically.

Need help with that? Let me know.

📸 Screenshots
You can include screenshots here using Markdown:

md
Copy
Edit
![Light Mode](screenshots/light-mode.png)
![Dark Mode](screenshots/dark-mode.png)
🙌 Acknowledgements
Tailwind CSS

React

Unsplash for blog cover images

RandomUser.me for profile avatars

📄 License
This project is licensed under the MIT License.
