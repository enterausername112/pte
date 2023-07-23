import PTEItemSheet from "./modules/sheet/PTEItemSheet";
import { pte } from "./modules/config";


Hooks.once("init",function()
{
console.log("pte | demarrage du systeme")

CONFIG.pte=pte

Item.unregisterSheet("core",ItemSheet)
Item.registerSheet("pte",PTEItemSheet,{makeDefault:true})
})