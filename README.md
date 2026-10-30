# SWYNEX – Git Workflow and Project Baseline

## Project Overview

This project demonstrates a basic Git workflow using a sample Node.js application. It covers repository setup, project structure, branching, commits, feature development, and Pull Requests.

## Technologies Used

- Node.js
- JavaScript
- Git
- GitHub

## Project Structure

```text
SWYNEX-Git-Workflow-and-Project-Baseline/
├── src/
│   └── app.js
├── .gitignore
├── package.json
└── README.md
```

## How to Run

Make sure Node.js is installed.

```bash
node src/app.js
```

Or use npm:

```bash
npm start
```

## Features

- Displays application information.
- Includes an application health-check function.
- Demonstrates a basic Node.js project structure.

## Git Branching Strategy

This project follows a simple feature-branch workflow.

- `main` – stable branch containing completed work.
- `feature/add-health-check` – branch used to develop the health-check feature.

### Workflow

1. Create a feature branch from `main`.
2. Make code changes.
3. Stage and commit changes.
4. Push the feature branch to GitHub.
5. Create a Pull Request targeting `main`.
6. Review the changes.
7. Merge the Pull Request into `main`.

## Git Commands Used

```bash
git clone <repository-url>
git switch -c feature/add-health-check
git add .
git commit -m "Add application health check"
git push -u origin feature/add-health-check
git switch main
git pull origin main
```

## What I Learned

- Creating and managing a GitHub repository.
- Understanding Git staging and commits.
- Working with feature branches.
- Pushing branches to GitHub.
- Creating and merging Pull Requests.
- Maintaining a clean project baseline using `.gitignore`.

## Repository

[GitHub Repository](https://github.com/naveenkumarvodnala/SWYNEX-Git-Workflow-and-Project-Baseline)
