import { Block } from 'payload'
import { getRichTextField, overlayField } from '../../_global/fields'
import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { sides } from '@/design/orientation'

export const TextImageSectionBlock: Block = {
  slug: 'textimagesection',
  fields: [
    getRichTextField(),
    { name: 'image', type: 'text', required: true },
    { name: 'imageSide', type: 'select', options: getOptionsFromObject(sides) },
    overlayField,
  ],
}
