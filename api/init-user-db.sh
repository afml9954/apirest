#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
    CREATE USER cheese_user;
    CREATE DATABASE cheese;
    GRANT ALL PRIVILEGES ON DATABASE cheese TO cheese_user;
EOSQL