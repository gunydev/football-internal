const countrys = [
  'THAILAND',
  'INDONESIA',
  'MALAYSIA',
  'VIETNAM',
  'AUSTRALIA',
  'CAMBODIA',
  'INDIA',
  'CHINA',
  'ALL-STAR'
]

const teams = [
  { country: 'THAILAND', name: 'Tipco Korat' },
  { country: 'THAILAND', name: 'Phitsanulok FA' },
  { country: 'THAILAND', name: 'Legend' },
  { country: 'THAILAND', name: 'Tipco Food' },
  { country: 'INDONESIA', name: 'ABS Ciwandan' },
  { country: 'INDONESIA', name: 'LRT Jabodebek FC' },
  { country: 'MALAYSIA', name: 'Refinery A' },
  { country: 'MALAYSIA', name: 'FC Bitumen' },
  { country: 'MALAYSIA', name: 'KL Colas FC' },
  { country: 'VIETNAM', name: 'ADCO Go Dau FC' },
  { country: 'VIETNAM', name: 'Colas Rail Vietnam' },
  { country: 'AUSTRALIA', name: 'Colaroos' },
  { country: 'CAMBODIA', name: 'Naga Warrior' },
  { country: 'INDIA', name: 'HINCOL-INDIAN TIGERS' },
  { country: 'CHINA', name: 'XIN ZHOU LANG' },
  { country: 'ALL-STAR', name: 'Asia All-Stars' }
]

