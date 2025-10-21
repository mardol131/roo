import { Block, Field } from 'payload'
import { buttonField } from '../_global/fields'

export const InputWidgetBlock: Block = {
  slug: 'inputWidget',
  fields: [
    { name: 'label', type: 'text', required: true },
    { name: 'placeholder', type: 'text', required: true },
    { name: 'webhook', type: 'text', required: true },
    buttonField,
    { name: 'successText', type: 'text' },
  ],
}

export const widgetsField: Field = {
  label: 'Widgety',
  type: 'collapsible',
  admin: { initCollapsed: true },
  fields: [
    {
      name: 'widgets',
      type: 'blocks',
      blocks: [InputWidgetBlock],
    },
  ],
}
