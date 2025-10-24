import { Block } from 'payload'
import { getTextsField } from '../_blocks/textBlock'

export const FormTextInputBlock: Block = {
  slug: 'formtextinput',
  labels: { singular: 'Textové pole', plural: 'Textové pole' },
  fields: [
    { name: 'label', type: 'text', required: true },
    { name: 'name', type: 'text', required: true },
    { name: 'placeholder', type: 'text', required: true },
    { name: 'spanTwo', type: 'select', options: ['true', 'false'], label: 'Dva sloupce?' },
    { name: 'type', type: 'select', options: ['text', 'email', 'password'] },
    { name: 'required', type: 'select', options: ['true', 'false'] },
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
    { name: 'value', type: 'text', required: true },
    { name: 'spanTwo', type: 'select', options: ['true', 'false'], label: 'Dva sloupce?' },
    { name: 'options', type: 'blocks', blocks: [FormSelectOptionsBlock], required: true },
    { name: 'required', type: 'select', options: ['true', 'false'] },
  ],
}

export const FormCheckboxInputBlock: Block = {
  slug: 'formcheckboxinput',
  labels: { singular: 'Checkbox', plural: 'Checkboxi' },
  fields: [
    getTextsField('label'),
    { name: 'value', type: 'text', required: true },
    { name: 'spanTwo', type: 'select', options: ['true', 'false'], label: 'Dva sloupce?' },
    { name: 'required', type: 'select', options: ['true', 'false'] },
  ],
}

export const FormMultipleCheckboxInputBlock: Block = {
  slug: 'formmultiplecheckboxinput',
  labels: { singular: 'Vícenásobný checkbox', plural: 'Vícenásobné checkboxi' },
  fields: [
    { name: 'checkboxes', type: 'blocks', blocks: [FormCheckboxInputBlock], required: true },
    getTextsField('label'),
    { name: 'spanTwo', type: 'select', options: ['true', 'false'], label: 'Dva sloupce?' },
    { name: 'required', type: 'select', options: ['true', 'false'] },
  ],
}
