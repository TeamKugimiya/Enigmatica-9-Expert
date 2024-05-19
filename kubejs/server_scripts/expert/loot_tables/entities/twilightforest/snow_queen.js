ServerEvents.genericLootTables((event) => {
    if (global.isExpertMode == false) {
        return;
    }
    event.modify('twilightforest:entities/snow_queen', (table) => {
        table.addPool((pool) => {
            pool.rolls = 4;
            pool.addItem(Item.of('ars_nouveau:stable_warp_scroll'), 1);
        });

        table.addPool((pool) => {
            pool.rolls = 4;
            pool.addItem(
                Item.of('ars_nouveau:enchanters_eye', {
                    display: {
                        Name: '{"text":"白霜魔法之鏡","color":"aqua"}',
                        Lore: ['{"text":"其觸感依舊冰冷...","color":"dark_blue","italic":true}']
                    }
                }),
                1
            );
        });

        table.addPool((pool) => {
            pool.rolls = 1;
            pool.addItem(Item.of('byg:subzero_crystal_shard'), 1, [10, 24]);
        });

        table.addPool((pool) => {
            pool.rolls = 1;
            pool.addItem(Item.of('byg:budding_subzero_crystal'), 1, 1);
        });

        table.addPool((pool) => {
            pool.rolls = 1;
            pool.addItem(Item.of('ars_nouveau:water_essence'), 1, [10, 16]);
        });

        table.addPool((pool) => {
            pool.rolls = 1;
            pool.addItem(Item.of('ars_nouveau:conjuration_essence'), 1, [10, 16]);
        });
    });
});
