const names = ["Vasiliki Horvers","Ezra Garbutt","Rosenda Kachelmeyer","Glennie Hyndman","Tam Stephens","Hermelinda Cardoza","Trent Blyler","Silva Bognuda","Michal Cohn","Tomika Makris","Shanelle Abare","Stanford Eddens","Kay Biddix","Mirta Schacherer","Antonetta Beaver","Tashia Scobie","Beata Popichak","Jon Edde","Elouise Stoen","Leontine Wadell","Marian Winnicki","Omega Shafran","Letha Lonsinger","Sol Beachler","Maurita Repoff","Ivey Perl","Karmen Marbach","Franklyn Kangleon","Eun Diseth","Yasmin Goll","Bobby Sulek","Natividad Karpel","Violet Curatolo","Ileana Cappelletti","Irene Mctush","Kacy Wolstenholme","Elisa Brasier","Onie Balque","Lu Steffenhagen","Susana Herzing","Voncile Thiery","Genevive Korbal","Dewitt Yi","Merideth Holsey","Michaele Trimnal","Amanda Nakao","Gearldine Suders"]

const dates = ["2009-09-04","2008-11-19","2021-11-24","2020-03-18","2026-11-07","2017-04-03","2016-09-09","2013-04-07","2012-05-01","2027-12-17","2017-05-07","2025-06-14","2018-09-05","2019-06-21","2025-06-10","2018-02-02","2009-03-09","2008-04-06","2012-03-24","2013-07-15","2025-10-07","2021-03-22","2023-12-25","2011-11-11","2020-05-02","2023-08-09","2019-11-12","2022-08-13","2009-09-25","2027-11-06","2016-04-28","2012-04-16","2010-12-22","2018-10-06","2027-06-27","2007-11-17","2018-01-03","2026-08-21","2017-07-27","2026-07-22","2012-05-21","2020-06-02","2018-08-13","2013-03-15","2009-10-06","2022-08-02","2025-07-11"]

const urls = ["http://indexlessness.com/overconfident/perturbatrix?a=branchireme&b=vallecula#nearby","http://whewt.com/statolithic/genevoise?a=renculus&b=cheesecurd#unbelievingly","https://at.com/mooch/arillate?a=tufter&b=uptill#underdip","https://laughee.com/longsome/extractorship?a=eucharistically&b=guppy#handgun","https://moration.com/heteromera/muga?a=atavi&b=venomsome#tormentedly","http://mileway.com/teetertail/codamine?a=prognathic&b=outshout#unflagitious","http://sassafac.com/auriscope/halal?a=mendelyeevite&b=unaccosted#monodramatist","http://executional.com/ununderstandable/didacticism?a=sketching&b=phenacodus#oxamethane","https://plainly.com/sangha/gleamy?a=excresce&b=notionalist#rodman","http://mucoflocculent.com/luxuriate/orpheist?a=daubery&b=holstered#schizogamy","http://dyschronous.com/barlow/mandarindom?a=trussed&b=obligative#rouncy","https://favilla.com/tumulate/stintless?a=henotheistic&b=rhaponticin#underhid","http://wenchowese.com/spermogonous/euclid?a=quartermasterlike&b=thalassian#undipped","https://monilioid.com/managerially/bedmaker?a=trochoid&b=hyperrational#mothersome","https://quadrigate.com/fissirostrate/caramelization?a=minyadidae&b=switchlike#abidingness","https://caliph.com/detergible/veneratively?a=squamotemporal&b=zilla#pyosepticemia","https://daunii.com/gurrah/minoress?a=mesonychidae&b=unjolted#chromicize","http://nymphwise.com/out/overexcelling?a=theolatry&b=tetragonalness#gelseminic","http://yeowoman.com/swink/disinfective?a=phototachometry&b=combwise#restrained","https://gyrencephala.com/radish/seroprophylaxis?a=thesmothete&b=circumstantialness#skiameter","https://spinifex.com/supermodest/epistolary?a=pinguin&b=somnolently#undean","http://postneural.com/endemically/transproser?a=johannisberger&b=sixtowns#halloysite","http://silicify.com/zincic/podostomata?a=overdecoration&b=orthoscopic#isostatically","https://vitrina.com/bottomry/octarius?a=primosity&b=philippist#hydriodide","https://mythography.com/ereptase/teknonymous?a=nonmagnetizable&b=retemper#liturgiology","http://pantameter.com/inosculation/thondrakians?a=stereotypable&b=counterwork#strongylidae","http://retrohepatic.com/zeta/wonga?a=alabastrine&b=matriarch#imperscrutable","https://forpit.com/reperusal/unintelligible?a=outwrench&b=earless#contentful","https://obduracy.com/flavoring/acupuncturation?a=infiltrate&b=nonsubstantiality#attempter","https://gunite.com/palatic/pitilessness?a=sovietization&b=unbendsome#cosmography","https://fontful.com/eleutherios/symphalangus?a=oxyesthesia&b=gulleting#radiation","https://introrsal.com/windbibber/cutaway?a=medicostatistic&b=paguroidea#buffball","http://esophagorrhagia.com/unswerved/microscopial?a=overlusty&b=johnin#metastasis","http://coeducation.com/eccentrometer/spinifex?a=danais&b=cantala#plausive","https://dromos.com/deuterocanonical/paulist?a=disclike&b=hercogamous#varietist","http://arrestment.com/phraseology/dissogony?a=leatherback&b=fashionist#historicism","https://israelitish.com/tipuloidea/hydroptic?a=honeyflower&b=disannexation#trimerization","http://benzine.com/isocheimic/nonbelieving?a=preaffirm&b=myorrhexis#forepreparation","http://schoenus.com/orangey/heptacosane?a=yasna&b=microstomia#litholapaxy","http://participation.com/undisobliging/sluggishness?a=riverless&b=kandelia#langoon","https://exorbitant.com/nonvirginal/oxalyl?a=apheta&b=unaiding#punition","https://foppishly.com/gallicole/platinichloride?a=uncircumscription&b=coelelminthes#pighead","https://kindliness.com/electrobath/pseudozoea?a=ferret&b=exchange#reconstitution","https://umbril.com/gunate/antespring?a=yabby&b=nashgab#transcendentalistic","https://semicentennial.com/drivership/gallantry?a=unrewardedly&b=weathercockish#geminative","http://rededuction.com/pseudopolitical/sepiidae?a=myelinate&b=nondiscernment#slosh","https://tetraspheric.com/periphrases/unruffable?a=jurisdictional&b=amoebous#rigwiddy"]

const countries = ["South Sudan","Iceland","Spain","Papua New Guinea","Burundi","Kenya","Poland","Bhutan","Kenya","Zambia","El Salvador","Senegal","Monaco","Bolivia","Cambodia","Bosnia and Herzegovina","Pakistan","Jordan","Honduras","Malaysia","Uganda","Mauritania","Australia","Philippines","Macedonia","Nicaragua","Greece","Costa Rica","Mali","Montenegro","Micronesia","Syria","Central African Republic","Jordan","Bahrain","Oman","Philippines","Dominica","Timor-Leste","Samoa","Luxembourg","Seychelles","Guyana","Mali","Egypt","Andorra","Angola"]

module.exports = {
	names,
	dates,
	urls,
	countries
}