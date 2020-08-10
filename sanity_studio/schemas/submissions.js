/*
 * Doesn't cover all the data fields.
 * Remove or set readOnly to `false` if you want to be able
 * to edit the responses in the Studio
 */

export default {
  name: 'submission.form',
  type: 'document',
  title: 'Form submission',
  readOnly: true,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'data',
      type: 'object',
      title: 'Data',
      fields: [
        {
          name: 'name',
          type: 'string',
          title: 'Name'
        },
        {
          name: 'email',
          type: 'string',
          title: 'Email'
        },
        {
          name: 'tot',
          type: 'string',
          title: 'Tot'
        },
        {
          name: 'ip',
          type: 'string',
          title: 'IP',
          hidden: true
        },
        {
          name: 'referrer',
          type: 'string',
          title: 'referrer',
          hidden: true
        },
        {
          name: 'user_agent',
          type: 'string',
          title: 'user_agent',
          hidden: true
        }
      ]
    },
    {
      name: 'email',
      type: 'string',
      hidden: true,
      title: 'Email'
    },
    {
      name: 'number',
      type: 'number',
      title: 'Number'
    },
    {
      name: 'created_at',
      type: 'datetime',
      title: 'Created at'
    },
    {
      name: 'body',
      type: 'string',
      hidden: true
    },
    {
      name: 'company',
      type: 'string',
      hidden: true
    },
    {
      name: 'ip',
      type: 'string',
      hidden: true,
      title: 'IP'
    },
    {
      name: 'referrer',
      type: 'string',
      hidden: true,
      title: 'referrer'
    },
    {
      name: 'user_agent',
      type: 'string',
      title: 'user_agent',
      hidden: true
    },
    {
      name: 'form_name',
      type: 'string',
      hidden: true
    },
    {
      name: 'human_fields',
      type: 'string',
      hidden: true
    },
    {
      name: 'id',
      type: 'string',
      hidden: true
    },
    {
      name: 'first_name',
      type: 'string',
      hidden: true
    },
    {
      name: 'last_name',
      type: 'string',
      hidden: true
    },
    {
      name: 'site_url',
      type: 'string',
      hidden: true
    },
    {
      name: 'summary',
      type: 'string',
      hidden: true
    },
    {
      name: 'ordered_human_fields',
      type: 'string',
      hidden: true
    },
    {
      name: 'name',
      type: 'string',
      hidden: true
    },
    {
      name: 'form_id',
      type: 'string',
      hidden: true
    }
  ]
}
