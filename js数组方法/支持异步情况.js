const Basket = {
    onion: 1,
    ginger: 2,
    garlic: 3,
}

const getVegetableNum = async (veg) => Basket[veg];
const start = async () => {
    console.log('Start');

    const promises = ['onion', 'ginger', 'garlic']
        .map(async function callback(veg) {
            const num = await getVegetableNum(veg);
            console.log(veg, num);
        });

    console.log('promises:', promises);

    console.log('End');
}

start()