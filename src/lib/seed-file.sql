-- Drop the existing "users" table if it exists for a fresh import
DROP TABLE IF EXISTS users;

-- Create the "users" table with the correct structure
-- The "id" column will be populated from the CSV file
CREATE TABLE users
(
    id         INTEGER PRIMARY KEY, -- Inserted directly from the CSV
    first_name VARCHAR(255)        NOT NULL,
    last_name  VARCHAR(255)        NOT NULL,
    email      VARCHAR(255) UNIQUE NOT NULL
);

-- Set a variable for the CSV file path for easier configuration
\set csv_file_path '/absolute/path/to/MOCK_DATA.csv'

-- Import data from the CSV file, including all columns
COPY users (id, first_name, last_name, email)
    FROM :'csv_file_path' -- Use the variable for the file path
    DELIMITER ',' -- Specify comma as the field delimiter
    CSV HEADER -- Indicate that the first row contains column headers
    ENCODING 'UTF8' -- Specify the file encoding
    QUOTE '"' -- Specify the quote character for text fields
    ESCAPE ''''; -- Specify the escape character