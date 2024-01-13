# Redux Anecdotes React Vite JSON Server Project

This project is a simple web application built with React, Redux, Vite, and JSON Server. It allows users to create, read, update, and delete anecdotes. Anecdotes are small, user-submitted stories or jokes.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Demo

A live demo of the project can be found [here](#).

## Features

- Create a new anecdote.
- View a list of existing anecdotes.
- Upvote anecdotes.
- Search anecdotes by title or content.

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js: [Download and Install Node.js](https://nodejs.org/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/redux-anecdotes.git
   ```

2. Change to the project directory:
   ```bash
   cd redux-anecdotes
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the JSON Server:
   ```bash
   npm run server
   ```
5. In a separate terminal, start the development server:
   ```
   npm run dev
   ```
6. Open your browser and navigate to http://localhost:5137 to access the application.

### Usage

- To add a new anecdote, fill out the "create new" form.
- To upvote an anecdote, use the "vote" button.
- To search for anecdotes, use the filter field at the top of the page.

### Folder Structure

The project structure is organized as follows:

```
redux-anecdotes/
  ├── src/
  │   ├── components/
  │   ├── reducers/
  │   ├── services/
  │   ├── App.jsx
  │   ├── main.jsx
  │   ├── store.js
  ├── db.json
  ├── package.json
  ├── README.md
```
- src/: Contains React components, Redux reducers, services, and the Redux store setup.
- server/: Contains JSON Server data.

### Technologies Used
- React
- Redux
- Vite
- JSON Server