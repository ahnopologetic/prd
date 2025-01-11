import { Args, Command } from '@oclif/core'
import * as inquirer from 'inquirer'
import * as fs from 'node:fs'
import * as path from 'node:path'

export default class Init extends Command {
  static args = {
    path: Args.string({
      default: './docs/base.md',
      description: 'Path to save the PRD file',
      required: false,
    }),
  }

  static description = 'Initialize a PRD template interactively'

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
        default: 'Project Title',
        message: 'Project Title (press enter to skip for now):',
        name: 'title',
        type: 'input',
      },
      {
        message: 'Description - What is it?',
        name: 'description',
        type: 'input',
      },
      {
        message: 'Problem - What problem is this solving?',
        name: 'problem',
        type: 'input',
      },
      {
        message: 'Why - How do we know this is a real problem and worth solving?',
        name: 'why',
        type: 'input',
      },
      {
        message: 'Success - How do we know if we\'ve solved this problem?',
        name: 'success',
        type: 'input',
      },
      {
        message: 'Audience - Who are we building for?',
        name: 'audience',
        type: 'input',
      },
      {
        message: 'What - Roughly, what does this look like in the product?',
        name: 'what',
        type: 'input',
      },
      {
        message: 'How - What is the experiment plan?',
        name: 'how',
        type: 'input',
      },
      {
        message: 'When - When does it ship and what are the milestones?',
        name: 'when',
        type: 'input',
      },
    ]

    try {
      const answers = await inquirer.default.prompt(questions)

      // If user skipped the title (kept default), ask if they want to set it now
      if (answers.title === 'Project Title') {
        const confirmTitle = await inquirer.default.prompt([
          {
            default: true,
            message: 'Would you like to set the project title now?',
            name: 'setTitle',
            type: 'confirm',
          },
        ])

        if (confirmTitle.setTitle) {
          const titlePrompt = await inquirer.default.prompt([
            {
              message: 'Please enter the project title:',
              name: 'title',
              type: 'input',
              validate(input: string) {
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
