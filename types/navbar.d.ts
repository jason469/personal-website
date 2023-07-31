type navItem = {
    title: string,
    scrollId: string,
    dropdownData?: Array<navItem>
}

type navbarItems = {
    navItems: Array<navItem>
}