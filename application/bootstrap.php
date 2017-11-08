<?php
  /* Файл конфигурации */
  require_once __ROOT__.'conf/index.php';

  class FrontController {
    static private $_instance;
    protected $index = FC_SPLITS_INDEX;

    private function __construct() {}
    private function __clone() {}

    static function getInstance() {
      if ( empty(self::$_instance) ) {
        self::$_instance = new self();
      }
      return self::$_instance;
    }

    function router() {
      $controllerName = 'main';
      $actionName = 'index';      
      /* Обработка HTTP-запроса */
      $request = $_SERVER['REQUEST_URI'];
      $splits = explode('/', trim($request, '/'));
      /* Получаем имя контроллера */
      if ( !empty($splits[$this->index]) ) {
        $controllerName = mb_strtolower($splits[$this->index]);
      }
      /* Получаем имя экшена */
      if ( !empty($splits[$this->index + 1]) ) {
        $actionName = mb_strtolower($splits[$this->index + 1]);
      }
      /* Имя файла, в котором описан контроллер */
      $controllerFile = $controllerName.'.php';
      /* Путь к файлу, в котором описан контроллер */
      $controllerPath = __CONTROLLERS__.$controllerFile;
      if ( file_exists($controllerPath) ) {
        require_once $controllerPath;
      } else {
        header('HTTP/1.1 404 Not Found');
        header('Status: 404 Not Found');
        require_once __ERROR_PAGE__;
      }
    }
  }