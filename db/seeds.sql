INSERT INTO department (name)
VALUES
  ('Marketing'),
  ('Sales'),
  ('Engineering'),
  ('Finance'),
  ('Operations');


INSERT INTO role (title, salary, department_id)
VALUES
  ('Marketing Analyst', 50000, 1),
  ('Marketing Manager', 80000, 1),
  ('Sales Analyst', 50000, 2),
  ('Sales Manager', 80000, 2),
  ('Engineering Analyst', 50000, 3),
  ('Engineering Manager', 80000, 3),
  ('Finance Analyst', 50000, 4),
  ('Finanace Manager', 80000, 4),
  ('The Boss', 10000000, 5);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
  ('Zack', 'Miller', 9, NULL),
  ('Glory', 'Speidel', 2, 1),
  ('Blaine', 'Laroche', 4, 1),
  ('Zora', 'Mcculloch', 6, 1),
  ('Jeff', 'Guel', 8, 1),
  ('Lewis', 'Majors', 1, 2),
  ('Toby', 'Wimberley', 1, 2),
  ('Robbin', 'Throneberry', 1, 2),
  ('Ima', 'Hultgren', 3, 3),
  ('Marian', 'Dreher', 3, 3),
  ('Lisette', 'Bowler', 3, 3),
  ('Vanna', 'Caulkins', 5, 4),
  ('Mindy', 'Pretty', 5, 4),
  ('Andreas', 'Crowder', 5, 4),
  ('Cindy', 'Lundberg', 7, 5),
  ('Angelo', 'Valois', 7, 5),
  ('Titus', 'Pardini', 7, 5);