<?php
// app/code/local/Envato/WidgetLinks/Block/Links.php
class Envato_WidgetLinks_Block_Links extends Mage_Core_Block_Abstract implements Mage_Widget_Block_Interface {
/**
  * Produce links list rendered as html
  *
  * @return string
  */
  protected function _toHtml() {
    $html = '';
    $link_options = self::getData('link_options');
      
    if (empty($link_options)) {
      return $html;
    }
      
    $arr_options = explode(',', $link_options);
      
    if (is_array($arr_options) && count($arr_options)) {
      $option=$arr_options[0];
      $html.='<div class="list-header"><ul>';
      $files = scandir('media/wysiwyg/wysiwyg/logos/'.$option.'/');
      foreach($files as $file) {
        if($file!='.'&& $file!='..'){
          $fileName = chop($file,'.jpg');
          $nameSearch = str_replace('-', '+', $fileName);
          $html .= '<li><a href="http://localhost/sites/magento/index.php/catalogsearch/result/index/?q=%22'.$nameSearch.'%22">';
          $html .= '<img alt="'.$fileName.'" src="http://localhost/sites/magento/media/wysiwyg/wysiwyg/logos/'.$option.'/'.$file.'" /></a></li>';
        }
      }
      $html.='</ul></div>';
    }
     
    return $html;
  }
}