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
    size: "large",
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
	var descAbstract='<p>Lorem ipsum</p>';
	var linkSito=' <a href="https://zen.coderdojo.com/dojos/it/bracciano-metropolitan-city-of-rome/bracciano">Sito CoderDojo</a><br>';	
	var linkSocial=' <a href="https://www.facebook.com/coderdojo.bracciano/">Pagina ufficiale</a><br>';	
	var eventbriteLink='  <a href="#">Biglietti</a><br>';	
		
	var dialog = bootbox.dialog({
	title: 'CoderDojo Bracciano',
    size: "large",
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
            size: "large",
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
            size: "large",
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
            size: "large",
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
        var bioDesc="<p></p>";
        var img="<img class='img-circle' src='/img/tux.png'>";
        var descAbstract='<p> Partendo da recenti articoli di attualità porrò in evidenza le problematiche sull\'argomento emerse nel corso degli ultimi mesi sulla stampa nordamericana, suggerendo alcuni semplici accorgimenti "comportamentali" per migliorare il proprio livello di privacy. Nello specifico, oltre ad illustrare i rischi di privacy legati all\'hardware, tratterò l\'argomento del MAC spoofing evidenziando la necessità di prevedere scansioni periodiche antirootkit anche su macchine Linux.\n' +
            'La parte centrale dell\'intervento sarà dedicato agli utenti entry level a cui illustrerò le funzionalità VPN gratuite di default a disposizione nelle ultime versioni del browser Opera suggerendo alcuni semplici add-on (tipo: TrackMeNot, Adblock, MasterPassword+, Priv8, PwdHash, User Agent RG, Webmail AD Bloc) per aumentare il livello di riservatezza durante la navigazione. </p>';
        var linkLinkedIn=' <a href="https://www.linkedin.com/in/simonluca-dettori-30b19024/?ppe=1">Profilo LinkedIn</a><br>';

        var dialog = bootbox.dialog({
            title: 'Simon Luca Dettori',
            size: "large",
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
            size: "large",
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
        var bioDesc="<p>Organizzato dal LUG Sapienza, si propone come gioco di hacking dove in squadra o da soli, si cercano vulnerabilità cercano vulnerabilità in sistemi e software messi a disposizione dagli organizzatori della competizione al fine di sfruttarle e di collezionare le varie flag (bandiere) nascoste sul sistema bersaglio. </p>";
        var img="<img class='img-circle' src='/img/tux.png'>";
        var descAbstract='<p><b>Programma della giornata: </b></p>' + '<p>ore 9.30: breve introduzione su cosa andranno ad affrontare e alcuni semplici esempi<br>' +
            'ore 10.30: inizia il CTF<br>' +
            'ore 13.00: pausa pranzo<br>' +
            'ore 14.00: si ricomincia<br>' +
            'ore 15.30 fine gioco e soluzione dei vari flag<br>' +
            'ore 16.30: premiazione</p>';
        var linkSito=' <a href="">Sito </a><br>';
        var linkSocial=' <a href="">Pagina ufficiale</a><br>';

        var dialog = bootbox.dialog({
            title: 'Capture The Flag',
            size: "large",
            message: img + labelBio + bioDesc + descAbstract + wwwIcon + linkSito + socialIcon + linkSocial,
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
	title: 'CoderDojo Bracciano',
    size: "large",
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