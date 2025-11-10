import { getOverlayField } from '@/_landingPages/components/overlay'
import { textsField } from '@/_landingPages/components/text'
import { Block } from 'payload'

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
