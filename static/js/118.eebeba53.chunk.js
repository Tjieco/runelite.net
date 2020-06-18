(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[118],{396:function(n,e){n.exports={title:"1.6.8 Release",description:"GE bank tag search, world map mining tooltips, and new UI scaling options",author:"Adam",body:'<p>Bank tags can now be searched in the GE:</p>\n<p><img src="/img/blog/1.6.8-Release/getags.png" alt="getags"></p>\n<p>The world map now has tooltips for mining site locations which shows which rocks are there:</p>\n<p><img src="/img/blog/1.6.8-Release/mining.png" alt="mining"></p>\n<p>The blast furnace overlay now includes the time until the coffer runs out of GP:</p>\n<p><img src="/img/blog/1.6.8-Release/blastfurnace.png" alt="blastfurnace"></p>\n<p>The GPU plugin now includes additional UI scaling options which can result in clearer images on higher resolution displays.\nIf you were using the stretched mode plugin with the <code>Increased performance mode</code> option <em>and</em> the GPU plugin,\nyou may want to change the GPU UI scaling option to <code>Nearest</code>.</p>\n<p>The plugin hub has a new <a href="https://runelite.net/plugin-hub" native="">webpage</a> which shows all of the plugins available on it.</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>GE buy limits are now automatically pulled from the wiki</li>\n<li>The item stats plugin can now show item stats when hovering items in the bank</li>\n<li>The pensive emoji has been added to the emoji plugin (<code>V_V</code>)</li>\n<li>Item price tooltips now work in the seed vault</li>\n<li>Inventory tags now has 2 additional tag groups</li>\n<li>Fix the loottrackker show/hide ignored loot button</li>\n<li>Fix the always stack resizable stones interface styles option</li>\n<li>Add bounty hunter (rogue) and LMS chat commands</li>\n<li>Fix incorrectly hiding salamander attack styles with the attackstyles plugin</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<p>We had 22 contributors this release!</p>\n<pre><code>Adam (4):\n      configmanager: harden against being killed mid-save\n      Merge protocol and protocol-api into cache-client\n      Use GE limits from item stats\n      session: add logged-in tracking\n\nAlfred Ababio (1):\n      skill calc: add long and curved bones to construction calc\n\nBen Dol (3):\n      itemstats: Round item values for displaying\n      itemstats: Add &quot;Show Stats In Bank&quot; option\n      itemstats: Add &quot;Always Show Base Stats&quot; option\n\nDaniel (1):\n      blast furnace: add coffer time remaining overlay\n\nDeliciousLunch55 (2):\n      clue plugin: Improve Shilo Village elite coordinate clue hint\n      xpdrop plugin: add \'prayer\' to tags\n\nEvan Walden (1):\n      item prices: show tooltips in the seed vault\n\nHenry Darnell (1):\n      emoji: add pensive emoji\n\nHydrox6 (1):\n      slayer: fix boss task parsing to support Konar\n\nJames Carroll (1):\n      Thread Desktop browse and open\n\nJeremy Plsek (1):\n      plugin hub panel: add url to help tooltip and add missing space to warning\n\nJordan Atwood (5):\n      ClueScrollPlugin: Reset clue on empty dev command\n      clues: Don\'t return clue instances for empty text\n      cluescroll plugin: Clear stale location clue hint arrows\n      util: Create RSTimeUnit enum\n      plugins: Use RSTimeUnit util where applicable\n\nKrysa (1):\n      inventory tags: add 2 additional color groups\n\nMax Weber (2):\n      PluginManager: try/catch Throwable all the plugin startup stuff\n      loottracker: fix hide/show ignored items button\n\nRolf Don (1):\n      skill calc: strip out non-digits characters\n\nRon Young (5):\n      runelite-api: add GE search event and variables\n      ItemVariations: add reverse mapping of variations\n      banktags: add tag searching for ge search\n      banktags: add tests\n      LayoutResizableStones: fix bad script merge\n\nSander de Groot (1):\n      chat commands: add Bounty Hunter, Bounty Hunter Rogue, and Last Man Standing commands\n\nSeth (1):\n      clue plugin: update Trollweiss cryptic clue hint to include a sled\n\nTrevor (1):\n      client: add notification fired event\n\ndekvall (4):\n      attackstyles: fix salamander magic attacks\n      inventorygrid: re-add a delay to showing the overlay\n      worldmap: support multiline tooltips\n      worldmap: add informative mining site tooltip\n\nkmutchnick (4):\n      clue plugin: add new Slepe anagram clue\n      skill calc: fix skill requirement for compost potions\n      clue plugin: update solution text for deep wilderness dungeon cryptic clue\n      clue plugin: add pet rock and rune thrownaxe to DK clue\n\nln (1):\n      gpu: add UI bicubic &amp; xBR rescaling\n\nseth (2):\n      AgilityShortcut: update Arceuus essence agility shortcut coordinates\n      QuestStartLocation: Update The forsaken tower/roving elves quest coordinates\n</code></pre>\n'}}}]);
//# sourceMappingURL=118.eebeba53.chunk.js.map