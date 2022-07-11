local awful = require("awful")
local gears = require("gears")
local wibox = require("wibox")
local beautiful = require("beautiful")
local dpi = beautiful.xresources.apply_dpi
local helpers = require("helpers")
local decorations = require("ui.decorations")

--- MacOS like window decorations
--- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

--- Disable this if using `picom` to round your corners
--- decorations.enable_rounding()

local button_size = dpi(16)
local button_margin = { top = dpi(2), bottom = dpi(2), left = dpi(5), right = dpi(5) }
local button_color_unfocused = beautiful.xcolor8
local button_shape = gears.shape.circle

local function close(c)
	return decorations.button(
		c,
		button_shape,
		beautiful.xcolor1,
		button_color_unfocused,
		beautiful.xcolor9,
		button_size,
		button_margin,
		"close"
	)
end

local function minimize(c)
	return decorations.button(
		c,
		button_shape,
		beautiful.xcolor3,
		button_color_unfocused,
		beautiful.xcolor11,
		button_size,
		button_margin,
		"minimize"
	)
end

local function maximize(c)
	return decorations.button(
		c,
		button_shape,
		beautiful.xcolor2,
		button_color_unfocused,
		beautiful.xcolor10,
		button_size,
		button_margin,
		"maximize"
	)
end

--- Add a titlebar if titlebars_enabled is set to true in the rules.
client.connect_signal("request::titlebars", function(c)
	awful.titlebar(
		c,
		{ position = "top", size = dpi(18), font = beautiful.font_name .. "Medium 10", bg = beautiful.transparent }
	):setup({
		{
			layout = wibox.layout.align.horizontal,
			{ --- Left
				{
					close(c),
					minimize(c),
					maximize(c),
					--- Create some extra padding at the edge
					helpers.ui.horizontal_pad(dpi(5)),
					layout = wibox.layout.fixed.horizontal,
				},
				left = dpi(2),
				widget = wibox.container.margin,
			},
                        -- nkhatiwada removed Middle
		        --- Middle, Right
			nil,
		},
		bg = beautiful.titlebar_bg,
		shape = helpers.ui.prrect(beautiful.border_radius, true, true, false, false),
		widget = wibox.container.background,
	})

	awful.titlebar(c, {
		position = "bottom",
                -- nkhatiwada
		size = dpi(8),
		bg = beautiful.transparent,
	}):setup({
		bg = beautiful.titlebar_bg,
		shape = helpers.ui.prrect(beautiful.border_radius, false, false, true, true),
		widget = wibox.container.background,
	})
end)
