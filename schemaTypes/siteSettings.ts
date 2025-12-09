import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    {name: 'header', title: 'Header'},
    {name: 'pageSettings', title: 'Page Settings'},
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Site Description',
      type: 'text',
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
    }),
    defineField({
      name: 'headerLinks',
      title: 'Header Links',
      type: 'array',
      group: 'header',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'label',
              title: 'Label',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      title: 'Page Title',
      name: 'pageSettingsTitle',
      type: 'string',
      group: 'pageSettings',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'pageSettingsDescription',
      title: 'Page Description',
      type: 'text',
      group: 'pageSettings',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      group: 'pageSettings',
      fields: [
        defineField({
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{type: 'string'}],
        }),
        defineField({
          name: 'ogImage',
          title: 'Open Graph Image',
          type: 'image',
        }),
      ],
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      group: 'pageSettings',
      validation: (rule) => rule.required(),
    }),
  ],
})
