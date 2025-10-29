import { Block } from 'payload'
import { textsField } from '../_blocks/textBlock'
import { getButtonField, getOverlayField } from '../_global/fields'
import {
  FormCheckboxInputBlock,
  FormMultipleCheckboxInputBlock,
  FormSelectInputBlock,
  FormTextInputBlock,
} from './FormInputsBlocks'

export const FormSectionBlock: Block = {
  labels: { singular: 'Formulář', plural: 'Formuláře' },
  slug: 'FormSection',
  fields: [
    textsField,
    getOverlayField(),
    getButtonField(),
    { name: 'webhook', type: 'text', required: true },
    {
      name: 'fields',
      type: 'blocks',
      blocks: [
        FormTextInputBlock,
        FormSelectInputBlock,
        FormCheckboxInputBlock,
        FormMultipleCheckboxInputBlock,
      ],
      required: true,
    },
  ],
}
