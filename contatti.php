<?php include_once "config.php" ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="<?= METADESCRIPTION ?>">
    <meta name="author" content="">
    <link rel="icon" href="favicon.ico">

    <title>Contatti | Linux Day 2017</title>

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
                <a class="nav-link nav-link-home" href="index.php"> <i class="fa fa-home" aria-hidden="true"></i> Home </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="https://www.eventbrite.it/e/biglietti-linux-day-2017-roma-35650874726"> <i class="fa fa-ticket" aria-hidden="true"></i> Biglietti </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="agenda.php"> <i class="fa fa-calendar" aria-hidden="true"></i> Agenda </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="sponsors.php"> <i class="fa fa-star" aria-hidden="true"></i> Sponsors </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="about-us.php"> <i class="fa fa-info-circle" aria-hidden="true"></i> About us</a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="contatti.php"> <i class="fa fa-envelope-o" aria-hidden="true"></i> Contatti <span class="sr-only">(current)</span></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="container main">
      <div class="jumbotron">
        <div class="row">
              <div class="col-md-8 col-sm-8 col-xs-8">
                <h2 class="title">Contatti</h2>
                <p class="lead">I tempi di risposta solitamente sono brevi.</p>
                <form action="#" method="post" id="contactform" novalidate="novalidate">
                  <div id="status"></div>
                  <div class="form-group row">
                     <label for="name" class="col-2 col-form-label">Il tuo nome</label>
                    <div class="col-10">
                      <input class="form-control" type="text" id="name" name="name" placeholder="Il tuo nome">
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="email" class="col-2 col-form-label">La tua email</label>
                    <div class="col-10">
                      <input class="form-control" type="email" id="email" name="email" placeholder="Inserisci la tua email">
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="message">Il tuo messaggio</label>
                    <textarea class="form-control" name="message" id="message" rows="9" placeholder="Inserisci il tuo messaggio.."></textarea>
                  </div>
                  <button id="#submit" type="submit" class="btn btn-primary btn-lg float-right"><i class="fa fa-paper-plane-o" aria-hidden="true"></i> Invia</button>

                </form>
            </div>
            <?php include_once "partners.php" ?>
        </div>
      </div>
    </div><!-- /.container -->
    <?php include_once "footer.php" ?>
  </body>
</html>
