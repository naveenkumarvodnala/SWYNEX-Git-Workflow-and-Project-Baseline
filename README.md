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

## Continuous Integration (CI) Pipeline

This project uses GitHub Actions to automatically validate code changes.

### CI Workflow

The pipeline runs on:

- Push events to main and feature branches.
- Pull Requests targeting main.

### Pipeline Stages

1. Checkout source code.
2. Set up Node.js 20.
3. Install dependencies using npm ci.
4. Run ESLint for code-quality validation.
5. Execute automated tests using Node.js Test Runner.
6. Validate the application build.

### GitHub Actions Workflow

Workflow file:
`.github/workflows/ci.yml`

### CI Results

- ESLint: Passed
- Automated tests: 2 passed
- Build validation: Passed
- Pull Request checks: Passed
- Push checks: Passed

### Technologies

- GitHub Actions
- Node.js
- JavaScript
- ESLint
- Node.js Test Runner
- Git and GitHub

## Docker Containerization

This project supports repeatable application execution using Docker.

### Prerequisites

- Docker Desktop installed and running.
- Git installed.

### Build Docker Image

Clone the repository:

```bash
git clone https://github.com/naveenkumarvodnala/SWYNEX-Git-Workflow-and-Project-Baseline.git
cd SWYNEX-Git-Workflow-and-Project-Baseline
```

Build the Docker image:

```bash
docker build -t swynex-node-app:1.0 .
```

### Run Docker Container

```bash
docker run --name swynex-container swynex-node-app:1.0
```

### Verify Execution

View container status:

```bash
docker ps -a
```

View application logs:

```bash
docker logs swynex-container
```

Expected application output:

- Application status: Running
- Health check status: Healthy

The container exits with status code 0 after successful execution because this is a command-line application.

### Docker Cleanup

Remove the container:

```bash
docker rm swynex-container
```

Remove the image:

```bash
docker rmi swynex-node-app:1.0
```

### Docker Files

- `Dockerfile` – Defines the Node.js application image.
- `.dockerignore` – Excludes unnecessary files from the Docker build context.

### Key Learning

Learned how to containerize a Node.js application, build Docker images, execute containers, and verify application execution through container logs.
