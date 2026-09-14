/* A2PRO — sample data. Replace with API calls when the backend exists. */
window.R2 = (function(){

  var PLAYER = {
    name:     "Adrian Silva da Costa",
    initials: "ASC",
    email:    "asccur@gmail.com",
    squad:    "Squad A",
    days:     "Tuesday & Thursday",
    coach:    "MJ",
    first:    "Adrian"
  };

  /* MJ takes every class at the moment. Add coaches here as A2PRO grows. */
  var COACHES = [
    {i:"MJ", n:"MJ", r:"Head coach", b:"Runs every A2PRO session at Padelx: the kids academy, the squad blocks, the privates and the camp weeks.", t:["Squad","Kids","Privates","Camps"], l:"PAP · NL · EN · ES"}
  ];

  var SKILLS = [
    {n:"Bandeja",        es:"defensive smash",       v:6.4, d:0.8, by:"MJ", on:"2 Sep"},
    {n:"Víbora",         es:"attacking slice smash", v:4.9, d:0.3, by:"MJ", on:"2 Sep"},
    {n:"Wall exit",      es:"salida de pared",       v:7.1, d:1.1, by:"MJ", on:"2 Sep"},
    {n:"Volley",         es:"volea",                 v:6.8, d:0.2, by:"MJ", on:"2 Sep"},
    {n:"Chiquita",       es:"low ball to the feet",  v:5.6, d:0,   by:"MJ", on:"2 Sep"},
    {n:"Positioning",    es:"posicionamiento",       v:7.4, d:0.5, by:"MJ", on:"2 Sep"},
    {n:"Serve & return", es:"saque y resto",         v:6.0, d:0.4, by:"MJ", on:"2 Sep"},
    {n:"Agility",        es:"footwork & speed",      v:7.8, d:0.6, by:"MJ", on:"9 Jun"},
    {n:"Smash",          es:"remate",                v:5.8, d:0.4, by:"MJ", on:"2 Sep"},
    {n:"Backhand",       es:"revés",                 v:6.2, d:0.3, by:"MJ", on:"2 Sep"},
    {n:"Match head",     es:"decision making",       v:5.2, d:0.2, by:"MJ", on:"2 Sep"}
  ];

  var RADAR = [
    {k:"Bandeja",  me:6.4, sq:5.8},
    {k:"Víbora",   me:4.9, sq:5.5},
    {k:"Pared",    me:7.1, sq:6.0},
    {k:"Volea",    me:6.8, sq:6.4},
    {k:"Saque",    me:6.0, sq:6.1},
    {k:"Posición", me:7.4, sq:6.2}
  ];

  /* Sample point prices. Real ones come from MJ. */
  var ACCOUNTS = [
    {email:"mj@a2pro.cw",     name:"MJ",                   initials:"MJ",  role:"coach"},
    {email:"asccur@gmail.com",name:"Adrian Silva da Costa",initials:"ASC", role:"player"}
  ];

  var SHOP = [
    {ico:"🎾", n:"Overgrip",           s:"Any colour, fitted",       c:150},
    {ico:"🥫", n:"Ball set",           s:"Tube of 3 match balls",    c:400},
    {ico:"🧴", n:"A2PRO bottle",       s:"750ml, club branded",      c:650},
    {ico:"👕", n:"A2PRO tee",          s:"Limited run, XS to XL",    c:1400},
    {ico:"🏸", n:"One lesson",         s:"60 minutes, one to one",   c:2500}
  ];

  var DRILLS = [
    {n:"Wall control, 50 touches", by:"MJ",     ago:"3 days ago",  dur:"6:12",  lvl:"All levels",  kit:"Wall + ball",     g:"linear-gradient(140deg,#1B3B57,#0F2233)"},
    {n:"Shadow bandeja, no ball",  by:"MJ",     ago:"1 week ago",  dur:"4:38",  lvl:"Intermediate",kit:"Racket only",     g:"linear-gradient(140deg,#23485E,#12283A)"},
    {n:"Mobility routine",         by:"MJ",  ago:"1 week ago",  dur:"11:05", lvl:"All levels",  kit:"No kit",          g:"linear-gradient(140deg,#2A4A45,#0F2233)"},
    {n:"Reaction wall, partner",   by:"MJ",   ago:"2 weeks ago", dur:"7:20",  lvl:"Advanced",    kit:"Wall + partner",  g:"linear-gradient(140deg,#3A3050,#131F33)"},
    {n:"Grip changes drill",       by:"MJ", ago:"3 weeks ago", dur:"3:45",  lvl:"Beginner",    kit:"Racket only",     g:"linear-gradient(140deg,#4A3326,#16243A)"},
    {n:"Core for padel, 10 min",   by:"MJ",  ago:"1 month ago", dur:"10:00", lvl:"All levels",  kit:"Mat",             g:"linear-gradient(140deg,#1F4150,#101F31)"}
  ];

  var FEED = [
    {c:"g", t:"Squad training attended · Court 3",  d:"Thu 11 Sep · checked in by MJ", a:"+60"},
    {c:"o", t:"Redeemed: Overgrip in the shop",     d:"Thu 11 Sep · code 7K2QM",         a:"-150", neg:true},
    {c:"",  t:"Home drill completed: Wall control", d:"Wed 10 Sep",                      a:"+15"},
    {c:"g", t:"Squad training attended · Court 1",  d:"Tue 9 Sep · on time bonus",       a:"+60"},
    {c:"",  t:"Skill assessment updated by MJ",   d:"Tue 2 Sep · rating 3.00 → 3.25",  a:""},
    {c:"g", t:"Camp day · Padelx",               d:"Fri 29 Aug",                      a:"+100"}
  ];

  var HISTORY = [
    {c:"o", t:"Overgrip",      d:"11 Sep · confirmed by MJ",           a:"-150", neg:true},
    {c:"o", t:"Overgrip",      d:"28 Aug · confirmed",                  a:"-150", neg:true},
    {c:"o", t:"Awa 500ml",     d:"21 Aug · confirmed",                  a:"-40",  neg:true},
    {c:"o", t:"Tube of balls", d:"2 Aug · confirmed",                   a:"-400", neg:true}
  ];

  /* 1 = attended, weeks 1 to 12 of the season */
  var ATT = [1,1,0,1,1,1,1,0,1,1,1,1];


  /* One pose per skill. Joints live in the 0 0 240 300 viewBox; app.js draws the
     silhouette from them. head/sL/sR = head and shoulders, hL/hR = hips,
     eR/wR = racket elbow and wrist, eL/wL = front arm, kL/aL = left knee and ankle,
     ra = racket angle in degrees, ball = optional ball in the free hand. */
  var BODY = [
    {k:"Víbora", es:"attacking slice smash", part:"racket forearm", v:4.9, pose:{
      head:[112,46], sL:[92,82], sR:[136,78], hL:[102,166], hR:[134,166],
      eR:[170,58], wR:[192,38], eL:[66,100], wL:[46,66],
      kL:[92,216], aL:[84,268], kR:[142,214], aR:[154,266], ra:-50}},

    {k:"Bandeja", es:"defensive smash", part:"shoulder", v:6.4, pose:{
      head:[116,46], sL:[94,82], sR:[140,80], hL:[104,166], hR:[136,166],
      eR:[178,68], wR:[204,52], eL:[70,100], wL:[54,60],
      kL:[96,216], aL:[88,268], kR:[144,214], aR:[156,266], ra:-25}},

    {k:"Volley", es:"volea", part:"front arm", v:6.8, pose:{
      head:[118,48], sL:[96,84], sR:[140,84], hL:[104,168], hR:[136,168],
      eR:[162,112], wR:[180,84], eL:[76,116], wL:[62,86],
      kL:[92,214], aL:[80,266], kR:[146,214], aR:[160,266], ra:-18}},

    {k:"Serve", es:"saque", part:"racket hand", v:6.0, pose:{
      head:[118,44], sL:[96,80], sR:[140,80], hL:[104,166], hR:[136,166],
      eR:[164,118], wR:[178,150], eL:[78,114], wL:[88,140],
      kL:[98,214], aL:[92,268], kR:[140,212], aR:[150,266], ra:42, ball:[88,128]}},

    {k:"Wall exit", es:"salida de pared", part:"feet and hips", v:7.1, pose:{
      head:[128,52], sL:[110,88], sR:[152,84], hL:[110,168], hR:[140,166],
      eR:[186,106], wR:[208,132], eL:[92,114], wL:[76,90],
      kL:[100,216], aL:[88,268], kR:[148,214], aR:[166,264], ra:34}},

    {k:"Chiquita", es:"low ball to the feet", part:"knees and wrist", v:5.6, pose:{
      head:[114,84], sL:[92,118], sR:[138,116], hL:[102,192], hR:[134,192],
      eR:[162,166], wR:[188,206], eL:[74,150], wL:[56,182],
      kL:[76,234], aL:[92,276], kR:[164,232], aR:[150,274], ra:22}},

    {k:"Positioning", es:"posicionamiento", part:"core", v:7.4, pose:{
      head:[120,50], sL:[94,86], sR:[146,86], hL:[104,166], hR:[136,166],
      eR:[164,130], wR:[188,116], eL:[80,128], wL:[120,122],
      kL:[86,212], aL:[70,264], kR:[154,212], aR:[170,264], ra:-16}},

    {k:"Agility", es:"footwork & speed", part:"legs", v:7.8, pose:{
      head:[106,46], sL:[86,82], sR:[128,78], hL:[102,162], hR:[130,164],
      eR:[162,100], wR:[184,76], eL:[62,112], wL:[52,144],
      kL:[64,206], aL:[42,260], kR:[158,210], aR:[194,262], ra:-38}},

    {k:"Match head", es:"decision making", part:"head", v:5.2, pose:{
      head:[120,40], sL:[98,76], sR:[142,76], hL:[106,168], hR:[134,168],
      eR:[158,124], wR:[168,168], eL:[84,124], wL:[102,160],
      kL:[104,220], aL:[98,268], kR:[136,220], aR:[142,268], ra:66}}
  ];

  /* Sessions are generated from today so the prototype never shows a stale week.
     Squad trains Tuesday and Thursday, camp on Saturday, privates on request. */
  var SCHEDULE = (function(){
    var out = [], now = new Date(), plan = [
      {dow:2, h:17, m:0,  dur:90, kind:"Squad training", court:"Court 3, Padelx",  coach:"MJ",    cap:8,  taken:5, pts:60, note:"Bandeja block, bring the blue grip"},
      {dow:4, h:17, m:0,  dur:90, kind:"Squad training", court:"Court 1, Padelx",  coach:"MJ",    cap:8,  taken:8, pts:60, note:"Match play, four courts running"},
      {dow:6, h:9,  m:0,  dur:180,kind:"Camp day",       court:"Padelx, all courts",coach:"MJ",  cap:24, taken:17,pts:100,note:"Bring water, sunblock and a second shirt"},
      {dow:1, h:18, m:30, dur:60, kind:"Private lesson", court:"Court 2, Padelx",  coach:"MJ",   cap:1,  taken:0, pts:40, note:"Wall exits, booked by you"}
    ];
    plan.forEach(function(p, pi){
      for(var w=0; w<3; w++){
        var d = new Date(now.getFullYear(), now.getMonth(), now.getDate(), p.h, p.m, 0, 0);
        var shift = (p.dow - d.getDay() + 7) % 7;
        d.setDate(d.getDate() + shift + w*7);
        if(d < now) continue;
        out.push({
          id:   "s" + pi + "w" + w,
          date: d,
          end:  new Date(d.getTime() + p.dur*60000),
          kind: p.kind, court: p.court, coach: p.coach,
          cap:  p.cap, taken: p.taken, pts: p.pts, note: p.note
        });
      }
    });
    return out.sort(function(a,b){ return a.date - b.date; }).slice(0, 7);
  })();

  /* the squad, used for the standings and for the coach check-in sheet */
  var ROSTER = [
    {id:"p1", i:"ASC", n:"Adrian Silva da Costa", me:true, pts:1340, streak:11, rating:3.25, group:"Squad A"},
    {id:"p2", i:"NV",  n:"Naomi Vrolijk",         pts:1985, streak:14, rating:3.75, group:"Squad A"},
    {id:"p3", i:"GH",  n:"Gio Hernandez",         pts:1610, streak:6,  rating:3.50, group:"Squad A"},
    {id:"p4", i:"TB",  n:"Thiago Bonifacio",      pts:1275, streak:9,  rating:3.25, group:"Squad A"},
    {id:"p5", i:"SK",  n:"Saskia Koeiman",        pts:1180, streak:4,  rating:3.00, group:"Squad A"},
    {id:"p6", i:"RJ",  n:"Ravi Jansen",           pts:940,  streak:2,  rating:3.00, group:"Squad B"},
    {id:"p7", i:"MD",  n:"Mireille Daal",         pts:865,  streak:7,  rating:2.75, group:"Squad B"},
    {id:"p8", i:"EC",  n:"Elian Croes",           pts:720,  streak:1,  rating:2.75, group:"Squad B"}
  ];

  var BADGES = [
    {ic:"🔥", n:"Ten in a row",      d:"Ten squad sessions without missing one",      got:true},
    {ic:"🌅", n:"Never late",        d:"Twenty on-time check-ins",                    got:true},
    {ic:"🧱", n:"Wall rat",          d:"Fifteen home drills completed",               got:true},
    {ic:"🤝", n:"Recruiter",         d:"Brought a friend who joined the academy",     got:true},
    {ic:"🏆", n:"Club tournament",   d:"Played the club tournament",                  got:false},
    {ic:"📈", n:"Level 3.50",        d:"Reach an A2 rating of 3.50",                  got:false},
    {ic:"🌞", n:"Camp week",         d:"Every day of a holiday camp",                 got:false},
    {ic:"🎯", n:"Sharp víbora",      d:"Score 6.0 or better on the víbora",           got:false}
  ];

  /* the club sets these rules; they drive the points engine */
  var EARN = [
    {k:"Training attended", v:50},
    {k:"On time",           v:10},
    {k:"Camp day",          v:100},
    {k:"Home drill",        v:15},
    {k:"Bring a friend",    v:150},
    {k:"Club tournament",   v:200}
  ];

  DRILLS.forEach(function(d, i){ d.id = "d" + i; });

  return {PLAYER:PLAYER, BODY:BODY, COACHES:COACHES, ACCOUNTS:ACCOUNTS, SKILLS:SKILLS, RADAR:RADAR, SHOP:SHOP,
          DRILLS:DRILLS, FEED:FEED, HISTORY:HISTORY, ATT:ATT,
          SCHEDULE:SCHEDULE, ROSTER:ROSTER, BADGES:BADGES, EARN:EARN};
})();
