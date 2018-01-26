export const Capitalize = (item) => {
    return item.charAt(0).toUpperCase() + item.slice(1);
};

//refactor!!

export const banFilter = (news, baned) => {
    let newsArr = news;

    for (let i = 0; i< baned.length; i++) {
        newsArr = newsArr.filter((item) => {
            if(item.source.name !== baned[i]){
                return item
            }
        });
    }

    return newsArr;

};