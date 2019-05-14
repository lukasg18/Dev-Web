INSERT INTO public.jogo (nome, anolancamento, urlimagem, descricao, classificacao, produtora, multiplayer)
        VALUES ('Anthem', '2019-02-22 00:00:00', 'https://upload.wikimedia.org/wikipedia/pt/4/49/Cover_Art_of_Anthem.jpg', 'Anthem é um jogo de ação e aventura de ficção científica desenvolvido pela Bioware e publicado pela EA. Sobre um mundo inacabado, a humanidade luta para sobreviver em um ambiente selvagem, cheio de diversas ameaças. Neste futuro distópico, os jogadores são Freelancers - um grupo de heróis dedicados a fornecer segurança para o Fort Tarsis. Seu trabalho é explorar o desconhecido e inclinar a balança em favor da humanidade. Utilizando os incríveis exóticos Javelin, os jogadores vão se unir e percorrer o mundo, descobrindo mistérios ocultos e perigos imprevistos.', '16 Anos', 'BioWare', 'true');
INSERT INTO public.jogo (nome, anolancamento, urlimagem, descricao, classificacao, produtora, multiplayer)
        VALUES ('Destiny', '2014-09-09', 'https://upload.wikimedia.org/wikipedia/pt/thumb/b/be/Destiny_box_art.png/265px-Destiny_box_art.png', 'Destiny é um jogo de tiro em primeira pessoa desenvolvido pela Bungie e publicado pela Activision para os consoles Playstation 3, Playstation 4, Xbox 360 e Xbox One. Ele foi lançado em 9 de setembro de 2014, para todos os lugares do mundo com exceção do Japão, onde foi lançado em 11 de setembro de 2014, apenas para Playstation.', '16 Anos', 'Bungie', 'true');
INSERT INTO public.jogo (nome, anolancamento, urlimagem, descricao, classificacao, produtora, multiplayer)
        VALUES ('Mega Man 11', '2018-10-02', 'https://s3.amazonaws.com/comparegame/thumbnails/44056/large.jpg', 'Mega Man 11 apresenta a jogabilidade habitual dos clássicos jogos Mega Man, com uma nova funcionalidade. Novo na série é o sistema de engrenagem dupla. O sistema permite que o Mega Man possua duas novas habilidades, sendo elas o "Speed ​​Gear" para retardar o tempo, e o "Power Gear" para o Mega Man carregar uma foto carregada mais potente, disparar dois tiros carregados juntos e até mesmo poder. suas armas especiais como visto anteriormente no anúncio e pré-encomenda reboques.', 'Livre', 'Capcom', 'false');
INSERT INTO public.jogo (nome, anolancamento, urlimagem, descricao, classificacao, produtora, multiplayer)
        VALUES ('Forza Motorsport 6', '2015-09-15', 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/ae/Forza_6_box_art.jpg/230px-Forza_6_box_art.jpg', 'Forza Motorsport 6 apresenta novos elementos de jogabilidade, como chuva e corridas a noite. Também em destaque, é um novo modo história chamada "Histórias de Motorsport", que oferece cerca de 70 horas de jogo. Forza Motorsport 6 foi lançado com mais de 460 carros, mais do dobro do número de carros no Forza Motorsport 5 , e com 26 lugares.', 'Livre', 'Turn 10', 'true');
INSERT INTO public.genero (nome)
        VALUES ('Corrida');
INSERT INTO public.genero (nome)
        VALUES ('Tiro em primeira pessoa');
INSERT INTO public.genero (nome)
        VALUES ('RPG');
INSERT INTO public.genero (nome)
        VALUES ('Aventura');
INSERT INTO public.plataforma (nome)
        VALUES ('Playstation 3');
INSERT INTO public.plataforma (nome)
        VALUES ('Playstation 4');
INSERT INTO public.plataforma (nome)
        VALUES ('Xbox One');
INSERT INTO public.plataforma (nome)
        VALUES ('Xbox 360');
INSERT INTO public.jogo_genero (idgenero, idjogo)
        VALUES (3, 1);
INSERT INTO public.jogo_genero (idgenero, idjogo)
        VALUES (2, 2);
INSERT INTO public.jogo_genero (idgenero, idjogo)
        VALUES (3, 2);
INSERT INTO public.jogo_genero (idgenero, idjogo)
        VALUES (4, 2);
INSERT INTO public.jogo_genero (idgenero, idjogo)
        VALUES (4, 3);
INSERT INTO public.jogo_genero (idgenero, idjogo)
        VALUES (3, 3);
INSERT INTO public.jogo_genero (idgenero, idjogo)
        VALUES (4, 4);
INSERT INTO public.jogo_genero (idgenero, idjogo)
        VALUES (1, 4);
INSERT INTO public.jogo_plataforma (idplataforma, idjogo)
        VALUES (2, 1);
INSERT INTO public.jogo_plataforma (idplataforma, idjogo)
        VALUES (3, 1);
INSERT INTO public.jogo_plataforma (idplataforma, idjogo)
        VALUES (1, 2);
INSERT INTO public.jogo_plataforma (idplataforma, idjogo)
        VALUES (2, 2);
INSERT INTO public.jogo_plataforma (idplataforma, idjogo)
        VALUES (3, 2);
INSERT INTO public.jogo_plataforma (idplataforma, idjogo)
        VALUES (4, 2);
INSERT INTO public.jogo_plataforma (idplataforma, idjogo)
        VALUES (2, 3);
INSERT INTO public.jogo_plataforma (idplataforma, idjogo)
        VALUES (3, 3);
INSERT INTO public.jogo_plataforma (idplataforma, idjogo)
        VALUES (3, 4);
INSERT INTO public.pessoa_jogo (idpessoa, idjogo, preco, vitrine)
        VALUES (3, 2, 3.0, 'true'), (3, 3, 10.0, 'true'), (3, 4, 4.0, 'true'), (4, 1, 9.0, 'true'), (4, 2, 15.0, 'true'), (4, 3, 6.0, 'true'), (5, 1, 7.0, 'true'), (6, 1, 3.0, 'true'), (6, 2, 12.0, 'true'), (6, 3, 5.0, 'true')
