<?php
// app/code/local/Envato/WidgetLinks/Model/Options.php
class Envato_WidgetLinks_Model_Options {
/**
  * Provide available options as a value/label array
  *
  * @return array
  */
  public function toOptionArray() {
    return array(
      array('value' => 'nba', 'label' => 'NBA'),
      array('value' => 'nfl', 'label' => 'NFL'),
      array('value' => 'mlb', 'label' => 'MLB'),
      array('value' => 'nhl', 'label' => 'NHL'),
    );
  }
}