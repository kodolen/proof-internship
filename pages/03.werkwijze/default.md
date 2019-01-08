---
title: Werkwijze
---

Het is belangrijk om je aan te passen aan de werkwijze en workflow binnen een team en/of bedrijf. Zo zijn er meerdere programma’s, kanalen, programmeertalen en frameworks die ik heb moeten gebruiken tijdens mijn werkzaamheden. 

(note) lokaal -> test -> accept -> live

Jira
Jira is een agile projectmanagementtool die het gebruik van scrum ondersteund en tot een hoger level brengt. Zo kun je al je agile projecten plannen, volgen en beheren. Zo hebben we per project een sprint planning, deze wordt weergegeven op een scrumbord. In z’n sprintplanning komen tickets te staan, deze tickets zijn op tijd ingeschat. Tickets zijn toegewezen aan iemand. Zo kan je dus ook altijd zien wat andere mensen binnen je team aan het doen zijn. Het scrumbord is opgedeeld in zes delen. 

To do
Hier komen alle tickets te staan die nog gedaan moeten worden. 

In progress
Wanneer iemand een ticket heeft opgepakt dan sleept hij/zij de ticket in progress.

Pull request
Hier komt een ticket te staan wanneer er een pull request is gedaan.

In review
Wanneer een ticket is geaccepteerd tijdens de pull request, komt deze ticket in review te staan. De ticket is dus eerst op de kwaliteit van de code gecontroleerd tijdens de pull request en tijdens de review fase wordt er gekeken of alles gemaakt is zoals in het design is gemaakt.

Feedback
Wanneer er tijdens de review fase opmerkingen op een bepaalde ticket, komt die ticket in feedback te staan.

Done
Wanneer alles goed is dan komt de ticket in done te staan en toegewezen aan de projectleider, die kijkt ook nog alles na.



Git
Git is een versiebeheersysteem waarmee makkelijk samengewerkt kan worden aan projecten. Zo heeft altijd iedereen dezelfde code en kan er apart van elkaar aan een project gewerkt worden. Zo maken wij in het team gebruik van Bitbucket en Sourcetree. Git is ontworpen als command-line tool.

Bitbucket
Bitbucket is een web-based Git. Zo kan er via Bitbucket code gedeeld worden met andere gebruikers. Ze kunnen een kopie van je code krijgen en hier aanpassingen maken als ze dat willen.

Sourcetree
Omdat Git van oorsprong een command-line tool is is het soms lastig om bepaalde commando’s te onthouden. Sourcetree biedt dan ook een overzichtelijk visuele interface met alle acties die je vanuit een command-line tool ook kan uitvoeren. Dus het gebruik van een command-line tool is niet meer nodig.

Repository
De repository is een plek waar de geschiedenis van je werk word opgeslagen

Clone
Hiermee kan je een repository clonen, je cloned dan de laatst aangepaste versie.

Branches
In veel gevallen heb je één master branche, dit is de leidraad in je project. In de master branche komt uiteindelijk de definitieve code te staan. Normaal is een project opgesplitst in meerdere branches, een branche kan steeds weer een nieuwe feature of bugfix zijn. Aan het einde van de rit komen alle branches samen in de master branche.

Pull
Hiermee kan je je aanpassingen van andere “pullen” in je eigen branche.

Commit
Met een commit kan je een save/record maak van je aanpassingen binnen een branche.

Push
Met een push, update je je aanpassingen binnen de branche. 

Merge
Met een merge kan je je branche bijvoorbeeld in de master branche mergen, dit betekend dat die branche nu in de master branche is gevoegd.

