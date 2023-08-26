ItemEvents.tooltip((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    /*
    Valid Color Codes:
    
    .black()
    .darkBlue()
    .darkGreen()
    .darkAqua()
    .darkRed()
    .darkPurple()
    .gold()
    .gray()
    .darkGray()
    .blue()
    .green()
    .aqua()
    .red()
    .lightPurple()
    .yellow()
    .white()
    .color('#808080') //any hex color
    */
    const recipes = [
        {
            items: ['kubejs:energetic_transference_matrix'],
            text: [
                Text.of(
                    '這是一道通往主世界的永恆傳送門，能讓魔源透過交換勞動的方式，在兩界間流動。'
                ).lightPurple()
            ]
        },
        {
            items: ['kubejs:dream_stone'],
            text: [Text.of('握在手中時會輕輕地發出嗡嗡聲。').gold()]
        },
        {
            items: ['spirit:soul_cage'],
            text: [Text.of('每次生成生物時，都會消耗環境中的靈氣。').red()]
        },
        {
            items: ['immersiveengineering:windmill', 'immersiveengineering:watermill'],
            text: [Text.of('僅作裝飾用途。').green()]
        }
    ];

    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.text);
    });

    jei.expert.items.disabled.forEach((item) => {
        event.add(item, [Text.of(disabled_item_tooltip).red()]);
    });
});
