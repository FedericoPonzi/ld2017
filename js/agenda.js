$(document).ready(function(){

	//GLOBAL VARIABLES
	var labelBio='<p><b>Bio</b></p>';
	var labelButton='Ok, ho capito!'
	var labelAbstract='<p><b>Abstract</b></p>';
	var classButton='btn-info';
	var ticketIcon='<i class="fa fa-ticket"></i>';
	var wwwIcon='<i class="fa fa-home"></i>';
	var socialIcon='<i class="fa fa-facebook-square"></i>';
	var linkedInIcon='<i class="fa fa-linkedin-square"></i>';
	var googlePlusIcon='<i class="fa fa-google-plus-official"></i>';

	//LINUX PROFESSIONAL INSTITUTE
	$('.descLinuxInstitute').click(function(){
	var bioDesc="<p>LPI, Linux Professional Institute promuove e certifica le competenze necessarie all’uso di Linux e delle tecnologie Open Source in ambito professionale, con un programma di esami indipendente, globale e di alta qualità.</p>"
	+ "<p>LPI è lo standard globale di certificazione e di supporto alla carriera per i professionisti Open Source. Con più di 500.000 esami somministrati LPI è il soggetto di certificazione indipendente in ambito Linux e Open Source più grande al mondo. Ha certificato professionisti in 181 Paesi, somministrato esami in 9 lingue; ha oltre 400 partner nella formazione.</p>";
	var img="<img class='img-circle' src='/img/speaker/lpi.jpg'>";
	var descAbstract='<p>Lorem ipsum</p>';
	var linkSito=' <a href="http://www.lpi-italia.org/">Sito LPI</a><br>';
	var linkSocial=' <a href="https://www.facebook.com/LPIConnect/">Pagina ufficiale</a><br>';
	var eventbriteLink='  <a href="#">Biglietti</a><br>';
		
	var dialog = bootbox.dialog({
	title: 'Linux Professional Institute',
     size: "large",onEscape: true, backdrop: true,
	message: img + labelBio + bioDesc + labelAbstract + descAbstract + wwwIcon + linkSito + socialIcon + linkSocial + ticketIcon + eventbriteLink,
	buttons: {
		ok: {
			label: labelButton,
			className: classButton
		}
	}
	});
	});

	//CODERDOJO BRACCIANO
	$('.descCoderDojo').click(function(){
	var bioDesc="<p>The CoderDojo movement believes that an understanding of programming languages is increasingly important in the modern world, that it’s both better and easier to learn these skills early, and that nobody should be denied the opportunity to do so. To that end, we’ve built a global network of free, volunteer-led, community-based programming clubs for young people. Anyone aged seven to seventeen can visit a Dojo where they can learn to code, build a website, create an app or a game, and explore technology in an informal, creative, and social environment.</p>";
	var img="<img class='img-circle' src='/img/speaker/coderdojoBracciano.jpg'>";
	var descAbstract='<p>Per il nostro viaggio nel fantastico mondo del coding al LinuxDay 2017 useremo Scratch.\n' +
        'Per partecipare al nostro incontro è necessario:\n' +
        '<ul>\n' +
        '<li>avere dagli 8 anni in poi;</li>\n' +
        '<li>essere iscritti tramite questa pagina ad uno dei posti disponibili per il corso;</li>\n' +
        '<li>i ragazzi (non è necessaria alcuna esperienza precedente) dovrebbero portare un quaderno (o un blocco note);</li>\n' +
        '<li>portare una merenda per la pausa che si terrà durante l\'evento;</li>\n' +
        '<li>avere un genitore o adulto responsabile presente durante tutta la durata dell\'evento <b>(obbligatorio!)</b>.</li>\n' +
        '</ul> </p>';
	var linkSito=' <a href="https://zen.coderdojo.com/dojos/it/bracciano-metropolitan-city-of-rome/bracciano">Sito CoderDojo</a><br>';	
	var linkSocial=' <a href="https://www.facebook.com/coderdojo.bracciano/">Pagina ufficiale</a><br>';	
	var eventbriteLink='  <a href="https://www.eventbrite.it/e/biglietti-coderdojo-linuxdayromatre-37978513757?aff=es2">Biglietti</a><br>';
		
	var dialog = bootbox.dialog({
	title: 'CoderDojo Bracciano',
     size: "large",onEscape: true, backdrop: true,
	message: img + labelBio + bioDesc + labelAbstract + descAbstract + wwwIcon + linkSito + socialIcon + linkSocial + ticketIcon + eventbriteLink,
	buttons: {
		ok: {
			label: labelButton,
			className: classButton
		}
	}
	});
	});

    //LUCA RELANDINI
    $('.descLucaRelandini').click(function(){
    	var labelBlog='<i class="fa fa-bookmark"></i>';
    	var linkBlog=' <a href="http://lucarelandini.blogspot.it/">Blog </a><br>';
        var bioDesc="<p>Sono un Technical Solution Architect in Cisco Systems, parte di un team europeo che si occupa di Data Center e Cloud Computing.\n" +
            "In una lunga carriera come Enterprise Architect, lavorando in grandi aziende e nella pubblica amministrazione, in system integrator e in multinazionali del software, ho imparato che il fattore umano è più importante della tecnologia per il successo dei progetti.\n" +
			"I miei clienti si fidano delle soluzioni che gli propongo, perchè capiscono che posso aiutarli a raggiungere i loro obiettivi: non vendo loro le slide del marketing, ma la storia di progetti reali, dei problemi affrontati e risolti, condividendo le ragioni di successi e fallimenti.\n" +
            "Mi piace molto lavorare alla frontiera della tecnologia, continuando a esplorare e a imparare, perchè affrontare la sfida mi dà più soddisfazione che rimanere tranquillo nella mia zona di comfort.\n</p>";
        var img="<img class='img-circle' src='/img/speaker/luca_relandini.jpg'>";
        var descAbstract='<p>Applicazioni sempre più distribuite richiedono una attenta gestione del networking e della sicurezza. Un modello di policy facile da implementare e scalabile su grandi cluster, per tante istanze di container, aiuta a garantire performances e affidabilità.\n' +
            'La gestione tramite policy dichiarative consente agli sviluppatori e al team di Operations un passaggio indolore da sviluppo a esercizio.\n' +
            'Il progetto Contiv è una soluzione open source avanzata per il networking in Docker, K8s, Mesos e altri resource manager.  La sessione è seguita da un laboratorio in cui i partecipanti eseguiranno un tutorial di Contiv sul proprio pc.\n</p>';
        var linkSito=' <a href="https://gblogs.cisco.com/it/author/lrelandi/">Sito </a><br>';
        var linkLinkedIn=' <a href="https://www.linkedin.com/in/lucarelandini/?ppe=1">Profilo LinkedIn</a><br>';

        var dialog = bootbox.dialog({
            title: 'Luca Relandini',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + wwwIcon + linkSito + linkedInIcon + linkLinkedIn + labelBlog + linkBlog,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });


        //BRUNO LAURENCICH
    $('.descBrunoLaurencich').click(function(){
        var bioDesc="<p>He’s an artist who found on programming and hardware development a way of expanding his expressive and technical capacities. He started out as a traditional animator and then made his way into computing through 3D animation and interactive art. He worked on several audiovisual agencies, and now as a technology teacher for young people at Codemotion Kids and freelancer. Two years ago, he decided he needed a motion capture system for a performance, and seeing there was none available at a decent cost, decided to build one himself.\n</p>";
        var img="<img class='img-circle' src='/img/speaker/bruno_laurencich.jpg'>";
        var descAbstract='<p>Motion capture devices have historically been prohibitively expensive, and their use was restricted to military and scientific institutions, and some audiovisual companies. In the last years MEMS based inertial sensors have experienced significant development on their precision while decreasing size and cost. In combination with the appearance and spread of some computational inexpensive sensor fusion algorithms and fast microcomputers, motion capture at domestic level is now possible. In this talk we’ll review the essential techniques to it by focusing on a system developed by the author.\n</p>';
        var linkSito=' <a href="http://elbajoatico.com">Sito </a><br>';
        var linkSocial=' <a href="https://www.facebook.com/bruno.laurencich">Pagina ufficiale</a><br>';
        var linkLinkedIn=' <a href="https://www.linkedin.com/in/bruno-laurencich/">Profilo LinkedIn</a><br>';

        var dialog = bootbox.dialog({
            title: 'Bruno Laurencich',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + wwwIcon + linkSito + socialIcon + linkSocial + linkedInIcon + linkLinkedIn,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //DIEGO LUCA CANDIDO
    $('.descDiegoLucaCandido').click(function(){
        var bioDesc="<p>Lavoro come programmatore in una startup romana chiamata Wanderio e faccio parte di una associazione di informatica chiamata Metro Olografix, vivo attualmente a Roma e mi piace partecipare agli hacking Camp.</p>";
        var img="<img class='img-circle' src='/img/speaker/diego_luca_candido.jpg'>";
        var descAbstract='<p>Vedremo insieme le tematiche di creazione di un dataset per usarlo in scopi di machine learning o big data: come prelevare i dati, da dove e come creare poi il dataset.\n' +
            'Farò un approfondimento sulle tematiche di privacy e tos dei siti web e delle app mobile.\n</p>';
        var linkLinkedIn=' <a href="https://www.linkedin.com/in/diegolucacandido">Profilo LinkedIn</a><br>';
        var linkGooglePlus=' <a href="https://plus.google.com/116655076816646389102">Google+</a><br>';

        var dialog = bootbox.dialog({
            title: 'Diego Luca Candido',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + linkedInIcon + linkLinkedIn + googlePlusIcon + linkGooglePlus,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //SIMON LUCA DETTORI
    $('.descSimonLucaDettori').click(function(){
        var bioDesc="<p>Lorem Ipsum</p>";
        var img="<img class='img-circle' src='/img/tux.png'>";
        var descAbstract='<p> Partendo da recenti articoli di attualità porrò in evidenza le problematiche sull\'argomento emerse nel corso degli ultimi mesi sulla stampa nordamericana, suggerendo alcuni semplici accorgimenti "comportamentali" per migliorare il proprio livello di privacy. Nello specifico, oltre ad illustrare i rischi di privacy legati all\'hardware, tratterò l\'argomento del MAC spoofing evidenziando la necessità di prevedere scansioni periodiche antirootkit anche su macchine Linux.\n' +
            'La parte centrale dell\'intervento sarà dedicato agli utenti entry level a cui illustrerò le funzionalità VPN gratuite di default a disposizione nelle ultime versioni del browser Opera suggerendo alcuni semplici add-on (tipo: TrackMeNot, Adblock, MasterPassword+, Priv8, PwdHash, User Agent RG, Webmail AD Bloc) per aumentare il livello di riservatezza durante la navigazione. </p>';
        var linkLinkedIn=' <a href="https://www.linkedin.com/in/simonluca-dettori-30b19024/?ppe=1">Profilo LinkedIn</a><br>';

        var dialog = bootbox.dialog({
            title: 'Simon Luca Dettori',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + linkedInIcon + linkLinkedIn,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //SIMONE ONOFRI
    $('.descSimoneOnofri').click(function(){
        var bioDesc="<p>Cyber Defense Lead per l'Europa Sud per DXC Technology. Ho cominciato a lavorare come Consulente IT nel 2002, focalizzandomi sempre più sugli aspetti di Sicurezza. Collaboro con associazioni e organizzazioni come UNINFO – per la stesura della norma relativa ai profili professionali per la sicurezza delle informazioni; OWASP – come uno degli autori della Testing Guide v4 e ISECOM, come uno degli autori della Hackers Highschool.</p>";
        var img="<img class='img-circle' src='/img/speaker/simone_onofri.png'>";
        var descAbstract='<p> Sia che stiamo sulla nostra macchina Linux personale o su un server, è sempre importante verificare la nostra postura di sicurezza e come siamo esposti sulla rete dove siamo (p.e. all\'università, a lavoro o su un WiFi pubblico). Utilizzando l\'approccio "conosci il tuo nemico", vedremo come è possibile attaccare un sistema Linux e come sfruttare le varie peculiarità del sistema dal punto di vista di un attaccante, attraverso alcuni esempi pratici.\n</p>';
        var linkSito=' <a href="http://onofri.net/">Sito </a><br>';
        var linkSocial=' <a href="https://www.facebook.com/simone9000">Pagina ufficiale</a><br>';
        var linkLinkedIn=' <a href="https://www.linkedin.com/in/simoneonofri/?ppe=1">Profilo LinkedIn</a><br>';

        var dialog = bootbox.dialog({
            title: 'Simone Onofri',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + wwwIcon + linkSito + socialIcon + linkSocial + linkedInIcon + linkLinkedIn,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //CAPTURE THE FLAG
    $('.descCTF').click(function(){
        var bioDesc="<p>Organizzato dal LUG Sapienza, si propone come gioco di hacking dove in squadra o da soli, si cercano vulnerabilità in sistemi e software messi a disposizione dagli organizzatori della competizione al fine di sfruttarle e di collezionare le varie flag (bandiere) nascoste sul sistema bersaglio. </p>";
        var img="<img class='img-circle' src='/img/partners/lugsapienza.png'>";
        var descAbstract='<p><b>Regole</b></p>\n' +
            '<ul>\n' +
            '<li>Si può partecipare da soli o in gruppo</li>\n' +
            '<li>Ogni partecipante deve essere munito di un proprio portatile</li>\n' +
            '<li>Non ci sono requisiti minimi, se non la voglia di partecipare e mettersi alla prova!</li>\n' +
            '</ul><p><b>Programma della giornata: </b></p>' + '<p>ore 9.30: breve introduzione su cosa andranno ad affrontare e alcuni semplici esempi<br>' +
            'ore 10.30: inizia il CTF<br>' +
            'ore 13.00: pausa pranzo<br>' +
            'ore 14.00: si ricomincia<br>' +
            'ore 15.30 fine gioco e soluzione dei vari flag<br>' +
            'ore 16.30: premiazione</p>';
        var linkCTFDownload = '<a href="/img/agenda/Capture%20the%20flag%C2%A0.pdf">Scarica il programma!</a><br>';
        var infoIcon = '<i class="fa fa-info"></i> ';
        var linkSito=' <a href="">Sito </a><br>';
        var linkSocial=' <a href="">Pagina ufficiale</a><br>';

        var dialog = bootbox.dialog({
            title: 'Capture The Flag',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + descAbstract + infoIcon + linkCTFDownload +  wwwIcon + linkSito + socialIcon + linkSocial,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //SERENA SENSINI
    $('.descScuolePrivacy').click(function(){
        var bioDesc="<p>Intraprendente, determinata e razionale: sono tre aggettivi che mi descrivono al meglio.\n" +
            "Da sempre convinta della mia scelta, ho conseguito la laurea in Ingegneria Informatica nel 2016 e sono attualmente \n" +
            "impiegata come developer e sistemista. Nel tempo libero, dedico spazio a diversi progetti: primo fra tutti\n" +
            "c'è lo studio e lo sviluppo di sistemi NLP; oltre a questo, buona parte del mio impegno va a supportare i più giovani \n" +
            "ad un uso consapevole della tecnologia e di Internet.</p>";
        var img="<img class='img-circle' src='/img/speaker/serena_sensini.jpg'>";
        var descAbstract='<p>La tecnologia avanza ad una velocità elevatissima, e con essa tutto il mondo legato ad Internet: basti pensare\n' +
            'agli efforts impiegati dalle multinazionali per rendere disponibile ogni tipo di servizio online. In questa era, dove i \n' +
            'social networks giocano un ruolo fondamentale per la connessione tra persone, è necessario imparare a tutelarsi e stare\n' +
            'attenti agli effetti collaterali: Internet è stata infatti paragonata ad un buco nero, dove tutto ciò che viene assorbito,\n' +
            'non viene mai più recuperato.\n' +
            '\n' +
            'Il progresso di Internet e l\'importanza dei social networks portano però con sé delle domande: \n' +
            'in un mondo dove la rete è una grande raccolta di dati e informazioni, come garantire la privacy individuale? \n' +
            'Ma, soprattutto, siamo in grado di difenderci?\n</p>';
        var linkSocial=' <a href="https://www.facebook.com/Serena.Sensini">Pagina ufficiale</a><br>';
        var linkLinkedIn=' <a href="https://www.linkedin.com/in/serena-sensini/">Profilo LinkedIn</a><br>';
        var linkGooglePlus=' <a href="https://plus.google.com/u/0/103050391889340133739">Google+</a><br>';

        var dialog = bootbox.dialog({
            title: 'Serena Sensini',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + socialIcon + linkSocial + linkedInIcon + linkLinkedIn + googlePlusIcon + linkGooglePlus,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //CIRO SANTILLO
    $('.descScuoleIntroLinux').click(function(){
        var bioDesc="<p>Studente appassionato del pinguino che nel 2015 fonda, insieme ai suoi colleghi, il LUG a Roma Tre, per portare avanti il supporto\n" +
            "e il sostegno al mondo Open. Dal 2015 lavora in Airgloss (Monitoraggio qualità dell'aria e termostatazione intelligente) e, nel\n" +
            "tempo libero, si occupa inoltre di erogare Corsi Linux all'interno della facoltà di Ingegneria a Roma Tre. \n" +
            "Adora suonare e fa parte di una band.</p>";
        var img="<img class='img-circle' src='/img/speaker/ciro_santillo.jpg'>";
        var descAbstract='<p>In questo slot di tempo, cercheremo di partire dalle origini di Linux, fino ad arrivare ai giorni nostri; pro, contro\n' +
            'e un\'introduzione pratica al mondo Open source, per rendere più consapevoli di quanto il mondo Linux sia nei posti più\n' +
            'inaspettati.</p>';
        var linkLinkedIn=' <a href="https://www.linkedin.com/in/ciro-santillo-2025a6ba/">Profilo LinkedIn</a><br>';

        var dialog = bootbox.dialog({
            title: 'Ciro Santillo',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + linkedInIcon + linkLinkedIn,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //ALBERTO MASSIDDA
    $('.descAlbertoMassidda').click(function(){
        var bioDesc="<p>Alberto Massidda, classe ‘83, Linuxettaro dal 2005. Si occupa di infrastrutture e sviluppo software orientato alla scalabilità e adora l’IA. Ha lavorato a Memopal (backup online), Translated (IA applicata alle traduzioni), Wimdu (rivale europeo di AirBnB) e a Number26 (prima banca cloud d’Europa). Dal 2016 lavora a Wanderio (prima biglietteria universale per viaggi).\n</p>";
        var img="<img class='img-circle' src='/img/speaker/alberto_massidda.jpg'>";
        var descAbstract='<p>In questo intervento esploreremo l’adozione della tecnologia di container dai punti di vista sviluppo software e sistemistico, in armonia con i principi DevOps.\n' +
            'Partiremo con un’introduzione base su Docker e col setup locale; proseguiremo con la migrazione di un’applicazione da bare metal a Docker, introdurremo il concetto di stack con Docker Compose, ci sposteremo sui sistemi di orchestrazione come Swarm e Kubernetes, per finire con le piattaforme di gestione come AWS Elastic Beanstalk e Rancher.\n</p>';
        var linkLinkedIn=' <a href="https://www.linkedin.com/in/albertomassidda/detail/photo/">Profilo LinkedIn</a><br>';

        var dialog = bootbox.dialog({
            title: 'Alberto Massidda',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + linkedInIcon + linkLinkedIn,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //CAMELIA BOBAN
    $('.descCameliaBoban').click(function(){
        var bioDesc="<p>Analista programmatrice interessata di gender gap e semantic web. Wikip(m)ediana, convinta che l'open source apre gli orizzonti non solo il codice. Fondatrice di WikiDonne.         </p>";
        var img="<img class='img-circle' src='/img/speaker/camelia_boban.jpg'>";
        var descAbstract='<p>Biografie di Persone Viventi. Enciclopedicità e verificabilità rispettando privacy e dati personali. Yes, we can!\n</p>';
        var linkLinkedIn=' <a href="https://www.linkedin.com/in/camelia-boban-31319122/">Profilo LinkedIn</a><br>';

        var dialog = bootbox.dialog({
            title: 'Camelia Boban',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + linkedInIcon + linkLinkedIn,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //GIANLUCA GRANERO
    $('.descGianlucaGranero').click(function(){
        var bioDesc="<p>Grown with a German mother and an entrepreneur father becoming a computer science engineer was the more artistic career I could ever start.\n" +
            "Had my first commodor at the age of 6 (1982!) and there first lines of code in basic and never stopped.  When linux came out in the 90s it was love at first sight, it made me feel I had all I needed to develop ANY idea. I cofounded a Linux User Group at Roma3 University with a bounch of smart and crazy fellow students.\n" +
            "I am involved in internet based activities since 1999. I developed many sites and communities from scratch up to more then 100M page views per month, deploying linux in all possible flavours.\n" +
            "I co-founded Memopal (http://www.memopal.com) in 2007 and lead its tech operation and financials.\n" +
            "In August 2016 Memopal has been acquired by Defenx PLC a listed company focused on security. The whole team merged into it, transforming Memopal's HeadQuarter into the tech hub for Defenx PLC group. Now that wanted me to become CTO of the whole group.\n" +
            " On my way I also supported some promising startups, sometimes as advisor, sometimes as board member, to some of those companies, such as Filo, WeFix, Wanderio, Filo, wineOwine, Voverc, Moovenda...\n</p>";
        var img="<img class='img-circle' src='/img/speaker/gianluca_granero.jpg'>";
        var descAbstract='<p>Breve excursus, non esaustivo, guidato da piccoli indizi realmente successi nella mia vita di tutti i giorni, come trovarmi geolocalizzato a 40km di distanza da casa mia tutte le sere. Un piccolo aiuto per capire le principali tracce digitali che lasciamo nella nostra vita quotidiana.  Per imparare a distinguere tra la persona, il consumatore visto dalla prospettiva di una corporation e la vittima di un truffatore, o di una azienda che lavora troppo vicino all\'illegalità. \n' +
            'Capirle un po\' meglio per sapere da quali è necessario proteggerci e su quali possiamo fare un compromesso con maggiore serenità.\n</p>';
        var linkSito=' <a href="http://www.memopal.com">Sito </a><br>';
        var linkLinkedIn=' <a href="https://www.linkedin.com/in/gianlucagranero/">Profilo LinkedIn</a><br>';

        var dialog = bootbox.dialog({
            title: 'Gianluca Granero',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + wwwIcon + linkSito + socialIcon + linkLinkedIn,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //MARIO CARTIA
    $('.descMarioCartia').click(function(){
        var bioDesc="<p>I was born in Siracusa 39 years ago. I studied Computer Science at University of Catania and achieved a diploma of specialization in \"Computer security and digital forensic\" at the University of Teramo. Over 15 years of experience as a trainer and consultant in Italian and multinational IT companies. In the last five years I have dedicated myself to training and consultancy in the field of Big Data and Artificial Intelligence.</p>";
        var img="<img class='img-circle' src='/img/speaker/mario_cartia.jpg'>";
        var descAbstract='<p>Durante il talk saranno introdotti in maniera semplice questi argomenti, naturalmente con un minimo di approfondimento/esempi di casi d\'uso reali, quindi parlando delle librerie/framework più utilizzati e di applicazioni odierne.\n</p>';
        var linkLinkedIn=' <a href="https://www.linkedin.com/in/mariocartia/">Profilo LinkedIn</a><br>';

        var dialog = bootbox.dialog({
            title: 'Mario Cartia',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + linkedInIcon + linkLinkedIn,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //DANIELE SCASCIAFRATTE
    $('.descDanieleScasciafratte').click(function(){
        var bioDesc="<p>Daniele Scasciafratte, the Open Source Multiversal guy, he should work in his web agency, Codeat in Rome, and in the rest of the day collaborate in many open source projects.\n" +
            "During the office hours for the WordPress world is a Core Contributor, plugin developer, project translator editor.\n" +
            "He fight with the superpower of a Mozilla Rep and Mozilla TechSpeakers for an open web, is co-leading the participation team of Mozilla Italia and often is an Italian gestures speaker.\n</p>";
        var img="<img class='img-circle' src='/img/speaker/daniele_scasciafratte.jpg'>";
        var descAbstract='<p>Firefox 57 cosa ci aspetta\n' +
            'Firefox 57 arriverà a Novembre e rivoluzionerà Firefox dopo Firefox 29. Cosa ci aspetta come utenti e sviluppatori di internet?\n' +
            '30 minuti\n' +
            '\n' +
            '\n' +
            'Come sta messo Internet: Internet Health Report\n' +
            'IHR è un progetto di Mozilla per poter discutere, misurare ed analizzare i problemi e le minacce alla rete che rientra nel manifesto Mozilla riguardo l\'uso e l\'accesso ad internet.\n' +
            '30 minuti\n</p>';
        var linkLinkedIn=' <a href="https://www.linkedin.com/in/danielescasciafratte/">Profilo LinkedIn</a><br>';

        var dialog = bootbox.dialog({
            title: 'Daniele Scasciafratte',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + linkedInIcon + linkLinkedIn,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //SARA DI BARTOLOMEO
    $('.descSaraDiBartolomeo').click(function(){
        var bioDesc="<p>Hello! I am Sara.\n" +
            "I am a Software Engineering student by day, and a painter by night. I try to mix art and algorithms in an attempt to get this two parts of me together.\n" +
            "\n" +
            "My interests range from Data Science, 3D Computer Graphics, Data Visualization, Machine Learning, Natural Language Processing and Algorithms to Digital Painting, Traditional Painting and Generative Art.\n" +
            "\n" +
            "I like sharing my knowledge, and finding all sorts of ways to get people interested. For this purpose, I teach coding courses to children, organize workshops, and keep up a strong passion in open source software.\n" +
            "\n" +
            "I also like parrots.</p>";
        var img="<img class='img-circle' src='/img/tux.png'>";
        var descAbstract='<p>La meravigliosa computer grafica a cui veniamo esposti tutti i giorni non è solo merito dei grafici: c\'è un sacco di matematica e programmazione che passano tra la creazione di un modello 3D e la sua rappresentazione, ma la diamo per scontata perché ci viene nascosta dalle game engine e dai motori di rendering.\n' +
            ' \n' +
            'GLSL è un linguaggio di programmazione per dare istruzioni alla scheda grafica su come rappresentare una scena in 3D, sia su pc sia su smartphone. Conoscere GLSL ci permette di creare gli effetti che vogliamo, e apre nuove strade per l\'ottimizzazione.\n' +
            '\n' +
            'Durante il workshop, esploreremo le profondità del processo di rendering, capiremo cos\'è uno shader e impareremo a farne per migliorare le nostre scene in 3D.\n</p>';
        var linkLinkedIn=' <a href="https://www.linkedin.com/in/sara-di-bartolomeo-84b45661/">Profilo LinkedIn</a><br>';

        var dialog = bootbox.dialog({
            title: 'Sara Di Bartolomeo',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + linkedInIcon + linkLinkedIn,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //ROBERTO REALE
    $('.descRobertoReale').click(function(){
        var bioDesc="<p>Lorem Ipsum</p>";
        var img="<img class='img-circle' src='/img/tux.png'>";
        var descAbstract='<p>Kalipto: si tratta di un framework per lo scambio di messaggi tramite steganografia ed api pubbliche (nella fattispecie quelle di Twitter, ma il meccanismo è facilmente generalizzabile), inteso come proof of concept delle potenzialità che canali di comunicazione "non standard" offrono in tal senso, e nello stesso tempo dei rischi che essi pongono.\n</p>';
        var linkSito=' <a href="https://github.com/robertoreale/kalipto ">Sito </a><br>';

        var dialog = bootbox.dialog({
            title: 'Roberto Reale',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + wwwIcon + linkSito,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //LUCA VIDONI
    $('.descLucaVidoni').click(function(){
        var bioDesc="<p>Developer - Gnu/Linux Certified System Administrator LSI 104 - Forensic Analyst </p>";
        var img="<img class='img-circle' src='/img/tux.png'>";
        var descAbstract='<p>Hacklab networking strumenti di difesa ambito offensive security' +
            '<br><br>Intro: Marco Pantò' +
            '<br>Talk: Luca Vidoni\n' +
            '<br>Livello intermedio avanzato</p>';
        var linkSito=' <a href="http://www.linuxshell.it/">Sito </a><br>';

        var dialog = bootbox.dialog({
            title: 'Luca Vidoni',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + wwwIcon + linkSito,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

    //MARCO PANTÒ
    $('.descMarcoPanto').click(function(){
        var bioDesc="<p>Presidente e Coordinatore Linuxshell - Net Security Engineer</p>";
        var img="<img class='img-circle' src='/img/tux.png'>";
        var descAbstract='<p>Hacklab capire l\'attacco per organizzare la difesa\n' +
            'ambito offensive security\n' +
            '<br><br>Intro e Talk: Marco Pantò\n' +
            '<br>Livello intermedio avanzato\n</p>';
        var linkSito=' <a href="http://www.linuxshell.it/">Sito </a><br>';

        var dialog = bootbox.dialog({
            title: 'Marco Pantò',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + wwwIcon + linkSito,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
        });
    });

	//TEMPLATE
	$('.className').click(function(){
        var bioDesc="<p></p>";
        var img="<img class='img-circle' src='/img/tux.png'>";
        var descAbstract='<p>Lorem ipsum</p>';
        var linkSito=' <a href="">Sito </a><br>';	
        var linkSocial=' <a href="">Pagina ufficiale</a><br>';	
        var linkLinkedIn=' <a href="">Profilo LinkedIn</a><br>';
        var linkGooglePlus=' <a href="">Google+</a><br>';
            
        var dialog = bootbox.dialog({
            onEscape: true,
            title: 'CoderDojo Bracciano',
             size: "large",onEscape: true, backdrop: true,
            message: img + labelBio + bioDesc + labelAbstract + descAbstract + wwwIcon + linkSito + socialIcon + linkSocial + linkedInIcon + linkLinkedIn + googlePlusIcon + linkGooglePlus,
            buttons: {
                ok: {
                    label: labelButton,
                    className: classButton
                }
            }
            });
    });
});
