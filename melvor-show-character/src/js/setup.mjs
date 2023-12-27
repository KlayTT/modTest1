export function setup(ctx) {
    ctx.settings.section('View Player').add({
      /* Data to add player view screen */
    });
  
    ctx.patch(Player, 'viewPlayer').before(function(view, masteryAction) {
      /* func for return */
      return /* Something */;
    });
}

// NOTES use masteryAction in return when viewing player model