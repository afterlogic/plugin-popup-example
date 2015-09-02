/**
 * @constructor
 */
function ExamplePopup()
{
	this.accountId = ko.observable(0);
	this.folderFullName = ko.observable('');
	this.messageUid = ko.observable('');
}

ExamplePopup.prototype.popupTemplate = function ()
{
	return 'Plugin_ExamplePopup';
};

ExamplePopup.prototype.onShow = function (iAccountId, sFolderFullName, sMessageUid)
{
	this.accountId(iAccountId);
	this.folderFullName(sFolderFullName);
	this.messageUid(sMessageUid);
};

ExamplePopup.prototype.save = function ()
{
	this.closeCommand();
};