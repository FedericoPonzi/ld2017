<?php include_once "config.php" ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="<?= METADESCRIPTION ?>">
    <meta name="author" content="">
    <link rel="icon" href="favicon.ico">

    <title>Magliette | Linux Day 2017</title>

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
                <h2 class="title">Magliette del Linux Day 2017</h2>
                <p class="lead">Ti piace il Linux Day? Sostienici facendo una donazione o acquistando una delle nostre magliette!</p>
                <div class="row">
                  <div class="col-md-6">
                    <div class="card" style="">
                      <img class="card-img-top" src="img/merchandising/TheresNoPlaceLikeHome.jpg" alt="Diventa sponsor" style="width:20em;">
                    </div>
                  </div>
                    <div class="col-md-6">
                        <div class="card" style="">
                            <img class="card-img-top" src="/img/merchandising/MayTheSourceBeWithYou.jpg" style="width:20em;">
                        </div>
                    </div>
                </div>
                  <br>
                  <div class="row">
                      <div class="col-md-12">
                        <form target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
                          <input type="hidden" name="cmd" value="_s-xclick">
                          <input type="hidden" name="hosted_button_id" value="YJAQNTNTTHGWG">
                          <table>
                          <tr>
                            <td>
                            <input type="hidden" name="on0" value="Nome del menu a discesa">Nome del menu a discesa</td></tr><tr><td><select name="os0">
                          <option value="May The Source Be With You - Taglia M">May The Source Be With You - Taglia M €10,00 EUR</option>
                          <option value="May The Source Be With You - Taglia L">May The Source Be With You - Taglia L €10,00 EUR</option>
                          <option value="May The Source Be With You - Taglia XL">May The Source Be With You - Taglia XL €10,00 EUR</option>
                          <option value="There's No Place Like /home- Taglia M">There's No Place Like /home- Taglia M €10,00 EUR</option>
                          <option value="There's No Place Like /home- Taglia L">There's No Place Like /home- Taglia L €10,00 EUR</option>
                          <option value="There's No Place Like /home- Taglia XL">There's No Place Like /home- Taglia XL €10,00 EUR</option>
                          </select> </td></tr>
                          </table>
                          <input type="hidden" name="currency_code" value="EUR">
                          <input type="image" src="https://www.paypalobjects.com/it_IT/IT/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal è il metodo rapido e sicuro per pagare e farsi pagare online.">
                          <img alt="" border="0" src="https://www.paypalobjects.com/it_IT/i/scr/pixel.gif" width="1" height="1">
                        </form>

                      </div>

                  </div>
                <p class="footer">Nota: Tutti i soldi ricevuti verranno usati per aiutare l'associazione a crescere, e per far crescere i propri sostenitori. Grazie a questi fondi, potremo migliorarci e continuare ad offrire corsi annuali gratuiti di Linux, supporto e assistenza durante tutto l'anno, nonché organizzare eventi come il Linux Day!</p>
            </div>
            <?php include_once "partners.php" ?>

        </div>
      </div>
    </div><!-- /.container -->
    <?php include_once "footer.php" ?>
  </body>
</html>
