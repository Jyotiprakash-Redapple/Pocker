import React from 'react'

import { CContainer, CHeader, CHeaderNav, CNavItem } from '@coreui/react'

import { AppHeaderDropdown } from './header/index'

const AppHeader = () => {
  return (
    <CHeader position="sticky">
      <CContainer fluid>
        <CHeaderNav>
          <CNavItem></CNavItem>
          <CNavItem></CNavItem>
          <CNavItem></CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
    </CHeader>
  )
}

export default AppHeader
