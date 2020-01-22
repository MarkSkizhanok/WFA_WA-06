sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"../model/formatter",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
], function(Controller, formatter, MessageToast) {
	"use strict";

	return Controller.extend("hw12.controller.App", {

		formatter: formatter,

		onInit: function () {
			
		},

		onCreate : function () {
			var oModel = this.getView().getModel();
			createData(oModel);
		},

		onRead: function () {
				var oTable = this.getView().byId("table21");

				let xhrids = new XMLHttpRequest();

				function reqListener() {

					// var oModel1 = new sap.ui.model.json.JSONModel();
					// oModel1.setData({
					// 	myProcessLog1: data
					// });
					// oTable.setModel(oModel1);

				}

				xhrids.addEventListener("load", reqListener);

				xhrids.open("GET", "http://localhost:2403/ultrabooks");
				xhrids.setRequestHeader("Content-Type", "application/json");
				xhrids.send();
			},

			onDelete: function () {
				var id = this.getView().byId("input11").getValue();
				MessageToast.show(id);
				deleteData(id);
			},

			onUpdate: function () {
				var oModel = this.getView().getModel();
				var id = this.getView().byId("box31").getValue();
				MessageToast.show(id);
				updateData(id, oModel);
			}
		});

		function createData(oModel) {
			let XHR = new XMLHttpRequest();

			XHR.addEventListener('load', function (event) {
				MessageToast.show('Success');
			});

			XHR.addEventListener('error', function (event) {
				MessageToast.show('Error');
			});

			XHR.open("POST", "http://localhost:2403/ultrabooks");
			XHR.setRequestHeader("Content-Type", "application/json");
			XHR.send(oModel.getJSON());
		}

		function deleteData(id) {
		let XHR = new XMLHttpRequest();

		XHR.addEventListener('load', function (event) {
			MessageToast.show('Success');
		});

		XHR.addEventListener('error', function (event) {
			MessageToast.show('Error');
		});

		XHR.open("DELETE", "http://localhost:2403/ultrabooks/" + id);
		XHR.setRequestHeader("Content-Type", "application/json");
		XHR.send();
	}

	function updateData(id, oModel) {
		let XHR = new XMLHttpRequest();

		XHR.addEventListener('load', function (event) {
			MessageToast.show('Success');
		});

		XHR.addEventListener('error', function (event) {
			MessageToast.show('Error');
		});

		XHR.open("PUT", "http://localhost:2403/ultrabooks/" + id);
		XHR.setRequestHeader("Content-Type", "application/json");
		XHR.send(oModel.getJSON());
	}
});