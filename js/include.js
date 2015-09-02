(function () {
	
	var AccountId, FolderFullName, MessageUid;
	
	AfterLogicApi.addPluginHook('view-model-defined', function (sViewModelName, oViewModel) {
		if ('CMessagePaneViewModel' === sViewModelName)
		{
			oViewModel.openExamplePopup = function () {
				AfterLogicApi.showPopup(ExamplePopup, [AccountId, FolderFullName, MessageUid]);
			};
		}
	});
	
	AfterLogicApi.addPluginHook('view-message', function (iAccountId, sFolderFullName, sMessageUid) {
		AccountId = iAccountId;
		FolderFullName = sFolderFullName;
		MessageUid = sMessageUid;
	});
	
})();