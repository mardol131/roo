import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { Block } from 'payload'
import { textsField } from '../_blocks/textBlock'
import { buttonsField, getImageField, getOverlayField } from '../_global/fields'
import { sides } from '@roo/shared/design/orientation'

const imageOneBlock: Block = {
  labels: { singular: 'Jeden obrázek', plural: 'Jeden obrázek' },
  slug: 'imageOne',
  fields: [getImageField()],
}

const imageGridBlock: Block = {
  slug: 'imageGrid',
  labels: { singular: 'Obrázkový grid', plural: 'Obrázkový grid' },
  fields: [
    {
      name: 'imageOne',
      type: 'group',
      fields: [
        { name: 'src', type: 'text', required: true },
        { name: 'alt', type: 'text', required: true },
      ],
    },
    {
      name: 'imageTwo',
      type: 'group',
      fields: [
        { name: 'src', type: 'text', required: true },
        { name: 'alt', type: 'text', required: true },
      ],
    },
    {
      name: 'imageThree',
      type: 'group',
      fields: [
        { name: 'src', type: 'text', required: true },
        { name: 'alt', type: 'text', required: true },
      ],
    },
    {
      name: 'imageFour',
      type: 'group',
      fields: [
        { name: 'src', type: 'text', required: true },
        { name: 'alt', type: 'text', required: true },
      ],
    },
    { name: 'rotate', type: 'select', options: ['true', 'false'] },
  ],
}

export const ImageTextSectionBlock: Block = {
  slug: 'ImageTextSection',
  labels: { singular: 'Sekce s textem a obrázkem', plural: 'Sekce s textem a obrázkem' },
  fields: [
    textsField,
    {
      name: 'imagePart',
      type: 'blocks',
      blocks: [imageOneBlock],
      minRows: 1,
      maxRows: 1,
    },
    buttonsField,
    { name: 'textSide', type: 'select', options: getOptionsFromObject(sides) },
    getOverlayField('outerOverlay'),
    getOverlayField('innerOverlay'),
  ],
}
