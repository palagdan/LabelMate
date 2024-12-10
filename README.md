# LabelMate

**LabelMate** is a GitHub workflow that automatically assigns labels to issues based on the content of their title and description, powered by ChatGPT. It helps streamline issue management, ensuring that issues are categorized and organized without manual effort.

## Features
- Automatically assigns labels to issues based on the title and description.
- Powered by OpenAI's ChatGPT to intelligently analyze issue text.
- Saves time and reduces human error in the labeling process.
- Easily customizable to fit your project's specific labeling needs.

## How It Works
1. **Trigger**: LabelMate runs whenever an issue is opened or updated in the repository.
2. **Analysis**: ChatGPT analyzes the title and description of the issue to identify keywords and patterns.
3. **Label Assignment**: Based on the analysis, appropriate labels are automatically applied to the issue.

## Prerequisites
- GitHub repository with Actions enabled.
- OpenAI API access (for using ChatGPT).

---

## Usage

### Adding Labels to Issues Automatically

To enable GitMate to automatically label issues when they are opened or edited, use the following GitHub Actions workflow configuration.

```yaml
on:
  issues:
    types: [opened, edited]

jobs:
  add-label-to-issue:
    runs-on: ubuntu-latest
    name: Add label to created issue
    steps:
      - uses: palagdan/LabelMate@main
        with:
          github-token: ${{ secrets.GITHUB_TOKEN }}
          openai-api-key: ${{ secrets.OPENAI_API_KEY }}
       
