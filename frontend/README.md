# Coding Standards and Guidelines

### General Coding Style
 - Follow the same style across the codebase
 - Use meaningful variable and function names, and avoid abbreviations unless they are commonly known (e.g., id)
 - Define all constants at the top or in a separate configuration file. Avoid using "magic numbers" directly in the code


### Naming Conventions
  - **Variables:**
    - Use ***camelCase*** for variables, functions, and method names (e.g., ***userProfile***)
    - Use ***SCREAMING_SNAKE_CASE*** for constants (e.g., ***MAX_USER_LIMIT***)
    - Use descriptive names (***userAge*** over ***age***) and keep them concise
  - **Components:**
    - Use ***PascalCase*** for React components (e.g., ***UserProfile.tsx***)
  - **File and Folder Names:**
    - Use ***kebab-case*** for file and folder names (e.g., ***user-profile.ts***)
    - Group related files (e.g., components) into folders for better organization
  - **Database Fields:**
    - Use ***snake_case*** for database fields (e.g., ***user_id***)
    - Use ***plural*** names for table names if they contain multiple records (e.g., ***users***)


### Git and Version Control
  - **Branching Model:** 
    - Use branches like ***features/*** , ***bugfix/*** , ***hotfix/*** , ***release/***
  - **Commit Messages:**
    - Follow a commit message convention like Conventional Commits (***feat:***, ***fix:***, ***docs***:, ***refactor:***, ***test:***, etc.).
    - Write meaningful, concise commit messages describing what the commit does
  - **Pull Requests (PRs):**
    - should be small, focusing on a single task or feature
    - titles should be clear and descriptive, e.g., [feat] Add PC reservation feature

### GIT Cloning Process
  - **Step 1: Get Repository URL**
    1. Go to [RoBlogs Repo](https://github.com/angelomigol/RoBlog.git)
    2. Click 'Code'
    3. Copy repository URL
  - **Step 2: Open Terminal/Command Prompt**
    1. Open VSCode
    2. Press Ctrl + `
    3. Navigate to desired directory, `cd/path/to/your/directory`. **OR** Create a new directory, use command, `mkdir new-folder-name`, then `cd new-folder-name`  
  - **Step 3: Clone Repository**
    1. `git clone <repository-url>`
  - **Step 4: Verify Cloning**
    1. Navigate to cloned repository `cd <repository name>`
    2. Type command `code .` to open folder in vscode 