const teamPlayers = [
  { teamName: 'Tipco Korat', playerName: 'Suparak Khlaikham', type: 'Main' },
  { teamName: 'Tipco Korat', playerName: 'Atee Neamsungnoen', type: 'Main' },
  { teamName: 'Tipco Korat', playerName: 'Arnon Ditsungnoen', type: 'Main' },
  { teamName: 'Tipco Korat', playerName: 'Chatchai Chanaprai', type: 'Main' },
  {
    teamName: 'Tipco Korat',
    playerName: 'Watcharapong Komsingnok',
    type: 'Main'
  },
  { teamName: 'Tipco Korat', playerName: 'Sompong Pangsunnoen', type: 'Main' },
  { teamName: 'Tipco Korat', playerName: 'Chokchai Padjuntuk', type: 'Main' },
  {
    teamName: 'Tipco Korat',
    playerName: 'Tanapat Sansing',
    type: 'Representative'
  },
  {
    teamName: 'Tipco Korat',
    playerName: 'Surasit Khamkokkruad',
    type: 'Representative'
  },
  {
    teamName: 'Tipco Korat',
    playerName: 'Somkiat Kettong',
    type: 'Representative'
  },
  {
    teamName: 'Phitsanulok FA',
    playerName: 'Phayao Wattanawanitkit',
    type: 'Main'
  },
  { teamName: 'Phitsanulok FA', playerName: 'Kittiphant Ma-in', type: 'Main' },
  { teamName: 'Phitsanulok FA', playerName: 'Sarawut Pinthong', type: 'Main' },
  { teamName: 'Phitsanulok FA', playerName: 'Songkhram Netmo', type: 'Main' },
  { teamName: 'Phitsanulok FA', playerName: 'Anan Chakkang', type: 'Main' },
  { teamName: 'Phitsanulok FA', playerName: 'Sompop Meemak', type: 'Main' },
  { teamName: 'Phitsanulok FA', playerName: 'Sombut Jaita', type: 'Main' },
  {
    teamName: 'Phitsanulok FA',
    playerName: 'Suthep Thuamrueang',
    type: 'Representative'
  },
  {
    teamName: 'Phitsanulok FA',
    playerName: 'Akechit Jumpatip',
    type: 'Representative'
  },
  { teamName: 'Legend', playerName: 'Suphat Pipitawan', type: 'Main' },
  {
    teamName: 'Legend',
    playerName: 'Sorachart Karphkraikaew',
    type: 'Main'
  },
  { teamName: 'Legend', playerName: 'Saifud', type: 'Main' },
  { teamName: 'Legend', playerName: 'Christophe Duboscq', type: 'Main' },
  { teamName: 'Legend', playerName: 'Beranger Delimal', type: 'Main' },
  { teamName: 'Legend', playerName: 'Makat Smtane', type: 'Main' },
  { teamName: 'Legend', playerName: 'Sunyalak Buasri', type: 'Main' },
  { teamName: 'Tipco Food', playerName: 'เอกชัย พูลเจริญ', type: 'Main' },
  { teamName: 'Tipco Food', playerName: 'วัชรพงษ์ บุญเพ็ง', type: 'Main' },
  { teamName: 'Tipco Food', playerName: 'วันนุวัติ เขียวทรัพย์', type: 'Main' },
  { teamName: 'Tipco Food', playerName: 'ปณิธาน สุขพิทักษ์', type: 'Main' },
  { teamName: 'Tipco Food', playerName: 'ปฐมพงศ์ กองขุนชาญ', type: 'Main' },
  { teamName: 'Tipco Food', playerName: 'ปุณณวิช ไหมบุญแก้ว', type: 'Main' },
  { teamName: 'Tipco Food', playerName: 'ณัฐ วินิจนันทรัตน์', type: 'Main' },
  {
    teamName: 'Tipco Food',
    playerName: 'กิตติ ธัญนารา',
    type: 'Representative'
  },
  {
    teamName: 'Tipco Food',
    playerName: 'Ekaphol Pongstabhon',
    type: 'Representative'
  },
  { teamName: 'ABS Ciwandan', playerName: 'Andri Andrayani', type: 'Main' },
  { teamName: 'ABS Ciwandan', playerName: 'Fuadi Fuadi', type: 'Main' },
  { teamName: 'ABS Ciwandan', playerName: 'Muhamad Fauzi', type: 'Main' },
  { teamName: 'ABS Ciwandan', playerName: 'Sumarlin Sumarlin', type: 'Main' },
  { teamName: 'ABS Ciwandan', playerName: 'Dayrobi Dayrobi', type: 'Main' },
  { teamName: 'ABS Ciwandan', playerName: 'Ridwan Arifin', type: 'Main' },
  { teamName: 'ABS Ciwandan', playerName: 'Radis Radis', type: 'Main' },
  {
    teamName: 'ABS Ciwandan',
    playerName: 'Akash Nathani',
    type: 'Representative'
  },
  {
    teamName: 'ABS Ciwandan',
    playerName: 'Agus Aryanto',
    type: 'Representative'
  },
  {
    teamName: 'LRT Jabodebek FC',
    playerName: 'Ayman Ferdaoussi',
    type: 'Main'
  },
  { teamName: 'LRT Jabodebek FC', playerName: 'Farhan Bachtiar', type: 'Main' },
  { teamName: 'LRT Jabodebek FC', playerName: 'Jamalan Halimi', type: 'Main' },
  { teamName: 'LRT Jabodebek FC', playerName: 'Marhaen Marhaen', type: 'Main' },
  { teamName: 'LRT Jabodebek FC', playerName: 'Syahrul Mawardi', type: 'Main' },
  {
    teamName: 'LRT Jabodebek FC',
    playerName: 'Bambang Hermanto',
    type: 'Main'
  },
  {
    teamName: 'LRT Jabodebek FC',
    playerName: 'Oldyson Tri Anggoro',
    type: 'Main'
  },
  {
    teamName: 'LRT Jabodebek FC',
    playerName: 'Jonathan Laville',
    type: 'Representative'
  },
  {
    teamName: 'LRT Jabodebek FC',
    playerName: 'Christophe Chassagnette',
    type: 'Representative'
  },
  {
    teamName: 'Refinery A',
    playerName: 'Mohamad Rozaimie Mohd Rus',
    type: 'Main'
  },
  {
    teamName: 'Refinery A',
    playerName: 'Ahmad Fahmi Ihsan Kamarul Zaman',
    type: 'Main'
  },
  {
    teamName: 'Refinery A',
    playerName: 'Aidil Azmanizam Abd Azid',
    type: 'Main'
  },
  {
    teamName: 'Refinery A',
    playerName: 'Che Wan Mohd Zulhaimi Che Wan Zainudim',
    type: 'Main'
  },
  { teamName: 'Refinery A', playerName: 'Abdul Halim Othman', type: 'Main' },
  { teamName: 'Refinery A', playerName: 'Abdul Halim Sarip', type: 'Main' },
  { teamName: 'Refinery A', playerName: 'Mohd Al-Afis Mohd Isa', type: 'Main' },
  {
    teamName: 'FC Bitumen',
    playerName: 'Mohamad Azmi Abdul Wahab',
    type: 'Main'
  },
  { teamName: 'FC Bitumen', playerName: 'Muhamad Asnawi Amran', type: 'Main' },
  { teamName: 'FC Bitumen', playerName: 'Muhammad Fahmi Jasri', type: 'Main' },
  { teamName: 'FC Bitumen', playerName: 'Mohd Sharif Ariffin', type: 'Main' },
  {
    teamName: 'FC Bitumen',
    playerName: 'Muhammad Aslam Abdullah',
    type: 'Main'
  },
  {
    teamName: 'FC Bitumen',
    playerName: 'Muhammad Redzuan Ab llah',
    type: 'Main'
  },
  {
    teamName: 'FC Bitumen',
    playerName: 'Mohd Arif Mohd Zuraini',
    type: 'Main'
  },
  {
    teamName: 'FC Bitumen',
    playerName: 'Mohd Shahidil Farhan Hassan',
    type: 'Representative'
  },
  {
    teamName: 'FC Bitumen',
    playerName: 'Mohd Nicam Mat Nasir',
    type: 'Representative'
  },
  { teamName: 'KL Colas FC', playerName: 'Mohd Hafeez Hashim', type: 'Main' },
  {
    teamName: 'KL Colas FC',
    playerName: 'Mohd Yushakmal Mohd Yusof',
    type: 'Main'
  },
  {
    teamName: 'KL Colas FC',
    playerName: 'Muhammad Ikhram Zulkafli',
    type: 'Main'
  },
  {
    teamName: 'KL Colas FC',
    playerName: 'Mohamad Zahid Mahamad Ridzuan',
    type: 'Main'
  },
  {
    teamName: 'KL Colas FC',
    playerName: 'Tengku Effendi Tengku Zalwai',
    type: 'Main'
  },
  {
    teamName: 'KL Colas FC',
    playerName: 'Muhammad Fadhil Mohd Nawawi',
    type: 'Main'
  },
  {
    teamName: 'KL Colas FC',
    playerName: 'Muhamad Safwan Mohd Shariff',
    type: 'Main'
  },
  {
    teamName: 'KL Colas FC',
    playerName: 'Mohd Afza Rizal Abdul Patah',
    type: 'Representative'
  },
  {
    teamName: 'KL Colas FC',
    playerName: 'Mohd Hafizuddin Mohd Ridzuan',
    type: 'Representative'
  },
  {
    teamName: 'KL Colas FC',
    playerName: 'Jerome Bellemin',
    type: 'Representative'
  },
  {
    teamName: 'KL Colas FC',
    playerName: 'Raywathy Veerasingam',
    type: 'Representative'
  },
  {
    teamName: 'KL Colas FC',
    playerName: 'Malathi Ramasamy',
    type: 'Representative'
  },
  { teamName: 'ADCO Go Dau FC', playerName: 'Lam Lethe', type: 'Main' },
  { teamName: 'ADCO Go Dau FC', playerName: 'Duc Tranviet', type: 'Main' },
  { teamName: 'ADCO Go Dau FC', playerName: 'Phuoc Phamtan', type: 'Main' },
  { teamName: 'ADCO Go Dau FC', playerName: 'Khanh Nguyen Quoc', type: 'Main' },
  { teamName: 'ADCO Go Dau FC', playerName: 'Tien Vivan', type: 'Main' },
  { teamName: 'ADCO Go Dau FC', playerName: 'Diep Nguyen Dinh', type: 'Main' },
  { teamName: 'ADCO Go Dau FC', playerName: 'Huu Truong Quoc', type: 'Main' },
  {
    teamName: 'ADCO Go Dau FC',
    playerName: 'On Hung Manh',
    type: 'Representative'
  },
  { teamName: 'Colas Rail Vietnam', playerName: 'Ho Nam Thang', type: 'Main' },
  { teamName: 'Colas Rail Vietnam', playerName: 'Bui Van Tung', type: 'Main' },
  {
    teamName: 'Colas Rail Vietnam',
    playerName: 'Combarieu Sebastien',
    type: 'Main'
  },
  {
    teamName: 'Colas Rail Vietnam',
    playerName: 'Celimene Thomas',
    type: 'Main'
  },
  { teamName: 'Colas Rail Vietnam', playerName: 'Ha Huu Tu', type: 'Main' },
  { teamName: 'Colas Rail Vietnam', playerName: 'Nguyen Long', type: 'Main' },
  {
    teamName: 'Colas Rail Vietnam',
    playerName: 'Phan Quang Hung',
    type: 'Main'
  },
  {
    teamName: 'Colas Rail Vietnam',
    playerName: 'Khuan Kheng Teng',
    type: 'Representative'
  },
  {
    teamName: 'Colas Rail Vietnam',
    playerName: 'Rodriguez Agrenis',
    type: 'Representative'
  },
  { teamName: 'Naga Warrior', playerName: 'Siekly Vuthy', type: 'Main' },
  { teamName: 'Naga Warrior', playerName: 'Vannara Oeun', type: 'Main' },
  { teamName: 'Naga Warrior', playerName: 'Rotmony Sok', type: 'Main' },
  { teamName: 'Naga Warrior', playerName: 'Phearak Prek', type: 'Main' },
  { teamName: 'Naga Warrior', playerName: 'Thay Sok', type: 'Main' },
  { teamName: 'Naga Warrior', playerName: 'Vichhay Seng', type: 'Main' },
  { teamName: 'Naga Warrior', playerName: 'Koy RI', type: 'Main' },
  { teamName: 'Naga Warrior', playerName: 'Vibol Ul', type: 'Representative' },
  {
    teamName: 'Naga Warrior',
    playerName: 'Yeow Seng Mok',
    type: 'Representative'
  },
  { teamName: 'Naga Warrior', playerName: 'Haly Ky', type: 'Representative' },
  { teamName: 'Colaroos', playerName: 'Jacob Dawes', type: 'Main' },
  { teamName: 'Colaroos', playerName: 'Abdijabar Abdisalam', type: 'Main' },
  { teamName: 'Colaroos', playerName: 'Faizan Hussain', type: 'Main' },
  { teamName: 'Colaroos', playerName: 'Sukhraj Virk', type: 'Main' },
  { teamName: 'Colaroos', playerName: 'John Greenhorn', type: 'Main' },
  { teamName: 'Colaroos', playerName: 'Cameron Smith', type: 'Main' },
  { teamName: 'Colaroos', playerName: 'Ishtear Aziz', type: 'Main' },
  {
    teamName: 'Colaroos',
    playerName: 'Sherone Merryfull',
    type: 'Representative'
  },
  { teamName: 'XIN ZHOU LANG', playerName: 'Wenrui Wu', type: 'Main' },
  { teamName: 'XIN ZHOU LANG', playerName: 'Tingguang Zhong', type: 'Main' },
  { teamName: 'XIN ZHOU LANG', playerName: 'Baiquan Ye', type: 'Main' },
  { teamName: 'XIN ZHOU LANG', playerName: 'Yuansui Chen', type: 'Main' },
  { teamName: 'XIN ZHOU LANG', playerName: 'Wolin Zhang', type: 'Main' },
  { teamName: 'XIN ZHOU LANG', playerName: 'Huang Xiang', type: 'Main' },
  { teamName: 'XIN ZHOU LANG', playerName: 'Weihan Lin', type: 'Main' },
  {
    teamName: 'XIN ZHOU LANG',
    playerName: 'Tracy Khua',
    type: 'Representative'
  },
  {
    teamName: 'XIN ZHOU LANG',
    playerName: 'Baohua Ma',
    type: 'Representative'
  },
  {
    teamName: 'HINCOL-INDIAN TIGERS',
    playerName: 'Ravi Kant Yadav',
    type: 'Main'
  },
  {
    teamName: 'HINCOL-INDIAN TIGERS',
    playerName: 'Srinivas Adapa',
    type: 'Main'
  },
  {
    teamName: 'HINCOL-INDIAN TIGERS',
    playerName: 'Prabhukalyan Ojha',
    type: 'Main'
  },
  { teamName: 'HINCOL-INDIAN TIGERS', playerName: 'Badal Roy', type: 'Main' },
  { teamName: 'HINCOL-INDIAN TIGERS', playerName: 'Nikhil Jain', type: 'Main' },
  {
    teamName: 'HINCOL-INDIAN TIGERS',
    playerName: 'Nishant Dutt',
    type: 'Main'
  },
  {
    teamName: 'HINCOL-INDIAN TIGERS',
    playerName: 'Sumeet Baranwal',
    type: 'Main'
  },
  {
    teamName: 'HINCOL-INDIAN TIGERS',
    playerName: 'Nitin Soni',
    type: 'Representative'
  },
  {
    teamName: 'HINCOL-INDIAN TIGERS',
    playerName: 'Manoj Gupta',
    type: 'Representative'
  },
  { teamName: 'Asia All-Stars', playerName: 'Syahputra', type: 'Main' },
  {
    teamName: 'Asia All-Stars',
    playerName: 'Yohanes Roberta Arhaq',
    type: 'Main'
  },
  { teamName: 'Asia All-Stars', playerName: 'Bagus Harjanto', type: 'Main' },
  { teamName: 'Asia All-Stars', playerName: 'Charoen Chumyen', type: 'Main' },
  {
    teamName: 'Asia All-Stars',
    playerName: 'Chokchai Hkhamkhae',
    type: 'Main'
  },
  { teamName: 'Asia All-Stars', playerName: 'Sakda Phanklang', type: 'Main' }
]

