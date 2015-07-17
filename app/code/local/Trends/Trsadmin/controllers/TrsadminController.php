<?php
class Trends_Trsadmin_TrsadminController extends Mage_Adminhtml_Controller_Action
{
    public function indexAction()
    {
        $this->loadLayout();

        $text="<h1>TRS</h1>";
        $block = $this->getLayout()
        ->createBlock('core/text', 'example-block')
        ->setText($text);
        $this->_addContent($block);

        $this->renderLayout();
    }
}