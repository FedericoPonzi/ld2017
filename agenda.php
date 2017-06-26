<?php include_once "config.php" ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="<?= METADESCRIPTION ?>">
    <meta name="author" content="">
    <link rel="icon" href="favicon.ico">

    <title>Agenda | Linux Day 2017</title>

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
          <?php require_once "menu.php"; ?>
        </div>
      </div>
    </nav>

    <div class="container main">
      <div class="jumbotron">
        <div class="row">
            <div class="col-md-8 col-sm-8 col-xs-8">
              <h2 class="title">Agenda</h2>
              <p>Stiamo ancora definendo il programma della giornata. Hai un'idea per un talk? <a href="contatti.php">Parliamone</a>!</p>
              <h3>Programma:</h3>
              <table class="table">
                <thead>
                  <tr>
                    <th>Orario</th>
                    <th>Aula</th>
                    <th>Titolo</th>
                    <th>Speaker</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>09:30</td>
                    <td>TBD</td>
                    <td>TBD</td>
                    <td>TBD</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td>TBD</td>
                    <td>TBD</td>
                    <td>TBD</td>
                  </tr>
                  <tr>
                    <td>10:00</td>
                    <td>TBD</td>
                    <td>TBD</td>
                    <td>TBD</td>
                  </tr>
                  <tr>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                    <td>...</td>
                  </tr>
                </tbody>
              </table>
            </div><!-- / Fine main -->
          <?php include_once "partners.php" ?>
        </div>
      </div>
    </div><!-- /.container -->
    <?php include_once "footer.php" ?>
  </body>
</html>
