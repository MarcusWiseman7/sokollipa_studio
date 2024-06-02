export default {
    name: 'season',
    title: 'Seasons',
    type: 'document',
    fields: [
        {
            name: 'year',
            title: 'Year',
            type: 'string',
            readOnly: true,
        },
        {
            name: 'schedules',
            title: 'Schedules',
            type: 'array',
            of: [{ type: 'schedule' }],
        },
    ],
    preview: {
        select: {
            title: 'year',
        },
    },
};
