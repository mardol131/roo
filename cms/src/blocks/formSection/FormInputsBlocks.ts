import { Block } from 'payload'

export const FormTextInputBlock: Block = {
  slug: 'formtextinput',
  labels: { singular: 'Textové pole', plural: 'Textové pole' },
  fields: [
    { name: 'label', type: 'text', required: true },
    { name: 'placeholder', type: 'text', required: true },
    { name: 'spanTwo', type: 'select', options: ['true', 'false'], label: 'Dva sloupce?' },
  ],
}

export const FormSelectOptionsBlock: Block = {
  slug: 'formselectoptions',
  labels: { singular: 'Možnost', plural: 'Možnosti' },
  fields: [
    { name: 'text', type: 'text', required: true },
    { name: 'value', type: 'text', required: true },
  ],
}

export const FormSelectInputBlock: Block = {
  slug: 'formselectinput',
  labels: { singular: 'Pole výběru', plural: 'Pole výběrů' },
  fields: [
    { name: 'label', type: 'text', required: true },
    { name: 'placeholder', type: 'text', required: true },
    { name: 'spanTwo', type: 'select', options: ['true', 'false'], label: 'Dva sloupce?' },
    { name: 'options', type: 'blocks', blocks: [FormSelectOptionsBlock], required: true },
  ],
}

export const FormCheckboxInputBlock: Block = {
  slug: 'formcheckboxinput',
  labels: { singular: 'Checkbox', plural: 'Checkboxi' },
  fields: [
    { name: 'label', type: 'text', required: true },
    { name: 'value', type: 'text', required: true },
    { name: 'spanTwo', type: 'select', options: ['true', 'false'], label: 'Dva sloupce?' },
  ],
}
