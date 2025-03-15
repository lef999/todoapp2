📌 To-Do List App
A simple To-Do List application built with React that allows users to add, edit, delete, and mark tasks as completed. The app also persists tasks using localStorage, so they remain saved even after refreshing the page.

🚀 Features
✅ Add new tasks with a name and description
✅ Edit existing tasks
✅ Delete tasks (with confirmation prompt)
✅ Mark tasks as completed (or undo completion)
✅ Persist tasks in localStorage for saving between sessions
✅ Simple and responsive UI

🛠️ Technologies Used
React (JavaScript framework)
CSS (for styling)
LocalStorage (for data persistence)
VS Code (Recommended IDE for development)
📥 Installation & Setup
1️⃣ Clone the repository
Open VS Code, open a new terminal (Ctrl + ` shortcut), and run:

bash
Copy
Edit
git clone https://github.com/your-username/newtodoapp.git
cd newtodoapp
2️⃣ Install dependencies
Run the following command in the terminal:

bash
Copy
Edit
npm install
3️⃣ Start the development server
Run:

bash
Copy
Edit
npm start
This will launch the app at http://localhost:3000 in your default browser.

📝 Usage
Add a task: Enter a task name and description, then click "Add Task".
Edit a task: Click the Edit button next to a task to update its details.
Delete a task: Click Delete (you’ll be asked to confirm).
Complete a task: Click Complete, and the task will be visually updated.
Persistent Storage: Tasks are saved in localStorage and restored on page reload.
🖥️ Recommended VS Code Extensions
💡 To improve your development experience, install the following VS Code extensions:

🔹 ES7+ React/Redux/React-Native snippets – Provides handy React snippets
🔹 Prettier - Code formatter – Ensures consistent code formatting
🔹 Auto Close Tag – Automatically closes JSX tags
🔹 Auto Rename Tag – Updates both opening and closing tags

🚀 Build for Production
To create an optimized build for production, run:

bash
Copy
Edit
npm run build
This generates a build/ folder with minified and optimized assets, ready for deployment.
