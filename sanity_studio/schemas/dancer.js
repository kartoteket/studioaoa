export default {
  name: 'dancer',
  title: 'Dancer',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Name',
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
      title: 'Images',
      name: 'assets',
      type: 'object',
      fields: [
        {
          title: 'First Image',
          name: 'image_1',
          type: 'image'
        },
        {
          title: 'Second Image',
          name: 'image_2',
          type: 'image'
        },
        {
          title: 'Third Image',
          name: 'image_3',
          type: 'image'
        },
      ]
    },
    {
      name: 'about',
      title: 'About',
      type: 'blockContent'
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
  ],

  preview: {
    select: {
      title: 'title',
      assets: 'assets'
    },
    prepare(selection) {
      const { assets } = selection
      const thumbnail = assets.image_1 || assets.image_2 || assets.image_3
      return Object.assign({}, selection, {
        media: thumbnail
      })
    }
  }
}
