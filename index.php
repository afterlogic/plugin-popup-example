<?php

class_exists('CApi') or die();

class CPopupExamplePlugin extends AApiPlugin
{
	/**
	 * @param CApiPluginManager $oPluginManager
	 */
	public function __construct(CApiPluginManager $oPluginManager)
	{
		parent::__construct('1.0', $oPluginManager);
	}

	public function Init()
	{
		parent::Init();
		
		$this->SetI18N(true);

		$this->AddJsFile('js/include.js');
		$this->AddJsFile('js/ExamplePopup.js');

		$this->IncludeTemplate('Mail_LayoutSidePane_MessagePaneViewModel', 'Message-Pane-More-Actions-Menu', 'templates/include.html');
		$this->AddTemplate('ExamplePopup', 'templates/ExamplePopup.html', 'Layout', 'Screens-Bottom', 'popup');
	}
}

return new CPopupExamplePlugin($this);
