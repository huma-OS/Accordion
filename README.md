## 📁 Portfolio Project 2 – HTML, CSS, JavaScript + Jest

This is a front-end accordion component built with **HTML**, **CSS**, and **JavaScript**, featuring unit tests written using **Jest**. It demonstrates dynamic accordion behavior with support for both single and multi-expand modes.

---

## Features

* Responsive and accessible UI
* Toggleable accordion sections
* Multi-select mode via checkbox
* Unit-tested behavior using Jest + JSDOM

---

## Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript (ES6+)**
* **Jest** (for unit testing)
* **JSDOM** (DOM mocking for tests)

---

## Getting Started Locally

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Open in Code Editor

We recommend [VS Code](https://code.visualstudio.com/) with the **Live Server** extension installed.

### 3. Start the Live Server

Right-click on `index.html` and select:

```
Open with Live Server
```

Your browser will open the project automatically.

---

## Running Tests

### 1. Install Dependencies

Install Jest and required DOM environment for testing:

```bash
npm install --save-dev jest jest-environment-jsdom
```

### 2. Add Test Script

Make sure your `package.json` includes the following:

```json
"scripts": {
  "test": "jest"
}
```

### 3. Run the Tests

```bash
npm test
```

---

## Notes

* This project uses **CommonJS** for test compatibility (`module.exports` / `require`).
* Tests run in a simulated DOM using **jsdom**, not a real browser.
* Ensure your Node.js version supports ES6+ features (Node v14+ recommended).

---


