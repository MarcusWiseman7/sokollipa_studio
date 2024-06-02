export default {
    name: 'photoAlbum',
    title: 'Album',
    type: 'object',
    fields: [
        { name: 'name', title: 'Name', type: 'string' },
        {
            name: 'photos',
            title: 'Photos',
            type: 'array',
            of: [{ type: 'mainImage' }],
            options: {
                layout: 'grid',
            },
        },
    ],
    preview: {
        select: {
            title: 'name',
        },
    },
};
