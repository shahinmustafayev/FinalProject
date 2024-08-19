-- CREATE TABLE users (
--     user_id serial PRIMARY KEY, 
--     username VARCHAR(100) NOT NULL UNIQUE, 
--     password VARCHAR(255) NOT NULL,
--    	active bool,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- select * from users;

-- CREATE TABLE blog (
--     blog_id serial PRIMARY KEY, 
--    	title varchar(250),
-- 	description text,
-- 	author varchar(100),
-- 	date date,
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE category (
--     id serial PRIMARY KEY, 
--    	name varchar(150),
-- 	description text,
-- 	status bool,
-- 	image varchar(250),
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- CREATE TABLE product (
--     id serial PRIMARY KEY, 
--    	name varchar(250),
-- 	description text,
-- 	image varchar(250),
-- 	model varchar(250),
-- 	price float not null,
-- 	old_price float not null,
-- 	expiryDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
-- 	qty TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
-- 	categoryId integer,
-- 	FOREIGN KEY (categoryId) REFERENCES Category(ID),
--     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
--     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
-- );

-- select * from product

CREATE TABLE plants (
    id serial PRIMARY KEY, 
   	title varchar(250),
	category_name varchar(150),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);