In praktijk
Wanneer er tussen Redkiwi en de klant een overeenkomst is over het maken van een website begint het design team met het maken van ontwerpen voor de website. Uiteindelijk komt hier een definitief ontwerp uit. Dit ontwerp word aan ons, als wordpress team, gepresenteerd. Het ontwerp wordt opgesplitst in onderdelen, deze onderdelen bevatten elementen van de website. Elk onderdeel wordt verwerkt in een ticket. Aan een ticket zit een inschatting vast, dit betekent dat de ticket in die bepaalde tijd/inschatting afgerond moet worden. Het inschatten van tickets/onderdelen wordt gezamenlijk in een vergaderruimte gedaan. Bij een inschatting wordt heel erg gekeken naar de technische kant z’n onderdeel. Hoelang zou het duren om bijvoorbeeld een header, footer, image slider of een pop-up scherm op te bouwen, zoals in het ontwerp is ontworpen.

Wanneer alle inschattingen zijn gedaan en aan een ticket zijn gekoppeld zijn deze terug te vinden in Jira. Deze komen in een sprintplanning te staan. Iedereen heeft bepaalde tickets aan hun naam toegewezen gekregen, voor iedereen is zichtbaar wie wat moet doen en waar iemand mee bezig is. Elke ticket heeft unieke naam. Wanneer je aan een ticket ga beginnen dat zet je deze op “to do” in het scrumbord. Nu ziet iedereen dat jij met deze ticket aan de slag bent. Vervolgens wordt er in Sourcetree een nieuwe branche, met de naam van de ticket, aangemaakt. 

Wanneer we aan een project werken hebben we drie hoofdbranches. Deze branches zijn: Test, Accept, en Master. Wanneer we nog in ontwikkeling zijn werken we in de test branche. Elk ticket/branche die gemaakt wordt, word uiteindelijk in de test branche gemerged.

Wanneer je dus een ticket afgerond heb dan commit en push je deze. Vervolgens maak je hier een pull request van in Bitbucket. In Jira word de ticket nu op “pull request” gezet.

Pull request
Wanneer je een commit en push heb gedaan naar je branche zijn de gemaakte aanpassingen opgeslagen in die branche. Deze branche wil je natuurlijk in je master branche mergen zodat ook andere deze aanpassingen in hun project heb wanneer ze een pull maken van de master branche. 

In deze fase word je code door je teamgenoten gecontroleerd. Ook kunnen je teamgenoten hier reacties bij zetten. Wanneer je reacties hebt, moet je deze oplossen en de veranderingen hiervan committen. Nu word je code opnieuw gecontroleerd. Wanneer je meer dan twee goedkeuringen heb mag de branche gemerged worden in de test branche. In Jira komt de ticket nu op “In review” te staan. Dit is dus de fase waar je elkaars code controleert. 

Wanneer de sprint en alle tickets zijn afgerond staan, als het goed is, alle tickets in review. Nu gaat er per ticket gekeken worden of wat er gemaakt is klopt en werkt zoals hoort te werken zoals aangegeven in design. Wanneer dit klopt gaat de ticket naar “done”. Wanneer alle tickets op “done” staan handeld de projectleider het verder af.





Foundation

Foundation is een responsive front-end framework. Het biedt je de mogelijkheid om snel prototypes, websites en apps te ontwikkelen die op elk device compatible zijn. Foundation biedt een grote bibliotheek aan geteste componenten. Foundation maakt het je leven als front-end developer gemakkelijker. Wanneer je foundation download en installeert heb je de keuze om alleen bepaalde componenten te downloaden. Binnen Redkiwi werken wij met:

Flex grid
Flex grid is een gridsysteem dat ervoor zorgt om je content horizontaal en verticaal mooi uitlijnen. Zo kan je het gridsysteem ook voor verschillende schermresoluties ingesteld worden.

SASS
SASS lijkt heel erg op CSS. Alleen in SASS is er veel meer mogelijk. Zo kan je variabelen en functies gebruiken. Ook is het mogelijk om je content te nesten.

Responsive
Hier word gebruik gemaakt van ingebouwe media queries, ook wel breakpoints genoemd. Zo kan je op verschillende schermresoluties je SASS aanpassen.

Container -> Accordions

Responsive tabs

Equalizer


Talen
De talen die we gebruiken zijn HTML, CSS/SASS, Javascript en Twig. 
