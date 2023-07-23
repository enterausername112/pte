import PTEItemSheet from "./modules/sheet/PTEItemSheet.js";
import { pte } from "./modules/config.js";


Hooks.once("init",function()
{
console.log("pte | demarrage du systeme")

CONFIG.pte=pte

Items.unregisterSheet("core",ItemSheet)
Items.registerSheet("pte",PTEItemSheet,{makeDefault:true})
})