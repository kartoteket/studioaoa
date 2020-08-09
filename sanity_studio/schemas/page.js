export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string'
    },
    {
      name: 'navLabel',
      title: 'Menu Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      }
    },
    {
      name: 'Image',
      title: 'image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'text',
      title: 'Text',
      type: 'blockContent'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'text',
      media: 'image'
    }
  }
}
