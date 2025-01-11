import { Command, Args } from '@oclif/core'
import * as inquirer from 'inquirer'
import * as fs from 'fs'
import * as path from 'path'

export default class Init extends Command {
  static description = 'Initialize a PRD template interactively'

  static args = {
    path: Args.string({
      description: 'Path to save the PRD file',
      required: false,
      default: './docs/base.md',
    }),
  }

  async run(): Promise<void> {
    const { args } = await this.parse(Init)
    const targetPath = args.path

    // Validate if directory exists
    const dir = path.dirname(targetPath)
    if (!fs.existsSync(dir)) {
      this.error(`Directory ${dir} does not exist`)
    }

    const questions: inquirer.DistinctQuestion[] = [
      {
        type: 'input',
        name: 'title',
        message: 'Project Title (press enter to skip for now):',
        default: 'Project Title',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Description - What is it?',
      },
      {
        type: 'input',
        name: 'problem',
        message: 'Problem - What problem is this solving?',
      },
      {
        type: 'input',
        name: 'why',
        message: 'Why - How do we know this is a real problem and worth solving?',
      },
      {
        type: 'input',
        name: 'success',
        message: 'Success - How do we know if we\'ve solved this problem?',
      },
      {
        type: 'input',
        name: 'audience',
        message: 'Audience - Who are we building for?',
      },
      {
        type: 'input',
        name: 'what',
        message: 'What - Roughly, what does this look like in the product?',
      },
      {
        type: 'input',
        name: 'how',
        message: 'How - What is the experiment plan?',
      },
      {
        type: 'input',
        name: 'when',
        message: 'When - When does it ship and what are the milestones?',
      },
    ]

    try {
      let answers = await inquirer.default.prompt(questions)

      // If user skipped the title (kept default), ask if they want to set it now
      if (answers.title === 'Project Title') {
        const confirmTitle = await inquirer.default.prompt([
          {
            type: 'confirm',
            name: 'setTitle',
            message: 'Would you like to set the project title now?',
            default: true,
          },
        ])

        if (confirmTitle.setTitle) {
          const titlePrompt = await inquirer.default.prompt([
            {
              type: 'input',
              name: 'title',
              message: 'Please enter the project title:',
              validate: (input: string) => {
                if (input.trim() === '' || input === 'Project Title') {
                  return 'Please enter a valid project title'
                }
                return true
              },
            },
          ])
          answers.title = titlePrompt.title
        }
      }

      const template = `# ${answers.title}

## Description: What is it?
${answers.description || ''}

## Problem: What problem is this solving?
${answers.problem || ''}

## Why: How do we know this is a real problem and worth solving?
${answers.why || ''}

## Success: How do we know if we've solved this problem?
${answers.success || ''}

## Audience: Who are we building for?
${answers.audience || ''}

## What: Roughly, what does this look like in the product?
${answers.what || ''}

## How: What is the experiment plan?
${answers.how || ''}

## When: When does it ship and what are the milestones?
${answers.when || ''}
`

      fs.writeFileSync(targetPath, template)
      this.log(`✅ PRD template has been created at ${targetPath}`)
    } catch (error) {
      this.error('Failed to create PRD template: ' + error)
    }
  }
}
