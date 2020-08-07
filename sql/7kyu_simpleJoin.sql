-- https://www.codewars.com/kata/5802e32dd8c944e562000020/

SELECT p.*, c.name as `company_name` FROM products as p
INNER JOIN companies as c ON p.company_id = c.id;