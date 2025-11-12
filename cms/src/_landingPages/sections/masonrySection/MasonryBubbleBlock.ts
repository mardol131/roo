import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { Block } from 'payload'
import { colorsAndGradients } from '@roo/shared/design/colors'
import { textsField } from '@/_landingPages/components/text'
import { columnField, rowField } from '@/_landingPages/components/grid'
import { getImageField } from '@/_landingPages/components/image'

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
  fields: [getImageField({}), columnField, rowField],
}
