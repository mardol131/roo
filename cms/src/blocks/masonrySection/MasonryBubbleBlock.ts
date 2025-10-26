import { Block } from 'payload'
import { columnField, getImageField, getRichTextField, rowField } from '../_global/fields'
import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { colorsAndGradients } from '@/design/colors'
import { textsField } from '../_blocks/textBlock'

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
