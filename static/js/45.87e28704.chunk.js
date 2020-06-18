(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[45],{323:function(e,n){e.exports={title:"1.4.2 Release",description:"Respawn timers, death indicator plugin, prayer indicators",author:"Adam",body:'<p>The NPC indicators plugin now has an option to show respawn times for tagged\nNPCS. Thanks to <a href="https://github.com/WooxSolo" native="">@WooxSolo</a> for his work on this.</p>\n<p><img src="/img/blog/1.4.2-Release/respawn.png" alt="respawn"></p>\n<p><a href="https://github.com/DannysPVM" native="">@DannysPVM</a> added a death indicator plugin which\nremembers where you\'ve died last, and on what world.</p>\n<p><img src="/img/blog/1.4.2-Release/deathindicators.png" alt="deathindicator"></p>\n<p>The prayer flicking plugin was renamed to the prayer plugin - and now shows\nprayer indicator infoboxes, from <a href="https://github.com/raqes" native="">@raqes</a>.</p>\n<p><img src="/img/blog/1.4.2-Release/prayerindicator.png" alt="prayindicator"></p>\n<p>The full screen mode added in last weeks update was removed as it is not working\nfor some users and getting their client stuck in a nonworking state. We may add\nit back in the future if we can make it work better.</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The screenshot plugin now screenshots pvp kills and pet drops</li>\n<li>A \'Reset others\' option was added to the xp tracker panel</li>\n<li>A Charge timer was added</li>\n<li>Fix Callisto and Venenatis boss timers from previous release</li>\n<li>Fix regen plugin showing when orb is hidden</li>\n<li>Added Zeah fishing spots to fishing plugin</li>\n<li>Add dragonfire-charged items to untradeable item mappings</li>\n<li>Fix expeditious bracelet charge tracking, which was broke last release</li>\n<li>Add support for swapping all options on the house portal to the menu entry\nswapper</li>\n<li>Show RuneLite launcher version in the info panel</li>\n<li>Add bake pie and string jewellery to idle notifier</li>\n<li>Fix rare crash when drawing clickboxes</li>\n</ul>\n<p>Additionally, there were clue fixes from Jordan Atwood, StanleyMole, and Trig.</p>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<p>We had 26 contributors this release!</p>\n<pre><code>Adam (25):\n      perspective: do not remove culled faces from clickbox calculation\n      chat color config: set default color for examine highlight\n      Fix prayer enumation order back to the order the prayers are in game\n      chat message manager: set default colors for examine\n      hooks: move combat info callback to actor mixin\n      Flag npc as dead when their health ratio hits 0\n      runelite-client: update to use isDead\n      pom: update rs.version\n      runelite-mixins: once again reset menu on widget close\n      Rename CONTRRIBUTING.md -&gt; CONTRIBUTING.md\n      Fix null names for quest objects in cryptic clues\n      config invocation handler: fix setting config values to null\n      config manager: support Instant\n      runelite-client: add death indicator plugin\n      config manager: only apply default config from methods which read configuration\n      antidrag: remove unused config setter\n      death indicators: only set death mark after respawning in a known respawn location\n      death indicator: move location check to after respawn\n      death indicator: use animation to detect death\n      Revert &quot;Merge pull request #3192 from deathbeam/add-support-for-fullscreen&quot;\n      clientui: reimport ExpandResizeType from fullscreen revert\n      screenshot plugin: capitalize pet messages constant\n      screenshot plugin: screenshot pvp kills\n      info panel: use revision number from client\n      npc scene overlay: fix respawn time\n\nEvan Sloan (1):\n      Add reset others to XpPanel right click menu\n\nGert de Pagter (1):\n      Use github issue templates\n\nHydrox6 (7):\n      Add Charge Timer\n      Fix Callisto and Venenatis Boss Timers using the incorrect ID\n      Reorder updateConfig to match TimerConfig\n      Add support for Clan Chat Info highlights for the Raids Plugin\n      Add default highlight for Game Messages to fix Daily Task message colour\n      Fix Charge timer showing with every teleport\n      Remove Charge Timer when the effect ends\n\nInfinitay (1):\n      Add hyperlinks to project layout in README (#3509)\n\nJeremy Plsek (1):\n      regen plugin: don\'t show regen if widget is hidden\n\nJordan (2):\n      Reword Dad hot-cold clue hint (#3513)\n      Fix McGrubor and Cow pen hot-cold locations (#3603)\n\nJordan Atwood (3):\n      Fix &quot;The hand ain\'t listening.&quot; clue step\n      Add missing Zeah fishing spots\n      Fix Guard Vemmeldo anagram clue location\n\nJuuso Lapinlampi (1):\n      Fix spelling of Taverley\n\nKamiel (1):\n      Allow screenmarker resizing below base point\n\nLars (2):\n      Fix typo in BarrowsPlugin (Spanwed to Spawned)\n      Update tooltip for Grand Exchange Panel Icon to &quot;Grand Exchange&quot; (#3618)\n\nMagic fTail (2):\n      Add dragonfire-charged armour item mappings\n      screenshot plugin: screenshot receiving pet\n\nMax Weber (1):\n      runelite-client: Require assertions when developer mode is on\n\nReasel (1):\n      Add Tile location tooltip option to dev tools. Remove extra empty line.\n\nRuben Amendoeira (1):\n      Remove Skill Calc unused code (#3568)\n\nSeth (1):\n      slayer plugin: fix expeditious regex pattern\n\nSnakk (1):\n      menu entry swapper: add options for house portal\n\nStanleyMole (1):\n      Fix TzHaar and Castle Draken emote clues\n\nTomas Slusny (5):\n      Change tithe farm to use PieComponent\n      Change schedule to GameTick sub in Tithe plugin\n      Cleanup RuneLite class (use Lombok)\n      Add support for getting runelite launcher version\n      Show RuneLite launcher version in info panel\n\nTrig (1):\n      Fix &quot;hosptial&quot; anagram clue typo (#3600)\n\nTzZek (1):\n      Add bake pie &amp; string jewelry to idle notifier (#3486)\n\nWooxSolo (5):\n      Fix remember screen bounds for KEEP_GAME_SIZE\n      Move frame to right screen border when expanding large window\n      Fix Jarvis infinite loop\n      perspective: fix getCanvasTileAreaPoly for even number sizes\n      npc indicators: add respawn timer\n\npsikoi (2):\n      Add Icon Material Tab + Hover effects\n      Refactor plugin panels for new Icon Tabs\n\nraqes (2):\n      Rename Prayer Flicking plugin to Prayer\n      Add prayer indicators to prayer plugin\n\nshmeeps (1):\n      Use chat messages for GE notifications (#3492)\n\nypperlig (1):\n      Change tickrate for giant seaweed from 10 to 5\n</code></pre>\n'}}}]);
//# sourceMappingURL=45.87e28704.chunk.js.map