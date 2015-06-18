<?php
/**
* @category   Mage
* @package    Mage_Catalog
* @author     Ben Marks, Blue Acorn LLC
*/
class BlueAcorn_Catalog_Helper_Product_Compare extends Mage_Catalog_Helper_Product_Compare
{
    /**
     * Retrieve url for adding product to compare list, return false
     * Removes compare option from category list pages
     *
     * @param   Mage_Catalog_Model_Product $product - not used but must leave else we get errors
     * @return  boolean false
     */
    public function getAddUrl($product)
    {
        return false;
    }
 
}
?>