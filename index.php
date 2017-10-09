<?php include_once "config.php" ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="<?= METADESCRIPTION ?>">
    <meta name="author" content="">
    <link rel="icon" href="favicon.ico">

    <title>Home | Linux Day 2017</title>

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
        <a class="navbar-brand" href="index.php">Linux Day 2017 <img src="img/logo-ld17.png" width="64"></a>

        <div class="collapse navbar-collapse" id="navbarsExampleContainer">
            <?php require_once "menu.php"; ?>
        </div>
    </div>
</nav>

    <div class="container main">
      <div class="jumbotron">
        <div class="row">
            <div class="col-md-8 col-sm-8 col-xs-8">
              <h2 class="title">Linux day 2017</h2>
              <p class="lead">Diciassettesima manifestazione italiana dedicata a Linux e al software libero</p>

              <p>Sabato 28 ottobre torna la principale manifestazione italiana dedicata a Linux, al software libero, alla cultura aperta ed alla condivisione: decine di eventi in tutta Italia, centinaia di volontari coinvolti e migliaia di visitatori per celebrare insieme la libertà digitale.
                Location romana per l'evento di quest'anno sarà l'Università degli Studi Roma Tre, presso il Dipartimento di Ingegneria</a>. </p>
                <p>Quest'anno il tema affrontato durante il Linux Day sarà la <strong>privacy e la riservatezza individuale</strong>: cos'è la privacy e quanto possiamo parlare di privacy nell'ambito tecnologico?
                <p>Esiste ancora il concetto primitivo di privacy? Tutti abbiamo qualcosa da nascondere, ma forse non è più possibile...</p>
                <p class="lead">Per partecipare, ricordati di prendere il biglietto gratuito a questo <a href="https://www.eventbrite.it/e/biglietti-linux-day-2017-roma-38033504235">link</a> e di portare con te un documento per il check-in! </p>
                <p>Per il programma, controlla l'agenda!</p>


          </div>
          <?php include_once "partners.php" ?>
        </div>
      </div>
    </div><!-- /.container -->
    <?php include_once "footer.php" ?>
  </body>
</html>
