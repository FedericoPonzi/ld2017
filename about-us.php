<?php include_once "config.php" ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="<?= METADESCRIPTION ?>">
    <meta name="author" content="">
    <link rel="icon" href="favicon.ico">

    <title>About us | Linux Day 2017</title>

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
</head>

<body>
  <nav class="navbar-custom navbar navbar-inverse navbar-toggleable-md">
      <div class="container">
        <button class="navbar-toggler navbar-toggler-center" type="button" data-toggle="collapse" data-target="#navbarsExampleContainer" aria-controls="navbarsExampleContainer" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="index.php">Linux Day 2017</a>

        <div class="collapse navbar-collapse" id="navbarsExampleContainer">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <a class="nav-link nav-link-home" href="index.php"> <i class="fa fa-home" aria-hidden="true"></i> Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="agenda.php"> <i class="fa fa-calendar" aria-hidden="true"></i> Agenda</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sponsors.php"> <i class="fa fa-star" aria-hidden="true"></i>
Sponsors</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="about-us.php"> <i class="fa fa-info-circle" aria-hidden="true"></i>
About us</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="contatti.php"> <i class="fa fa-envelope-o" aria-hidden="true"></i>
Contatti</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container main">
        <div class="row">
            <div class="col-md-8 col-sm-8 col-xs-8">
              <h3 class="title">Su di noi</h3>
              <p class="lead">"Un <i>Linux User Group</i> (LUG), o anche "<i>Linux Users Group</i>" e "<i>Linux Users Group</i>", è un gruppo formato da persone che osservano i principi del software libero ed impegnate nel diffondere i sistemi operativi basati sul kernel Linux. Questo è ciò che trovate su Wikipedia quando cercate la parola LUG.</p>
              <h5 class="title">Ma cos'è effettivamente un LUG?</h5>
              <p>Il LUG nasce come aggregazione di ragazzi i quali condividono la stessa passione per il pinguino e la voglia di trasmettere al mondo le potenzialità di questo sistema operativo, e noi non siamo da meno.</p>
              <p>Il <strong>LUG di Roma Tre</strong> è sempre stato, negli anni passati, conosciuto al livello italiano per la bravura nell'utilizzo ottimizzato di Linux e per la passione che mettevano nello spiegare e nell'insegnare la filosofia Linux agli altri. Elementi del vecchio LUG hanno peraltro tenuto conferenze al livello nazionale riguardo sviluppo e debug degli aggiornamenti, e noi puntiamo a non essere meno.</p>
              <p>Nel nostro LUG noi sviluppiamo tutto ciò che serve al nostro SO preferito, forniamo supporto e assistenza a chi è nuovo nel mondo di Linux e cerchiamo, attraverso supporto e corsi di far comprendere alle persone le potenzialità pressochè infinite di questo SO.</p>
              <p>Vi terremo informati su futuri eventi che faremo, e per i veri appassionati ricordatevi che qualsiasi informazione aggiuntiva, domanda o chiarimento basta contattarci sulla nostra pagina Facebook: <a href="https://www.facebook.com/LUGRoma3">LUG Roma Tre</a>!</p>
            </div><!-- / Fine main -->

            <?php include_once "partners.php" ?>
      </div>
    </div><!-- /.container -->

    <div class="container main">
        <h3>Dove siamo:</h3>
        <p>Via casa mia</p>
        <h4>Indicazioni</h4>
        <p>Dal raccordo: </p>
    </div>
    <?php include_once "footer.php" ?>
  </body>
</html>
