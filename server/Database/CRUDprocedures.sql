-- Create a new user
CREATE OR REPLACE FUNCTION CreateNewUser(
    IN first_name VARCHAR(50),
    IN last_name VARCHAR(50),
    IN email VARCHAR(100)
)
RETURNS INT AS $$
DECLARE
    new_user_id INT;
BEGIN
    INSERT INTO users (first_name, last_name, email, created_at)
    VALUES (first_name, last_name, email, NOW())
    RETURNING id INTO new_user_id;
    RETURN new_user_id;
END;
$$ LANGUAGE plpgsql;

-- Retrieve user information by ID
CREATE OR REPLACE FUNCTION GetUserByID(
    IN user_id INT
)
RETURNS TABLE (id INT, first_name VARCHAR(50), last_name VARCHAR(50), email VARCHAR(100), created_at TIMESTAMP) AS $$
BEGIN
    RETURN QUERY
    SELECT id, first_name, last_name, email, created_at
    FROM users
    WHERE id = user_id;
END;
$$ LANGUAGE plpgsql;

-- Update user information
CREATE OR REPLACE FUNCTION UpdateUser(
    IN user_id INT,
    IN new_first_name VARCHAR(50),
    IN new_last_name VARCHAR(50),
    IN new_email VARCHAR(100)
)
RETURNS VOID AS $$
BEGIN
    UPDATE users
    SET first_name = new_first_name, last_name = new_last_name, email = new_email
    WHERE id = user_id;
END;
$$ LANGUAGE plpgsql;

-- Delete a user by ID
CREATE OR REPLACE FUNCTION DeleteUserByID(
    IN user_id INT
)
RETURNS VOID AS $$
BEGIN
    DELETE FROM users
    WHERE id = user_id;
END;
$$ LANGUAGE plpgsql;

-- Create a new product
CREATE OR REPLACE FUNCTION CreateNewProduct(
    IN product_name VARCHAR(100),
    IN price DECIMAL(10, 2)
)
RETURNS INT AS $$
DECLARE
    new_product_id INT;
BEGIN
    INSERT INTO products (name, price, created_at)
    VALUES (product_name, price, NOW())
    RETURNING id INTO new_product_id;
    RETURN new_product_id;
END;
$$ LANGUAGE plpgsql;

-- Retrieve product information by ID
CREATE OR REPLACE FUNCTION GetProductByID(
    IN product_id INT
)
RETURNS TABLE (id INT, name VARCHAR(100), price DECIMAL(10, 2), created_at TIMESTAMP) AS $$
BEGIN
    RETURN QUERY
    SELECT id, name, price, created_at
    FROM products
    WHERE id = product_id;
END;
$$ LANGUAGE plpgsql;

-- Update product information
CREATE OR REPLACE FUNCTION UpdateProduct(
    IN product_id INT,
    IN new_name VARCHAR(100),
    IN new_price DECIMAL(10, 2)
)
RETURNS VOID AS $$
BEGIN
    UPDATE products
    SET name = new_name, price = new_price
    WHERE id = product_id;
END;
$$ LANGUAGE plpgsql;

-- Delete a product by ID
CREATE OR REPLACE FUNCTION DeleteProductByID(
    IN product_id INT
)
RETURNS VOID AS $$
BEGIN
    DELETE FROM products
    WHERE id = product_id;
END;
$$ LANGUAGE plpgsql;

-- Create a new order
CREATE OR REPLACE FUNCTION CreateNewOrder(
    IN user_id INT,
    IN product_id INT,
    IN quantity INT
)
RETURNS INT AS $$
DECLARE
    new_order_id INT;
BEGIN
    INSERT INTO orders (user_id, product_id, quantity, created_at)
    VALUES (user_id, product_id, quantity, NOW())
    RETURNING id INTO new_order_id;
    RETURN new_order_id;
END;
$$ LANGUAGE plpgsql;

-- Retrieve order information by ID
CREATE OR REPLACE FUNCTION GetOrderByID(
    IN order_id INT
)
RETURNS TABLE (id INT, user_id INT, product_id INT, quantity INT, created_at TIMESTAMP) AS $$
BEGIN
    RETURN QUERY
    SELECT id, user_id, product_id, quantity, created_at
    FROM orders
    WHERE id = order_id;
END;
$$ LANGUAGE plpgsql;

-- Update order information
CREATE OR REPLACE FUNCTION UpdateOrder(
    IN order_id INT,
    IN new_quantity INT
)
RETURNS VOID AS $$
BEGIN
    UPDATE orders
    SET quantity = new_quantity
    WHERE id = order_id;
END;
$$ LANGUAGE plpgsql;

-- Delete an order by ID
CREATE OR REPLACE FUNCTION DeleteOrderByID(
    IN order_id INT
)
RETURNS VOID AS $$
BEGIN
    DELETE FROM orders
    WHERE id = order_id;
END;
$$ LANGUAGE plpgsql;
