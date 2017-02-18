// Creates an array to store the periodic table elements.
var elements = [
{"Symbol":"H","Name":"Hydrogen","Group":"1","Melting point":{"C":"-259.16","F":" -434.49","K":"13.99"},"Period":"1","Boiling point":{"C":"-252.879","F":" -423.182","K":"20.271"},"Block":"s","Density (g cm−3)":"0.000082","Atomic number":"1","Relative atomic mass":"1.008","State at 20°C":"Gas","Key isotopes":"1H, 2H","Electron configuration":"1s1","CAS number":"133-74-0"},
{"Symbol":"He","Name":"Helium","Group":"18","Melting point":"Unknown","Period":"1","Boiling point":{"C":"-268.928","F":" -452.07","K":"4.222"},"Block":"s","Density (g cm−3)":"0.000164","Atomic number":"2","Relative atomic mass":"4.003","State at 20°C":"Gas","Key isotopes":"4He","Electron configuration":"1s2","CAS number":"7440-59-7"},
{"Symbol":"Li","Name":"Lithium","Group":"1","Melting point":{"C":"180.50","F":" 356.90","K":"453.65"},"Period":"2","Boiling point":{"C":"1342","F":" 2448","K":"1615"},"Block":"s","Density (g cm−3)":"0.534","Atomic number":"3","Relative atomic mass":"6.94","State at 20°C":"Solid","Key isotopes":"7Li","Electron configuration":"[He] 2s1","CAS number":"7439-93-2"},
{"Symbol":"Be","Name":"Beryllium","Group":"2","Melting point":{"C":"1287","F":" 2349","K":"1560"},"Period":"2","Boiling point":{"C":"2468","F":" 4474","K":"2741"},"Block":"s","Density (g cm−3)":"1.85","Atomic number":"4","Relative atomic mass":"9.012","State at 20°C":"Solid","Key isotopes":"9Be","Electron configuration":"[He] 2s2","CAS number":"7440-41-7"},
{"Symbol":"B","Name":"Boron","Group":"13","Melting point":{"C":"2077","F":" 3771","K":"2350"},"Period":"2","Boiling point":{"C":"4000","F":" 7232","K":"4273"},"Block":"p","Density (g cm−3)":"2.34","Atomic number":"5","Relative atomic mass":"10.81","State at 20°C":"Solid","Key isotopes":"11B","Electron configuration":"[He] 2s22p1","CAS number":"7440-42-8"},
{"Symbol":"C","Name":"Carbon","Group":"14","Melting point":{"C":"Sublimes at 3825","F":" 6917","K":"4098"},"Period":"2","Boiling point":{"C":"Sublimes at 3825","F":" 6917","K":"4098"},"Block":"p","Density (g cm−3)":"3.513 (diamond); 2.2 (graphite)","Atomic number":"6","Relative atomic mass":"12.011","State at 20°C":"Solid","Key isotopes":"12C, 13C, 14C","Electron configuration":"[He] 2s22p2","CAS number":"7440-44-0"},
{"Symbol":"N","Name":"Nitrogen","Group":"15","Melting point":{"C":"-210.0","F":" -346.0","K":"63.2"},"Period":"2","Boiling point":{"C":"-195.795","F":" -320.431","K":"77.355"},"Block":"p","Density (g cm−3)":"0.001145","Atomic number":"7","Relative atomic mass":"14.007","State at 20°C":"Gas","Key isotopes":"14N","Electron configuration":"[He] 2s22p3","CAS number":"7727-37-9"},
{"Symbol":"O","Name":"Oxygen","Group":"16","Melting point":{"C":"-218.79","F":" -361.82","K":"54.36"},"Period":"2","Boiling point":{"C":"-182.962","F":" -297.332","K":"90.188"},"Block":"p","Density (g cm−3)":"0.001308","Atomic number":"8","Relative atomic mass":"15.999","State at 20°C":"Gas","Key isotopes":"16O","Electron configuration":"[He] 2s22p4","CAS number":"7782-44-7"},
{"Symbol":"F","Name":"Fluorine","Group":"17","Melting point":{"C":"-219.67","F":" -363.41","K":"53.48"},"Period":"2","Boiling point":{"C":"-188.11","F":" -306.6","K":"85.04"},"Block":"p","Density (g cm−3)":"0.001553","Atomic number":"9","Relative atomic mass":"18.998","State at 20°C":"Gas","Key isotopes":"19F","Electron configuration":"[He] 2s22p5","CAS number":"7782-41-4"},
{"Symbol":"Ne","Name":"Neon","Group":"18","Melting point":{"C":"-248.59","F":" -415.46","K":"24.56"},"Period":"2","Boiling point":{"C":"-246.046","F":" -410.883","K":"27.104"},"Block":"p","Density (g cm−3)":"0.000825","Atomic number":"10","Relative atomic mass":"20.180","State at 20°C":"Gas","Key isotopes":"20Ne","Electron configuration":"[He] 2s22p6","CAS number":"7440-01-9"},
{"Symbol":"Na","Name":"Sodium","Group":"1","Melting point":{"C":"97.794","F":" 208.029","K":"370.944"},"Period":"3","Boiling point":{"C":"882.940","F":" 1621.292","K":"1156.090"},"Block":"s","Density (g cm−3)":"0.97","Atomic number":"11","Relative atomic mass":"22.990","State at 20°C":"Solid","Key isotopes":"23Na","Electron configuration":"[Ne] 3s1","CAS number":"7440-23-5"},
{"Symbol":"Mg","Name":"Magnesium","Group":"2","Melting point":{"C":"650","F":" 1202","K":"923"},"Period":"3","Boiling point":{"C":"1090","F":" 1994","K":"1363"},"Block":"s","Density (g cm−3)":"1.74","Atomic number":"12","Relative atomic mass":"24.305","State at 20°C":"Solid","Key isotopes":"24Mg","Electron configuration":"[Ne] 3s2","CAS number":"7439-95-4"},
{"Symbol":"Al","Name":"Aluminium","Group":"13","Melting point":{"C":"660.323","F":" 1220.581","K":"933.473"},"Period":"3","Boiling point":{"C":"2519","F":" 4566","K":"2792"},"Block":"p","Density (g cm−3)":"2.70","Atomic number":"13","Relative atomic mass":"26.982","State at 20°C":"Solid","Key isotopes":"27Al","Electron configuration":"[Ne] 3s23p1","CAS number":"7429-90-5"},
{"Symbol":"Si","Name":"Silicon","Group":"14","Melting point":{"C":"1414","F":" 2577","K":"1687"},"Period":"3","Boiling point":{"C":"3265","F":" 5909","K":"3538"},"Block":"p","Density (g cm−3)":"2.3296","Atomic number":"14","Relative atomic mass":"28.085","State at 20°C":"Solid","Key isotopes":"28Si, 30Si","Electron configuration":"[Ne] 3s23p2","CAS number":"7440-21-3"},
{"Symbol":"P","Name":"Phosphorus","Group":"15","Melting point":{"C":"44.15","F":" 111.47","K":"317.3"},"Period":"3","Boiling point":{"C":"280.5","F":" 536.9","K":"553.7"},"Block":"p","Density (g cm−3)":"1.823 (white)","Atomic number":"15","Relative atomic mass":"30.974","State at 20°C":"Solid","Key isotopes":"31P","Electron configuration":"[Ne] 3s23p3","CAS number":"7723-14-0"},
{"Symbol":"S","Name":"Sulfur","Group":"16","Melting point":{"C":"115.21","F":" 239.38","K":"388.36"},"Period":"3","Boiling point":{"C":"444.61","F":" 832.3","K":"717.76"},"Block":"p","Density (g cm−3)":"2.07","Atomic number":"16","Relative atomic mass":"32.06","State at 20°C":"Solid","Key isotopes":"32S","Electron configuration":"[Ne] 3s23p4","CAS number":"7704-34-9"},
{"Symbol":"Cl","Name":"Chlorine","Group":"17","Melting point":{"C":"-101.5","F":" -150.7","K":"171.7"},"Period":"3","Boiling point":{"C":"-34.04","F":" -29.27","K":"239.11"},"Block":"p","Density (g cm−3)":"0.002898","Atomic number":"17","Relative atomic mass":"35.45","State at 20°C":"Gas","Key isotopes":"35Cl, 37Cl","Electron configuration":"[Ne] 3s23p5","CAS number":"7782-50-5"},
{"Symbol":"Ar","Name":"Argon","Group":"18","Melting point":{"C":"-189.34","F":" -308.81","K":"83.81"},"Period":"3","Boiling point":{"C":"-185.848","F":" -302.526","K":"87.302"},"Block":"p","Density (g cm−3)":"0.001633","Atomic number":"18","Relative atomic mass":"39.948","State at 20°C":"Gas","Key isotopes":"40Ar","Electron configuration":"[Ne] 3s23p6","CAS number":"7440-37-1"},
{"Symbol":"K","Name":"Potassium","Group":"1","Melting point":{"C":"63.5","F":" 146.3","K":"336.7"},"Period":"4","Boiling point":{"C":"759","F":" 1398","K":"1032"},"Block":"s","Density (g cm−3)":"0.89","Atomic number":"19","Relative atomic mass":"39.098","State at 20°C":"Solid","Key isotopes":"39K","Electron configuration":"[Ar] 4s1","CAS number":"7440-09-7"},
{"Symbol":"Ca","Name":"Calcium","Group":"2","Melting point":{"C":"842","F":" 1548","K":"1115"},"Period":"4","Boiling point":{"C":"1484","F":" 2703","K":"1757"},"Block":"s","Density (g cm−3)":"1.54","Atomic number":"20","Relative atomic mass":"40.078","State at 20°C":"Solid","Key isotopes":"40Ca","Electron configuration":"[Ar] 4s2","CAS number":"7440-70-2"},
{"Symbol":"Sc","Name":"Scandium","Group":"3","Melting point":{"C":"1541","F":" 2806","K":"1814"},"Period":"4","Boiling point":{"C":"2836","F":" 5137","K":"3109"},"Block":"d","Density (g cm−3)":"2.99","Atomic number":"21","Relative atomic mass":"44.956","State at 20°C":"Solid","Key isotopes":"45Sc","Electron configuration":"[Ar] 3d14s2","CAS number":"7440-20-2"},
{"Symbol":"Ti","Name":"Titanium","Group":"4","Melting point":{"C":"1670","F":" 3038","K":"1943"},"Period":"4","Boiling point":{"C":"3287","F":" 5949","K":"3560"},"Block":"d","Density (g cm−3)":"4.506","Atomic number":"22","Relative atomic mass":"47.867","State at 20°C":"Solid","Key isotopes":"48Ti","Electron configuration":"[Ar] 3d24s2","CAS number":"7440-32-6"},
{"Symbol":"V","Name":"Vanadium","Group":"5","Melting point":{"C":"1910","F":" 3470","K":"2183"},"Period":"4","Boiling point":{"C":"3407","F":" 6165","K":"3680"},"Block":"d","Density (g cm−3)":"6.0","Atomic number":"23","Relative atomic mass":"50.942","State at 20°C":"Solid","Key isotopes":"51V","Electron configuration":"[Ar] 3d34s2","CAS number":"7440-62-2"},
{"Symbol":"Cr","Name":"Chromium","Group":"6","Melting point":{"C":"1907","F":" 3465","K":"2180"},"Period":"4","Boiling point":{"C":"2671","F":" 4840","K":"2944"},"Block":"d","Density (g cm−3)":"7.15","Atomic number":"24","Relative atomic mass":"51.996","State at 20°C":"Solid","Key isotopes":"52Cr","Electron configuration":"[Ar] 3d54s1","CAS number":"7440-47-3"},
{"Symbol":"Mn","Name":"Manganese","Group":"7","Melting point":{"C":"1246","F":" 2275","K":"1519"},"Period":"4","Boiling point":{"C":"2061","F":" 3742","K":"2334"},"Block":"d","Density (g cm−3)":"7.3","Atomic number":"25","Relative atomic mass":"54.938","State at 20°C":"Solid","Key isotopes":"55Mn","Electron configuration":"[Ar] 3d54s2","CAS number":"7439-96-5"},
{"Symbol":"Fe","Name":"Iron","Group":"8","Melting point":{"C":"1538","F":" 2800","K":"1811"},"Period":"4","Boiling point":{"C":"2861","F":" 5182","K":"3134"},"Block":"d","Density (g cm−3)":"7.87","Atomic number":"26","Relative atomic mass":"55.845","State at 20°C":"Solid","Key isotopes":"56Fe","Electron configuration":"[Ar] 3d64s2","CAS number":"7439-89-6"},
{"Symbol":"Co","Name":"Cobalt","Group":"9","Melting point":{"C":"1495","F":" 2723","K":"1768"},"Period":"4","Boiling point":{"C":"2927","F":" 5301","K":"3200"},"Block":"d","Density (g cm−3)":"8.86","Atomic number":"27","Relative atomic mass":"58.933","State at 20°C":"Solid","Key isotopes":"59Co","Electron configuration":"[Ar] 3d74s2","CAS number":"7440-48-4"},
{"Symbol":"Ni","Name":"Nickel","Group":"10","Melting point":{"C":"1455","F":" 2651","K":"1728"},"Period":"4","Boiling point":{"C":"2913","F":" 5275","K":"3186"},"Block":"d","Density (g cm−3)":"8.90","Atomic number":"28","Relative atomic mass":"58.693","State at 20°C":"Solid","Key isotopes":"58Ni","Electron configuration":"[Ar] 3d84s2","CAS number":"7440-02-0"},
{"Symbol":"Cu","Name":"Copper","Group":"11","Melting point":{"C":"1084.62","F":" 1984.32","K":"1357.77"},"Period":"4","Boiling point":{"C":"2560","F":" 4640","K":"2833"},"Block":"d","Density (g cm−3)":"8.96","Atomic number":"29","Relative atomic mass":"63.546","State at 20°C":"Solid","Key isotopes":"63Cu","Electron configuration":"[Ar] 3d104s1","CAS number":"7440-50-8"},
{"Symbol":"Zn","Name":"Zinc","Group":"12","Melting point":{"C":"419.527","F":" 787.149","K":"692.677"},"Period":"4","Boiling point":{"C":"907","F":" 1665","K":"1180"},"Block":"d","Density (g cm−3)":"7.134","Atomic number":"30","Relative atomic mass":"65.38","State at 20°C":"Solid","Key isotopes":"64Zn","Electron configuration":"[Ar] 3d104s2","CAS number":"7440-66-6"},
{"Symbol":"Ga","Name":"Gallium","Group":"13","Melting point":{"C":"29.7646","F":" 85.5763","K":"302.9146"},"Period":"4","Boiling point":{"C":"2229","F":" 4044","K":"2502"},"Block":"p","Density (g cm−3)":"5.91","Atomic number":"31","Relative atomic mass":"69.723","State at 20°C":"Solid","Key isotopes":"69Ga","Electron configuration":"[Ar] 3d104s24p1","CAS number":"7440-55-3"},
{"Symbol":"Ge","Name":"Germanium","Group":"14","Melting point":{"C":"938.25","F":" 1720.85","K":"1211.4"},"Period":"4","Boiling point":{"C":"2833","F":" 5131","K":"3106"},"Block":"p","Density (g cm−3)":"5.3234","Atomic number":"32","Relative atomic mass":"72.630","State at 20°C":"Solid","Key isotopes":"73Ge, 74Ge","Electron configuration":"[Ar] 3d104s24p2","CAS number":"7440-56-4"},
{"Symbol":"As","Name":"Arsenic","Group":"15","Melting point":{"C":"Sublimes at 616","F":" 1141","K":"889"},"Period":"4","Boiling point":{"C":"Sublimes at 616","F":" 1141","K":"889"},"Block":"p","Density (g cm−3)":"5.75","Atomic number":"33","Relative atomic mass":"74.922","State at 20°C":"Solid","Key isotopes":"75As","Electron configuration":"[Ar] 3d104s24p3","CAS number":"7440-38-2"},
{"Symbol":"Se","Name":"Selenium","Group":"16","Melting point":{"C":"220.8","F":" 429.4","K":"494"},"Period":"4","Boiling point":{"C":"685","F":" 1265","K":"958"},"Block":"p","Density (g cm−3)":"4.809","Atomic number":"34","Relative atomic mass":"78.971","State at 20°C":"Solid","Key isotopes":"80Se","Electron configuration":"[Ar] 3d104s24p4","CAS number":"7782-49-2"},
{"Symbol":"Br","Name":"Bromine","Group":"17","Melting point":{"C":"-7.2","F":" 19","K":"266"},"Period":"4","Boiling point":{"C":"58.8","F":" 137.8","K":"332"},"Block":"p","Density (g cm−3)":"3.1028","Atomic number":"35","Relative atomic mass":"79.904","State at 20°C":"Liquid","Key isotopes":"79Br","Electron configuration":"[Ar] 3d104s24p5","CAS number":"7726-95-6"},
{"Symbol":"Kr","Name":"Krypton","Group":"18","Melting point":{"C":"-157.37","F":" -251.27","K":"115.78"},"Period":"4","Boiling point":{"C":"-153.415","F":" -244.147","K":"119.735"},"Block":"p","Density (g cm−3)":"0.003425","Atomic number":"36","Relative atomic mass":"83.798","State at 20°C":"Gas","Key isotopes":"84Kr","Electron configuration":"[Ar] 3d104s24p6","CAS number":"7439-90-9"},
{"Symbol":"Rb","Name":"Rubidium","Group":"1","Melting point":{"C":"39.30","F":" 102.74","K":"312.45"},"Period":"5","Boiling point":{"C":"688","F":" 1270","K":"961"},"Block":"s","Density (g cm−3)":"1.53","Atomic number":"37","Relative atomic mass":"85.468","State at 20°C":"Solid","Key isotopes":"85Rb, 87Rb","Electron configuration":"[Kr] 5s1","CAS number":"7440-17-7"},
{"Symbol":"Sr","Name":"Strontium","Group":"2","Melting point":{"C":"777","F":" 1431","K":"1050"},"Period":"5","Boiling point":{"C":"1377","F":" 2511","K":"1650"},"Block":"s","Density (g cm−3)":"2.64","Atomic number":"38","Relative atomic mass":"87.62","State at 20°C":"Solid","Key isotopes":"86Sr, 87Sr, 88Sr","Electron configuration":"[Kr] 5s2","CAS number":"7440-24-6"},
{"Symbol":"Y","Name":"Yttrium","Group":"3","Melting point":{"C":"1522","F":" 2772","K":"1795"},"Period":"5","Boiling point":{"C":"3345","F":" 6053","K":"3618"},"Block":"d","Density (g cm−3)":"4.47","Atomic number":"39","Relative atomic mass":"88.906","State at 20°C":"Solid","Key isotopes":"89Y","Electron configuration":"[Kr] 4d15s2","CAS number":"7440-65-5"},
{"Symbol":"Zr","Name":"Zirconium","Group":"4","Melting point":{"C":"1854","F":" 3369","K":"2127"},"Period":"5","Boiling point":{"C":"4406","F":" 7963","K":"4679"},"Block":"d","Density (g cm−3)":"6.52","Atomic number":"40","Relative atomic mass":"91.224","State at 20°C":"Solid","Key isotopes":"90Zr, 92Zr, 94Zr","Electron configuration":"[Kr] 4d25s2","CAS number":"7440-67-7"},
{"Symbol":"Nb","Name":"Niobium","Group":"5","Melting point":{"C":"2477","F":" 4491","K":"2750"},"Period":"5","Boiling point":{"C":"4741","F":" 8566","K":"5014"},"Block":"d","Density (g cm−3)":"8.57","Atomic number":"41","Relative atomic mass":"92.906","State at 20°C":"Solid","Key isotopes":"93Nb","Electron configuration":"[Kr] 4d45s1","CAS number":"7440-03-1"},
{"Symbol":"Mo","Name":"Molybdenum","Group":"6","Melting point":{"C":"2622","F":" 4752","K":"2895"},"Period":"5","Boiling point":{"C":"4639","F":" 8382","K":"4912"},"Block":"d","Density (g cm−3)":"10.2","Atomic number":"42","Relative atomic mass":"95.95","State at 20°C":"Solid","Key isotopes":"95Mo, 96Mo, 98Mo","Electron configuration":"[Kr] 4d55s1","CAS number":"7439-98-7"},
{"Symbol":"Tc","Name":"Technetium","Group":"7","Melting point":{"C":"2157","F":" 3915","K":"2430"},"Period":"5","Boiling point":{"C":"4262","F":" 7704","K":"4535"},"Block":"d","Density (g cm−3)":"11","Atomic number":"43","Relative atomic mass":"[98]","State at 20°C":"Solid","Key isotopes":"Unknown","Electron configuration":"[Kr] 4d55s2","CAS number":"7440-26-8"},
{"Symbol":"Ru","Name":"Ruthenium","Group":"8","Melting point":{"C":"2333","F":" 4231","K":"2606"},"Period":"5","Boiling point":{"C":"4147","F":" 7497","K":"4420"},"Block":"d","Density (g cm−3)":"12.1","Atomic number":"44","Relative atomic mass":"101.07","State at 20°C":"Solid","Key isotopes":"101Ru, 102Ru, 104Ru","Electron configuration":"[Kr] 4d75s1","CAS number":"7440-18-8"},
{"Symbol":"Rh","Name":"Rhodium","Group":"9","Melting point":{"C":"1963","F":" 3565","K":"2236"},"Period":"5","Boiling point":{"C":"3695","F":" 6683","K":"3968"},"Block":"d","Density (g cm−3)":"12.4","Atomic number":"45","Relative atomic mass":"102.906","State at 20°C":"Solid","Key isotopes":"103Rh","Electron configuration":"[Kr] 4d85s1","CAS number":"7440-16-6"},
{"Symbol":"Pd","Name":"Palladium","Group":"10","Melting point":{"C":"1554.8","F":" 2830.6","K":"1828"},"Period":"5","Boiling point":{"C":"2963","F":" 5365","K":"3236"},"Block":"d","Density (g cm−3)":"12.0","Atomic number":"46","Relative atomic mass":"106.42","State at 20°C":"Solid","Key isotopes":"106Pd","Electron configuration":"[Kr] 4d10","CAS number":"7440-05-3"},
{"Symbol":"Ag","Name":"Silver","Group":"11","Melting point":{"C":"961.78","F":" 1763.2","K":"1234.93"},"Period":"5","Boiling point":{"C":"2162","F":" 3924","K":"2435"},"Block":"d","Density (g cm−3)":"10.5","Atomic number":"47","Relative atomic mass":"107.868","State at 20°C":"Solid","Key isotopes":"107Ag","Electron configuration":"[Kr] 4d105s1","CAS number":"7440-22-4"},
{"Symbol":"Cd","Name":"Cadmium","Group":"12","Melting point":{"C":"321.069","F":" 609.924","K":"594.219"},"Period":"5","Boiling point":{"C":"767","F":" 1413","K":"1040"},"Block":"d","Density (g cm−3)":"8.69","Atomic number":"48","Relative atomic mass":"112.414","State at 20°C":"Solid","Key isotopes":"114Cd","Electron configuration":"[Kr] 4d105s2","CAS number":"7440-43-9"},
{"Symbol":"In","Name":"Indium","Group":"13","Melting point":{"C":"156.60","F":" 313.88","K":"429.75"},"Period":"5","Boiling point":{"C":"2027","F":" 3681","K":"2300"},"Block":"p","Density (g cm−3)":"7.31","Atomic number":"49","Relative atomic mass":"114.818","State at 20°C":"Solid","Key isotopes":"115In","Electron configuration":"[Kr] 4d105s25p1","CAS number":"7440-74-6"},
{"Symbol":"Sn","Name":"Tin","Group":"14","Melting point":{"C":"231.928","F":" 449.47","K":"505.078"},"Period":"5","Boiling point":{"C":"2586","F":" 4687","K":"2859"},"Block":"p","Density (g cm−3)":"7.287","Atomic number":"50","Relative atomic mass":"118.710","State at 20°C":"Solid","Key isotopes":"120Sn","Electron configuration":"[Kr] 4d105s25p2","CAS number":"7440-31-5"},
{"Symbol":"Sb","Name":"Antimony","Group":"15","Melting point":{"C":"630.628","F":" 1167.13","K":"903.778"},"Period":"5","Boiling point":{"C":"1587","F":" 2889","K":"1860"},"Block":"p","Density (g cm−3)":"6.68","Atomic number":"51","Relative atomic mass":"121.760","State at 20°C":"Solid","Key isotopes":"121Sb","Electron configuration":"[Kr] 4d105s25p3","CAS number":"7440-36-0"},
{"Symbol":"Te","Name":"Tellurium","Group":"16","Melting point":{"C":"449.51","F":" 841.12","K":"722.66"},"Period":"5","Boiling point":{"C":"988","F":" 1810","K":"1261"},"Block":"p","Density (g cm−3)":"6.232","Atomic number":"52","Relative atomic mass":"127.60","State at 20°C":"Solid","Key isotopes":"130Te","Electron configuration":"[Kr] 4d105s25p4","CAS number":"13494-80-9"},
{"Symbol":"I","Name":"Iodine","Group":"17","Melting point":{"C":"113.7","F":" 236.7","K":"386.9"},"Period":"5","Boiling point":{"C":"184.4","F":" 363.9","K":"457.6"},"Block":"p","Density (g cm−3)":"4.933","Atomic number":"53","Relative atomic mass":"126.904","State at 20°C":"Solid","Key isotopes":"127I","Electron configuration":"[Kr] 4d105s25p5","CAS number":"7553-56-2"},
{"Symbol":"Xe","Name":"Xenon","Group":"18","Melting point":{"C":"-111.75","F":" -169.15","K":"161.4"},"Period":"5","Boiling point":{"C":"-108.099","F":" -162.578","K":"165.051"},"Block":"p","Density (g cm−3)":"0.005366","Atomic number":"54","Relative atomic mass":"131.293","State at 20°C":"Gas","Key isotopes":"132Xe","Electron configuration":"[Kr] 4d105s25p6","CAS number":"7440-63-3"},
{"Symbol":"Cs","Name":"Caesium","Group":"1","Melting point":{"C":"28.5","F":" 83.3","K":"301.7"},"Period":"6","Boiling point":{"C":"671","F":" 1240","K":"944"},"Block":"s","Density (g cm−3)":"1.873","Atomic number":"55","Relative atomic mass":"132.905","State at 20°C":"Solid","Key isotopes":"133Cs","Electron configuration":"[Xe] 6s1","CAS number":"7440-46-2"},
{"Symbol":"Ba","Name":"Barium","Group":"2","Melting point":{"C":"727","F":" 1341","K":"1000"},"Period":"6","Boiling point":{"C":"1845","F":" 3353","K":"2118"},"Block":"s","Density (g cm−3)":"3.62","Atomic number":"56","Relative atomic mass":"137.327","State at 20°C":"Solid","Key isotopes":"138Ba","Electron configuration":"[Xe] 6s2","CAS number":"7440-39-3"},
{"Symbol":"La","Name":"Lanthanum","Group":"Lanthanides","Melting point":{"C":"920","F":" 1688","K":"1193"},"Period":"6","Boiling point":{"C":"3464","F":" 6267","K":"3737"},"Block":"d","Density (g cm−3)":"6.15","Atomic number":"57","Relative atomic mass":"138.905","State at 20°C":"Solid","Key isotopes":"139La","Electron configuration":"[Xe] 5d16s2","CAS number":"7439-91-0"},
{"Symbol":"Ce","Name":"Cerium","Group":"Lanthanides","Melting point":{"C":"799","F":" 1470","K":"1072"},"Period":"6","Boiling point":{"C":"3443","F":" 6229","K":"3716"},"Block":"f","Density (g cm−3)":"6.77","Atomic number":"58","Relative atomic mass":"140.116","State at 20°C":"Solid","Key isotopes":"140Ce","Electron configuration":"[Xe] 4f15d16s2","CAS number":"7440-45-1"},
{"Symbol":"Pr","Name":"Praseodymium","Group":"Lanthanides","Melting point":{"C":"931","F":" 1708","K":"1204"},"Period":"6","Boiling point":{"C":"3520","F":" 6368","K":"3793"},"Block":"f","Density (g cm−3)":"6.77","Atomic number":"59","Relative atomic mass":"140.908","State at 20°C":"Solid","Key isotopes":"141Pr","Electron configuration":"[Xe] 4f36s2","CAS number":"7440-10-0"},
{"Symbol":"Nd","Name":"Neodymium","Group":"Lanthanides","Melting point":{"C":"1016","F":" 1861","K":"1289"},"Period":"6","Boiling point":{"C":"3074","F":" 5565","K":"3347"},"Block":"f","Density (g cm−3)":"7.01","Atomic number":"60","Relative atomic mass":"144.242","State at 20°C":"Solid","Key isotopes":"142Nd","Electron configuration":"[Xe] 4f46s2","CAS number":"7440-00-8"},
{"Symbol":"Pm","Name":"Promethium","Group":"Lanthanides","Melting point":{"C":"1042","F":" 1908","K":"1315"},"Period":"6","Boiling point":{"C":"3000","F":" 5432","K":"3273"},"Block":"f","Density (g cm−3)":"7.26","Atomic number":"61","Relative atomic mass":"[145]","State at 20°C":"Solid","Key isotopes":"145Pm, 147Pm","Electron configuration":"[Xe] 4f56s2","CAS number":"7440-12-2"},
{"Symbol":"Sm","Name":"Samarium","Group":"Lanthanides","Melting point":{"C":"1072","F":" 1962","K":"1345"},"Period":"6","Boiling point":{"C":"1794","F":" 3261","K":"2067"},"Block":"f","Density (g cm−3)":"7.52","Atomic number":"62","Relative atomic mass":"150.36","State at 20°C":"Solid","Key isotopes":"152Sm","Electron configuration":"[Xe] 4f66s2","CAS number":"7440-19-9"},
{"Symbol":"Eu","Name":"Europium","Group":"Lanthanides","Melting point":{"C":"822","F":" 1512","K":"1095"},"Period":"6","Boiling point":{"C":"1529","F":" 2784","K":"1802"},"Block":"f","Density (g cm−3)":"5.24","Atomic number":"63","Relative atomic mass":"151.964","State at 20°C":"Solid","Key isotopes":"153Eu","Electron configuration":"[Xe] 4f76s2","CAS number":"7440-53-1"},
{"Symbol":"Gd","Name":"Gadolinium","Group":"Lanthanides","Melting point":{"C":"1313","F":" 2395","K":"1586"},"Period":"6","Boiling point":{"C":"3273","F":" 5923","K":"3546"},"Block":"f","Density (g cm−3)":"7.90","Atomic number":"64","Relative atomic mass":"157.25","State at 20°C":"Solid","Key isotopes":"158Gd","Electron configuration":"[Xe] 4f75d16s2","CAS number":"7440-54-2"},
{"Symbol":"Tb","Name":"Terbium","Group":"Lanthanides","Melting point":{"C":"1359","F":" 2478","K":"1632"},"Period":"6","Boiling point":{"C":"3230","F":" 5846","K":"3503"},"Block":"f","Density (g cm−3)":"8.23","Atomic number":"65","Relative atomic mass":"158.925","State at 20°C":"Solid","Key isotopes":"159Tb","Electron configuration":"[Xe] 4f96s2","CAS number":"7440-27-9"},
{"Symbol":"Dy","Name":"Dysprosium","Group":"Lanthanides","Melting point":{"C":"1412","F":" 2574","K":"1685"},"Period":"6","Boiling point":{"C":"2567","F":" 4653","K":"2840"},"Block":"f","Density (g cm−3)":"8.55","Atomic number":"66","Relative atomic mass":"162.500","State at 20°C":"Solid","Key isotopes":"164Dy","Electron configuration":"[Xe] 4f106s2","CAS number":"7429-91-6"},
{"Symbol":"Ho","Name":"Holmium","Group":"Lanthanides","Melting point":{"C":"1472","F":" 2682","K":"1745"},"Period":"6","Boiling point":{"C":"2700","F":" 4892","K":"2973"},"Block":"f","Density (g cm−3)":"8.80","Atomic number":"67","Relative atomic mass":"164.930","State at 20°C":"Solid","Key isotopes":"165Ho","Electron configuration":"[Xe] 4f116s2","CAS number":"7440-60-0"},
{"Symbol":"Er","Name":"Erbium","Group":"Lanthanides","Melting point":{"C":"1529","F":" 2784","K":"1802"},"Period":"6","Boiling point":{"C":"2868","F":" 5194","K":"3141"},"Block":"f","Density (g cm−3)":"9.07","Atomic number":"68","Relative atomic mass":"167.259","State at 20°C":"Solid","Key isotopes":"166Er","Electron configuration":"[Xe] 4f126s2","CAS number":"7440-52-0"},
{"Symbol":"Tm","Name":"Thulium","Group":"Lanthanides","Melting point":{"C":"1545","F":" 2813","K":"1818"},"Period":"6","Boiling point":{"C":"1950","F":" 3542","K":"2223"},"Block":"f","Density (g cm−3)":"9.32","Atomic number":"69","Relative atomic mass":"168.934","State at 20°C":"Solid","Key isotopes":"169Tm","Electron configuration":"[Xe] 4f136s2","CAS number":"7440-30-4"},
{"Symbol":"Yb","Name":"Ytterbium","Group":"Lanthanides","Melting point":{"C":"824","F":" 1515","K":"1097"},"Period":"6","Boiling point":{"C":"1196","F":" 2185","K":"1469"},"Block":"f","Density (g cm−3)":"6.90","Atomic number":"70","Relative atomic mass":"173.045","State at 20°C":"Solid","Key isotopes":"172Yb, 173Yb, 174Yb","Electron configuration":"[Xe] 4f146s2","CAS number":"7440-64-4"},
{"Symbol":"Lu","Name":"Lutetium","Group":"Lanthanides","Melting point":{"C":"1663","F":" 3025","K":"1936"},"Period":"6","Boiling point":{"C":"3402","F":" 6156","K":"3675"},"Block":"f","Density (g cm−3)":"9.84","Atomic number":"71","Relative atomic mass":"174.967","State at 20°C":"Solid","Key isotopes":"175Lu","Electron configuration":"[Xe] 4f145d16s2","CAS number":"7439-94-3"},
{"Symbol":"Hf","Name":"Hafnium","Group":"4","Melting point":{"C":"2233","F":" 4051","K":"2506"},"Period":"6","Boiling point":{"C":"4600","F":" 8312","K":"4873"},"Block":"d","Density (g cm−3)":"13.3","Atomic number":"72","Relative atomic mass":"178.49","State at 20°C":"Solid","Key isotopes":"177Hf, 178Hf, 180Hf","Electron configuration":"[Xe] 4f145d26s2","CAS number":"7440-58-6"},
{"Symbol":"Ta","Name":"Tantalum","Group":"5","Melting point":{"C":"3017","F":" 5463","K":"3290"},"Period":"6","Boiling point":{"C":"5455","F":" 9851","K":"5728"},"Block":"d","Density (g cm−3)":"16.4","Atomic number":"73","Relative atomic mass":"180.948","State at 20°C":"Solid","Key isotopes":"180Ta, 181Ta","Electron configuration":"[Xe] 4f145d36s2","CAS number":"7440-25-7"},
{"Symbol":"W","Name":"Tungsten","Group":"6","Melting point":{"C":"3414","F":" 6177","K":"3687"},"Period":"6","Boiling point":{"C":"5555","F":" 10031","K":"5828"},"Block":"d","Density (g cm−3)":"19.3","Atomic number":"74","Relative atomic mass":"183.84","State at 20°C":"Solid","Key isotopes":"182W, 184W, 186W","Electron configuration":"[Xe] 4f145d46s2","CAS number":"7440-33-7"},
{"Symbol":"Re","Name":"Rhenium","Group":"7","Melting point":{"C":"3185","F":" 5765","K":"3458"},"Period":"6","Boiling point":{"C":"5590","F":" 10094","K":"5863"},"Block":"d","Density (g cm−3)":"20.8","Atomic number":"75","Relative atomic mass":"186.207","State at 20°C":"Solid","Key isotopes":"187Re","Electron configuration":"[Xe] 4f145d56s2","CAS number":"7440-15-5"},
{"Symbol":"Os","Name":"Osmium","Group":"8","Melting point":{"C":"3033","F":" 5491","K":"3306"},"Period":"6","Boiling point":{"C":"5008","F":" 9046","K":"5281"},"Block":"d","Density (g cm−3)":"22.5872","Atomic number":"76","Relative atomic mass":"190.23","State at 20°C":"Solid","Key isotopes":"192Os","Electron configuration":"[Xe] 4f145d66s2","CAS number":"7440-04-2"},
{"Symbol":"Ir","Name":"Iridium","Group":"9","Melting point":{"C":"2446","F":" 4435","K":"2719"},"Period":"6","Boiling point":{"C":"4428","F":" 8002","K":"4701"},"Block":"d","Density (g cm−3)":"22.5622","Atomic number":"77","Relative atomic mass":"192.217","State at 20°C":"Solid","Key isotopes":"193Ir","Electron configuration":"[Xe] 4f145d76s2","CAS number":"7439-88-5"},
{"Symbol":"Pt","Name":"Platinum","Group":"10","Melting point":{"C":"1768.2","F":" 3214.8","K":"2041.4"},"Period":"6","Boiling point":{"C":"3825","F":" 6917","K":"4098"},"Block":"d","Density (g cm−3)":"21.5","Atomic number":"78","Relative atomic mass":"195.084","State at 20°C":"Solid","Key isotopes":"195Pt","Electron configuration":"[Xe] 4f145d96s1","CAS number":"7440-06-4"},
{"Symbol":"Au","Name":"Gold","Group":"11","Melting point":{"C":"1064.18","F":" 1947.52","K":"1337.33"},"Period":"6","Boiling point":{"C":"2836","F":" 5137","K":"3109"},"Block":"d","Density (g cm−3)":"19.3","Atomic number":"79","Relative atomic mass":"196.967","State at 20°C":"Solid","Key isotopes":"197Au","Electron configuration":"[Xe] 4f145d106s1","CAS number":"7440-57-5"},
{"Symbol":"Hg","Name":"Mercury","Group":"12","Melting point":{"C":"-38.829","F":" -37.892","K":"234.321"},"Period":"6","Boiling point":{"C":"356.619","F":" 673.914","K":"629.769"},"Block":"d","Density (g cm−3)":"13.5336","Atomic number":"80","Relative atomic mass":"200.592","State at 20°C":"Liquid","Key isotopes":"202Hg","Electron configuration":"[Xe] 4f145d106s2","CAS number":"7439-97-6"},
{"Symbol":"Tl","Name":"Thallium","Group":"13","Melting point":{"C":"304","F":" 579","K":"577"},"Period":"6","Boiling point":{"C":"1473","F":" 2683","K":"1746"},"Block":"p","Density (g cm−3)":"11.8","Atomic number":"81","Relative atomic mass":"204.38","State at 20°C":"Solid","Key isotopes":"205Tl","Electron configuration":"[Xe] 4f145d106s26p1","CAS number":"7440-28-0"},
{"Symbol":"Pb","Name":"Lead","Group":"14","Melting point":{"C":"327.462","F":" 621.432","K":"600.612"},"Period":"6","Boiling point":{"C":"1749","F":" 3180","K":"2022"},"Block":"p","Density (g cm−3)":"11.3","Atomic number":"82","Relative atomic mass":"207.2","State at 20°C":"Solid","Key isotopes":"208Pb","Electron configuration":"[Xe] 4f145d106s26p2","CAS number":"7439-92-1"},
{"Symbol":"Bi","Name":"Bismuth","Group":"15","Melting point":{"C":"271.406","F":" 520.531","K":"544.556"},"Period":"6","Boiling point":{"C":"1564","F":" 2847","K":"1837"},"Block":"p","Density (g cm−3)":"9.79","Atomic number":"83","Relative atomic mass":"208.980","State at 20°C":"Solid","Key isotopes":"209Bi","Electron configuration":"[Xe] 4f145d106s26p3","CAS number":"7440-69-9"},
{"Symbol":"Po","Name":"Polonium","Group":"16","Melting point":{"C":"254","F":" 489","K":"527"},"Period":"6","Boiling point":{"C":"962","F":" 1764","K":"1235"},"Block":"p","Density (g cm−3)":"9.20","Atomic number":"84","Relative atomic mass":"[209]","State at 20°C":"Solid","Key isotopes":"209Po, 210Po","Electron configuration":"[Xe] 4f145d106s26p4","CAS number":"7440-08-6"},
{"Symbol":"At","Name":"Astatine","Group":"17","Melting point":{"C":"300","F":" 572","K":"573"},"Period":"6","Boiling point":{"C":"350","F":" 662","K":"623"},"Block":"p","Density (g cm−3)":"Unknown","Atomic number":"85","Relative atomic mass":"[210]","State at 20°C":"Solid","Key isotopes":"210At, 211At","Electron configuration":"[Xe] 4f145d106s26p5","CAS number":"7440-68-8"},
{"Symbol":"Rn","Name":"Radon","Group":"18","Melting point":{"C":"-71","F":" -96","K":"202"},"Period":"6","Boiling point":{"C":"-61.7","F":" -79.1","K":"211.5"},"Block":"p","Density (g cm−3)":"0.009074","Atomic number":"86","Relative atomic mass":"[222]","State at 20°C":"Gas","Key isotopes":"211Rn, 220Rn, 222Rn","Electron configuration":"[Xe] 4f145d106s26p6","CAS number":"10043-92-2"},
{"Symbol":"Fr","Name":"Francium","Group":"1","Melting point":{"C":"21","F":" 70","K":"294"},"Period":"7","Boiling point":{"C":"650","F":" 1202","K":"923"},"Block":"s","Density (g cm−3)":"Unknown","Atomic number":"87","Relative atomic mass":"[223]","State at 20°C":"Solid","Key isotopes":"223Fr","Electron configuration":"[Rn] 7s1","CAS number":"7440-73-5"},
{"Symbol":"Ra","Name":"Radium","Group":"2","Melting point":{"C":"696","F":" 1285","K":"969"},"Period":"7","Boiling point":{"C":"1500","F":" 2732","K":"1773"},"Block":"s","Density (g cm−3)":"5","Atomic number":"88","Relative atomic mass":"[226]","State at 20°C":"Solid","Key isotopes":"226Ra","Electron configuration":"[Rn] 7s2","CAS number":"7440-14-4"},
{"Symbol":"Ac","Name":"Actinium","Group":"Actinides","Melting point":{"C":"1050","F":" 1922","K":"1323"},"Period":"7","Boiling point":{"C":"3200","F":" 5792","K":"3473"},"Block":"d","Density (g cm−3)":"10","Atomic number":"89","Relative atomic mass":"[227]","State at 20°C":"Solid","Key isotopes":"227Ac","Electron configuration":"[Rn] 6d17s2","CAS number":"7440-34-8"},
{"Symbol":"Th","Name":"Thorium","Group":"Actinides","Melting point":{"C":"1750","F":" 3182","K":"2023"},"Period":"7","Boiling point":{"C":"4785","F":" 8645","K":"5058"},"Block":"f","Density (g cm−3)":"11.7","Atomic number":"90","Relative atomic mass":"232.038","State at 20°C":"Solid","Key isotopes":"230Th, 232Th","Electron configuration":"[Rn] 6d27s2","CAS number":"7440-29-1"},
{"Symbol":"Pa","Name":"Protactinium","Group":"Actinides","Melting point":{"C":"1572","F":" 2862","K":"1845"},"Period":"7","Boiling point":{"C":"4000","F":" 7232","K":"4273"},"Block":"f","Density (g cm−3)":"15.4","Atomic number":"91","Relative atomic mass":"231.036","State at 20°C":"Solid","Key isotopes":"231Pa","Electron configuration":"[Rn] 5f26d17s2","CAS number":"7440-13-3"},
{"Symbol":"U","Name":"Uranium","Group":"Actinides","Melting point":{"C":"1135","F":" 2075","K":"1408"},"Period":"7","Boiling point":{"C":"4131","F":" 7468","K":"4404"},"Block":"f","Density (g cm−3)":"19.1","Atomic number":"92","Relative atomic mass":"238.029","State at 20°C":"Solid","Key isotopes":"234U, 235U, 238U","Electron configuration":"[Rn] 5f36d17s2","CAS number":"7440-61-1"},
{"Symbol":"Np","Name":"Neptunium","Group":"Actinides","Melting point":{"C":"644","F":" 1191","K":"917"},"Period":"7","Boiling point":{"C":"3902","F":" 7056","K":"4175"},"Block":"f","Density (g cm−3)":"20.2","Atomic number":"93","Relative atomic mass":"[237]","State at 20°C":"Solid","Key isotopes":"237Np","Electron configuration":"[Rn] 5f46d17s2","CAS number":"7439-99-8"},
{"Symbol":"Pu","Name":"Plutonium","Group":"Actinides","Melting point":{"C":"640","F":" 1184","K":"913"},"Period":"7","Boiling point":{"C":"3228","F":" 5842","K":"3501"},"Block":"f","Density (g cm−3)":"19.7","Atomic number":"94","Relative atomic mass":"[244]","State at 20°C":"Solid","Key isotopes":"238Pu, 239Pu, 240Pu","Electron configuration":"[Rn] 5f67s2","CAS number":"7440-07-5"},
{"Symbol":"Am","Name":"Americium","Group":"Actinides","Melting point":{"C":"1176","F":" 2149","K":"1449"},"Period":"7","Boiling point":{"C":"2011","F":" 3652","K":"2284"},"Block":"f","Density (g cm−3)":"12","Atomic number":"95","Relative atomic mass":"[243]","State at 20°C":"Solid","Key isotopes":"241Am, 243Am","Electron configuration":"[Rn] 5f77s2","CAS number":"7440-35-9"},
{"Symbol":"Cm","Name":"Curium","Group":"Actinides","Melting point":{"C":"1345","F":" 2453","K":"1618"},"Period":"7","Boiling point":"Unknown","Block":"f","Density (g cm−3)":"13.51","Atomic number":"96","Relative atomic mass":"[247]","State at 20°C":"Solid","Key isotopes":"243Cm, 248Cm","Electron configuration":"[Rn] 5f76d17s2","CAS number":"7440-51-9"},
{"Symbol":"Bk","Name":"Berkelium","Group":"Actinides","Melting point":{"C":"986","F":" 1807","K":"1259"},"Period":"7","Boiling point":"Unknown","Block":"f","Density (g cm−3)":"14.78","Atomic number":"97","Relative atomic mass":"[247]","State at 20°C":"Solid","Key isotopes":"247Bk, 249Bk","Electron configuration":"[Rn] 5f97s2","CAS number":"7440-40-6"},
{"Symbol":"Cf","Name":"Californium","Group":"Actinides","Melting point":{"C":"900","F":" 1652","K":"1173"},"Period":"7","Boiling point":"Unknown","Block":"f","Density (g cm−3)":"15.1","Atomic number":"98","Relative atomic mass":"[251]","State at 20°C":"Solid","Key isotopes":"249Cf, 252Cf","Electron configuration":"[Rn] 5f107s2","CAS number":"7440-71-3"},
{"Symbol":"Es","Name":"Einsteinium","Group":"Actinides","Melting point":{"C":"860","F":" 1580","K":"1133"},"Period":"7","Boiling point":"Unknown","Block":"f","Density (g cm−3)":"Unknown","Atomic number":"99","Relative atomic mass":"[252]","State at 20°C":"Solid","Key isotopes":"252Es","Electron configuration":"[Rn] 5f117s2","CAS number":"7429-92-7"},
{"Symbol":"Fm","Name":"Fermium","Group":"Actinides","Melting point":{"C":"1527","F":" 2781","K":"1800"},"Period":"7","Boiling point":"Unknown","Block":"f","Density (g cm−3)":"Unknown","Atomic number":"100","Relative atomic mass":"[257]","State at 20°C":"Solid","Key isotopes":"257Fm","Electron configuration":"[Rn] 5f127s2","CAS number":"7440-72-4"},
{"Symbol":"Md","Name":"Mendelevium","Group":"Actinides","Melting point":{"C":"827","F":" 1521","K":"1100"},"Period":"7","Boiling point":"Unknown","Block":"f","Density (g cm−3)":"Unknown","Atomic number":"101","Relative atomic mass":"[258]","State at 20°C":"Solid","Key isotopes":"258Md, 260Md","Electron configuration":"[Rn] 5f137s2","CAS number":"7440-11-1"},
{"Symbol":"No","Name":"Nobelium","Group":"Actinides","Melting point":{"C":"827","F":" 1521","K":"1100"},"Period":"7","Boiling point":"Unknown","Block":"f","Density (g cm−3)":"Unknown","Atomic number":"102","Relative atomic mass":"[259]","State at 20°C":"Solid","Key isotopes":"259No","Electron configuration":"[Rn] 5f147s2","CAS number":"10028-14-5"},
{"Symbol":"Lr","Name":"Lawrencium","Group":"Actinides","Melting point":{"C":"1627","F":" 2961","K":"1900"},"Period":"7","Boiling point":"Unknown","Block":"f","Density (g cm−3)":"Unknown","Atomic number":"103","Relative atomic mass":"[262]","State at 20°C":"Solid","Key isotopes":"262Lr","Electron configuration":"[Rn] 5f147s27p1","CAS number":"22537-19-5"},
{"Symbol":"Rf","Name":"Rutherfordium","Group":"4","Melting point":"Unknown","Period":"7","Boiling point":"Unknown","Block":"d","Density (g cm−3)":"Unknown","Atomic number":"104","Relative atomic mass":"[267]","State at 20°C":"Solid","Key isotopes":"265Rf","Electron configuration":"[Rn] 5f146d27s2","CAS number":"53850-36-5"},
{"Symbol":"Db","Name":"Dubnium","Group":"5","Melting point":"Unknown","Period":"7","Boiling point":"Unknown","Block":"d","Density (g cm−3)":"Unknown","Atomic number":"105","Relative atomic mass":"[268]","State at 20°C":"Solid","Key isotopes":"268Db","Electron configuration":"[Rn] 5f146d37s2","CAS number":"53850-35-4"},
{"Symbol":"Sg","Name":"Seaborgium","Group":"6","Melting point":"Unknown","Period":"7","Boiling point":"Unknown","Block":"d","Density (g cm−3)":"Unknown","Atomic number":"106","Relative atomic mass":"[269]","State at 20°C":"Solid","Key isotopes":"271Sg","Electron configuration":"[Rn] 5f146d47s2","CAS number":"54038-81-2"},
{"Symbol":"Bh","Name":"Bohrium","Group":"7","Melting point":"Unknown","Period":"7","Boiling point":"Unknown","Block":"d","Density (g cm−3)":"Unknown","Atomic number":"107","Relative atomic mass":"[270]","State at 20°C":"Solid","Key isotopes":"272Bh","Electron configuration":"[Rn] 5f146d57s2","CAS number":"54037-14-8"},
{"Symbol":"Hs","Name":"Hassium","Group":"8","Melting point":"Unknown","Period":"7","Boiling point":"Unknown","Block":"d","Density (g cm−3)":"Unknown","Atomic number":"108","Relative atomic mass":"[269]","State at 20°C":"Solid","Key isotopes":"270Hs","Electron configuration":"[Rn] 5f146d67s2","CAS number":"54037-57-9"},
{"Symbol":"Mt","Name":"Meitnerium","Group":"9","Melting point":"Unknown","Period":"7","Boiling point":"Unknown","Block":"d","Density (g cm−3)":"Unknown","Atomic number":"109","Relative atomic mass":"[278]","State at 20°C":"Solid","Key isotopes":"276Mt","Electron configuration":"[Rn] 5f146d77s2","CAS number":"54038-01-6"},
{"Symbol":"Ds","Name":"Darmstadtium","Group":"10","Melting point":"Unknown","Period":"7","Boiling point":"Unknown","Block":"d","Density (g cm−3)":"Unknown","Atomic number":"110","Relative atomic mass":"[281]","State at 20°C":"Solid","Key isotopes":"281Ds","Electron configuration":"[Rn] 5f146d97s1","CAS number":"54083-77-1"},
{"Symbol":"Rg","Name":"Roentgenium","Group":"11","Melting point":"Unknown","Period":"7","Boiling point":"Unknown","Block":"d","Density (g cm−3)":"Unknown","Atomic number":"111","Relative atomic mass":"[280]","State at 20°C":"Solid","Key isotopes":"280Rg","Electron configuration":"[Rn] 5f146d107s1","CAS number":"54386-24-2"},
{"Symbol":"Cn","Name":"Copernicium","Group":"12","Melting point":"Unknown","Period":"7","Boiling point":"Unknown","Block":"d","Density (g cm−3)":"Unknown","Atomic number":"112","Relative atomic mass":"[285]","State at 20°C":"Solid","Key isotopes":"285Cn","Electron configuration":"[Rn] 5f146d107s2","CAS number":"54084-26-3"},
{"Symbol":"Nh","Name":"Nihonium","Group":"13","Melting point":"Unknown","Period":"7","Boiling point":"Unknown","Block":"p","Density (g cm−3)":"Unknown","Atomic number":"113","Relative atomic mass":"[286]","State at 20°C":"Solid","Key isotopes":"286Nh","Electron configuration":"[Rn] 5f146d107s27p1","CAS number":"54084-70-7"},
{"Symbol":"Fl","Name":"Flerovium","Group":"14","Melting point":"Unknown","Period":"7","Boiling point":"Unknown","Block":"p","Density (g cm−3)":"Unknown","Atomic number":"114","Relative atomic mass":"[289]","State at 20°C":"Solid","Key isotopes":"289Fl","Electron configuration":"[Rn] 5f146d107s27p2","CAS number":"54085-16-4"},
{"Symbol":"Mc","Name":"Moscovium","Group":"15","Melting point":"Unknown","Period":"7","Boiling point":"Unknown","Block":"p","Density (g cm−3)":"Unknown","Atomic number":"115","Relative atomic mass":"[289]","State at 20°C":"Solid","Key isotopes":"289Mc","Electron configuration":"[Rn] 5f146d107s27p3","CAS number":"54085-64-2"},
{"Symbol":"Lv","Name":"Livermorium","Group":"16","Melting point":"Unknown","Period":"7","Boiling point":"Unknown","Block":"p","Density (g cm−3)":"Unknown","Atomic number":"116","Relative atomic mass":"[293]","State at 20°C":"Solid","Key isotopes":"293Lv","Electron configuration":"[Rn] 5f146d107s27p4","CAS number":"54100-71-9"},
{"Symbol":"Ts","Name":"Tennessine","Group":"17","Melting point":"Unknown","Period":"7","Boiling point":"Unknown","Block":"p","Density (g cm−3)":"Unknown","Atomic number":"117","Relative atomic mass":"[294]","State at 20°C":"Solid","Key isotopes":"294Ts","Electron configuration":"[Rn] 5f146d107s27p5","CAS number":"87658-56-8"},
{"Symbol":"Og","Name":"Oganesson","Group":"18","Melting point":"Unknown","Period":"7","Boiling point":"Unknown","Block":"p","Density (g cm−3)":"Unknown","Atomic number":"118","Relative atomic mass":"[294]","State at 20°C":"Solid","Key isotopes":"294Og","Electron configuration":"[Rn] 5f146d107s27p6","CAS number":"54144-19-3"}
];

