import { BannerSectionBlock } from '../blocks/bannerSection/bannerSection'
import { ComparisonSectionBlock } from '../blocks/comparisonSection/ComparisonSectionBlock'
import { FaqSectionBlock } from '../blocks/faqSection/FaqSectionBlock'
import { FormSectionBlock } from '../blocks/formSection/FormSectionBlock'
import { HeroBubbleSectionBlock } from '../blocks/heroes/HeroBubbleSection'
import { IconsTextSectionBlock } from '../blocks/iconsTextSection/IconsTextSection'
import { ImageTextSectionBlock } from '../blocks/imageTextSectionBlock/ImageTextSectionBlock'
import { MasonrySectionBlock } from '../blocks/masonrySection/MasonrySectionBlock'

import type { CollectionConfig } from 'payload'
import { TextSectionBlock } from '../blocks/textSection/textSection'
import { getButtonField } from '../blocks/_global/fields'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      label: 'Meta title',
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      label: 'Meta description',
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      label: 'Slug',
      name: 'pageSlug',
      type: 'text',
      required: true,
    },

    {
      label: 'Tlačítka do záhlaví',
      name: 'header',
      type: 'group',
      fields: [
        getButtonField('desktopHeaderButton', 'Desktop tlačítko'),
        getButtonField('mobileHeaderButton', 'Mobile tlačítko'),
      ],
      required: true,
    },
    {
      label: 'Sekce stránky',
      name: 'sections',
      type: 'blocks',
      required: true,
      blocks: [
        BannerSectionBlock,
        ComparisonSectionBlock,
        FaqSectionBlock,
        FormSectionBlock,
        HeroBubbleSectionBlock,
        IconsTextSectionBlock,
        ImageTextSectionBlock,
        MasonrySectionBlock,
        TextSectionBlock,
      ],
    },
  ],
  hooks: {
    beforeChange: [
      ({ data }) => {
        if (data?.title) {
          data.pageSlug = data.title
            .normalize('NFD') // rozdělí písmena a diakritiku (např. č -> c + ̌)
            .replace(/[\u0300-\u036f]/g, '') // odstraní diakritiku
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-') // nahradí mezery a nealfanumerické znaky pomlčkou
            .replace(/(^-|-$)+/g, '') // odstraní pomlčky na začátku a konci

          if (!data.description) {
            data.description = data.title
          }
          return data
        }
      },
    ],
  },
  access: {
    read: () => true,
    create: () => true,
    delete: () => true,
    update: () => true,
  },
}
