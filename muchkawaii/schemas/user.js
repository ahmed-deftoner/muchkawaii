export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        {
          name: 'userName',
          title: 'UserName',
          type: 'string',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'url',
        },
        {
            name: 'favourites',
            title: 'Favourites',
            type: 'array',
            of: [
              {
                type: 'reference',
                to: [{ type: 'hentai' }],
              },
            ],
          },
      ]
};