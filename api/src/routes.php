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

$app->post('/categoria', function ($request, $response) {
    $input = $request->getParsedBody();
    $sql = "INSERT INTO categoria (nome) VALUES (:nome)";
     $sth = $this->db->prepare($sql);
    $sth->bindParam("nome", $input['nome']);
    $sth->execute();
    $input['id'] = $this->db->lastInsertId();
    return $this->response->withJson($input);
});

$app->delete('/categoria/[{id}]', function ($request, $response, $args) {
    $sth = $this->db->prepare("DELETE FROM categoria WHERE id =:id");
   $sth->bindParam("id", $args['id']);
   $sth->execute();
   $categorias = $sth->fetchAll();
   return $this->response->withJson($categorias);
});

$app->put('/categoria/[{id}]', function ($request, $response, $args) {
    $input = $request->getParsedBody();
    $sql = "UPDATE categoria SET nome=:nome WHERE id=:id";
     $sth = $this->db->prepare($sql);
    $sth->bindParam("id", $args['id']);
    $sth->bindParam("nome", $input['nome']);
    $sth->execute();
    $input['id'] = $args['id'];
    return $this->response->withJson($input);
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

$app->get('/contatos', function ($request, $response, $args) {
    $sth = $this->db->prepare("SELECT * FROM contato");
   $sth->execute();
   $contato = $sth->fetchAll();
   return $this->response->withJson($contato);
});

$app->post('/contato', function ($request, $response) {
    $input = $request->getParsedBody();
    $sql = "INSERT INTO contato (nome, email, telefone, assunto, mensagem) VALUES (:nome, :email, :telefone, :assunto, :mensagem)";
     $sth = $this->db->prepare($sql);
    $sth->bindParam("nome", $input['nome']);
    $sth->bindParam("email", $input['email']);
    $sth->bindParam("telefone", $input['telefone']);
    $sth->bindParam("assunto", $input['assunto']);
    $sth->bindParam("mensagem", $input['mensagem']);    
    $sth->execute();
    $input['id'] = $this->db->lastInsertId();
    return $this->response->withJson($input);
});

$app->delete('/contato/[{id}]', function ($request, $response, $args) {
    $sth = $this->db->prepare("DELETE FROM contato WHERE id=:id");
   $sth->bindParam("id", $args['id']);
   $sth->execute();
   $contatos = $sth->fetchAll();
   return $this->response->withJson($contatos);
});

$app->put('/contato/[{id}]', function ($request, $response, $args) {
    $input = $request->getParsedBody();
    $sql = "UPDATE contato SET nome=:nome, email=:email, telefone=:telefone, assunto=:assunto, mensagem=:mensagem WHERE id=:id";
     $sth = $this->db->prepare($sql);
    $sth->bindParam("id", $args['id']);
    $sth->bindParam("nome", $input['nome']);
    $sth->bindParam("email", $input['email']);
    $sth->bindParam("telefone", $input['telefone']);
    $sth->bindParam("assunto", $input['assunto']);
    $sth->bindParam("mensagem", $input['mensagem']);
    $sth->execute();
    $input['id'] = $args['id'];
    return $this->response->withJson($input);
});