<?php include_once "config.php" ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="<?= METADESCRIPTION ?>">
    <meta name="author" content="">
    <link rel="icon" href="favicon.ico">

    <title>Sponsors | Linux Day 2017</title>

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
        <a class="navbar-brand" href="index.php">Linux Day 2017 <img src="img/logo-linux.svg" width="64"></a>

        <div class="collapse navbar-collapse" id="navbarsExampleContainer">
            <?php require_once "menu.php"; ?>
        </div>
      </div>
    </nav>

    <div class="container main">
      <div class="jumbotron">
          <div class="row">
              <div class="col-md-8 col-sm-8 col-xs-8">

                <p class="lead">Senza i nostri gentili sponsors il Linux Day non potrebbe essere quello che è. Grazie mille!</p>
                <p>Sponsorizzare il Linux Day vuol dire essere un'azienda che tiene a cuore l' <i>Open Source</i> e la <i>comunità</i> che gli sta attorno. <a href="contatti.php" title="Contattaci">Contattaci</a> per sapere come diventare sponsor.</p>

                <h3 class="title">Gold sponsors</h3>
                <div class="row">
                  <div class="col-md-6">
                    <div class="card" style="">
                      <img class="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Linuxday06.png/220px-Linuxday06.png" alt="Diventa sponsor" style="width:20em;">
                      <div class="card-block">
                        <h4 class="card-title">La tua azienda qui</h4>
                        <p class="card-text">Ti piacerebbe sponsorizzare il Linux Day?</p>
                        <a href="#" class="btn btn-primary btn-lg float-right">Contattaci</a>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 class="title">Silver sponsors</h3>
                <div class="row">
                  <div class="col-md-6">
                    <div class="card" style="">
                      <img class="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Linuxday06.png/220px-Linuxday06.png" alt="Diventa sponsor" style="width:20em;">
                      <div class="card-block">
                        <h4 class="card-title">La tua azienda qui</h4>
                        <p class="card-text">Ti piacerebbe sponsorizzare il Linux Day?</p>
                        <a href="#" class="btn btn-primary btn-lg float-right">Contattaci</a>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 class="title">Exhibitor sponsors</h3>
                <div class="row">
                  <div class="col-md-6">
                    <div class="card" style="">
                      <img class="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Linuxday06.png/220px-Linuxday06.png" alt="Diventa sponsor" style="width:20em;">
                      <div class="card-block">
                        <h4 class="card-title">La tua azienda qui</h4>
                        <p class="card-text">Ti piacerebbe sponsorizzare il Linux Day?</p>
                        <a href="#" class="btn btn-primary btn-lg float-right">Contattaci</a>
                      </div>
                    </div>
                  </div>
                </div>

              </div><!-- / Fine main -->
            <?php include_once "partners.php" ?>
        </div>
      </div>
    </div><!-- /.container -->
    <?php include_once "footer.php" ?>
  </body>
</html>
