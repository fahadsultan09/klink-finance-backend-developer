module.exports =
{
    count: (data = []) => data.length,
    sum: (data = []) => data.reduce((elem, { amount }) => elem + amount, 0),
    average: (sum, count) => sum / count,
    averageByPosition : (data = [],key) => {
        // const users = [
        //     { group: 'editor', name: 'Adam', age: 23 },
        //     { group: 'editor', name: 'John', age: 28 },
        //     { group: 'editor', name: 'William', age: 34 },
        //     { group: 'admin', name: 'Oliver', age: 28 }
        //   ];
          
          const result = data.reduce((a, e) => {
            if (!a[e[`${key}`]]) {
              a[e[`${key}`]] = [];
            }
            
            a[e[`${key}`]].push(e.salary.amount);
            return a;
          }, {});
          
          const avgs = result.fromEntries(
            Object.entries(grouped).map(([k, v]) => [
              k, v.reduce((a, e) => a + e, 0) / v.length
            ])
          );

          return avgs;
    }

}