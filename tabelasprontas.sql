INSERT INTO public.jogo(
            nome, anolancamento, urlimagem)
    VALUES ('Anthem', '2019-02-22 00:00:00', 'https://upload.wikimedia.org/wikipedia/pt/4/49/Cover_Art_of_Anthem.jpg');

INSERT INTO public.jogo(
            nome, anolancamento, urlimagem)
    VALUES ('Destiny', '2014-09-09', 'https://upload.wikimedia.org/wikipedia/pt/thumb/b/be/Destiny_box_art.png/265px-Destiny_box_art.png');

INSERT INTO public.jogo(
            nome, anolancamento, urlimagem)
    VALUES ('Mega Man 11', '2018-10-02', 'https://s3.amazonaws.com/comparegame/thumbnails/44056/large.jpg');

INSERT INTO public.jogo(
            nome, anolancamento, urlimagem)
    VALUES ('Forza Motorsport 6', '2015-09-15', 'https://upload.wikimedia.org/wikipedia/pt/thumb/a/ae/Forza_6_box_art.jpg/230px-Forza_6_box_art.jpg');

INSERT INTO public.genero(
             nome)
    VALUES ('Corrida');

INSERT INTO public.genero(
             nome)
    VALUES ('Tiro em primeira pessoa');

INSERT INTO public.genero(
             nome)
    VALUES ('RPG');

INSERT INTO public.genero(
             nome)
    VALUES ('Aventura');

INSERT INTO public.plataforma(
            nome)
    VALUES ('Playstation 3');

INSERT INTO public.plataforma(
            nome)
    VALUES ('Playstation 4');

INSERT INTO public.plataforma(
            nome)
    VALUES ('Xbox One');

INSERT INTO public.plataforma(
            nome)
    VALUES ('Xbox 360');

INSERT INTO public.jogo_genero(
            idgenero, idjogo)
    VALUES (3, 1);

INSERT INTO public.jogo_genero(
            idgenero, idjogo)
    VALUES (2, 2);

    INSERT INTO public.jogo_genero(
            idgenero, idjogo)
    VALUES (3, 2);

    INSERT INTO public.jogo_genero(
            idgenero, idjogo)
    VALUES (4, 2);

INSERT INTO public.jogo_genero(
            idgenero, idjogo)
    VALUES (4, 3);

    INSERT INTO public.jogo_genero(
            idgenero, idjogo)
    VALUES (3, 3);

INSERT INTO public.jogo_genero(
            idgenero, idjogo)
    VALUES (4, 4);

    INSERT INTO public.jogo_genero(
            idgenero, idjogo)
    VALUES (1, 4);

INSERT INTO public.jogo_plataforma(
            idplataforma, idjogo)
    VALUES (2, 1);

INSERT INTO public.jogo_plataforma(
            idplataforma, idjogo)
    VALUES (3, 1);

INSERT INTO public.jogo_plataforma(
            idplataforma, idjogo)
    VALUES (1, 2);

INSERT INTO public.jogo_plataforma(
            idplataforma, idjogo)
    VALUES (2, 2);

INSERT INTO public.jogo_plataforma(
            idplataforma, idjogo)
    VALUES (3, 2);

INSERT INTO public.jogo_plataforma(
            idplataforma, idjogo)
    VALUES (4, 2);

INSERT INTO public.jogo_plataforma(
            idplataforma, idjogo)
    VALUES (2, 3);

INSERT INTO public.jogo_plataforma(
            idplataforma, idjogo)
    VALUES (3, 3);

INSERT INTO public.jogo_plataforma(
            idplataforma, idjogo)
    VALUES (3, 4);

