sap.ui.define([
	"sap/ui/core/UIComponent",
	"./model/models"
], function(UIComponent, models) {
	"use strict";

	return UIComponent.extend("hw12.Component", {

		metadata: {
			manifest: "json"
		},

		
		init: function() {
			UIComponent.prototype.init.apply(this, arguments);

			this.setModel(models.createModel());

			this.getRouter().initialize();
		}
	});
});