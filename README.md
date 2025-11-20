# Multi-Environment Deployment Demo

This is a sample Node.js project demonstrating multi-environment deployment using GitHub Actions. The environments include:
- Development (dev)
- Multiple QA environments (qa1, qa2, qa3)
- Staging (stg)
- Production (prod)

## Project Structure
- `app.js`: Simple Node.js app
- `.github/workflows/deploy.yml`: GitHub Actions workflow for multi-environment deployment

## How It Works
- On every push to `main`, the app is deployed to `dev`.
- On pull request or manual trigger, the app is deployed to multiple QA environments in parallel (`qa1`, `qa2`, `qa3`).
- On tag or manual trigger, the app is deployed to `stg` and `prod`.

## Usage
- Modify the deployment steps in `.github/workflows/deploy.yml` to fit your actual deployment process (e.g., replace echo commands with real deployment scripts).
