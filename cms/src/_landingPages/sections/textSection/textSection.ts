import { buttonsField } from '@/_landingPages/components/button'
import { getOverlayField } from '@/_landingPages/components/overlay'
import { getTextsField } from '@/_landingPages/components/text'
import { Block } from 'payload'

export const TextSectionBlock: Block = {
  slug: 'TextSection',
  labels: { singular: 'Textová sekce', plural: 'Textové sekce' },
  fields: [
    getTextsField(),
    buttonsField,
    getOverlayField('innerOverlay', 'Vnitřní overlay'),
    getOverlayField('outerOverlay', 'Vnější overlay'),
  ],
}
