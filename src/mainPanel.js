import React from 'react'
import Background from './components/background/background'
import PanelContainer from './components/panelContainer/panelContainer'
import PanelSideBar from './components/panelSideBar/panelSideBar'
import ComponentGridContainer from './components/componentGridContainer/componentGridContainer'
import TestUi from './components/testUi/testUi'
import Profit from './components/ui/profit/profit'
import ProductsInStore from './components/ui/productsInStore/productsInStore'
import ProductsOutOfStock from './components/ui/productsOutOfStock/productsOutOfStock'
import './index.css'
function MainPanel() {
  return (
    <div class="mainPanel">
      <Background/>
      <PanelContainer>
        <PanelSideBar/>
        <div class="infoContainer">
        <ComponentGridContainer grid_template="grid3">
          <ProductsInStore content="72"/>
          <ProductsOutOfStock content="0"/>
          <Profit value="5000.57" pourcentage="30.00"/>
        </ComponentGridContainer>
        <ComponentGridContainer grid_template="grid1">
          <TestUi/>
        </ComponentGridContainer>
        <ComponentGridContainer grid_template="grid2">
          <TestUi/>
          <TestUi/>
        </ComponentGridContainer>

        </div>

      </PanelContainer>

    </div>
  )
}

export default MainPanel
