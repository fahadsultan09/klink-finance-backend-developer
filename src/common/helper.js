module.exports =
{
    count: (data = []) => data.length,
    sum: (data = []) => data.reduce((elem, { salary: { amount = 0 } }) => elem + parseInt(amount), 0),
    average: (sum, count) => sum / count,
    averageByPosition: (data = []) => {
        const users = [
            { group: 'editor', name: 'Adam', age: 23 },
            { group: 'editor', name: 'John', age: 28 },
            { group: 'editor', name: 'William', age: 34 },
            { group: 'admin', name: 'Oliver', age: 28 }
        ];

        const grouped = data.reduce((curr, acc) => {
            const { position, salary: { amount: amount } } = acc
            if (!curr[`${position}`]) {
                curr[`${position}`] = [];
            }
            curr[`${position}`].push(parseInt(amount));
            return curr;
        }, {});

        const avgs = Object.fromEntries(
            Object.entries(grouped).map(([k, v]) => [
                k, v.reduce((curr, acc) => curr + acc, 0) / v.length
            ])
        );
        return avgs || {}
    }

}