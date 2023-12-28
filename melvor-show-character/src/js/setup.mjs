export function setup(ctx) {

  const getObj = (obj, vItems) => {
    for (let vitem of vItems.split('.')) {
        if (vitem.endsWith('()')) {
            switch (vitem) {
                case 'ObjectValues()': obj = Object.values(obj); break;
                default: console.error('[MOD]ViewCharacterAndItems: getObj()');
            }
        } else {
            if (!(vitem in obj)) return undefined;
            obj = obj[vitem];
      }
    }
    return obj;
  }

    let showEquipItems = (item) => {
      let notEquipable = false;
      let data = item.name;
        if (item instanceof ShopPurchase) {
          data = item._name;
          notEquipable = `${getLangString('Shop Item not Equipable')} ${item.localId}`
        } else if (item instanceof BankSlotItem) {
          data = item._name;
          notEquipable = `${getLangString('Bank Item not Equipable')} ${item.localId}`
  }

      if (item.media) {
        data = `<img class="itemView-icon-xxs" src="${item.media}"> ${data}`;
    }
        if (item instanceof Item) {
        data = `<a href="javascript:mod.api.ShowItemSourcesAndUses.showList('${item.id}');">${data}</a>`;
          if (item instanceof EquipmentItem) {
          notEquipable = game.stats.itemFindCount(item) > 0;
        }
      }
      if (notEquipable) {
        data = `${getLangString(`${item.name} is not Equipable`)}`;
    }
    return data;
  }
}


// NOTES use masteryAction in return when viewing player model
// NOTES use Async to show multiple Views at one (Bank Items and Shop Items)

// ctx.settings.section('View Player').add({
    //   //Something
    // });
  
    // ctx.patch(Player, 'viewPlayer').before(function(view, masteryAction) {
    //   /* func for return */
    //   return /* Something */;
    // });