const rules = `
  <p style="text-align: center;"><strong>ANNEX 2 - <u>FIVE-A-SIDE SOCCER RULES</u></strong></p>
  <p><strong><u>1- GENERAL</u></strong></p>
  <p>Five-a-side soccer is a type of soccer played with five players and two replacements (four players on the field and one goalkeeper) on a reduced-size pitch (15 to 20 m wide and 25 to 30 m long) in a special sports hall or outdoors.</p>
  <p>The aim is to score more goals than the opponent in two 15-minute halves.</p>
  <p><strong><u>2- SPORTS ORGANIZATION</u></strong></p>
  <p>The competition is reserved solely for players aged at least 18 years (on the day of the tournament).</p>
  <p>It is open to men and women with no particular restrictions.</p>
  <p><strong><u>3- FORMAT OF THE TOURNAMENTS</u></strong></p>
  <p>The bodies organizing the competition are requested to work in a table format with male, female and mixed teams.</p>
  <p><strong><u>4- FAIR PLAY</u></strong></p>
  <p>The teams and the referee must shake hands BEFORE and AFTER the match.&nbsp;</p>
  <p>The referee may award a fair play point to each team at the end of the match during group matches according to their behavior and compliance with the rules.</p>
  <p>This point will be added to the points acquired during the matches and will therefore be taken into account in establishing the overall team ranking.</p>
  <p><strong><u>5- POINTS PER MATCH</u></strong></p>
  <p>Points will be awarded as follows during group matches for each stage:</p>
  <p>4 points for winning / 2 points for a draw / 0 points for losing.</p>
  <p><strong><u>6- BONUS POINTS</u></strong></p>
  <p><strong>Offensive bonus</strong></p>
  <p>1 additional point will be allocated during group matches to the winning team if it wins by more than 2 goals (i.e. different by at least 3 goals).&nbsp;</p>
  <p><strong>Defensive bonus</strong></p>
  <p>1 additional point will be allocated during group matches to the losing team if it loses by only one goal.</p>
  <p>This point will be added to the points acquired during matches and to the fair play points to establish the ranking.</p>
  <p><strong><u>7- FIELD</u></strong>&nbsp;</p>
  <p>Field dimensions: 15 to 20 m wide and 25 to 30 m long.</p>
  <p>Goal dimensions: 3m X 2m.</p>
  <p><strong><u>8- KICK-OFF</u></strong></p>
  <p>Lots will be drawn to decide which team will kick off.</p>
  <p>A match kicks off with a back pass from the center mark of the field.</p>
  <p><strong><u>9- NETS AND DEMARCATED AREAS</u>&nbsp;</strong></p>
  <p>There is no offside.</p>
  <p>A corner kick can be awarded to a team when a member of the opposing team touches the ball and the latter is released in the nets behind the goals.</p>
  <p>In the case of a corner kick, throw-in, free kick or goal clearance, the ball is returned to the goalkeeper of the team entitled to benefit.</p>
  <p>Defensively, if a waiting or stationary position prevents a goal, the foul will be penalized.</p>
  <p><strong><u>10- GOALKEEPER</u></strong></p>
  <p>The goalkeeper is not allowed to leave his/her penalty area.</p>
  <p>The goalkeeper may not directly score with his/her hand.</p>
  <p>When the goalkeeper receives a back pass from one of his/her team-mates, the latter is not allowed to take the ball with his/her hands and this will be treated as a foul. The ball will then be returned to the goalkeeper of the opposing team.</p>
  <p>The goalkeeper may clear the ball either with his/her hand or foot with the ball on the ground.</p>
  <p>The goalkeeper may not keep the ball in his/her hand more than 3 seconds. If he does, a whistle will be blown for a foul and the ball will be returned to the goalkeeper of the opposing team. Repeated fouls will be penalized.</p>
  <p><strong><u>11- TEAMS</u></strong></p>
  <p>A team consists of 5 players on the field and 2 replacements. Each of the teams must appoint a captain.</p>
  <p>Replacements can be made at any time during the match without restriction.</p>
  <p>The referee must ensure that the player leaves the field before his/her replacement enters it.</p>
  <p>Each player may become goalkeeper or vice versa during the match at the time of the replacements, which are notified and approved by the referee. Studs may not be worn.</p>
  <p>Players are advised to wear shin guards.&nbsp;</p>
  <p>Before the beginning of a match, each player must make sure that he is not wearing any jewel, ring, chain or earring.</p>
  <p><strong><u>12- MATCH DURATION</u></strong></p>
  <p>Matches are played in two 15-minute halves.</p>
  <p>In the event of a draw in knockout games, 3 shots will be played from the penalty mark to decide between the two teams. In the event of a draw after the penalty shot, a sudden death round will be held between the teams. During this round, each team must play the same number of shots from the penalty mark so that one of the two can be designated as the winner.&nbsp;</p>
  <p>A match can be extended at the discretion of the referee following deliberate time wasting by one team, on examination of an injury or on transfer of an injured player from the field.</p>
  <p><strong><u>13- REFEREE</u></strong></p>
  <p>Each match takes place under the supervision of a main referee with all the authority required to ensure compliance with the rules of the game in the course of the match he is required to supervise.</p>
  <p>A linesman is present at each match, in charge of counting points and fouls, checking replacements, checking when the ball goes outside the touchline (when the ball touches the nets) and helping the main referee during penalty shootouts.</p>
  <p>The team captain is the only team member allowed to speak to the referee up to the end of the match (the captain must identify himself to the referee at the beginning of the match).</p>
  <p>The referee reserves the right to decide on the penalty level with which to penalize the player.</p>
  <p>Respect for the referee is essential and any dispute can be penalized. Outflanking is not allowed.</p>
  <p>The referee can penalize a player with a yellow card (sent off for 3 minutes without replacement) or by a red card (sent off from the match until the end without replacement) if he considers this necessary. Two yellow cards in one and the same match result in a red card. A player penalized with a red card during a match is not excluded from the competition. A maximum number of three red cards during the Colas Team Cup is allowed. A player exceeding this number of red cards will be fully eliminated from the Colas Team Cup.&nbsp;</p>
  <p>The referee must:</p>
  <ul>
  <li>ensure compliance with the rules of the game;</li>
  <li>supervise the match;</li>
  <li>ensure that the players' equipment meets the requirements.&nbsp;</li>
  </ul>
  <p><strong><u>14- FOULS</u></strong>&nbsp;</p>
  <p>When the referee calls a foul, the ball is returned to the goalkeeper of the team against which the foul is committed except in the case of a penalty.&nbsp;</p>
  <p>Tackles and rough play are prohibited. They are automatically sanctioned as fouls (the ball is returned to the goalkeeper) or a penalty depending on the level of danger of the tackle, which is left to the discretion of the referee.</p>
  <p>All fouls are counted for each team and a penalty will be automatically imposed as from the third collective foul.</p>
  <p>The foul count for the penalized team is then reset to zero.</p>
  <p>In the event of excessively rough behavior during the match, the referee may send off the player in question (yellow card = sent off for 3 minutes without replacement, red card = player sent off for the rest of the match without replacement).</p>
  <p><strong><u>15- PENALTIES AND SHOOTOUTS</u></strong></p>
  <p>Penalties and shootouts will take place in the form of a duel between the goalkeeper of the penalized team and a member of the opposing team.</p>
  <p>The player then moves away from the center circle and must attempt a shot outside the penalty area within a maximum of 5 seconds to score.</p>
  <p>He only has the right to one shot, with no possibility of bouncing off the sides or of resuming the shot after being stopped by the referee.</p>
  <p>The referee may move around the entire penalty area as he sees fit.</p>
  <p>During a penalty shootout, all other players must be located in the opposing team's part of the field and the referee must ensure that this rule is observed to prevent disruption of the game.</p>
  <p><strong><u>16- LIABILITY</u></strong>&nbsp;</p>
  <p>All athletes undertake to notify the organizing bodies of any change that may take place in their state of health since the date of the medical certificate that enabled them to confirm their registration.</p>
  <p>In the event of an accident linked to physical incapacity, particularly of cardiac origin, players undertake not to incur the liability of the Colas Team Cup organizing bodies.</p>
  <p>All athletes declare that they are familiar with this rule and the in -house rules of the sports center in which the events take place and undertake to accept and comply strictly with their terms, failing which they will incur the penalties stipulated by the aforementioned rules.</p>
  <p>&nbsp;</p>`

