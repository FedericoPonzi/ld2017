<?php include_once "config.php" ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="<?= METADESCRIPTION ?>">
    <meta name="author" content="">
    <link rel="icon" href="favicon.ico">


    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="css/agenda.css">


    <title>Agenda | Linux Day 2017</title>

    <link href="css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">

    <script src="/js/jquery.min.js"></script>
    <script src="js/agenda.js" charset="utf-8"></script>
    <script src="js/tether.min.js" charset="utf-8"></script>
    <script src="/js/bootbox.min.js"></script>
    <script src="/js/bootstrap.min.js"></script>
    <script src="/js/bootstrap-table.min.js"></script>
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
          <h2><i class="fa fa-calendar"></i> Agenda</h2>
          <p>Il programma verrà continuamente aggiornato, quindi #stayTUXed!</p>
          <div class="table-responsive table-bordered table-hover w3-striped w3-bordered w3-table">
              <table class="table w3-striped">
                  <thead>
                  <tr>
                      <th>#</th>
                      <th>Aula N3</th>
                      <th>Aula N4</th>
                      <th>Aula N5</th>
                      <th>Aula N7</th>
                      <th>Aula N10</th>
                      <th>Aula N11</th>
                      <th>Laboratorio Campus</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <td>10.00-10.45</td>
                      <td class="descLinuxInstitute">
                          Esami LPI
                      </td>
                      <td></td>
                      <td></td>
                      <td class="descCTF">
                          Capture The Flag
                      </td>
                      <td></td>
                      <td></td>
                      <td class="descCoderDojo">
                          CoderDojo Bracciano
                      </td>
                  </tr>
                  <tr>
                      <td>11.00-11.45</td>
                      <td class="descLinuxInstitute">
                          Esami LPI
                      </td>
                      <td></td>
                      <td></td>
                      <td class="descCTF">
                          Capture The Flag
                      </td>
                      <td></td>
                      <td></td>
                      <td class="descCoderDojo">
                          CoderDojo Bracciano
                      </td>
                  </tr>
                  <tr>
                      <td>12.00-12.45</td>
                      <td class="descLinuxInstitute">
                          Esami LPI
                      </td>
                      <td></td>
                      <td></td>
                      <td class="descCTF">
                          Capture The Flag
                      </td>
                      <td></td>
                      <td></td>
                      <td class="descCoderDojo">
                          CoderDojo Bracciano
                      </td>
                  </tr>
                  <tr>
                      <td>13.00-14.00</td>
                      <td>Pausa pranzo</td>
                      <td>Pausa pranzo</td>
                      <td>Pausa pranzo</td>
                      <td>Pausa pranzo</td>
                      <td>Pausa pranzo</td>
                      <td>Pausa pranzo</td>
                      <td>Pausa pranzo</td>
                  </tr>
                  <tr>
                      <td>14.00-14.45</td>
                      <td class="descLinuxInstitute">
                          Esami LPI
                      </td>
                      <td></td>
                      <td></td>
                      <td class="descCTF">
                          Capture The Flag
                      </td>
                      <td></td>
                      <td></td>
                      <td class="descCoderDojo">
                          CoderDojo Bracciano
                      </td>
                  </tr>
                  <tr>
                      <td>15.00-15.45</td>
                      <td class="descLinuxInstitute">
                          Esami LPI
                      </td>
                      <td></td>
                      <td></td>
                      <td class="descCTF">
                          Capture The Flag
                      </td>
                      <td></td>
                      <td></td>
                      <td class="descCoderDojo">
                          CoderDojo Bracciano
                      </td>
                  </tr>
                  <tr>
                      <td>16.00-16.45</td>
                      <td class="descLinuxInstitute">
                          Esami LPI
                      </td>
                      <td></td>
                      <td></td>
                      <td class="descCTF">
                          Capture The Flag
                      </td>
                      <td></td>
                      <td></td>
                      <td class="descCoderDojo">
                          CoderDojo Bracciano
                      </td>
                  </tr>
                  </tbody>
              </table>
          </div>
      </div>
      </div>
    </div><!-- /.container -->
    <?php include_once "footer.php" ?>
  </body>
</html>
