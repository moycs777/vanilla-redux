function data(state, action) {
    switch (action.type) {
        case 'SEARCH_VIDEO':
            {
                let results = [];
                if (action.payload.query) {
                    const list = state.data.categories[2].playlist;
                    const results = list.filter((item) => {
                        if (item.author == action.payload.query) {
                            console.log("coincidencia :" + item.author);
                        }
                        return item.author.includes('Luis Fonsi')
                        /* return item.author.includes(action.payload.query) */
                    })
                }
                console.log("results :" + results);
                return {
                    ...state,
                    search: results
                }
            }

        default:
            return state;
    }
}

export default data;