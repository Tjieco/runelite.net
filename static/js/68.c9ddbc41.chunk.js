(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[68],{346:function(e,n){e.exports={title:"1.4.25 Release",description:"New chat box input for Bank Tags and kills to level in XP Tracker",author:"Jordan",body:'<p>The <a href="https://github.com/runelite/runelite/wiki/Bank-Tags" native="">Bank Tags plugin</a> now utilizes a new\ncustom input box which includes a moveable typing cursor, multiple character selection, and mouse\ninteraction. Additionally, as a result, editing tags will no longer clear any open bank searches.\nHuge thanks to <a href="https://github.com/Abextm" native="">@Abextm</a> for writing the framework of the new chatbox,\nand to <a href="https://github.com/raiyni" native="">@raiyni</a> for hooking it in to the bank tag plugin.</p>\n<p><img src="/img/blog/1.4.25-Release/enhanced-chatbox-input.gif" alt="Enhanced chatbox input"></p>\n<p>The <a href="https://github.com/runelite/runelite/wiki/XP-Tracker" native="">XP Tracker plugin</a> will now display\nthe remaining number of kills to reach a level in combat skills, rather than the number of actions.\nThanks to <a href="https://github.com/deathbeam" native="">@deathbeam</a> for this update.</p>\n<p><img src="/img/blog/1.4.25-Release/kills-to-level.png" alt="xp tracker: kills to level"></p>\n<p>When running RuneLite with custom chrome disabled, the sidebar switcher image will be a small\nRunescape-themed arrow in the upper-right corner of the screen. Thanks to\n<a href="https://github.com/deathbeam" native="">@deathbeam</a> and\n<a href="https://github.com/abextm" native="">@Abextm</a> for this improvement.</p>\n<p><img src="/img/blog/1.4.25-Release/sidebar-closer.png" alt="native chrome sidebar closer"></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The <a href="https://github.com/runelite/runelite/wiki/WASD-Camera" native="">WASD Camera plugin</a> will now prepends\nyour player name to the chatbox text</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Examine" native="">Examine plugin</a> will now perform price\nlookups on items examined within the looting bag interface</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Menu-Entry-Swapper" native="">Menu Entry Swapper plugin</a> now\noffers a &quot;Repairs&quot; option swap for the dark mage</li>\n<li>A configuration option has been added to the\n<a href="https://github.com/runelite/runelite/wiki/Opponent-Information" native="">Opponent Information plugin</a>\nwhich allows you to hide the &quot;Opponent\'s opponent&quot; line which ordinarily appears beneath the\nhealth bar in multi-combat zones</li>\n<li>Game overlays in the fixed viewport should now be more accurate</li>\n<li>Fix Werewolf agility course xp in the skill calculator</li>\n<li>Add Burgh de Rott shortcut to agility plugin</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3>New commits</h3>\n<p>We had 14 contributors this release!</p>\n<pre><code>Adam (3):\n      wasd plugin: add player name to chatbox text\n      player mixin: remove unused field\n      entity hider: check for players with no names\n\nDylan Critz (1):\n      examine plugin: add looting bag item examine support\n\nHydrox6 (2):\n      Make Twitch messages respect custom Chat Colours\n      chat message manager: fix update to not access varbits outside of client thread\n\nJohn McDonnell (1):\n      skill calculator: fix werewolf agility course xp\n\nJordan Atwood (4):\n      inventory tags plugin: clean up plugin code\n      inventory tags plugin: Use MenuManager\n      Add JagexColors constants file, update Color uses\n      wasdcamera: Fix chat text color on transparent chatbox\n\nKasparRosin (1):\n      menu entry swapper: add dark mage repairs swap\n\nLotto (2):\n      stretchedmode: fix size not being reset on plugin disable\n      stretchedmode: retain aspect ratio when scaling\n\nMax Weber (5):\n      cache: Correct Location loading\n      itemstats: Use correct crab meat\n      zoom: Adjust inner zoom limit to safe value\n      runelite-client: Don\'t check if customChrome is enabled after startup\n      runelite-client: Use Runescape themed closer for sidebar when overlaying\n\nMaxBartlett (1):\n      Add Burgh de Rott shortcut to agility plugin (#6380)\n\nRon Young (6):\n      tag search should be startsWith not contains\n      Add BERSERKER_NECKLACE prayer bonus\n      ScriptEvent: import op, opbase, and source\n      BankTags: refactor to use ChatboxPanelManager\n      Bank tags: Preserve search when editing tags\n      Bank tags: Move search functions to a separate class\n\nSam England (1):\n      Add food hover overlay for Thin and Fat Snail meat (#6362)\n\nTomas Slusny (8):\n      Properly update last action times in Idle Notifier\n      Add support for lastCombatCountdown to combat idle\n      Make ItemVariationsMapping use generated json\n      Cleanup SwingUtil\n      Add support for hiding/showing sidebar button\n      Create NPC manager that can return HP for NPC\n      Create different action types for XpTracker plugin\n      Add support for kills left to XpTrackerPlugin\n\nTyler Harding (1):\n      opponent info: add configuration for show opponent\'s opponent\n\nWooxSolo (5):\n      Improve hovered tile accuracy\n      Fix localToCanvas calculation on fixed screen\n      Remove viewportOffset calculation from prayer bar\n      Remove viewportOffset calculation from demonic gorillas\n      Remove viewportOffset from get2DGeometry\n</code></pre>\n'}}}]);
//# sourceMappingURL=68.c9ddbc41.chunk.js.map