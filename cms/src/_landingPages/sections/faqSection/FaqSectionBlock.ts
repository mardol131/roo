import { Block } from 'payload'

import { textsField } from '../_blocks/textBlock'

const QuestionBlock: Block = {
  slug: 'QuestionBlock',
  labels: { singular: 'Otázka', plural: 'Otázky' },
  fields: [
    { name: 'question', type: 'text', required: true },
    { name: 'answer', type: 'text', required: true },
  ],
}

export const FaqSectionBlock: Block = {
  labels: { singular: 'FAQ', plural: 'FAQ' },
  slug: 'FaqSection',
  fields: [
    textsField,
    {
      name: 'questions',
      type: 'blocks',
      blocks: [QuestionBlock],
      required: true,
    },
  ],
}
