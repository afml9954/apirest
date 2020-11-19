
CREATE USER 'javier' WITH PASSWORD 'oscar';
CREATE DATABASE cheese
    WITH 
    OWNER = javier
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
GRANT ALL PRIVILEGES ON DATABASE cheese to javier;