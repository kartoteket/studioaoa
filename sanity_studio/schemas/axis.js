export default {
  name: 'axis',
  title: 'Axis',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'id',
      title: 'Id',
      type: 'number'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'id',
        slugify: input => `axis-${input}`
      }
    },
    {
      name: 'axisTot',
      title: 'Tot',
      type: 'image',
      // options: {
      //   hotspot: true
      // }
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
      media: 'axisTot'
    }
  }
}
