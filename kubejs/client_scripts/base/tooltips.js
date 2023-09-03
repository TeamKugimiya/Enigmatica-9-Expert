ItemEvents.tooltip((event) => {
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
            items: ['kubejs:altered_recipe_indicator'],
            text: [Text.of('配方已被 Enigmatica 9: Expert 改動。詳情請參考 EMI。').gold()]
        },
        {
            items: ['kubejs:disabled_recipe_indicator', 'kubejs:disabled_structure_indicator'],
            text: [Text.of('配方已在 Enigmatica 9 中停用').gold()]
        },
        {
            items: [
                'create:stockpile_switch',
                'minecraft:comparator',
                'create:content_observer',
                'ars_nouveau:item_detector'
            ],
            text: [Text.of('紅石裝置：監控容器').darkRed()]
        },
        {
            items: ['quark:ender_watcher'],
            text: [Text.of('紅石裝置：檢測玩家視線').darkRed()]
        },
        {
            items: ['quark:obsidian_pressure_plate'],
            text: [Text.of('紅石裝置：檢測玩家').darkRed()]
        },
        {
            items: ['quark:obsidian_pressure_plate'],
            text: [Text.of('紅石裝置：輸出可設定的紅石訊號強度').darkRed()]
        },
        {
            items: ['quark:abacus'],
            text: [Text.of('長度測量工具').gold()]
        },
        {
            items: ['quark:grate'],
            text: [Text.of('允許掉落物穿越').gold()]
        },
        {
            items: ['quark:trowel'],
            text: [Text.of('建築工具：放置隨機方塊').gold()]
        },
        {
            items: ['quark:slime_in_a_bucket'],
            text: [Text.of('定位史萊姆區塊').gold()]
        },
        {
            items: ['quark:iron_button'],
            text: [Text.of('紅石裝置：長脈衝').darkRed()]
        },
        {
            items: ['quark:gold_button'],
            text: [Text.of('紅石裝置：短脈衝').darkRed()]
        },
        {
            items: [/^.*:(?!gold|iron).*_button$/],
            text: [Text.of('紅石裝置：中脈衝').darkRed()]
        },
        {
            items: [
                'naturesaura:animal_generator',
                'naturesaura:projectile_generator',
                'naturesaura:chorus_generator',
                'naturesaura:oak_generator',
                'naturesaura:slime_split_generator',
                'naturesaura:firework_generator',
                'naturesaura:moss_generator',
                'naturesaura:flower_generator',
                'naturesaura:potion_generator'
            ],
            text: [Text.of(`奧術儀器：生產靈氣`).green()]
        },
        {
            items: ['naturesaura:snow_creator'],
            text: [Text.of(`奧術儀器：製造冰雪`).green()]
        },
        {
            items: ['naturesaura:light_staff', 'ars_nouveau:jar_of_light'],
            text: [Text.of(`奧術工具：創造光源`).gold()]
        },
        {
            items: ['naturesaura:cave_finder'],
            text: [Text.of(`奧術工具：醒目提示附近黑暗的區域`).gold()]
        },
        {
            items: ['naturesaura:loot_finder'],
            text: [Text.of(`奧術工具：醒目提示附近的容器`).gold()]
        },
        {
            items: ['naturesaura:netherite_finder'],
            text: [Text.of(`奧術工具：醒目提示附近的獄髓`).gold()]
        },
        {
            items: ['naturesaura:death_ring'],
            text: [Text.of(`奧術工具：防止死亡`).gold()]
        },
        {
            items: ['naturesaura:shockwave_creator'],
            text: [Text.of(`奧術工具：擊退敵人`).gold()]
        },
        {
            items: ['naturesaura:fortress_finder'],
            text: [Text.of(`定位地獄要塞`).gold()]
        },
        {
            items: ['naturesaura:end_city_finder'],
            text: [Text.of(`定位終界城`).gold()]
        },
        {
            items: ['naturesaura:outpost_finder'],
            text: [Text.of(`定位掠奪者前哨站`).gold()]
        },
        {
            items: ['minecraft:ender_eye'],
            text: [Text.of(`定位要塞`).gold()]
        },
        {
            items: ['naturesaura:aura_timer'],
            text: [Text.of(`奧術儀器：計時器`).green()]
        },
        {
            items: ['naturesaura:animal_container'],
            text: [Text.of(`奧術儀器：不可見的柵欄`).green()]
        },
        {
            items: ['naturesaura:field_creator'],
            text: [Text.of(`奧術儀器：破壞方塊`).green()]
        },
        {
            items: ['naturesaura:placer'],
            text: [Text.of(`奧術儀器：放置方塊`).green()]
        },
        {
            items: ['naturesaura:grated_chute'],
            text: [Text.of(`奧術儀器：具篩選功能的漏斗`).green()]
        },
        {
            items: [
                'ars_nouveau:glyph_pickup',
                'functionalstorage:collector_upgrade',
                'naturesaura:hopper_upgrade',
                'pneumaticcraft:magnet_upgrade',
                'sophisticatedbackpacks:advanced_magnet_upgrade',
                'sophisticatedbackpacks:advanced_pickup_upgrade',
                'sophisticatedbackpacks:magnet_upgrade',
                'sophisticatedbackpacks:pickup_upgrade',
                'sophisticatedstorage:advanced_magnet_upgrade',
                'sophisticatedstorage:advanced_pickup_upgrade',
                'sophisticatedstorage:magnet_upgrade',
                'sophisticatedstorage:pickup_upgrade',
                'thermal:device_collector'
            ],
            text: [Text.of(`物品收集器`).green()]
        },
        {
            items: [
                'hexerei:dried_sage_bundle',
                'hexerei:sage_burning_plate',
                'naturesaura:spawn_lamp',
                'immersiveengineering:electric_lantern',
                'ars_nouveau:ritual_sanctuary'
            ],
            text: [Text.of(`防止生物生成`).green()]
        },
        {
            items: ['naturesaura:rf_converter'],
            text: [Text.of(`奧術儀器：消耗靈氣產生 FE 能量`).red()]
        },
        {
            items: ['naturesaura:spring', 'ars_elemental:everfull_urn'],
            text: [Text.of(`奧術儀器：無盡的水源`).green()]
        },
        {
            items: ['naturesaura:aura_detector'],
            text: [Text.of(`奧術儀器：檢測靈氣程度`).green()]
        },
        {
            items: ['naturesaura:pickup_stopper'],
            text: [Text.of(`奧術儀器：抵銷磁力`).green()]
        },
        {
            items: ['naturesaura:weather_changer'],
            text: [Text.of(`奧術儀器：操縱天氣`).green()]
        },
        {
            items: ['naturesaura:time_changer'],
            text: [Text.of(`奧術儀器：操縱時間`).green()]
        },
        {
            items: ['naturesaura:furnace_heater'],
            text: [Text.of(`奧術儀器：以靈氣充能熔爐`).green()]
        },
        {
            items: ['naturesaura:blast_furnace_booster'],
            text: [Text.of(`奧術儀器：礦物處理`).green()]
        },
        {
            items: ['naturesaura:range_visualizer'],
            text: [Text.of(`奧術工具：可視化儀器的效果範圍`).green()]
        },
        {
            items: [
                'naturesaura:ender_crate',
                'naturesaura:ender_access',
                'minecraft:ender_chest',
                'functionalstorage:ender_drawer',
                'occultism:stable_wormhole',
                'occultism:storage_controller',
                'mekanism:qio_dashboard',
                'mekanism:qio_drive_array',
                'mekanism:portable_qio_dashboard',
                'occultism:storage_remote',
                'hexerei:ender_satchel'
            ],
            text: [Text.of(`跨維度儲存`).darkPurple()]
        },
        {
            items: [
                'mekanism:quantum_entangloporter',
                'mekanism:qio_redstone_adapter',
                'mekanism:qio_exporter',
                'mekanism:qio_importer',
                'ae2:quantum_link',
                'ae2:quantum_ring'
            ],
            text: [Text.of(`跨維度物流`).darkPurple()]
        },
        {
            items: ['ars_nouveau:enchanters_mirror'],
            text: [Text.of(`奧術核心：自身`).gold()]
        },
        {
            items: ['ars_elemental:spell_horn'],
            text: [Text.of(`奧術核心：區域`).gold()]
        },
        {
            items: ['ars_nouveau:wand'],
            text: [Text.of(`奧術核心：投射物`).gold()]
        },
        {
            items: ['ars_nouveau:enchanters_sword'],
            text: [Text.of(`奧術核心：觸摸`).gold()]
        },
        {
            items: ['ars_nouveau:enchanters_shield'],
            text: [Text.of(`奧術工具：格擋攻擊時獲得法術傷害提升、魔力回復`).lightPurple()]
        },
        {
            items: ['ars_nouveau:splash_flask_cannon'],
            text: [Text.of(`奧術工具：將藥水轉換為飛濺藥水`).lightPurple()]
        },
        {
            items: ['ars_nouveau:lingering_flask_cannon'],
            text: [Text.of(`奧術工具：將藥水轉換為滯留藥水`).lightPurple()]
        },
        {
            items: ['ars_nouveau:void_jar'],
            text: [Text.of(`奧術工具：將物品轉換為魔源`).lightPurple()]
        },
        {
            items: ['ars_nouveau:potion_diffuser'],
            text: [Text.of(`奧術儀器：在一定區域內施加藥水效果`).lightPurple()]
        },
        {
            items: ['ars_nouveau:belt_of_levitation'],
            text: [Text.of(`奧術工具：使穿戴者浮空`).lightPurple()]
        },
        {
            items: ['ars_nouveau:belt_of_unstable_gifts'],
            text: [Text.of(`奧術工具：給與隨機藥水效果`).lightPurple()]
        },
        {
            items: ['ars_nouveau:ring_of_lesser_discount', 'ars_nouveau:ring_of_greater_discount'],
            text: [Text.of(`奧術工具：減少法術耗魔量`).lightPurple()]
        },
        {
            items: ['ars_nouveau:amulet_of_mana_boost'],
            text: [Text.of(`奧術工具：提高個人的魔力值上限`).lightPurple()]
        },
        {
            items: ['ars_nouveau:amulet_of_mana_regen'],
            text: [Text.of(`奧術工具：提高個人的魔力回復速度`).lightPurple()]
        },
        {
            items: [
                'ae2:certus_quartz_wrench',
                'ae2:memory_card',
                'ae2:memory_card_black',
                'ae2:memory_card_blue',
                'ae2:memory_card_brown',
                'ae2:memory_card_cyan',
                'ae2:memory_card_gray',
                'ae2:memory_card_green',
                'ae2:memory_card_light_blue',
                'ae2:memory_card_light_gray',
                'ae2:memory_card_lime',
                'ae2:memory_card_magenta',
                'ae2:memory_card_orange',
                'ae2:memory_card_pink',
                'ae2:memory_card_purple',
                'ae2:memory_card_red',
                'ae2:memory_card_white',
                'ae2:memory_card_yellow',
                'ae2:nether_quartz_wrench',
                'ars_nouveau:dominion_wand',
                'create:wrench',
                'framedblocks:framed_wrench',
                'functionalstorage:configuration_tool',
                'functionalstorage:linking_tool',
                'littlelogistics:conductors_wrench',
                'mekanism:configuration_card',
                'mekanism:configurator',
                'pneumaticcraft:camo_applicator',
                'pneumaticcraft:logistics_configurator',
                'pneumaticcraft:pneumatic_wrench',
                'powah:wrench',
                'rftoolsbase:smartwrench',
                'rftoolsbase:smartwrench_select',
                'sophisticatedstorage:storage_tool',
                'supplementaries:wrench',
                'thermal:wrench'
            ],
            text: [Text.of(`設定工具`).gold()]
        },
        {
            items: ['kubejs:summon_death_tome'],
            text: [Text.of(`召喚死亡之書。`).darkRed()]
        },
        {
            items: ['kubejs:spell_night_vision'],
            text: [Text.of(`給與夜視效果`).darkRed()]
        },
        {
            items: ['kubejs:teleport_everdawn'],
            text: [Text.of(`傳送至永晝世界。`).darkRed()]
        },
        {
            items: ['kubejs:teleport_everbright'],
            text: [Text.of(`傳送至恆曉之地。`).darkRed()]
        },
        {
            items: [
                'ars_nouveau:wixie_cauldron',
                'ars_nouveau:wixie_charm',
                'mekanism:crafting_formula',
                'mekanism:formulaic_assemblicator',
                'create:mechanical_crafter',
                'naturesaura:auto_crafter',
                'thermal:machine_crafter',
                'immersiveengineering:assembler'
            ],
            text: [Text.of(`自動合成`).green()]
        },
        {
            items: ['functionalstorage:armory_cabinet'],
            text: [Text.of(`批量儲存不可堆疊的物品`).green()]
        },
        {
            items: [
                'engineersdecor:rebar_concrete_tile_stairs',
                'engineersdecor:rebar_concrete_tile_slab',
                'engineersdecor:rebar_concrete_tile',
                'engineersdecor:rebar_concrete_wall',
                'engineersdecor:rebar_concrete_stairs',
                'engineersdecor:rebar_concrete_slab',
                'engineersdecor:rebar_concrete',
                'engineersdecor:panzerglass_block',
                'engineersdecor:panzerglass_slab',
                'thermal:lumium_glass',
                'thermal:signalum_glass',
                'thermal:obsidian_glass',
                'thermal:enderium_glass'
            ],
            text: [Text.of('無法被凋零怪破壞').color('#9a1be3')]
        },
        {
            items: ['industrialforegoing:mob_duplicator', 'spirit:soul_cage', 'pneumaticcraft:pressurized_spawner'],
            text: [Text.of('生怪裝置').green()]
        },
        {
            items: ['supplementaries:cog_block'],
            text: [Text.of('紅石裝置：發射紅石訊號').darkRed()]
        },
        {
            items: ['supplementaries:wind_vane'],
            text: [Text.of('紅石裝置：天氣檢測器').darkRed()]
        },
        {
            items: ['supplementaries:crystal_display'],
            text: [Text.of('紅石裝置：顯示紅石訊號強度').darkRed()]
        },
        {
            items: ['supplementaries:relayer'],
            text: [Text.of('紅石裝置：發射無損的紅石訊號').darkRed()]
        },
        {
            items: ['supplementaries:spring_launcher'],
            text: [Text.of('紅石裝置：實體彈射器').darkRed()]
        },
        {
            items: ['supplementaries:speaker_block'],
            text: [Text.of('紅石裝置：對附近玩家發送訊息').darkRed()]
        },
        {
            items: ['supplementaries:turn_table'],
            text: [Text.of('紅石裝置：旋轉方塊與實體').darkRed()]
        },
        {
            items: ['supplementaries:pulley_block'],
            text: [Text.of('紅石裝置：旋轉時升起或放下鎖鏈與繩索').darkRed()]
        },
        {
            items: [
                'chimes:amethyst_chimes',
                'chimes:copper_chimes',
                'chimes:carved_bamboo_chimes',
                'chimes:iron_chimes',
                'chimes:bamboo_chimes'
            ],
            text: [Text.of('柔和的聲響用以驅趕夜魅').aqua()]
        },
        {
            items: ['kubejs:aura_leaf'],
            text: [Text.of('在附近產生一定量的靈氣').gold()]
        },
        {
            items: [
                'enigmaticunity:iridescent_source_producer',
                'enigmaticunity:bright_source_producer',
                'enigmaticunity:dim_source_producer'
            ],
            text: [Text.of('奧術儀器：消耗能量來產生魔源與靈氣').green()]
        },
        {
            items: [
                'enigmaticunity:iridescent_source_generator',
                'enigmaticunity:bright_source_generator',
                'enigmaticunity:dim_source_generator'
            ],
            text: [Text.of('奧術儀器：消耗魔源與靈氣來產生能量').green()]
        },
        {
            items: [
                'create:mechanical_pump',
                'industrialforegoing:water_condensator',
                'thermal:device_water_gen',
                'mekanism:electric_pump',
                'immersiveengineering:fluid_pump',
                'pneumaticcraft:gas_lift'
            ],
            text: [Text.of(`流體泵浦`).gold()]
        },
        {
            items: ['online_detector:online_detector', 'online_detector:advanced_online_detector'],
            text: [Text.of(`紅石裝置：檢測玩家是否在線上`).darkRed()]
        },
        {
            items: ['immersiveengineering:logic_unit', 'redstonepen:control_box', 'pneumaticcraft:redstone_module'],
            text: [Text.of(`紅石裝置：可程式設計的紅石邏輯`).darkRed()]
        },
        {
            items: [
                'hexerei:sage_seed',
                'immersiveengineering:seed',
                'occultism:datura_seeds',
                'sushigocrafting:cucumber_seeds',
                'sushigocrafting:soy_seeds',
                'sushigocrafting:wasabi_seeds',
                'sushigocrafting:sesame_seeds'
            ],
            text: [
                Text.of('這類種子無法透過破壞草獲得！').green(),
                Text.of('只能在農牧市集方塊中購買。').green()
            ]
        },
        {
            items: [
                'ars_nouveau:red_sbed',
                'ars_nouveau:blue_sbed',
                'ars_nouveau:green_sbed',
                'ars_nouveau:yellow_sbed',
                'ars_nouveau:purple_sbed',
                'ars_nouveau:orange_sbed'
            ],
            text: [Text.of(`星寶石獸裝備：紅石控制`).green()]
        },
        {
            items: ['starbunclemania:wyrm_degree'],
            text: [Text.of(`星寶石獸裝備：精細化搬運物品`).green()]
        },
        {
            items: ['starbunclemania:direction_scroll'],
            text: [Text.of(`星寶石獸裝備：允許與方塊的指定方向互動`).green()]
        },
        {
            items: ['ars_nouveau:starbuncle_shades'],
            text: [Text.of(`星寶石獸裝備：變酷的同時繼續完成任務`).green()]
        },
        {
            items: ['ars_nouveau:wixie_hat'],
            text: [Text.of(`星寶石獸裝備：搬運藥水`).green()]
        },
        {
            items: ['starbunclemania:star_battery'],
            text: [Text.of(`星寶石獸裝備：搬運能量`).green()]
        },
        {
            items: ['starbunclemania:star_bucket'],
            text: [Text.of(`星寶石獸裝備：搬運液體`).green()]
        },
        {
            items: ['starbunclemania:star_balloon'],
            text: [Text.of(`星寶石獸裝備：搬運氣體`).green()]
        },
        {
            items: ['starbunclemania:star_bin'],
            text: [Text.of(`星寶石獸裝備：銷毀物品`).green()]
        },
        {
            items: ['superiorshields:flux_shield'],
            text: [Text.of(`接受整合元件`).green()]
        },
        {
            items: ['mekanism:cardboard_box'],
            text: [Text.of(`用於搬運容器`).green()]
        },

        {
            items: [
                'createaddition:electric_motor',
                'create:steam_engine',
                'create:windmill_bearing',
                'create:water_wheel',
                'create:large_water_wheel'
            ],
            text: [Text.of(`產生旋轉動能`).green()]
        }
    ];

    recipes.forEach((recipe) => {
        event.add(recipe.items, recipe.text);
    });

    jei.base.items.disabled.forEach((item) => {
        event.add(item, [Text.of(disabled_item_tooltip).red()]);
    });
});
