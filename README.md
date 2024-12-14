# Code Runner

**Code Runner** is a simplified online code editor that allows users to write, execute, and view the results of code snippets in different programming languages. The project uses the **Ace Editor** for syntax-highlighted code editing and the **OneCompiler API** for executing code. The editor is fully responsive and includes features for both desktop and mobile users.

---

## 🔧 Features

### Current Functionality
1. **Code Editor**  
   - Syntax-highlighted editor using **Ace Editor**.
   - Supports multiple languages: `Python`, `Javascript`, `Go`, and `PHP`.
2. **Run Code**  
   - Users can write code and execute it directly via the **OneCompiler API**.
   - Outputs are displayed below the editor, with clear separation of successful results and error messages.
3. **Language Selection**  
   - A dropdown menu to select the programming language, dynamically switching the syntax mode in the editor.
4. **Responsive Design**  
   - Two-column layout for desktop screens and stacked layout for mobile devices.
5. **Error Handling**  
   - Displays detailed error messages if the code execution fails.
6. **Clean and Minimal UI**  
   - Built with **Tailwind CSS** for an accessible and modern interface.

---

## 🌟 Ideas for Expansion

Here are some suggestions to enhance the project:

1. **Support for Additional Languages**  
   - Add more popular programming languages like `Java`, `C++`, `C#`, `Ruby`, and `Rust`.

2. **Clipboard Integration**  
   - **Quick Copy Button**: Add a button to copy the code from the editor to the clipboard.
   - **Paste from Clipboard**: Allow users to paste code directly into the editor with one click.

3. **Auto-Formatting**  
   - Integrate a code formatter to automatically indent and style the code based on the selected language. Libraries like [Prettier](https://prettier.io/) or [Esprima](https://esprima.org/) could be used.

4. **Customizable Themes**  
   - Allow users to switch between light and dark themes, or choose custom themes provided by Ace Editor.

5. **Save and Load Snippets**  
   - Add functionality to save code snippets locally or to the browser's local storage.
   - Allow loading saved snippets back into the editor.

6. **Shareable Links**  
   - Generate a sharable link that includes the code, language, and output. This link can be sent to collaborators or shared online.

7. **Download Code**  
   - Add a feature to download the current code as a file.

8. **Execution History**  
   - Maintain a history of executed code snippets with timestamps and results.

9. **Code Auto-Completion**  
   - Integrate auto-completion features for common syntax and libraries.

10. **User Authentication**  
   - Add user authentication and profiles for saving configurations, preferences, and snippets across devices.

11. **Integrated Documentation**  
   - Provide quick links to official documentation for the selected language directly in the editor.

12. **Self-Hosted**
   - Host backend with ability to compile code on our server without third-party apis.
---

## 🛠️ Technologies Used

- **Frontend Framework**: [Vue.js 3](https://vuejs.org/)  
- **State Management**: [Pinia](https://pinia.vuejs.org/)  
- **Code Editor**: [Ace Editor](https://ace.c9.io/)  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)  
- **Code Execution API**: [OneCompiler](https://onecompiler.com/) via free tier api by [RapidApi](https://rapidapi.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)  

---

## 🚀 Getting Started

### Prerequisites
Ensure you have the following installed:
- Node.js
- npm

### Installation
- Clone this repository:
   ```bash
   git clone https://github.com/fhnb16/Code-Process-Tool.git
   cd Code-Process-Tool
- `npm install`
- create file `credintals.js` in /src/assets/ folder, and add export variable $apiKey with key for onecompiler.com
- `npm run dev`


---
  [![fhnb16](https://img.shields.io/badge/Made_by_fhnb16-december_2024-gray.svg?style=plastic&labelColor=FF0000)](https://fhnb.ru/)
