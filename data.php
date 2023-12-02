<?php

// USERINFO
$res['userinfo']['id']        = '10042001';
$res['userinfo']['name']      = 'Fernando Costa';
$res['userinfo']['username']  = 'nando';
$res['userinfo']['posts']     = 293;
$res['userinfo']['verified']  = true;
$res['userinfo']['cover']     = 'assets/images/profile/cover.jpg';
$res['userinfo']['picture']   = 'assets/images/profile/picture.jpg';
$res['userinfo']['resume']    = 'Meu nome é Fernando Costa e mais conhecido como Nando, sou desenvolvedor Full-stack. Atualmente, estou trabalhando na área de TI como engenheiro de software. <img alt="😆" draggable="false" src="assets/images/emoji/1f606.svg" class="emoji"></div>';
$res['userinfo']['work']      = 'Software Developer/Programmer/Software Engineer';
$res['userinfo']['location']  = 'Maceió, Brasil';
$res['userinfo']['website']   = 'https://nandocosta.com.br';
$res['userinfo']['calendar']  = 'Ingressou em março de 2012';
$res['userinfo']['following'] = '222';
$res['userinfo']['followers'] = '12,5 mi';

// POSTS
$res['posts'][0]['date']     = '02 dez de 2023';
$res['posts'][0]['resume']   = '<p>Algumas curiosidades sobre mim... Já fui programador e designer do <a href="https://xatproject.com" target="_blank">xatproject.com</a> onde auxilei no desenvolvimento de alguns blogs na época como <a href="https://ajuda.xatproject.com" target="_blank">ajuda.xatproject.com</a>, desenvolvi a logotipo do <a href="https://xatproject.com" target="_blank">xatproject.com</a> e também do <a href="https://xatradio.com" target="_blank">xatradio.com</a> que é utilizada até hoje que inicialmente o primeiro projeto seria na cor rosa, depois foi alterada para o azul.</p>';
$res['posts'][0]['hashtags'] = ['xatproject', 'ajuda', 'xat', 'designer', 'programador'];
$res['posts'][0]['image']    = 'assets/images/posts/print.jpg';

$res['posts'][1]['date']     = '01 dez de 2023';
$res['posts'][1]['resume']   = '<p>Em 2018 eu desenvolvi uma primeira versão do xatspace twitter, devido o grande sucesso lancei uma segunda versão e hoje estou quase finalizando a terceira versão baseada no novo perfil do twitter.</p>';
$res['posts'][1]['hashtags'] = ['xatspace', 'nando', 'xat', 'lançamento'];

$res['posts'][2]['date']     = '20 nov de 2023';
$res['posts'][2]['resume']   = '<p>Dei uma pausa em minhas atividades no <a href="https://xat.com" target="_blank">xat.com</a> devido a alta demanda e também estava um pouco demotivado com a plataforma, mas hoje acredito que o xat tenha tudo para um grande desempenho.</p>';

$res['posts'][3]['date']     = '19 nov de 2023';
$res['posts'][3]['resume']   = '<p>Algumas curiosidades sobre mim... Já fui programador e designer do <a href="https://xatproject.com" target="_blank">xatproject.com</a> onde auxilei no desenvolvimento de alguns blogs na época como <a href="https://ajuda.xatproject.com" target="_blank">ajuda.xatproject.com</a>, desenvolvi a logotipo do <a href="https://xatproject.com" target="_blank">xatproject.com</a> e também do <a href="https://xatradio.com" target="_blank">xatradio.com</a> que é utilizada até hoje que inicialmente o primeiro projeto seria na cor rosa, depois foi alterada para o azul.</p>';
$res['posts'][3]['hashtags'] = ['xatproject', 'ajuda', 'xat', 'designer', 'programador'];

// FRIENDS
$res['friends'][0]['name']     = 'Fernando Costa';
$res['friends'][0]['username'] = 'nando';
$res['friends'][0]['verified'] = true;
$res['friends'][0]['picture']  = 'assets/images/profile/picture.jpg';

$res['friends'][1]['name']     = 'Fernando Costa';
$res['friends'][1]['username'] = 'nando';
$res['friends'][1]['verified'] = true;
$res['friends'][1]['picture']  = 'assets/images/profile/picture.jpg';

$res['friends'][2]['name']     = 'Fernando Costa';
$res['friends'][2]['username'] = 'nando';
$res['friends'][2]['verified'] = true;
$res['friends'][2]['picture']  = 'assets/images/profile/picture.jpg';

// CHATS
$res['chats'][0]['name']     = 'Ajuda';
$res['chats'][0]['desc']     = 'Obtenha ajuda com xat';
$res['chats'][0]['verified'] = true;

$res['chats'][1]['name']     = 'Loja';
$res['chats'][1]['desc']     = 'Global IDs Marketplace';
$res['chats'][1]['verified'] = true;

$res['chats'][2]['name']     = 'Stifler';
$res['chats'][2]['desc']     = 'Revendedor de xats';
$res['chats'][2]['verified'] = true;

$res['chats'][3]['name']     = 'TheStore';
$res['chats'][3]['desc']     = 'TheStore - Sua compra segura';
$res['chats'][3]['verified'] = true;

$json = json_encode($res, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
file_put_contents('data.json', $json);