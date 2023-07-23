export default class PTEItemSheet extends ItemSheet{


    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
          classes: ["pte", "sheet", "item",this.item.data.type],
          template: "pte/templates/sheets/$(this.item.data.type)-sheet.html",
          width: 520,
          height: 480,
          tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description"}],
          scrollY: [".attributes"],
        });
      }

    getData(){
        const data =super.getData()
        data.config=CONFIG.pte 
        return data
    }
}