local filesystem = require("gears.filesystem")
local config_dir = filesystem.get_configuration_dir()
local utils_dir = config_dir .. "utilities/"

return {
	--- Default Applications
	default = {
		--- Default terminal emulator (nkhatiwada)
		terminal = "alacritty",
		--- Default music client (nkhatiwada removed)
		--- Default text editor (nkhatiwada removed)
		--- Default code editor (nkhatiwada removed)
		--- Default web browser
		web_browser = "firefox",
		--- Default file manager (nkhatiwada)
		file_manager = "alacritty -e ranger",
		--- Default network manager (nkhatiwada removed)
		--- Default bluetooth manager (nkhatiwada removed)
		--- Default power manager (nkhatiwada removed)
		--- Default rofi global menu
		app_launcher = "rofi -no-lazy-grab -show drun -modi drun -theme " .. config_dir .. "configuration/rofi.rasi",
	},

	--- List of binaries/shell scripts that will execute for a certain task
	utils = {
		--- Fullscreen screenshot
		full_screenshot = utils_dir .. "screensht full",
		--- Area screenshot
		area_screenshot = utils_dir .. "screensht area",
		--- Color Picker (nkhatiwada removed)
	},
}
