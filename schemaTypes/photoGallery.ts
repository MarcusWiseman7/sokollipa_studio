export default {
    name: 'photoGallery',
    title: 'Photos',
    type: 'document',
    fields: [
        { name: 'teamName', title: 'Team', type: 'string', readOnly: true },
        {
            name: 'photoAlbums',
            title: 'Albums',
            type: 'array',
            of: [{ type: 'photoAlbum' }],
        },
    ],
    preview: {
        select: {
            title: 'teamName',
        },
    },
};
