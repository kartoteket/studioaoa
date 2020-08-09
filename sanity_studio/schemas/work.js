export default {
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'coverImage',
      title: 'Cover image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {type: 'block'},
        {type: 'image'},
        {
          title: 'Embed URL',
          description: 'For embedding in an iframe e.g. YouTube',
          name: 'embedUrl',
          type: 'youtube'
        },
        {
          title: 'Video',
          description: 'Inline video file',
          name: 'video',
          type: 'file'
        },
      ]
    },
    {
      title: 'Asset (Old)',
      description: 'This field is deprecated. Please use "Content" instead',
      name: 'asset',
      type: 'object',
      options: {
        collapsible: true,
        collapsed: true,
      },
      fields: [
        {
          title: 'Embed URL',
          description: 'For embedding in an iframe e.g. YouTube',
          name: 'embedUrl',
          type: 'url'
        },
        {
          title: 'Video',
          description: 'Inline video file',
          name: 'video',
          type: 'file'
        },
        {
          title: 'Image',
          name: 'image',
          type: 'image'
        },
      ]
    },
    {
      name: 'body',
      title: 'Body (Old)',
      description: 'This field is deprecated. Please use "Content" instead',
      type: 'blockContent',
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}]
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime'
    },
    {
      name: 'priority',
      title: 'Priority',
      type: 'number',
      validation: Rule => Rule.min(0).integer().positive(),
    },
  ],
  orderings: [
    {
      title: 'Prioritet',
      name: 'positionsAsc',
      by: [
        {field: 'priority', direction: 'asc'}
      ]
    },
  ],

  preview: {
    select: {
      title: 'title',
      priority: 'priority',
      media: 'coverImage'
    },
    prepare(selection) {
      const { priority = 'NA' } = selection
      return Object.assign({}, selection, {
        subtitle: `Prioritet ${priority}`
      })
    }
  }
}
