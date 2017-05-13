CREATE DATABASE burgers_db;

use burgers_db;

CREATE TABLE burgers
(
	id int not null auto_increment,
    burger_name varchar(50),
    devoured boolean,
    date timestamp,
    primary key(id)
)