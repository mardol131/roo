import { Block } from 'payload'
import { MasonryBubbleBlock, MasonryBubbleImageBlock } from './MasonryBubbleBlock'
import { buttonsField, getRichTextField, overlayField } from '../_global/fields'
import { getTextsField, textsField } from '../_blocks/textBlock'

export const MasonrySectionBlock: Block = {
  slug: 'MasonrySection',
  labels: { singular: 'Masonry sekce', plural: 'Masonry sekce' },
  fields: [
    getTextsField('textsTop'),
    getTextsField('textsBottom'),
    {
      name: 'bubbles',
      type: 'blocks',
      blocks: [MasonryBubbleBlock, MasonryBubbleImageBlock],
      required: true,
    },
    overlayField,
    buttonsField,
  ],
}
