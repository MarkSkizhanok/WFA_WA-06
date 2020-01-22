sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createModel: function() {
			var oModel = new JSONModel();
			return oModel;
		}

	};
});