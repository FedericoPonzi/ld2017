<?php

class MenuItem{
  var $name;
  var $url;
  var $icon;
  function __construct($n, $u, $i)
  {
      $this->name = $n;
      $this->url = $u;
      $this->icon = $i;
  }
}

$menu_items = array(new MenuItem("Home", "index.php", "home"),
                   new MenuItem("C4P", "c4p.php", "envelope-open"),

                    new MenuItem("Agenda", "agenda.php", "calendar"),
                   new MenuItem("Biglietti", "https://www.eventbrite.it/e/biglietti-corso-base-linux-38426264993", "ticket"),
                   new MenuItem("Sponsors", "sponsors.php", "star"),
                   new MenuItem("About us", "about-us.php", "info-circle"),
                   new MenuItem("Contatti", "contatti.php", "envelope-o"),
                   )
?>
<ul class="navbar-nav ml-auto">
    <?php
     $filename = basename($_SERVER['PHP_SELF']);

      foreach ($menu_items as $item){
      echo '<li class="nav-item'. ($filename == $item->url ? " active" : "") . '">
            <a class="nav-link '. ($filename == "index.php" &&  $item->url == "index.php" ? "nav-link-home" : "") . '" href="' .  $item->url .'"> <i class="fa fa-' . $item->icon .'" aria-hidden="true"></i> '. $item->name
            . ($filename == $item->url ? " <span class=\"sr-only\">(current)</span>" : "") .'</a>
              </li>';
      }
    ?>
</ul>
