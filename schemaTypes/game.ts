export default {
    title: 'Game',
    name: 'game',
    type: 'object',
    fields: [
        { title: 'Date', name: 'date', type: 'datetime' },
        { title: 'Home Team', name: 'homeTeam', type: 'reference', to: [{ type: 'team' }] },
        { title: 'Away Team', name: 'awayTeam', type: 'reference', to: [{ type: 'team' }] },
        { title: 'Home Team Score', name: 'homeTeamScore', type: 'number' },
        { title: 'Away Team Score', name: 'awayTeamScore', type: 'number' },
        { title: 'Description', name: 'description', type: 'text' },
    ],
    preview: {
        select: {
            homeTeamName: 'homeTeam.name',
            awayTeamName: 'awayTeam.name',
            date: 'date',
        },
        prepare(selection) {
            const { homeTeamName, awayTeamName, date } = selection;
            return {
                title: homeTeamName + ' - ' + awayTeamName,
                subtitle: new Date(date).toLocaleDateString(),
            };
        },
    },
};
