/*global QUnit*/

sap.ui.define([
	"nschild./childcomp/controller/childComp.controller"
], function (Controller) {
	"use strict";

	QUnit.module("childComp Controller");

	QUnit.test("I should test the childComp controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
