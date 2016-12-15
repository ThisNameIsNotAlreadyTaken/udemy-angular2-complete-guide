export class MenuSearchService {
    getMatchedMenuItems(searchTerm: string) {
        return new Promise((resolve, reject) => {
            const result: any[] = [];

            for (let i = 0; i < 20; i++) {
                result.push({
                    id: i,
                    name: 'Item ' + i,
                    short_name: 'Item ' + i,
                    description: `Item ${i}, Description for term: ${searchTerm}`
                });
            }

            setTimeout(() => {
                resolve(result);
            }, 2000);    
        });
    };
}