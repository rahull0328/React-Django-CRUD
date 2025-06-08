# React-Django-Crud 🚀

## Table of Contents 📚

- [Features](#features-)  
- [Tech Stack](#tech-stack-️)  
- [Project Structure](#project-structure-)  
- [Setup & Installation](#setup--installation-️)  
  - [Prerequisites](#prerequisites-)  
  - [Backend](#backend-️)  
  - [Frontend](#frontend-)  
- [Contributing](#contributing-)    

---

## Features ✨

- **Django Rest-Framework**  
  Uses Django Rest Framework for smoother communication of data  
- **Manage Books**  
  - Manage books easily through CRUD [Create, Read, Update, Delete] Operations  
- **Responsive Design 📱**  
  Fully functional on desktop and mobile.    

---

## Tech Stack 🛠️

| Layer        | Technology                                                      |
| ------------ | ---------------------------------------------------------------- |
| **Client 🖥️**   | React.js            |
| **Server 🏗️**   | Django, Django-rest-framework.js                                              |
| **Database 🗄️** | SQLite                                           |
| **Styling 🎨**  | Tailwind CSS, Shadcn          |

---

## Project Structure 📂

react-django-crud/
├── server/
│ ├── manage.py
│ ├── api/
│ │ ├── models.py
│ │ ├── serializers.py
│ │ ├── views.py
│ │ ├── urls.py
├── client/
│ ├── package.json
│ ├── src/
│ │ ├── App.js
│ │ ├── components/
│ │ | ├── pages/
│ │ | | ├── Home.jsx
│ │ | | ├── ViewBooks.jsx
│ │ | | ├── EditBookModal.jsx
│ │ | ├── ui/
│ │ | | ├── Button.jsx
│ │ | | ├── InputField.jsx
└── README.md

## Setup & Installation ⚙️

> Follow these steps to get React-Django-CRUD running on your local machine.

### Prerequisites 📋

* **Python** (v12 or higher) & **Django**.
* **Virtual Environment Setup**.

### Server [Backend] 🖥️

1. Open a terminal and navigate to the `server/` folder:

   ```bash
   cd react-django-crud/server
   ```
2. Create a virtual environment and activate it:

   ```bash
    python3 -m venv env
    source env/bin/activate      # macOS/Linux
    env\Scripts\activate         # Windows
   ```
3. Apply database migrations:

   ```bash
   python manage.py migrate
   ```

4. Run the development server:

    ```bash
    python manage.py runserver
    ```

5. The server should now be running at `http://127.0.0.1:8000` 🚀.

### Client [Frontend] 🌐

1. Open a new terminal window/tab and navigate to the `client/` folder:

   ```bash
   cd react-django-crud/client
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Start the React development server:

   ```bash
   npm start
   ```
4. The client will run at `http://localhost:5173` by default.

---

## Contributing 🤝

1. Fork this repository.
2. Create a new branch for your feature or bugfix:

   ```bash
   git checkout -b feature/<your-feature-name>
   ```
3. Make your changes and commit:

   ```bash
   git commit -m "Add <feature> or fix <issue>"
   ```
4. Push to your fork:

   ```bash
   git push origin feature/<your-feature-name>
   ```
5. Open a Pull Request against `rahull0328/react-django-crud:main`.
6. Ensure your PR description clearly outlines what you’ve added or fixed.

> Please follow best practices for commit messages and code style. Run any existing linters/tests before submitting.

---

## Author 🙋‍♂️

**Rahul Mehta**

* GitHub: [rahull0328](https://github.com/rahull0328)

Feel free to reach out for any questions or feedback!