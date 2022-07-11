local awful = require("awful")
local filesystem = require("gears.filesystem")
local config_dir = filesystem.get_configuration_dir()
local helpers = require("helpers")

local function autostart_apps()
	--- Compositor (nkhatiwada removed)
	--- Music Server (nkhatiwada removed)
	--- Polkit Agent
	helpers.run.run_once_ps(
		"polkit-gnome-authentication-agent-1",
		"/usr/lib/polkit-gnome/polkit-gnome-authentication-agent-1"
	)
	--- Other stuff (nkhatiwada removed blueman applet)
	helpers.run.run_once_grep("nm-applet")
end

autostart_apps()
