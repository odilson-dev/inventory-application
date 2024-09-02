# Inventory Application

## Project Overview

This project is part of the NodeJS course and is designed to practice the skills learned throughout the section. The objective is to create an Inventory Management app for an imaginary store. The app allows users to manage categories and items, providing full CRUD (Create, Read, Update, Delete) functionality.

## Features

- **Categories**: Users can create, view, update, and delete categories.
- **Items**: Users can create, view, update, and delete items within categories.
- **CRUD Operations**: Full CRUD functionality for both categories and items.
- **Customizable Business Type**: The app can be adapted to manage inventory for various types of businesses, such as groceries, car parts, toys, musical instruments, etc.

## Technologies Used

- **Backend**: Node.js with Express.js
- **Database**: PostgreSQL
- **Views**: EJS (Embedded JavaScript) for dynamic HTML rendering
- **Styles**: CSS for styling the frontend

## Database Design

Before starting, the database schema was designed to define the entities and their relationships. The key entities are:

- **Category**: Represents different categories of items.
- **Item**: Represents the individual items within a category.

### Entity Relationships

- Each `Item` belongs to a `Category`.
- A `Category` can have multiple `Items`.

## Setup Instructions

### Prerequisites

- Node.js
- PostgreSQL

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/inventory-app.git
   ```
2. Navigate to the project directory

```bash
cd inventory-app
```

3. Install dependencies:

```bash
pnpm install
```

4. Run the app

```bash
pnpm run dev
```
