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
    <style>
      table tr td{
        cursor: pointer;
      }
      </style>

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

          <h3 style="text-align:center; margin-top:25px;"><i class="fa fa-bookmark"></i> Ore 9.30 - aula N10: saluto di benvenuto</h3>

          <div class="table-bordered table-hover w3-striped w3-bordered">
              <table class="table table-responsive w3-striped">
                  <thead>
                  <tr>
                      <th>#</th>
                      <th>Aula N3</th>
                      <th>Aula N6</th>
                      <th>Aula N4</th>
                      <th>Aula N8</th>
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
                      <td class="descScuolePrivacy">
                          Keep it secret: la privacy non è un'opzione
                      </td>
                      <td class="descCTF">
                          Capture The Flag
                      </td>
                      <td class="descAlbertoMassidda">
                          Docker e Kubernetes
                      </td>
                      <td class="descLucaRelandini">
                          Architetture distribuite, microservices e sicurezza delle comunicazioni: policy based networking per i container
                      </td>
                      <td class="descGianlucaGranero">
                          Basta usare Linux per essere "protetti"?
                      </td>
                      <td class="descCoderDojo">
                          CoderDojo Bracciano
                      </td>
                  </tr>
                  <tr>
                      <td>11.00-11.45</td>
                      <td class="descLinuxInstitute">
                          Esami LPI
                      </td>
                      <td class="descScuoleIntroLinux">
                          From zero to hero: introduzione a Linux
                      </td>
                      <td class="descCTF">
                          Capture The Flag
                      </td>
                      <td class="descAlbertoMassidda">
                          Docker e Kubernetes
                      </td>
                      <td class="descCameliaBoban">
                          Wikipedia e BPV
                      </td>
                      <td class="descMarcoSacchetti">
                          Il progetto USBCheckIn
                      </td>
                      <td class="descCoderDojo">
                          CoderDojo Bracciano
                      </td>
                  </tr>
                  <tr>
                      <td>12.00-12.45</td>
                      <td class="descLinuxInstitute">
                          Esami LPI
                      </td>
                      <td class="descScuoleIntroLinux">
                          From zero to hero: introduzione a Linux
                      </td>
                      <td class="descCTF">
                          Capture The Flag
                      </td>
                      <td class="descDiegoLucaCandido">
                          Dataset: informazioni, privacy e creazione
                      </td>
                      <td class="descPieroSavastano">
                          Machine Learning e dati personali
                      </td>
                      <td class="descSimonLucaDettori">
                          Privacy & Linux: come migliorare il livello di privacy attraverso il MAC spoofing e Opera
                      </td>
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
                      <td class="descScuolePrivacy">
                          Keep it secret: la privacy non è un'opzione
                      </td>
                      <td class="descCTF">
                          Capture The Flag
                      </td>
                      <td class="descSaraDiBartolomeo">
                          Let there be light: introduction to GLSL
                      </td>
                      <td class="descMarcoPanto">
                          Brute Force attacks - hacklab
                      </td>
                      <td class="descSimoneOnofri">
                          Penetration Testing di Linux
                      </td>
                      <td class="descUrbanTerror">
                            Torneo di Urban Terror
                      </td>
                  </tr>
                  <tr>
                      <td>15.00-15.45</td>
                      <td class="descLinuxInstitute">
                          Esami LPI
                      </td>
                      <td class="descScuoleIntroLinux">
                          From zero to hero: introduzione a Linux
                      </td>
                      <td class="descCTF">
                          Capture The Flag
                      </td>
                      <td class="descBrunoLaurencich">
                          Capturing the human body motion with inertial sensors, the Open Source way
                      </td>
                      <td class="descLucaVidoni">
                          Honeypots - hacklab
                      </td>
                      <td class="descSimoneOnofri">
                          Penetration Testing di Linux
                      </td>
                      <td class="descUrbanTerror">
                          Torneo di Urban Terror
                      </td>
                  </tr>
                  <tr>
                      <td>16.00-16.45</td>
                      <td class="descLinuxInstitute">
                          Esami LPI
                      </td>
                      <td class="descScuoleIntroLinux">
                          From zero to hero: introduzione a Linux
                      </td>
                      <td class="descCTF">
                          Capture The Flag
                      </td>

                      <td class="descEugenioPetulla">
                          Introduction to Rust: a modern programming language
                      </td>
                      <td class="descAlessandroSelli">
                          Darknet: non tutto il buio deve far paura
                      </td>
                      <td class="descDanieleScasciafratte">
                          Firefox 57 cosa ci aspetta + Come sta messo Internet: Internet Health Report
                      </td>
                      <td class="descUrbanTerror">
                          Torneo di Urban Terror
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
