function nestedExample() {
    myMenu = miniMenu.createMenu(
        miniMenu.createMenuItem("Fight"),
        miniMenu.createMenuItem("Item"),
        miniMenu.createMenuItem("Run")
    )
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 50)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 48)
    myMenu.top = 60
    myMenu.left = 10
    myMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
        myMenu.setStyleProperty(miniMenu.StyleKind.Selected, miniMenu.StyleProperty.Background, 11)
        myMenu.setButtonEventsEnabled(false)
        if (selection == "Item") {
            nestedMenu = miniMenu.createMenu(
                miniMenu.createMenuItem("Banana Pack"),
                miniMenu.createMenuItem("Banana"),
                miniMenu.createMenuItem("Ammo"),
            
            )
        } else if (selection == "Fight") {
            nestedMenu = miniMenu.createMenu(
                miniMenu.createMenuItem("Agility"),
                miniMenu.createMenuItem("Body Slam"),
                miniMenu.createMenuItem("Banana Gun"),
            )