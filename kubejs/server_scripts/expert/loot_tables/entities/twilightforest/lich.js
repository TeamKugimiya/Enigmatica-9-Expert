ServerEvents.genericLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.modify('twilightforest:entities/lich', (table) => {
        table.addPool((pool) => {
            pool.rolls = [3, 5];
            pool.addItem(
                Item.of(
                    'ars_nouveau:novice_spell_book',
                    '{color:12,display:{Lore:[\'{"text":"這究竟是什麼物種的皮革呢？","color":"dark_red"}\'],Name:\'{"text":"破舊的法術書","color":"dark_purple"}\'}}'
                ),
                1
            );
        });

        table.addPool((pool) => {
            pool.rolls = [1, 1];
            pool.addItem(Item.of('minecraft:enchanted_book').enchant('spirit:soul_reaper', 1), 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = [5, 15];
            pool.addItem('twilightforest:charm_of_life_2', 1, 1);
        });
    });
});
