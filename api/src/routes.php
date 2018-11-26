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

$app->get('/cadastros', function ($request, $response, $args) {
    $sth = $this->db->prepare("SELECT * FROM cadastro");
   $sth->execute();
   $categoria = $sth->fetchAll();
   return $this->response->withJson($categoria);
});

$app->post('/cadastro', function ($request, $response) {
    $input = $request->getParsedBody();
    $sql = "INSERT INTO cadastro (nome, email, cpf, senha, cep, logradouro, numero, complemento, bairro, cidade, telefone) VALUES (:nome, :email, :cpf, :senha, :cep, :logradouro, :numero, :complemento, :bairro, :cidade, :telefone)";
     $sth = $this->db->prepare($sql);
     $sth->bindParam("nome", $input['nome']);
     $sth->bindParam("email", $input['email']);
     $sth->bindParam("cpf", $input['cpf']);
     $sth->bindParam("senha", $input['senha']);
     $sth->bindParam("cep", $input['cep']); 
     $sth->bindParam("logradouro", $input['logradouro']); 
     $sth->bindParam("numero", $input['numero']); 
     $sth->bindParam("complemento", $input['complemento']); 
     $sth->bindParam("bairro", $input['bairro']); 
     $sth->bindParam("cidade", $input['cidade']); 
     $sth->bindParam("telefone", $input['telefone']);    
    $sth->execute();
    $input['id'] = $this->db->lastInsertId();
    return $this->response->withJson($input);
});

$app->delete('/cadastro/[{id}]', function ($request, $response, $args) {
    $sth = $this->db->prepare("DELETE FROM cadastro WHERE id=:id");
   $sth->bindParam("id", $args['id']);
   $sth->execute();
   $cadastros = $sth->fetchAll();
   return $this->response->withJson($cadastros);
});

$app->put('/cadastro/[{id}]', function ($request, $response, $args) {
    $input = $request->getParsedBody();
    $sql = "UPDATE cadastro SET nome=:nome, email=:email, cpf=:cpf, cep=:cep, logradouro=:logradouro, numero=:numero, complemento=:complemento, bairro=:bairro, cidade=:cidade, telefone=:telefone WHERE id=:id";
     $sth = $this->db->prepare($sql);
    $sth->bindParam("id", $args['id']);
    $sth->bindParam("nome", $input['nome']);
    $sth->bindParam("email", $input['email']);
    $sth->bindParam("cpf", $input['cpf']);
    $sth->bindParam("cep", $input['cep']);
    $sth->bindParam("logradouro", $input['logradouro']);
    $sth->bindParam("numero", $input['numero']);
    $sth->bindParam("complemento", $input['complemento']);
    $sth->bindParam("bairro", $input['bairro']);
    $sth->bindParam("cidade", $input['cidade']);
    $sth->bindParam("telefone", $input['telefone']);
    $sth->execute();
    $input['id'] = $args['id'];
    return $this->response->withJson($input);
});