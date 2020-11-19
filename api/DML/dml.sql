INSERT INTO public.milkmans (id, "user", password, full_name, photo, "created_at", "updated_at")
VALUES (1, 'jacinto', 'password123', 'Jacinto Palacio', 'https://cheeseapi.herokuapp.com/images/image3.jpg',
        '2020-07-09 13:15:00.167113',
        '2020-07-09 13:15:00.167113'),
       (2, 'ana', 'password123', 'Ana Bermudez', 'https://cheeseapi.herokuapp.com/images/image2.jpg',
        '2020-07-09 13:15:00.167113',
        '2020-07-09 13:15:00.167113'),
       (3, 'oscar', 'password123', 'Oscar Gomez', 'https://cheeseapi.herokuapp.com/images/image1.jpg',
        '2020-07-09 13:15:00.167113',
        '2020-07-09 13:15:00.167113');

INSERT INTO public.supplies (id, name, quantity, created_at, updated_at, unit_id)
VALUES (2, null, null, '2020-11-17 11:10:54.784000', '2020-11-17 11:10:56.404000', 1);

INSERT INTO public.units (id, name, symbol, categorization, "createdAt", "updatedAt")
VALUES (1, 'fsdff', 'gf', 'fsdf', '2020-11-17 11:11:20.169000', '2020-11-17 11:11:23.493000');
