import type { CollectionConfig } from 'payload'
import { ACL } from '@/functions/ACL'
import { getImageField } from '@/_landingPages/components/image'
import { getButtonField } from '@/_landingPages/components/button'
import { BannerSectionBlock } from '@/_landingPages/sections/bannerSection/bannerSection'
import { ComparisonSectionBlock } from '@/_landingPages/sections/comparisonSection/ComparisonSectionBlock'
import { FaqSectionBlock } from '@/_landingPages/sections/faqSection/FaqSectionBlock'
import { FormSectionBlock } from '@/_landingPages/sections/formSection/FormSectionBlock'
import { HeroBubbleSectionBlock } from '@/_landingPages/sections/heroes/HeroBubbleSection'
import { IconsTextSectionBlock } from '@/_landingPages/sections/iconsTextSection/IconsTextSection'
import { ImageTextSectionBlock } from '@/_landingPages/sections/imageTextSectionBlock/ImageTextSectionBlock'
import { MasonrySectionBlock } from '@/_landingPages/sections/masonrySection/MasonrySectionBlock'
import { TextSectionBlock } from '@/_landingPages/sections/textSection/textSection'
import { StepsSectionBlock } from '@/_landingPages/sections/stepsSection/stepsSection'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      label: 'Údaje o stránce',
      type: 'collapsible',
      admin: {
        initCollapsed: true,
      },
      fields: [
        getImageField('image', 'Náhledový obrázek stránky'),
        {
          name: 'placeholder',
          type: 'ui',
          admin: {
            components: {
              Cell: '@/cells/PagesPlaceholder',
            },
          },
        },
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
          label: 'Canonical',
          name: 'canonical',
          type: 'text',
          required: true,
        },
        {
          label: 'OG',
          type: 'collapsible',
          admin: {
            initCollapsed: true,
          },
          fields: [
            {
              label: 'OG',
              name: 'og',
              type: 'group',
              fields: [
                {
                  label: 'og:title',
                  name: 'og:title',
                  type: 'text',
                },
                {
                  label: 'og:description',
                  name: 'og:description',
                  type: 'text',
                },
                {
                  label: 'og:image',
                  name: 'og:image',
                  type: 'text',
                },
                {
                  label: 'og:url',
                  name: 'og:url',
                  type: 'text',
                },
                {
                  label: 'og:type',
                  name: 'og:type',
                  type: 'text',
                },
              ],
            },
          ],
        },
        {
          label: 'Twitter',
          type: 'collapsible',
          admin: {
            initCollapsed: true,
          },
          fields: [
            {
              label: 'Twitter',
              name: 'twitter',
              type: 'group',
              fields: [
                {
                  label: 'twitter:title',
                  name: 'twitter:title',
                  type: 'text',
                },
                {
                  label: 'twitter:description',
                  name: 'twitter:description',
                  type: 'text',
                },
                {
                  label: 'twitter:image',
                  name: 'twitter:image',
                  type: 'text',
                },
                {
                  label: 'twitter:card',
                  name: 'twitter:card',
                  type: 'text',
                },
              ],
            },
          ],
        },
        {
          label: 'JSON-LD',
          name: 'JSON_LD',
          type: 'text',
        },
      ],
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
        StepsSectionBlock,
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

          if (!data?.canonical) {
            data.canonical = `${process.env.NEXT_PUBLIC_WEBSITE}/stranky/${data.pageSlug}`
          }
        }
        return data
      },
    ],
  },
  access: {
    read: () => true,
    create: ACL({ roles: ['admin'] }),
    delete: ACL({ roles: ['admin'] }),
    update: ACL({ roles: ['admin'] }),
  },
}
