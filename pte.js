import PTEItemSheet from "./modules/sheet/PTEItemSheet.js";
import { pte } from "./modules/config.js";


Hooks.once("init",function()
{
console.log("pte | demarrage du systeme")

CONFIG.pte=pte

Item.unregisterSheet("core",ItemSheet)
Item.registerSheet("pte",PTEItemSheet,{makeDefault:true})
})