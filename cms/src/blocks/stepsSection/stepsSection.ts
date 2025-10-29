import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { Block } from 'payload'
import { getTextsField } from '../_blocks/textBlock'
import { colors } from '@roo/shared/design/colors'

export const StepBlock: Block = {
  slug: 'StepBlock',
  labels: { singular: 'Krok', plural: 'Kroky' },
  fields: [
    { name: 'number', type: 'text', required: true },
    getTextsField('texts'),
    { name: 'color', type: 'select', required: true, options: getOptionsFromObject(colors) },
    { name: 'connector', type: 'select', options: ['true', 'false'], required: true },
  ],
}

export const StepsSectionBlock: Block = {
  slug: 'StepsSection',
  labels: { singular: 'Sekce kroků', plural: 'Sekce kroků' },
  fields: [
    getTextsField('textsTop'),
    getTextsField('textsBottom'),
    { name: 'steps', type: 'blocks', blocks: [StepBlock] },
  ],
}
