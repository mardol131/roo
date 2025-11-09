import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { Block } from 'payload'
import { textsField } from '../_blocks/textBlock'
import { columnField, getImageField, rowField } from '../_global/fields'
import { colorsAndGradients } from '@roo/shared/design/colors'

export const MasonryBubbleBlock: Block = {
  slug: 'masonrybubble',
  labels: { singular: 'Masonry bublina s textem', plural: 'Masonry bublina s textem' },
  fields: [
    textsField,
    { name: 'bgColor', type: 'select', options: getOptionsFromObject(colorsAndGradients) },
    columnField,
    rowField,
  ],
}

export const MasonryBubbleImageBlock: Block = {
  slug: 'masonrybubbleimage',
  labels: { singular: 'Masonry obrázek', plural: 'Masonry obrázek' },
  fields: [getImageField(), columnField, rowField],
}
