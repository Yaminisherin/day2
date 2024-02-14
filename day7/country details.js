let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload=function(){
    let countries = JSON.parse(xhr.responseText);
    countries.forEach(countries =>{
        let name= countries.name.common;
        let capital=countries.capital? countries.capital[0] : "N/A";
        let flag=countries.flags.svg;
        console.log(`Name: ${name},Capital: ${capital},Flag: ${flag}`);
    });
    }
//--------------
output:
Name: Cyprus,Capital: Nicosia,Flag: https://flagcdn.com/cy.svg
Name: Eritrea,Capital: Asmara,Flag: https://flagcdn.com/er.svg
Name: Liberia,Capital: Monrovia,Flag: https://flagcdn.com/lr.svg
Name: Bermuda,Capital: Hamilton,Flag: https://flagcdn.com/bm.svg
Name: Vatican City,Capital: Vatican City,Flag: https://flagcdn.com/va.svg
Name: Cook Islands,Capital: Avarua,Flag: https://flagcdn.com/ck.svg
Name: Somalia,Capital: Mogadishu,Flag: https://flagcdn.com/so.svg
Name: Zambia,Capital: Lusaka,Flag: https://flagcdn.com/zm.svg
Name: Venezuela,Capital: Caracas,Flag: https://flagcdn.com/ve.svg
Name: Turkmenistan,Capital: Ashgabat,Flag: https://flagcdn.com/tm.svg
Name: Albania,Capital: Tirana,Flag: https://flagcdn.com/al.svg
Name: Croatia,Capital: Zagreb,Flag: https://flagcdn.com/hr.svg
Name: United Kingdom,Capital: London,Flag: https://flagcdn.com/gb.svg
Name: Sudan,Capital: Khartoum,Flag: https://flagcdn.com/sd.svg
Name: Timor-Leste,Capital: Dili,Flag: https://flagcdn.com/tl.svg
Name: Republic of the Congo,Capital: Brazzaville,Flag: https://flagcdn.com/cg.svg
Name: Azerbaijan,Capital: Baku,Flag: https://flagcdn.com/az.svg
Name: Kenya,Capital: Nairobi,Flag: https://flagcdn.com/ke.svg
Name: American Samoa,Capital: Pago Pago,Flag: https://flagcdn.com/as.svg
Name: Ivory Coast,Capital: Yamoussoukro,Flag: https://flagcdn.com/ci.svg
Name: Senegal,Capital: Dakar,Flag: https://flagcdn.com/sn.svg
Name: Vietnam,Capital: Hanoi,Flag: https://flagcdn.com/vn.svg
Name: El Salvador,Capital: San Salvador,Flag: https://flagcdn.com/sv.svg
Name: Afghanistan,Capital: Kabul,Flag: https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg
Name: Saint Martin,Capital: Marigot,Flag: https://flagcdn.com/mf.svg
Name: Latvia,Capital: Riga,Flag: https://flagcdn.com/lv.svg
Name: Guatemala,Capital: Guatemala City,Flag: https://flagcdn.com/gt.svg
Name: Kuwait,Capital: Kuwait City,Flag: https://flagcdn.com/kw.svg
Name: São Tomé and Príncipe,Capital: São Tomé,Flag: https://flagcdn.com/st.svg
Name: Kyrgyzstan,Capital: Bishkek,Flag: https://flagcdn.com/kg.svg
Name: Poland,Capital: Warsaw,Flag: https://flagcdn.com/pl.svg
Name: Guam,Capital: Hagåtña,Flag: https://flagcdn.com/gu.svg
Name: Ghana,Capital: Accra,Flag: https://flagcdn.com/gh.svg
Name: Lithuania,Capital: Vilnius,Flag: https://flagcdn.com/lt.svg
Name: Armenia,Capital: Yerevan,Flag: https://flagcdn.com/am.svg
Name: Jersey,Capital: Saint Helier,Flag: https://flagcdn.com/je.svg
Name: Grenada,Capital: St. George's,Flag: https://flagcdn.com/gd.svg
Name: Tajikistan,Capital: Dushanbe,Flag: https://flagcdn.com/tj.svg
Name: Ethiopia,Capital: Addis Ababa,Flag: https://flagcdn.com/et.svg
Name: Western Sahara,Capital: El Aaiún,Flag: https://flagcdn.com/eh.svg
Name: Morocco,Capital: Rabat,Flag: https://flagcdn.com/ma.svg
Name: Puerto Rico,Capital: San Juan,Flag: https://flagcdn.com/pr.svg
Name: Christmas Island,Capital: Flying Fish Cove,Flag: https://flagcdn.com/cx.svg
Name: New Zealand,Capital: Wellington,Flag: https://flagcdn.com/nz.svg
Name: Brunei,Capital: Bandar Seri Begawan,Flag: https://flagcdn.com/bn.svg
Name: French Guiana,Capital: Cayenne,Flag: https://flagcdn.com/gf.svg
Name: Niue,Capital: Alofi,Flag: https://flagcdn.com/nu.svg
Name: Romania,Capital: Bucharest,Flag: https://flagcdn.com/ro.svg
Name: Svalbard and Jan Mayen,Capital: Longyearbyen,Flag: https://flagcdn.com/sj.svg
Name: Belarus,Capital: Minsk,Flag: https://flagcdn.com/by.svg
Name: Panama,Capital: Panama City,Flag: https://flagcdn.com/pa.svg
Name: Cameroon,Capital: Yaoundé,Flag: https://flagcdn.com/cm.svg
Name: Czechia,Capital: Prague,Flag: https://flagcdn.com/cz.svg
Name: Saint Barthélemy,Capital: Gustavia,Flag: https://flagcdn.com/bl.svg
Name: Greece,Capital: Athens,Flag: https://flagcdn.com/gr.svg
Name: Mali,Capital: Bamako,Flag: https://flagcdn.com/ml.svg
Name: Martinique,Capital: Fort-de-France,Flag: https://flagcdn.com/mq.svg
Name: France,Capital: Paris,Flag: https://flagcdn.com/fr.svg
Name: Pakistan,Capital: Islamabad,Flag: https://flagcdn.com/pk.svg
Name: Peru,Capital: Lima,Flag: https://flagcdn.com/pe.svg
Name: Barbados,Capital: Bridgetown,Flag: https://flagcdn.com/bb.svg
Name: Greenland,Capital: Nuuk,Flag: https://flagcdn.com/gl.svg
Name: Saint Pierre and Miquelon,Capital: Saint-Pierre,Flag: https://flagcdn.com/pm.svg
Name: Chad,Capital: N'Djamena,Flag: https://flagcdn.com/td.svg
Name: Hungary,Capital: Budapest,Flag: https://flagcdn.com/hu.svg
Name: Comoros,Capital: Moroni,Flag: https://flagcdn.com/km.svg
Name: Bangladesh,Capital: Dhaka,Flag: https://flagcdn.com/bd.svg
Name: Tokelau,Capital: Fakaofo,Flag: https://flagcdn.com/tk.svg
Name: Fiji,Capital: Suva,Flag: https://flagcdn.com/fj.svg
Name: China,Capital: Beijing,Flag: https://flagcdn.com/cn.svg
Name: Colombia,Capital: Bogotá,Flag: https://flagcdn.com/co.svg
Name: British Virgin Islands,Capital: Road Town,Flag: https://flagcdn.com/vg.svg
Name: Algeria,Capital: Algiers,Flag: https://flagcdn.com/dz.svg
Name: Maldives,Capital: Malé,Flag: https://flagcdn.com/mv.svg
Name: Malaysia,Capital: Kuala Lumpur,Flag: https://flagcdn.com/my.svg
Name: Cayman Islands,Capital: George Town,Flag: https://flagcdn.com/ky.svg
Name: Spain,Capital: Madrid,Flag: https://flagcdn.com/es.svg
Name: Ireland,Capital: Dublin,Flag: https://flagcdn.com/ie.svg
Name: Estonia,Capital: Tallinn,Flag: https://flagcdn.com/ee.svg
Name: Paraguay,Capital: Asunción,Flag: https://flagcdn.com/py.svg
Name: Uruguay,Capital: Montevideo,Flag: https://flagcdn.com/uy.svg
Name: South Africa,Capital: Pretoria,Flag: https://flagcdn.com/za.svg
Name: Saint Lucia,Capital: Castries,Flag: https://flagcdn.com/lc.svg
Name: Vanuatu,Capital: Port Vila,Flag: https://flagcdn.com/vu.svg
Name: Finland,Capital: Helsinki,Flag: https://flagcdn.com/fi.svg
Name: Sweden,Capital: Stockholm,Flag: https://flagcdn.com/se.svg
Name: British Indian Ocean Territory,Capital: Diego Garcia,Flag: https://flagcdn.com/io.svg
Name: Lebanon,Capital: Beirut,Flag: https://flagcdn.com/lb.svg
Name: United States,Capital: Washington, D.C.,Flag: https://flagcdn.com/us.svg
Name: Chile,Capital: Santiago,Flag: https://flagcdn.com/cl.svg
Name: Norfolk Island,Capital: Kingston,Flag: https://flagcdn.com/nf.svg
Name: Montserrat,Capital: Plymouth,Flag: https://flagcdn.com/ms.svg
Name: Australia,Capital: Canberra,Flag: https://flagcdn.com/au.svg
Name: Belize,Capital: Belmopan,Flag: https://flagcdn.com/bz.svg
Name: Guyana,Capital: Georgetown,Flag: https://flagcdn.com/gy.svg
Name: Mongolia,Capital: Ulan Bator,Flag: https://flagcdn.com/mn.svg
Name: Tuvalu,Capital: Funafuti,Flag: https://flagcdn.com/tv.svg
Name: Dominican Republic,Capital: Santo Domingo,Flag: https://flagcdn.com/do.svg
Name: Equatorial Guinea,Capital: Malabo,Flag: https://flagcdn.com/gq.svg
Name: Saint Kitts and Nevis,Capital: Basseterre,Flag: https://flagcdn.com/kn.svg
Name: Bolivia,Capital: Sucre,Flag: https://flagcdn.com/bo.svg
Name: Nepal,Capital: Kathmandu,Flag: https://flagcdn.com/np.svg
Name: French Southern and Antarctic Lands,Capital: Port-aux-Français,Flag: https://flagcdn.com/tf.svg
Name: Taiwan,Capital: Taipei,Flag: https://flagcdn.com/tw.svg
Name: Benin,Capital: Porto-Novo,Flag: https://flagcdn.com/bj.svg
Name: Bulgaria,Capital: Sofia,Flag: https://flagcdn.com/bg.svg
Name: Moldova,Capital: Chișinău,Flag: https://flagcdn.com/md.svg
Name: Isle of Man,Capital: Douglas,Flag: https://flagcdn.com/im.svg
Name: Bhutan,Capital: Thimphu,Flag: https://flagcdn.com/bt.svg
Name: Cambodia,Capital: Phnom Penh,Flag: https://flagcdn.com/kh.svg
Name: Antigua and Barbuda,Capital: Saint John's,Flag: https://flagcdn.com/ag.svg
Name: Haiti,Capital: Port-au-Prince,Flag: https://flagcdn.com/ht.svg
Name: Cape Verde,Capital: Praia,Flag: https://flagcdn.com/cv.svg
Name: Georgia,Capital: Tbilisi,Flag: https://flagcdn.com/ge.svg
Name: Burundi,Capital: Gitega,Flag: https://flagcdn.com/bi.svg
Name: Bahamas,Capital: Nassau,Flag: https://flagcdn.com/bs.svg
Name: Mauritius,Capital: Port Louis,Flag: https://flagcdn.com/mu.svg
Name: Libya,Capital: Tripoli,Flag: https://flagcdn.com/ly.svg
Name: Malawi,Capital: Lilongwe,Flag: https://flagcdn.com/mw.svg
Name: Mexico,Capital: Mexico City,Flag: https://flagcdn.com/mx.svg
Name: Eswatini,Capital: Mbabane,Flag: https://flagcdn.com/sz.svg
Name: Papua New Guinea,Capital: Port Moresby,Flag: https://flagcdn.com/pg.svg
Name: Dominica,Capital: Roseau,Flag: https://flagcdn.com/dm.svg
Name: Liechtenstein,Capital: Vaduz,Flag: https://flagcdn.com/li.svg
Name: Russia,Capital: Moscow,Flag: https://flagcdn.com/ru.svg
Name: Israel,Capital: Jerusalem,Flag: https://flagcdn.com/il.svg
Name: Singapore,Capital: Singapore,Flag: https://flagcdn.com/sg.svg
Name: Uganda,Capital: Kampala,Flag: https://flagcdn.com/ug.svg
Name: Slovakia,Capital: Bratislava,Flag: https://flagcdn.com/sk.svg
Name: Tonga,Capital: Nuku'alofa,Flag: https://flagcdn.com/to.svg
Name: United Arab Emirates,Capital: Abu Dhabi,Flag: https://flagcdn.com/ae.svg
Name: Mayotte,Capital: Mamoudzou,Flag: https://flagcdn.com/yt.svg
Name: Suriname,Capital: Paramaribo,Flag: https://flagcdn.com/sr.svg
Name: Uzbekistan,Capital: Tashkent,Flag: https://flagcdn.com/uz.svg
Name: Saudi Arabia,Capital: Riyadh,Flag: https://flagcdn.com/sa.svg
Name: Egypt,Capital: Cairo,Flag: https://flagcdn.com/eg.svg
Name: Italy,Capital: Rome,Flag: https://flagcdn.com/it.svg
Name: Madagascar,Capital: Antananarivo,Flag: https://flagcdn.com/mg.svg
Name: New Caledonia,Capital: Nouméa,Flag: https://flagcdn.com/nc.svg
Name: Canada,Capital: Ottawa,Flag: https://flagcdn.com/ca.svg
Name: United States Virgin Islands,Capital: Charlotte Amalie,Flag: https://flagcdn.com/vi.svg
Name: Marshall Islands,Capital: Majuro,Flag: https://flagcdn.com/mh.svg
Name: Mauritania,Capital: Nouakchott,Flag: https://flagcdn.com/mr.svg
Name: Gambia,Capital: Banjul,Flag: https://flagcdn.com/gm.svg
Name: Trinidad and Tobago,Capital: Port of Spain,Flag: https://flagcdn.com/tt.svg
Name: Seychelles,Capital: Victoria,Flag: https://flagcdn.com/sc.svg
Name: Japan,Capital: Tokyo,Flag: https://flagcdn.com/jp.svg
Name: Brazil,Capital: Brasília,Flag: https://flagcdn.com/br.svg
Name: Syria,Capital: Damascus,Flag: https://flagcdn.com/sy.svg
Name: Saint Helena, Ascension and Tristan da Cunha,Capital: Jamestown,Flag: https://flagcdn.com/sh.svg
Name: Tanzania,Capital: Dodoma,Flag: https://flagcdn.com/tz.svg
Name: Andorra,Capital: Andorra la Vella,Flag: https://flagcdn.com/ad.svg
Name: Iran,Capital: Tehran,Flag: https://flagcdn.com/ir.svg
Name: Togo,Capital: Lomé,Flag: https://flagcdn.com/tg.svg
Name: Malta,Capital: Valletta,Flag: https://flagcdn.com/mt.svg
Name: South Korea,Capital: Seoul,Flag: https://flagcdn.com/kr.svg
Name: Samoa,Capital: Apia,Flag: https://flagcdn.com/ws.svg
Name: Germany,Capital: Berlin,Flag: https://flagcdn.com/de.svg
Name: Niger,Capital: Niamey,Flag: https://flagcdn.com/ne.svg
Name: Bouvet Island,Capital: N/A,Flag: https://flagcdn.com/bv.svg
Name: Jamaica,Capital: Kingston,Flag: https://flagcdn.com/jm.svg
Name: Nicaragua,Capital: Managua,Flag: https://flagcdn.com/ni.svg
Name: Guinea,Capital: Conakry,Flag: https://flagcdn.com/gn.svg
Name: Anguilla,Capital: The Valley,Flag: https://flagcdn.com/ai.svg
Name: Åland Islands,Capital: Mariehamn,Flag: https://flagcdn.com/ax.svg
Name: Belgium,Capital: Brussels,Flag: https://flagcdn.com/be.svg
Name: Portugal,Capital: Lisbon,Flag: https://flagcdn.com/pt.svg
Name: Denmark,Capital: Copenhagen,Flag: https://flagcdn.com/dk.svg
Name: Philippines,Capital: Manila,Flag: https://flagcdn.com/ph.svg
Name: Wallis and Futuna,Capital: Mata-Utu,Flag: https://flagcdn.com/wf.svg
Name: Austria,Capital: Vienna,Flag: https://flagcdn.com/at.svg
Name: Guinea-Bissau,Capital: Bissau,Flag: https://flagcdn.com/gw.svg
Name: Monaco,Capital: Monaco,Flag: https://flagcdn.com/mc.svg
Name: Namibia,Capital: Windhoek,Flag: https://flagcdn.com/na.svg
Name: United States Minor Outlying Islands,Capital: Washington DC,Flag: https://flagcdn.com/um.svg
Name: Costa Rica,Capital: San José,Flag: https://flagcdn.com/cr.svg
Name: Bosnia and Herzegovina,Capital: Sarajevo,Flag: https://flagcdn.com/ba.svg
Name: Macau,Capital: N/A,Flag: https://flagcdn.com/mo.svg
Name: Mozambique,Capital: Maputo,Flag: https://flagcdn.com/mz.svg
Name: Réunion,Capital: Saint-Denis,Flag: https://flagcdn.com/re.svg
Name: Montenegro,Capital: Podgorica,Flag: https://flagcdn.com/me.svg
Name: North Korea,Capital: Pyongyang,Flag: https://flagcdn.com/kp.svg
Name: Northern Mariana Islands,Capital: Saipan,Flag: https://flagcdn.com/mp.svg
Name: Ukraine,Capital: Kyiv,Flag: https://flagcdn.com/ua.svg
Name: Iraq,Capital: Baghdad,Flag: https://flagcdn.com/iq.svg
Name: South Georgia,Capital: King Edward Point,Flag: https://flagcdn.com/gs.svg
Name: Angola,Capital: Luanda,Flag: https://flagcdn.com/ao.svg
Name: Sierra Leone,Capital: Freetown,Flag: https://flagcdn.com/sl.svg
Name: Micronesia,Capital: Palikir,Flag: https://flagcdn.com/fm.svg
Name: Cuba,Capital: Havana,Flag: https://flagcdn.com/cu.svg
Name: Turks and Caicos Islands,Capital: Cockburn Town,Flag: https://flagcdn.com/tc.svg
Name: Serbia,Capital: Belgrade,Flag: https://flagcdn.com/rs.svg
Name: Ecuador,Capital: Quito,Flag: https://flagcdn.com/ec.svg
Name: Faroe Islands,Capital: Tórshavn,Flag: https://flagcdn.com/fo.svg
Name: Antarctica,Capital: N/A,Flag: https://flagcdn.com/aq.svg
Name: Palestine,Capital: Ramallah,Flag: https://flagcdn.com/ps.svg
Name: Turkey,Capital: Ankara,Flag: https://flagcdn.com/tr.svg
Name: Kiribati,Capital: South Tarawa,Flag: https://flagcdn.com/ki.svg
Name: Kazakhstan,Capital: Nur-Sultan,Flag: https://flagcdn.com/kz.svg
Name: Gibraltar,Capital: Gibraltar,Flag: https://flagcdn.com/gi.svg
Name: Iceland,Capital: Reykjavik,Flag: https://flagcdn.com/is.svg
Name: Palau,Capital: Ngerulmud,Flag: https://flagcdn.com/pw.svg
Name: Qatar,Capital: Doha,Flag: https://flagcdn.com/qa.svg
Name: Switzerland,Capital: Bern,Flag: https://flagcdn.com/ch.svg
Name: French Polynesia,Capital: Papeetē,Flag: https://flagcdn.com/pf.svg
Name: Pitcairn Islands,Capital: Adamstown,Flag: https://flagcdn.com/pn.svg
Name: Jordan,Capital: Amman,Flag: https://flagcdn.com/jo.svg
Name: Myanmar,Capital: Naypyidaw,Flag: https://flagcdn.com/mm.svg
Name: Thailand,Capital: Bangkok,Flag: https://flagcdn.com/th.svg
Name: Caribbean Netherlands,Capital: Kralendijk,Flag: https://flagcdn.com/bq.svg
Name: Aruba,Capital: Oranjestad,Flag: https://flagcdn.com/aw.svg
Name: Guadeloupe,Capital: Basse-Terre,Flag: https://flagcdn.com/gp.svg
Name: Nigeria,Capital: Abuja,Flag: https://flagcdn.com/ng.svg
Name: Bahrain,Capital: Manama,Flag: https://flagcdn.com/bh.svg
Name: Laos,Capital: Vientiane,Flag: https://flagcdn.com/la.svg
Name: Cocos (Keeling) Islands,Capital: West Island,Flag: https://flagcdn.com/cc.svg
Name: Djibouti,Capital: Djibouti,Flag: https://flagcdn.com/dj.svg
Name: Solomon Islands,Capital: Honiara,Flag: https://flagcdn.com/sb.svg
Name: Heard Island and McDonald Islands,Capital: N/A,Flag: https://flagcdn.com/hm.svg
Name: India,Capital: New Delhi,Flag: https://flagcdn.com/in.svg
Name: San Marino,Capital: City of San Marino,Flag: https://flagcdn.com/sm.svg
Name: Luxembourg,Capital: Luxembourg,Flag: https://flagcdn.com/lu.svg
Name: Sint Maarten,Capital: Philipsburg,Flag: https://flagcdn.com/sx.svg
Name: Falkland Islands,Capital: Stanley,Flag: https://flagcdn.com/fk.svg
Name: Central African Republic,Capital: Bangui,Flag: https://flagcdn.com/cf.svg
Name: Botswana,Capital: Gaborone,Flag: https://flagcdn.com/bw.svg
Name: Curaçao,Capital: Willemstad,Flag: https://flagcdn.com/cw.svg
Name: Guernsey,Capital: St. Peter Port,Flag: https://flagcdn.com/gg.svg
Name: Norway,Capital: Oslo,Flag: https://flagcdn.com/no.svg
Name: Gabon,Capital: Libreville,Flag: https://flagcdn.com/ga.svg
Name: Zimbabwe,Capital: Harare,Flag: https://flagcdn.com/zw.svg
Name: Lesotho,Capital: Maseru,Flag: https://flagcdn.com/ls.svg
Name: Slovenia,Capital: Ljubljana,Flag: https://flagcdn.com/si.svg
Name: Argentina,Capital: Buenos Aires,Flag: https://flagcdn.com/ar.svg
Name: Burkina Faso,Capital: Ouagadougou,Flag: https://flagcdn.com/bf.svg
Name: Yemen,Capital: Sana'a,Flag: https://flagcdn.com/ye.svg
Name: DR Congo,Capital: Kinshasa,Flag: https://flagcdn.com/cd.svg
Name: Oman,Capital: Muscat,Flag: https://flagcdn.com/om.svg
Name: Indonesia,Capital: Jakarta,Flag: https://flagcdn.com/id.svg
Name: Nauru,Capital: Yaren,Flag: https://flagcdn.com/nr.svg
Name: Rwanda,Capital: Kigali,Flag: https://flagcdn.com/rw.svg
Name: North Macedonia,Capital: Skopje,Flag: https://flagcdn.com/mk.svg
Name: Kosovo,Capital: Pristina,Flag: https://flagcdn.com/xk.svg
Name: Netherlands,Capital: Amsterdam,Flag: https://flagcdn.com/nl.svg
Name: Tunisia,Capital: Tunis,Flag: https://flagcdn.com/tn.svg
Name: South Sudan,Capital: Juba,Flag: https://flagcdn.com/ss.svg
Name: Honduras,Capital: Tegucigalpa,Flag: https://flagcdn.com/hn.svg
Name: Saint Vincent and the Grenadines,Capital: Kingstown,Flag: https://flagcdn.com/vc.svg
Name: Sri Lanka,Capital: Sri Jayawardenepura Kotte,Flag: https://flagcdn.com/lk.svg
Name: Hong Kong,Capital: City of Victoria,Flag: https://flagcdn.com/hk.svg
