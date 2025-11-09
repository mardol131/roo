import { Block } from 'payload'
import { textsField } from '../_blocks/textBlock'
import { getOverlayField } from '../_global/fields'

export const ComparisonSectionBlock: Block = {
  slug: 'ComparisonSection',
  labels: { singular: 'Pro a proti', plural: 'Pro a proti' },
  fields: [
    textsField,
    {
      label: 'Pro',
      type: 'collapsible',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'for',
          type: 'group',
          fields: [
            textsField,
            {
              name: 'points',
              type: 'array',
              fields: [{ name: 'text', type: 'text', required: true }],
            },
            getOverlayField(),
          ],
          required: true,
        },
      ],
    },
    {
      label: 'Proti',
      type: 'collapsible',
      admin: { initCollapsed: true },
      fields: [
        {
          name: 'against',
          type: 'group',
          fields: [
            textsField,
            {
              name: 'points',
              type: 'array',
              fields: [{ name: 'text', type: 'text', required: true }],
            },
            getOverlayField(),
          ],
          required: true,
        },
      ],
    },
    getOverlayField(),
  ],
}