// Creates variables for the UI.
var txtAtomicNumber = document.getElementById("txtAtomicNumber");
var selK            = document.getElementById("selK");
var selData         = document.getElementById("selData");
var divElements     = document.getElementById("divElements");
var divPrediction   = document.getElementById("divPrediction");
var divElement      = document.getElementById("divElement");

// Assings the data set.
elements.forEach(e => divElements.appendChild(createElementDiv(e)));

// Makes a prediction using the K-NN algorithm.
function predict() {
  var k = selK.value;
  var data = selData.value;
  var number = txtAtomicNumber.value;
  if (isNaN(parseInt(number)) || number > elements.length || number <= 0) {
    alert("Invalid number");
    return;
  }
  divElements.innerHTML = "";
  var indexes =
    generateRandomList(0, elements.length, elements.length * data / 3);
  var computedElements = elements
  .filter(e => indexes.includes(parseFloat(e["Atomic number"])))
  .map(e => [computeDistance([[number, parseFloat(e["Atomic number"])]]), e])
  .sort((a, b) => a[0] - b[0])
  .filter(e => !isNaN(e[0]) && e[0] != 0)
  .map(e => e[1])
  .slice(0, k);

  computedElements.forEach(e => divElements.appendChild(createElementDiv(e)));

  var predictedElement = {};
  predictedElement["Atomic number"] = number;
  predictedElement["Symbol"] = elements[number - 1]["Symbol"];
  predictedElement["Name"] = "Predicted " + elements[number - 1]["Name"];
  predictedElement["Block"] = computedElements
    .map(e => e["Block"])
    .reduce(countDifferent, [])
    .sort((a, b) => b[1] - a[1])[0][0];
  predictedElement["Group"] = computedElements
    .map(e => e["Group"])
    .reduce(countDifferent, [])
    .sort((a, b) => b[1] - a[1])[0][0];
  predictedElement["Period"] = computedElements
    .map(e => e["Period"])
    .reduce(countDifferent, [])
    .sort((a, b) => b[1] - a[1])[0][0];
  predictedElement["Relative atomic mass"] = computedElements
    .map(e => parseFloat(e["Relative atomic mass"]))
    .reduce((a, b) => a + b, 0) / k;
  predictedElement["State at 20°C"] = computedElements
    .map(e => e["State at 20°C"])
    .reduce(countDifferent, [])
    .sort((a, b) => b[1] - a[1])[0][0];
  predictedElement["Density (g cm−3)"] = computedElements
    .map(e => parseFloat(e["Density (g cm−3)"]))
    .reduce((a, b) => a + b, 0) / k;
  predictedElement["Boiling point"] = {};
  predictedElement["Boiling point"]["C"] = computedElements
    .map(e => parseFloat(e["Boiling point"]["C"]))
    .reduce((a, b) => a + b, 0) / k;
  predictedElement["Boiling point"]["F"] = computedElements
    .map(e => parseFloat(e["Boiling point"]["F"]))
    .reduce((a, b) => a + b, 0) / k;
  predictedElement["Boiling point"]["K"] = computedElements
    .map(e => parseFloat(e["Boiling point"]["K"]))
    .reduce((a, b) => a + b, 0) / k;
  predictedElement["Melting point"] = {};
  predictedElement["Melting point"]["C"] = computedElements
    .map(e => parseFloat(e["Melting point"]["C"]))
    .reduce((a, b) => a + b, 0) / k;
  predictedElement["Melting point"]["F"] = computedElements
    .map(e => parseFloat(e["Melting point"]["F"]))
    .reduce((a, b) => a + b, 0) / k;
  predictedElement["Melting point"]["K"] = computedElements
    .map(e => parseFloat(e["Melting point"]["K"]))
    .reduce((a, b) => a + b, 0) / k;

  divPrediction.innerHTML = "";
  divPrediction.appendChild(createElementDiv(predictedElement));
  divPrediction.appendChild(createElementDiv(elements[number - 1]));

}

