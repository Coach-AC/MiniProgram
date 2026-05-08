# Basketball Drills WeChat Mini Program

This is a WeChat Mini Program for basketball drills and challenges platform.

## Features

- Watch basketball drill videos
- Take and complete challenges
- Share results
- View rankings

## Setup

1. Install WeChat Developer Tools.
2. Import this project folder into WeChat Developer Tools.
3. Run the project.
4. For Cloud Base login/admin setup, follow `docs/cloudbase-setup.md`.

## Project Structure

- `app.js`, `app.json`, `app.wxss`: App configuration and global styles
- `pages/`: Page components
  - `index/`: Home page
  - `videos/`: Videos list
  - `challenges/`: Challenges list
  - `rankings/`: Rankings display
  - `profile/`: User profile
  - `fitness-plan/`: 8-week basketball fitness plan
  - `admin/`: Admin dashboard pages
- `cloudfunctions/`: WeChat Cloud Base backend functions
- `utils/`: Cloud/auth/default data helpers
