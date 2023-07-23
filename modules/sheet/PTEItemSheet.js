export default class PTEItemSheet extends ItemSheet{


    static get defaultOptions() {
        return foundry.utils.mergeObject(super.defaultOptions, {
          classes: ["pte", "sheet", "item",this.item.type],
          template: `pte/templates/sheets/${this.item.type}-sheet.html`,
          width: 520,
          height: 480,
          tabs: [{navSelector: ".sheet-tabs", contentSelector: ".sheet-body", initial: "description"}],
          scrollY: [".attributes"],
        });
      }

      get template()
      {
        return `pte/templates/sheets/${this.item.type}-sheet.html`
      }

    getData(){
        const data =super.getData()
        data.config=CONFIG.pte 
        return data
    }
}