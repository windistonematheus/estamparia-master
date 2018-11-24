<?php

use Slim\Http\Request;
use Slim\Http\Response;

// Routes

$app->options('/{routes:.+}', function ($request, $response, $args){
    return $response;
});

// $app->get('/[{name}]', function (Request $request, Response $response, array $args) {
//     // Sample log message
//     $this->logger->info("Slim-Skeleton '/' route");

//     // Render index view
//     return $this->renderer->render($response, 'index.phtml', $args);
// });

$app->get('/categorias', function ($request, $response, $args) {
    $sth = $this->db->prepare("SELECT * FROM categoria");
   $sth->execute();
   $categoria = $sth->fetchAll();
   return $this->response->withJson($categoria);
});

$app->get('/servicos', function ($request, $response, $args) {
    $sth = $this->db->prepare("SELECT * FROM servico");
   $sth->execute();
   $servico = $sth->fetchAll();
   return $this->response->withJson($servico);
});

$app->get('/camisetas', function ($request, $response, $args) {
    $sth = $this->db->prepare("SELECT * FROM produto INNER JOIN categoria ON (categoria.id = produto.id_categoria) WHERE categoria.nome = 't-shirt' ");
   $sth->execute();
   $produto = $sth->fetchAll();
   return $this->response->withJson($produto);
});