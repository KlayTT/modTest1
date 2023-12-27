// export function setup(ctx) {
//     ctx.patch(Skill, 'addXP').before(function(amount, masteryAction) {
//       return [amount * 2, masteryAction];
//     });
// }

export function setup(ctx) {
    ctx.settings.section('General').add({
      type: 'number',
      name: 'xp-multiplier',
      label: 'XP Multiplier',
      hint: 'Multiply all XP gains by this amount',
      default: 1
    });
  
    ctx.patch(Skill, 'addXP').before(function(amount, masteryAction) {
      const xpMultiplier = ctx.settings.section('General').get('xp-multiplier');
      return [amount * xpMultiplier, masteryAction];
    });
}