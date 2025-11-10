import { Block } from 'payload'

import {
  FormCheckboxInputBlock,
  FormMultipleCheckboxInputBlock,
  FormSelectInputBlock,
  FormTemplateBlock,
  FormTextInputBlock,
} from './FormInputsBlocks'
import { textsField } from '@/_landingPages/components/text'
import { getOverlayField } from '@/_landingPages/components/overlay'
import { getButtonField } from '@/_landingPages/components/button'

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
        FormTemplateBlock,
      ],
      required: true,
    },
  ],
}
