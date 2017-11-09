<?php
  require_once __ROOT__.'core/controller.php';

  class MainPage implements PageStrategy {
    function getPage() {
      if ( isset( $_GET ) ) {
        require_once 'draft/index.html'; // Сюда веб-приложение
      }
    }
  }