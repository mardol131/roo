import { Block } from 'payload'
import { buttonField, headingField, overlayField } from '../_global/fields'
import {
  FormCheckboxInputBlock,
  FormSelectInputBlock,
  FormTextInputBlock,
} from './FormInputsBlocks'
import { textsField } from '../_blocks/textBlock'

export const FormSectionBlock: Block = {
  labels: { singular: 'Formulář', plural: 'Formuláře' },
  slug: 'FormSection',
  fields: [
    textsField,
    overlayField,
    buttonField,
    { name: 'webhook', type: 'text', required: true },
    {
      name: 'fields',
      type: 'blocks',
      blocks: [FormTextInputBlock, FormSelectInputBlock, FormCheckboxInputBlock],
      required: true,
    },
  ],
}