const liability = `<div>
  <div style="text-align: center; font-size:1.2rem; color:black; line-height:1.8rem"><strong>Tipco Asphalt-Colas </strong></div>
  <div style="text-align: center; font-size:1.2rem; color:black; line-height:1.8rem"><strong>Asia-Oceania Cup 2019</strong></div>
  <div style="text-align: center; font-size:1.2rem; color:black; line-height:1.8rem"><strong>Liability Waiver and Release</strong></div>
  <div>&nbsp;</div>
  <div style="font-weight:bold">Name :&nbsp;<span style="font-weight:normal;color:blue">[name]</span></div>
  <div>Sport selected: 5-A-Side-Soccer</div>
  <div>&nbsp;</div>
  <div>Pursuant to my registration and participation in the event called "Tipco Asphalt-Colas Asia-Oceania Cup 2019":</div>
  <div>&nbsp;</div>
  <ul>
  <li>I hereby waive and release the organizer and the co-organizer from any liability in the event of a physical or medical accident caused to me or to a third party during the course of the activity (ies) for which I am not registered;</li>
  </ul>
  <div>&nbsp;</div>
  <ul>
  <li>I assume full liability in the event of a physical or medical accident, caused to myself or to a third party.</li>
  </ul>
  <div>&nbsp;</div>
  <div>I hereby declare that I have read and understood this document entitled "Liability Waiver and Release&rdquo;, that I fully understand it and that I have signed it freely and voluntarily. I understand that by signing the said Liability Waiver and Release Agreement, I hereby waive, on my own behalf and on behalf of my heirs and all other assignees, the right to sue the organizer and the co-organizer as well as the right to claim civil damages for any injuries that may occur during my participation in the sporting event called "Tipco Asphalt-Colas Asia-Oceania Cup 2019".</div>
  <div>&nbsp;</div>
  <div>&nbsp;</div>
  <div>Signed at Bangkok, Thailand</div>
  <div>On [date]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
  <div>&nbsp;</div>
  <div class="signature" style="color:blue">[signature]</div>
  <div class="caption pt-2">([bottom_name])</div>
  </div>`

export default {
  countrys,
  teams,
  teamPlayers,
  rules,
  liability
}
