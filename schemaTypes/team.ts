export default {
  title: 'Teams',
  name: 'team',
  type: 'document',
  fields: [
    {title: 'Name', name: 'name', type: 'string'},
    {
      title: 'Logo',
      name: 'logo',
      type: 'image',
      fields: [
        {
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          description: 'Important for SEO and accessibility',
        },
      ],
    },
    {
      title: 'Players',
      name: 'players',
      type: 'array',
      of: [
        {
          type: 'teamPlayer',
        },
      ],
    },
  ],
};
