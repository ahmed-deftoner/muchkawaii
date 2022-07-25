export default {
    name: 'hentai',
    title: 'Hentai',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      },
      {
        name: 'video',
        title: 'Video',
        type: 'file',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'likes',
        title: 'Likes',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'user' }],
          },
        ],
      },
      {
        name: 'dislikes',
        title: 'Dislikes',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [{ type: 'user' }],
          },
        ],
      },
      {
        name: 'comments',
        title: 'Comments',
        type: 'array',
        of: [{ type: 'comment' }],
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
      },
    ],
  };