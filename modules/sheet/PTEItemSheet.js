export default class PTEItemSheet extends ItemSheet{


    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
          classes: ["pte", "sheet", "item"],
          width: 520,
          height: 480,
          tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description"}],
          scrollY: [".attributes"],
        });
      }

      get template()
      {
        return `systems/pte/templates/items/${this.item.type}-sheet.html`
      }

    getData(){
        const data =super.getData()
        data.config=CONFIG.pte 
        foundry.utils.mergeObject(data, {system:context.item.system})
        return data
    }
}