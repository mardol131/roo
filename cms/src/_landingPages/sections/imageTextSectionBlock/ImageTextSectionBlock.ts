import { getOptionsFromObject } from '@/functions/getOptionsFromObject'
import { Block } from 'payload'
import { sides } from '@roo/shared/design/orientation'
import { getImageField } from '@/_landingPages/components/image'
import { buttonsField } from '@/_landingPages/components/button'
import { textsField } from '@/_landingPages/components/text'
import { getOverlayField } from '@/_landingPages/components/overlay'

const imageOneBlock: Block = {
  labels: { singular: 'Jeden obrázek', plural: 'Jeden obrázek' },
  slug: 'imageOne',
  fields: [getImageField()],
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
