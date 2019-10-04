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

const rules = `<div>
<div style="text-align: center;"><strong>TIPCO ASPHALT - COLAS</strong></div>
<div style="text-align: center;"><strong>ASIA - OCEANIA </strong><strong>CUP 2019</strong></div>
<div style="text-align: center;"><strong>FIVE-A-SIDE FOOTBALL RULES</strong></div>
<ol>
<li><u><u> General<br /></u></u>
<ul>
<li>5-a-side soccer is a type of soccer played with 5 players <br /> (4 players on the field + 1 goalkeeper) and 2 substitutes</li>
<li>Replacements can be made at any time during the match without restriction</li>
<li>Playing on a reduced-size pitch (20 m. wide and 30 m. long)</li>
</ul>
The aim is to score more goals than the opponent in two 15-minute halves.<br /><br /><u></u></li>
<li><u> Sports Organization<br /></u>The competition is reserved solely for players <br /> aged at least 18 years (on the day of the tournament) It is open to men and women with no restrictions.<br /><br /></li>
<li><u> Fair play prize<br /></u>The teams and the referee must shake hands BEFORE and AFTER he match <br />The referee may award a fair play point to each team <br />At the end of the match during group matches according to their behavior and compliance with the rules.<br /><br /></li>
<li><u><u> Points per match<br /></u></u>Points will be awarded as follows during group matches for each stage: 4 points for winning / 2 points for a draw / 0 points for losing.<br />WIN&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 4&nbsp;&nbsp; Points<br />DRAW&nbsp;&nbsp;&nbsp;&nbsp; 2&nbsp;&nbsp; Points<br />LOSE&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 0&nbsp;&nbsp; Points<br /><u><strong>&ldquo;NO BONUS POINTS AND DEFENSIVE BONUS&rdquo;</strong></u></li>
<li><u><u> Field<br /></u></u>
<p>Field dimensions <br />20 m. wide X 30 m. long <br />Goal dimensions <br />3m. X 2m.</p>
</li>
<li><u> Kick Off<br /></u>A coin is tossed and the team that wins the toss will kick off. <br />A match kicks off with a back pass from the center mark of the field.<br /><br /></li>
<li><u> Nets and Demarcated Areas<br /></u>There is no offside. A corner kick can be awarded to a team when a <br /> member of the opposing team touches the ball and the latter is released in the nets behind the goals. Ball throw in from sideline by kick but cannot make a goal Defensively, if a waiting or stationary position prevents a goal, the foul will be penalized.<br /><br /></li>
<li><u><u> Goal Keepers<br /></u></u>
<ul>
<li>The goalkeeper is not allowed to leave his/her penalty area.</li>
<li>The goalkeeper may not directly score with his/her hand.</li>
<li>When the goalkeeper receives a back pass from one of his/her team-mates, the latter is not allowed to take the ball with his/her hands and this will be treated as a foul. The ball will then be returned to the goalkeeper of the opposing team.</li>
<li>The goalkeeper may clear the ball either with his/her hand or foot with the ball on the ground.</li>
<li>The goalkeeper may not keep the ball in his/her hand more than</li>
</ul>
<p>&nbsp; &nbsp; &nbsp; &nbsp; 5 seconds. If he does, a whistle will be blown for a foul and the ball will be returned to the goalkeeper of the opposing team. Repeated fouls will be penalized.</p>
</li>
<li><u><u> Teams<br /></u></u>
<ul>
<li>A team consists of 5 players on the field and 2 replacements.</li>
<li>Each of the teams must appoint a captain.</li>
<li>Replacements can be made at any time during the match <br /> without restriction.</li>
</ul>
&nbsp; &nbsp; &nbsp; &nbsp; The referee must ensure that the player leaves the field before his/her replacement enters it.Each player may become goalkeeper or vice versa during the match at the time of the replacements, which are notified and approved by the referee. Players are advised to wear shin guards. Before the beginning of a match, each player must make sure that he is not wearing any jewel, ring, chain or earring.</li>
<li><u><u> Match duration<br /></u></u>
<ul>
<li>Matches are played in two 15-minute halves.</li>
<li>In the event of a draw in knockout games, 3 shots</li>
<li>will be played from the penalty mark to decide between <br /> the two teams.</li>
</ul>
&nbsp; &nbsp; &nbsp; &nbsp; In the event of a draw after the penalty shot, a sudden death round will be held between the teams.<br />During this round, each team must play the same number of shots from the penalty mark so that one of the two can be designated as the winner. <br />A match can be extended at the discretion of the referee following deliberate time wasting by one team, on examination of an injury or on transfer of an injured player from the field.</li>
<li><u> Referee<br /></u>- Each match takes place under the supervision of a main referee with all the authority required to ensure compliance with the rules of the game in the course of the match he is required to supervise. <br />- A linesman is present at each match, in charge of counting points and fouls, checking replacements, checking when the ball goes outside the touchline (when the ball touches the nets) and helping the main referee during penalty shootouts.<br />- The team captain is the only team member allowed to speak to the referee up to the end of the match (the captain must identify himself to the referee at the beginning of the match). <br />- The referee reserves the right to decide on the penalty level with which to penalize the player.<br />- Respect for the referee is essential and any dispute can be penalized. Outflanking is not allowed. <br />- The referee can penalize a player with a yellow card (sent off for 3 minutes without replacement) or by a red card (sent off from the match until the end without replacement) if he considers this necessary. <br />Two yellow cards in one and the same match result in a red card. <br />- A player penalized with a red card during a match is not excluded from the competition. <br />- A maximum number of 2 red cards during the Asia Oceania Cup <br /> is allowed. <br />- A player exceeding this number of red cards will be fully eliminated from the Asia Oceania Cup<br />- The referee must; <br /> - ensure compliance with the rules of the game <br /> - supervise the match<br /> - ensure that the players' equipment meets the requirements.</li>
<li><u> Fouls<br /></u>- When the referee calls a foul, free kick is awarded to the opposing team, to be taken from the place where a foul occurred<br />- Tackles and rough play are prohibited. They are automatically sanctioned as fouls (the ball is returned to the goalkeeper) or a penalty depending on the level of danger of the tackle, which is&nbsp;left to the discretion of the referee.<br />- All fouls are counted for each team and a penalty will be automatically imposed as from the third collective foul. <br />- The foul count for the penalized team is then reset to zero. <br />- In the event of excessively rough behavior during the match, the referee may send off the player in question (yellow card = sent off for 3 minutes without replacement, red card = player sent off for the rest of the match without replacement).</li>
<li><u><u> Penalty shootouts<br /></u></u>Penalty shootouts will apply the normal FIFA rules&nbsp;</li>
<li><u> </u><u><u>Liability<br /></u></u>All athletes undertake to notify the organizing bodies of any change that may take place in their state of health since the date of the medical certificate that enabled them to confirm their registration. In the event of an accident linked to physical incapacity, particularly of cardiac origin, players undertake not to incur the liability of the Colas Team Cup organizing bodies. All athletes declare that they are familiar with this rule and the in-house rules of the sports center in which the events take place and undertake to accept and comply strictly with their terms, failing which they will incur the penalties stipulated by the&nbsp; aforementioned rules.</li>
<li>
<p><span style="text-decoration: underline;">If point are equal point more than 1 team on qualifier the rules are</span><br />1.Head-to-head records (Results and points) total<br />2.Goal difference<br />3.Total goals scored<br />4.Fair play points (yellow card, red card)<br />5.Draw</p>
</li>
<li><u><u> Yellow &amp; Red calculation<br /></u></u>-1 yellow card = 1 point<br />-Doubled yellow card = 2 points<br />-Direct red card = 3 points<br />-1 yellow card and direct red card = 4 points</li>
</ol></div>`

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
