import { Field } from 'payload'

export const GTField: Field = {
  label: 'Google Tag',
  name: 'GT',
  type: 'group',
  fields: [
    {
      name: 'event',
      type: 'text',
    },
    { name: 'value', type: 'text' },
  ],
}
