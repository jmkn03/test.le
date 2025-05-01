CREATE TABLE IF NOT EXISTS Content (
    id SERIAL PRIMARY KEY ,
    title varchar(255) NOT NULL,
    desc text,
    url VARCHAR(255),
    content_type VARCHAR(50) NOT NULL,
    status VARCHAR(20) NOT NULL,
    date_created TIMESTAMP NOT NULL,
    date_updated TIMESTAMP
);

-- INSERT INTO Content(title,desc,content_type,status,date_created)
-- VALUES ('Insert Titile Here','Insert Description Here','VIDEO','IDEA',CURRENT_TIMESTAMP());
