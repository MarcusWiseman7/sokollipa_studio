export default {
    title: 'Schedule',
    name: 'schedule',
    type: 'object',
    fields: [
        {
            title: 'League',
            name: 'league',
            type: 'reference',
            to: [{ type: 'league' }],
        },
        {
            name: 'games',
            title: 'Games',
            type: 'array',
            of: [{ type: 'game' }],
        },
    ],
    preview: {
        select: {
            title: 'league.name',
        },
    },
};
