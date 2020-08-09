export default {
  name: 'station',
  title: 'Station',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
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
      name: 'image',
      title: 'Image',
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
      media: 'image'
    },
    // prepare(selection) {
    //   const {author} = selection
    //   return Object.assign({}, selection, {
    //     subtitle: author && `by ${author}`
    //   })
    // }
  }
}