// Computes the distance between different elements in a matrix.
function computeDistance(matrix) {
  // Euclidean distance.
  return Math.sqrt(matrix.map(e => Math.pow(e[0] - e[1], 2))
  .reduce((a, v) => a + v));
}

// Generates a list of different random numbers.
function generateRandomList(inf, sup, size) {
  if (sup - inf >= size) {
    list = [];
    while(list.length < size) {
      var number = Math.round(Math.random() * sup + inf);
      if (!list.includes(number)) {
        list.push(number);
      }
    }
    return list;
  }
  else {
    return null;
  }
}

// Gets the amount of times an element repeats itself in an array.
function countDifferent(a, b) {
  var isIncluded = false;
  for (var i = 0; i < a.length; i++) {
    if (a[i][0] == b) {
      isIncluded = true;
      break;
    }
  }
  if (!isIncluded) {
    a.push([b, 1]);
  }
  else {
    a[i][1]++;
  }
  return a;
}

// Creates a div with the data of an element.
function createElementDiv(e) {
  var htmlElement = document.createElement("div");
  htmlElement.className = "element";
  htmlElement.innerHTML = divElement.innerHTML;
  var children = htmlElement.children;
  children[0].children[1].innerHTML = e["Atomic number"];
  children[1].children[1].innerHTML = e["Symbol"];
  children[2].children[1].innerHTML = e["Name"];
  children[3].children[1].innerHTML = e["Block"];
  children[4].children[1].innerHTML = e["Group"];
  children[5].children[1].innerHTML = e["Period"];
  children[6].children[1].innerHTML = e["Relative atomic mass"];
  children[7].children[1].innerHTML = e["State at 20°C"];
  children[8].children[1].innerHTML = e["Density (g cm−3)"];
  children[9].children[1].children[0].children[1].innerHTML =
    e["Boiling point"]["C"];
  children[9].children[1].children[1].children[1].innerHTML =
    e["Boiling point"]["F"];
  children[9].children[1].children[2].children[1].innerHTML =
    e["Boiling point"]["K"];
  children[10].children[1].children[0].children[1].innerHTML =
    e["Melting point"]["C"];
  children[10].children[1].children[1].children[1].innerHTML =
    e["Melting point"]["F"];
  children[10].children[1].children[2].children[1].innerHTML =
    e["Melting point"]["K"];
  return htmlElement;
}
