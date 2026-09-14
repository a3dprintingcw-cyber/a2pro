/* A2PRO — language layer for the player app.
   Curacao trains in four languages, so the app speaks four.
   Mark up with data-i18n="key" for text, data-i18n-attr="placeholder:key" for attributes. */
window.r2i18n = (function(){
  "use strict";

  var LANGS = [
    {id:"en",  label:"English",    short:"EN"},
    {id:"pap", label:"Papiamentu", short:"PAP"},
    {id:"nl",  label:"Nederlands", short:"NL"},
    {id:"es",  label:"Espanol",    short:"ES"}
  ];

  var STR = {
    /* ---- navigation ---- */
    "nav.dash":     {en:"Dashboard",      pap:"Resumen",          nl:"Overzicht",      es:"Resumen"},
    "nav.schedule": {en:"Schedule",       pap:"Agenda",           nl:"Agenda",         es:"Agenda"},
    "nav.dev":      {en:"Development",    pap:"Desaroyo",         nl:"Ontwikkeling",   es:"Desarrollo"},
    "nav.pts":      {en:"Points",         pap:"Puntonan",         nl:"Punten",         es:"Puntos"},
    "nav.home":     {en:"Home training",  pap:"Entreno na kas",   nl:"Thuistraining",  es:"Entreno en casa"},
    "nav.squad":    {en:"Squad",          pap:"Skuadra",          nl:"Squad",          es:"Equipo"},
    "nav.coach":    {en:"Coaches",        pap:"Coachnan",         nl:"Coaches",        es:"Entrenadores"},
    "nav.staff":    {en:"Coach tools",    pap:"Hèrmèntnan",       nl:"Coach tools",    es:"Panel coach"},
    "nav.bar":      {en:"Shop desk",      pap:"Desk di tienda",   nl:"Shopbalie",      es:"Mostrador"},
    "short.dash":   {en:"Home",           pap:"Kas",              nl:"Start",          es:"Inicio"},
    "short.schedule":{en:"Agenda",        pap:"Agenda",           nl:"Agenda",         es:"Agenda"},
    "short.dev":    {en:"Stats",          pap:"Stats",            nl:"Stats",          es:"Stats"},
    "short.pts":    {en:"Points",         pap:"Punto",            nl:"Punten",         es:"Puntos"},
    "short.home":   {en:"Training",       pap:"Entreno",          nl:"Training",       es:"Entreno"},
    "short.squad":  {en:"Squad",          pap:"Skuadra",          nl:"Squad",          es:"Equipo"},
    "short.coach":  {en:"Coaches",        pap:"Coach",            nl:"Coaches",        es:"Coaches"},

    /* ---- shared ---- */
    "c.confirm":    {en:"Confirm",        pap:"Konfirmá",         nl:"Bevestigen",     es:"Confirmar"},
    "c.cancel":     {en:"Cancel",         pap:"Kansela",          nl:"Annuleren",      es:"Cancelar"},
    "c.close":      {en:"Close",          pap:"Sera",             nl:"Sluiten",        es:"Cerrar"},
    "c.save":       {en:"Save",           pap:"Warda",            nl:"Opslaan",        es:"Guardar"},
    "c.all":        {en:"All",            pap:"Tur",              nl:"Alles",          es:"Todo"},
    "c.more":       {en:"More",           pap:"Mas",              nl:"Meer",           es:"Mas"},
    "c.signIn":     {en:"Sign in",         pap:"Drenta",           nl:"Inloggen",       es:"Entrar"},
    "c.email":      {en:"Email",           pap:"Email",            nl:"E-mail",         es:"Correo"},
    "c.continue":   {en:"Continue",        pap:"Sigui",            nl:"Doorgaan",       es:"Continuar"},
    "c.welcome":    {en:"Your training, your points, your progress.", pap:"Bo entreno, bo puntonan, bo progreso.", nl:"Je training, je punten, je voortgang.", es:"Tu entreno, tus puntos, tu progreso."},
    "c.demoAs":     {en:"Open as the demo player", pap:"Habri komo e hungadó demo", nl:"Open als demospeler", es:"Abrir como jugador demo"},
    "c.coachArea":  {en:"Coach",           pap:"Coach",            nl:"Coach",          es:"Entrenador"},
    "k.coachOnly":  {en:"That code is for a coach to confirm.", pap:"E kódigo ei ta pa un coach konfirmá.", nl:"Die code bevestigt een coach.", es:"Ese codigo lo confirma un entrenador."},
    "v.seeShot":    {en:"See the shot",   pap:"Wak e golpi",      nl:"Bekijk de slag", es:"Ver el golpe"},
    "c.goTo":       {en:"Go to",          pap:"Bai na",           nl:"Ga naar",        es:"Ir a"},
    "c.today":      {en:"Today",          pap:"Awe",              nl:"Vandaag",        es:"Hoy"},
    "c.points":     {en:"points",         pap:"punto",            nl:"punten",         es:"puntos"},
    "c.pts":        {en:"pts",            pap:"pt",               nl:"pt",             es:"pts"},
    "c.signedIn":   {en:"Signed in with Google", pap:"Login ku Google", nl:"Ingelogd met Google", es:"Sesion con Google"},
    "c.signOut":    {en:"Sign out",       pap:"Sali",             nl:"Uitloggen",      es:"Salir"},
    "c.viewAs":     {en:"View as",        pap:"Wak komo",         nl:"Bekijk als",     es:"Ver como"},
    "c.player":     {en:"Player",         pap:"Hungadó",          nl:"Speler",         es:"Jugador"},
    "c.coach":      {en:"Coach",          pap:"Coach",            nl:"Coach",          es:"Coach"},
    "c.bar":        {en:"Kantine",        pap:"Kantina",          nl:"Kantine",        es:"Cantina"},
    "c.offline":    {en:"Offline. Your progress is saved on this phone and syncs later.",
                     pap:"Sin internet. Bo progreso ta wardá riba e telefon aki.",
                     nl:"Offline. Je voortgang staat op deze telefoon.",
                     es:"Sin conexion. Tu progreso queda guardado en este telefono."},

    /* ---- dashboard ---- */
    "d.greeting":   {en:"Bon bini",       pap:"Bon bini",         nl:"Bon bini",       es:"Bon bini"},
    "d.next":       {en:"Next session",   pap:"Siguiente sesion", nl:"Volgende training", es:"Proxima sesion"},
    "d.cant":       {en:"Can't make it",  pap:"Mi no por",        nl:"Kan niet",       es:"No puedo"},
    "d.rating":     {en:"A2 rating",      pap:"Rating A2",        nl:"A2 rating",      es:"Rating A2"},
    "d.sessions":   {en:"Sessions",       pap:"Sesionnan",        nl:"Trainingen",     es:"Sesiones"},
    "d.streak":     {en:"Streak",         pap:"Serie",            nl:"Reeks",          es:"Racha"},
    "d.thisSeason": {en:"this season",    pap:"e temporada aki",  nl:"dit seizoen",    es:"esta temporada"},
    "d.inRow":      {en:"in a row",       pap:"tras di otro",     nl:"op rij",         es:"seguidas"},
    "d.best":       {en:"Best",           pap:"Mihó",             nl:"Beste",          es:"Mejor"},
    "d.attendance": {en:"Attendance, last 12 weeks", pap:"Presensia, ultimo 12 siman", nl:"Aanwezigheid, 12 weken", es:"Asistencia, 12 semanas"},
    "d.activity":   {en:"Recent activity",pap:"Aktividat resien", nl:"Recente activiteit", es:"Actividad reciente"},
    "d.goal":       {en:"Week goal",      pap:"Meta di siman",    nl:"Weekdoel",       es:"Meta semanal"},
    "d.goalSub":    {en:"2 squad sessions and 1 home drill", pap:"2 sesion i 1 drill na kas", nl:"2 trainingen en 1 thuisdrill", es:"2 sesiones y 1 drill en casa"},

    /* ---- schedule ---- */
    "s.title":      {en:"Your schedule",  pap:"Bo agenda",        nl:"Jouw agenda",    es:"Tu agenda"},
    "s.sub":        {en:"Say yes or no and your coach sees it straight away.", pap:"Bisa si of nò i bo coach ta mira mesora.", nl:"Zeg ja of nee en je coach ziet het meteen.", es:"Di si o no y tu coach lo ve al instante."},
    "s.going":      {en:"Going",          pap:"Mi ta bin",        nl:"Ik kom",         es:"Voy"},
    "s.notGoing":   {en:"Not going",      pap:"Mi no ta bin",     nl:"Kom niet",       es:"No voy"},
    "s.spots":      {en:"spots left",     pap:"lugá liber",       nl:"plekken vrij",   es:"lugares libres"},
    "s.full":       {en:"Full",           pap:"Yen",              nl:"Vol",            es:"Lleno"},
    "s.cal":        {en:"Add to calendar",pap:"Pone den kalender",nl:"Zet in agenda",  es:"Anadir al calendario"},

    /* ---- development ---- */
    "v.title":      {en:"Player development", pap:"Desaroyo di hungadó", nl:"Spelersontwikkeling", es:"Desarrollo del jugador"},
    "v.profile":    {en:"Skill profile",  pap:"Perfil di teknik", nl:"Skillprofiel",   es:"Perfil tecnico"},
    "v.hex":        {en:"Hexagon",        pap:"Heksagono",        nl:"Zeshoek",        es:"Hexagono"},
    "v.body":       {en:"Body map",       pap:"Mapa di kurpa",    nl:"Lichaamskaart",  es:"Mapa del cuerpo"},
    "v.notes":      {en:"Coach notes",    pap:"Nota di coach",    nl:"Notities coach", es:"Notas del coach"},
    "v.skills":     {en:"Skills, scored out of 10", pap:"Teknik, riba 10", nl:"Skills, op een schaal van 10", es:"Tecnica, sobre 10"},
    "v.level":      {en:"Level progression", pap:"Progreso di nivel", nl:"Niveauvoortgang", es:"Progreso de nivel"},
    "v.next":       {en:"Next",           pap:"Siguiente",        nl:"Volgende",       es:"Siguiente"},
    "v.needs":      {en:"needs work",     pap:"mester traha",     nl:"aandacht",       es:"a mejorar"},
    "v.solid":      {en:"solid",          pap:"bon",              nl:"solide",         es:"solido"},
    "v.strong":     {en:"strong",         pap:"fuerte",           nl:"sterk",          es:"fuerte"},
    "v.swipe":      {en:"swipe to switch",pap:"swipe pa kambia",  nl:"veeg om te wisselen", es:"desliza para cambiar"},
    "v.squadAvg":   {en:"Squad average",  pap:"Promedio skuadra", nl:"Gemiddelde squad",es:"Promedio del equipo"},
    "v.noChange":   {en:"no change",      pap:"sin kambio",       nl:"geen verandering",es:"sin cambio"},

    /* ---- points ---- */
    "p.title":      {en:"Points & shop",  pap:"Puntonan i tienda",nl:"Punten & shop",  es:"Puntos y tienda"},
    "p.sub":        {en:"Earn on court, spend at the bar. Staff scan your code.", pap:"Gana riba kancha, gasta na bar. Personal ta skèn bo kódigo.", nl:"Verdien op de baan, geef uit aan de bar. Personeel scant je code.", es:"Gana en la cancha, gasta en el bar. El personal escanea tu codigo."},
    "p.balance":    {en:"Your balance",   pap:"Bo balansa",       nl:"Je saldo",       es:"Tu saldo"},
    "p.earn":       {en:"How you earn",   pap:"Kon bo ta gana",   nl:"Zo verdien je",  es:"Como ganas"},
    "p.kantine":    {en:"Club shop",      pap:"Tienda di klup",   nl:"Clubshop",       es:"Tienda del club"},
    "p.inPoints":   {en:"Prices in points", pap:"Preis den punto",nl:"Prijzen in punten", es:"Precios en puntos"},
    "p.redeem":     {en:"Redeem",         pap:"Kambia",           nl:"Inwisselen",     es:"Canjear"},
    "p.short":      {en:"Not enough",     pap:"No ta sufisiente", nl:"Te weinig",      es:"Insuficiente"},
    "p.history":    {en:"Redemption history", pap:"Historia di kambio", nl:"Inwisselgeschiedenis", es:"Historial de canjes"},
    "p.show":       {en:"Show this to your coach", pap:"Mustra esaki na bo coach", nl:"Laat dit aan je coach zien", es:"Muestra esto a tu entrenador"},
    "p.expires":    {en:"Code expires in",pap:"Kódigo ta kaduká den", nl:"Code verloopt over", es:"El codigo vence en"},
    "p.expired":    {en:"Code expired",   pap:"Kódigo a kaduká",  nl:"Code verlopen",  es:"Codigo vencido"},
    "p.again":      {en:"Get a new code", pap:"Pidi un kódigo nobo", nl:"Nieuwe code",  es:"Pedir codigo nuevo"},
    "p.empty":      {en:"Nothing redeemed yet. The batido is a good start.", pap:"Bo no a kambia nada ainda. Un batido ta un bon kuminsamentu.", nl:"Nog niets ingewisseld. Begin met een batido.", es:"Aun no has canjeado nada. Empieza por un batido."},

    /* ---- home training ---- */
    "h.title":      {en:"At-home training", pap:"Entreno na kas", nl:"Thuistraining",  es:"Entreno en casa"},
    "h.sub":        {en:"Drills your coaches film. Finish one, it lands in your file.", pap:"Drill ku bo coachnan ta filma. Kaba un i e ta drenta bo ficha.", nl:"Drills die je coaches filmen. Rond er een af en het komt in je dossier.", es:"Drills que graban tus coaches. Termina uno y entra en tu ficha."},
    "h.mark":       {en:"Mark complete",  pap:"Marka kla",        nl:"Markeer als klaar", es:"Marcar hecho"},
    "h.done":       {en:"Completed",      pap:"Kla",              nl:"Klaar",          es:"Hecho"},
    "h.upload":     {en:"Upload a drill", pap:"Subi un drill",    nl:"Drill uploaden", es:"Subir un drill"},
    "h.assignment": {en:"This week's assignment", pap:"Tarea di e siman aki", nl:"Opdracht van deze week", es:"Tarea de esta semana"},

    /* ---- squad ---- */
    "q.title":      {en:"Squad standings", pap:"Klasifikashon skuadra", nl:"Squad stand", es:"Clasificacion"},
    "q.sub":        {en:"Points earned this season. Resets in January.", pap:"Punto gana e temporada aki. Ta start di nobo na yanüari.", nl:"Punten dit seizoen. Reset in januari.", es:"Puntos de esta temporada. Se reinicia en enero."},
    "q.rank":       {en:"Rank",           pap:"Posishon",         nl:"Plaats",         es:"Puesto"},
    "q.you":        {en:"you",            pap:"abo",              nl:"jij",            es:"tu"},
    "q.badges":     {en:"Your badges",    pap:"Bo badgenan",      nl:"Jouw badges",    es:"Tus insignias"},
    "q.locked":     {en:"Locked",         pap:"Será",             nl:"Op slot",        es:"Bloqueado"},

    /* ---- coach tools ---- */
    "t.title":      {en:"Coach tools",    pap:"Hèrmèntnan di coach", nl:"Coach tools", es:"Panel del coach"},
    "t.sub":        {en:"Check the squad in, score a skill, upload a drill.", pap:"Check in e skuadra, duna un nota, subi un drill.", nl:"Check de squad in, geef een score, upload een drill.", es:"Registra asistencia, puntua una tecnica, sube un drill."},
    "t.roster":     {en:"Today's check-in", pap:"Check-in di awe", nl:"Check-in vandaag", es:"Check-in de hoy"},
    "t.in":         {en:"Check in",       pap:"Check in",         nl:"Check in",       es:"Registrar"},
    "t.present":    {en:"Checked in",     pap:"Presente",         nl:"Aanwezig",       es:"Presente"},
    "t.assess":     {en:"Quick assessment", pap:"Evaluashon rapido", nl:"Snelle beoordeling", es:"Evaluacion rapida"},
    "t.assessSub":  {en:"Score a skill and the player sees it in Development.", pap:"Duna un nota i e hungadó ta mir'é den Desaroyo.", nl:"Geef een score en de speler ziet het bij Ontwikkeling.", es:"Puntua y el jugador lo ve en Desarrollo."},
    "t.newDrill":   {en:"New home drill", pap:"Drill nobo pa kas", nl:"Nieuwe thuisdrill", es:"Nuevo drill en casa"},
    "t.drillName":  {en:"Drill name",     pap:"Nòmber di drill",  nl:"Naam van de drill", es:"Nombre del drill"},
    "t.publish":    {en:"Publish to the squad", pap:"Publiká pa skuadra", nl:"Publiceer voor de squad", es:"Publicar al equipo"},

    /* ---- kantine staff ---- */
    "k.title":      {en:"Shop desk",      pap:"Desk di tienda",   nl:"Shopbalie",      es:"Mostrador de la tienda"},
    "k.sub":        {en:"Type the code from the player's screen to confirm it.", pap:"Pone e kódigo di e telefon di e hungadó pa konfirmá.", nl:"Typ de code van het scherm van de speler.", es:"Escribe el codigo de la pantalla del jugador."},
    "k.code":       {en:"Redemption code",pap:"Kódigo",           nl:"Code",           es:"Codigo"},
    "k.check":      {en:"Check code",     pap:"Chek kódigo",      nl:"Controleer",     es:"Comprobar"},
    "k.valid":      {en:"Valid",          pap:"Bálido",           nl:"Geldig",         es:"Valido"},
    "k.hand":       {en:"Hand it over and confirm", pap:"Duna e artikulo i konfirmá", nl:"Geef mee en bevestig", es:"Entrega y confirma"},
    "k.unknown":    {en:"No code like that. Ask the player to refresh.", pap:"E kódigo aki no ta eksistí. Pidi e hungadó refresh.", nl:"Onbekende code. Vraag de speler te verversen.", es:"Codigo desconocido. Pide al jugador que actualice."},
    "k.used":       {en:"Already confirmed", pap:"Ya konfirmá",   nl:"Al bevestigd",   es:"Ya confirmado"},
    "k.confirmed":  {en:"Confirmed",      pap:"Konfirmá",         nl:"Bevestigd",      es:"Confirmado"},
    "k.scan":       {en:"Scan the code",  pap:"Skèn e kódigo",    nl:"Scan de code",   es:"Escanear codigo"},
    "k.scanStop":   {en:"Stop",           pap:"Stòp",             nl:"Stop",           es:"Parar"},
    "k.torch":      {en:"Light",          pap:"Lus",              nl:"Licht",          es:"Luz"},
    "k.scanHint":   {en:"Point at the code on the player's phone.", pap:"Apuntá na e kódigo riba telefon di e hungadó.", nl:"Richt op de code op de telefoon van de speler.", es:"Apunta al codigo en el telefono del jugador."},
    "k.or":         {en:"or type it",     pap:"òf skibi'é",       nl:"of typ hem",     es:"o escribelo"},
    "k.waiting":    {en:"Waiting to collect", pap:"Ta warda pa kohe", nl:"Wacht op afhalen", es:"Esperando recogida"},
    "k.noScan":     {en:"This browser cannot scan. Use the phone camera app on the QR, or type the code.", pap:"E browser aki no por skèn. Usa e app di kamera riba e QR, òf skibi e kódigo.", nl:"Deze browser kan niet scannen. Gebruik de camera-app op de QR, of typ de code.", es:"Este navegador no puede escanear. Usa la app de camara sobre el QR, o escribe el codigo."},
    "k.denied":     {en:"Camera blocked. Allow it in the browser settings, or type the code.", pap:"Kamera ta blòkiá. Permit'é den setting di browser, òf skibi e kódigo.", nl:"Camera geblokkeerd. Sta hem toe in de browserinstellingen, of typ de code.", es:"Camara bloqueada. Permitela en los ajustes, o escribe el codigo."},
    "k.nocam":      {en:"No camera on this device. Type the code instead.", pap:"No tin kamera riba e aparato aki. Skibi e kódigo.", nl:"Geen camera op dit apparaat. Typ de code.", es:"Sin camara en este dispositivo. Escribe el codigo."},
    "k.scanned":    {en:"Scanned",        pap:"Skèn",             nl:"Gescand",        es:"Escaneado"},
    "k.queueEmpty": {en:"No codes waiting.", pap:"No tin kódigo ta warda.", nl:"Geen codes in de wacht.", es:"Ningun codigo esperando."},
    "p.live":       {en:"Code waiting to collect", pap:"Kódigo ta warda pa kohe", nl:"Code klaar om op te halen", es:"Codigo listo para recoger"},
    "p.showQr":     {en:"Show the code",  pap:"Mustra e kódigo",  nl:"Toon de code",   es:"Mostrar codigo"},
    "p.tapShow":    {en:"Tap to show again", pap:"Primi pa mustra atrobe", nl:"Tik om opnieuw te tonen", es:"Toca para mostrar de nuevo"},
    "c.share":      {en:"Share",          pap:"Kompartí",         nl:"Delen",          es:"Compartir"},
    "c.undo":       {en:"Undo",           pap:"Bai bèk",          nl:"Ongedaan",       es:"Deshacer"},
    "d.doNext":     {en:"Do this next",   pap:"Hasi esaki awor",  nl:"Doe dit nu",     es:"Haz esto ahora"},
    "d.nbaRsvp":    {en:"Say if you are coming to the next session.", pap:"Bisa si bo ta bin e siguiente sesion.", nl:"Laat weten of je komt.", es:"Di si vienes a la proxima sesion."},
    "d.nbaDrill":   {en:"One home drill and your week goal is done.", pap:"Un drill na kas i bo meta di siman ta kla.", nl:"Een thuisdrill en je weekdoel is rond.", es:"Un drill en casa y cierras tu meta."},
    "d.nbaSpend":   {en:"You have enough points for something cold.", pap:"Bo tin sufisiente punto pa algu friu.", nl:"Genoeg punten voor iets kouds.", es:"Tienes puntos para algo frio."},
    "d.nbaDone":    {en:"You are on top of everything. Go play.", pap:"Bo tin tur kos na òrdu. Bai hunga.", nl:"Alles is bij. Ga spelen.", es:"Todo al dia. A jugar."},
    "t.session":    {en:"Session",        pap:"Sesion",           nl:"Training",       es:"Sesion"},
    "t.find":       {en:"Find a player",  pap:"Buska un hungadó", nl:"Zoek een speler",es:"Buscar jugador"},
    "t.all":        {en:"All in",         pap:"Tur aden",         nl:"Allen in",       es:"Todos"},
    "t.clear":      {en:"Clear",          pap:"Limpia",           nl:"Wissen",         es:"Limpiar"},
    "t.noPlayer":   {en:"Nobody by that name.", pap:"Ningun hungadó ku e nòmber ei.", nl:"Niemand met die naam.", es:"Nadie con ese nombre."},
    "t.checkedOf":  {en:"in",             pap:"aden",             nl:"in",             es:"dentro"},
    "nav.today":    {en:"Today",          pap:"Awe",              nl:"Vandaag",        es:"Hoy"},
    "nav.check":    {en:"Check-in",       pap:"Check-in",         nl:"Check-in",       es:"Asistencia"},
    "nav.players":  {en:"Players",        pap:"Hungadónan",       nl:"Spelers",        es:"Jugadores"},
    "nav.drills":   {en:"Home drills",    pap:"Drill pa kas",     nl:"Thuisdrills",    es:"Drills en casa"},
    "short.today":  {en:"Today",          pap:"Awe",              nl:"Vandaag",        es:"Hoy"},
    "short.check":  {en:"Check-in",       pap:"Check-in",         nl:"Check-in",       es:"Asist."},
    "short.players":{en:"Players",        pap:"Hungadó",          nl:"Spelers",        es:"Jugad."},
    "short.drills": {en:"Drills",         pap:"Drills",           nl:"Drills",         es:"Drills"},
    "short.bar":    {en:"Shop",           pap:"Tienda",           nl:"Shop",           es:"Tienda"},
    "t.todayTitle": {en:"Today",          pap:"Awe",              nl:"Vandaag",        es:"Hoy"},
    "t.nextUp":     {en:"Next session",   pap:"Siguiente sesion", nl:"Volgende training", es:"Proxima sesion"},
    "t.startCheck": {en:"Start check-in", pap:"Kuminsá check-in", nl:"Start check-in", es:"Empezar asistencia"},
    "t.noSession":  {en:"Nothing scheduled.", pap:"No tin nada programá.", nl:"Niets ingepland.", es:"Nada programado."},
    "t.checkedIn":  {en:"checked in",     pap:"check in",         nl:"ingecheckt",     es:"presentes"},
    "t.codesWaiting":{en:"codes waiting", pap:"kódigo ta warda",  nl:"codes wachten",  es:"codigos esperando"},
    "t.players":    {en:"Players",        pap:"Hungadónan",       nl:"Spelers",        es:"Jugadores"},
    "t.assessedThis":{en:"sheets scored", pap:"formulario yená",  nl:"sheets gescoord",es:"fichas puntuadas"},
    "t.needsWork":  {en:"Needs a look",   pap:"Mester wak",       nl:"Aandacht nodig", es:"Necesita atencion"},
    "t.needsWorkSub":{en:"Lowest scores across the squad right now.", pap:"E notanan mas abou den e skuadra.", nl:"De laagste scores in de squad.", es:"Las notas mas bajas del equipo."},
    "t.noScores":   {en:"Nothing scored yet.", pap:"Ainda no tin nota.", nl:"Nog niets gescoord.", es:"Aun sin notas."},
    "t.checkSub":   {en:"Tap a player as they walk on. Points land in their account straight away.", pap:"Primi un hungadó ora e drenta. E puntonan ta yega mesora.", nl:"Tik een speler aan als hij de baan op komt. Punten staan er meteen op.", es:"Toca al jugador cuando entra. Los puntos entran al momento."},
    "t.playersSub": {en:"Open a player to score the sheet, leave a note and see their attendance.", pap:"Habri un hungadó pa duna nota, laga un remarke i wak su presensia.", nl:"Open een speler om te scoren, een notitie te laten en aanwezigheid te zien.", es:"Abre un jugador para puntuar, dejar una nota y ver su asistencia."},
    "t.drillsSub":  {en:"Publish a drill and the whole squad sees it in Home training.", pap:"Publiká un drill i henter e skuadra ta mir'é.", nl:"Publiceer een drill en de hele squad ziet hem.", es:"Publica un drill y todo el equipo lo ve."},
    "t.published":  {en:"Published",      pap:"Publiká",          nl:"Gepubliceerd",   es:"Publicados"},
    "t.scored":     {en:"scored",         pap:"ku nota",          nl:"gescoord",       es:"puntuadas"},
    "t.notScored":  {en:"no sheet",       pap:"sin nota",         nl:"geen sheet",     es:"sin ficha"},
    "t.avg":        {en:"average",        pap:"promedio",         nl:"gemiddeld",      es:"promedio"},
    "t.note":       {en:"Coach note",     pap:"Remarke di coach", nl:"Coachnotitie",   es:"Nota del coach"},
    "t.notePh":     {en:"What to work on next block", pap:"Kiko pa traha riba proximo blòki", nl:"Waar de volgende blok aan te werken", es:"En que trabajar el proximo bloque"},
    "t.saveSheet":  {en:"Save the sheet", pap:"Warda e formulario", nl:"Sheet opslaan", es:"Guardar ficha"},
    "t.sheetSaved": {en:"sheet saved",    pap:"formulario wardá",  nl:"sheet opgeslagen", es:"ficha guardada"}
  };

  var lang = "en";

  function t(key, vars){
    var row = STR[key];
    var s = row ? (row[lang] || row.en) : key;
    if(vars) Object.keys(vars).forEach(function(k){ s = s.replace("{" + k + "}", vars[k]); });
    return s;
  }

  function apply(root){
    (root || document).querySelectorAll("[data-i18n]").forEach(function(el){
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    (root || document).querySelectorAll("[data-i18n-attr]").forEach(function(el){
      el.getAttribute("data-i18n-attr").split(",").forEach(function(pair){
        var bits = pair.split(":");
        el.setAttribute(bits[0].trim(), t(bits[1].trim()));
      });
    });
    document.documentElement.lang = lang === "pap" ? "pap" : lang;
  }

  function set(id, silent){
    if(!LANGS.some(function(l){ return l.id === id; })) id = "en";
    lang = id;
    if(window.r2store) window.r2store.patch({lang:id});
    apply(document);
    if(!silent) document.dispatchEvent(new CustomEvent("r2:lang", {detail:id}));
  }

  return {
    langs: LANGS,
    t: t,
    apply: apply,
    set: set,
    get current(){ return lang; }
  };
})();
