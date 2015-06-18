<?php
class Atwix_Cmsattr_Model_Products extends Mage_Catalog_Model_Product
{
    public function getItemsCollection($valueId)
    {
        $collection = Mage::getModel('catalog/product')->getCollection()
            ->addAttributeToSelect('*')
            ->addAttributeToFilter('license', array('eq' => $valueId));
        Mage::getSingleton('cataloginventory/stock')->addInStockFilterToCollection($collection);
        return $collection;
    }
}