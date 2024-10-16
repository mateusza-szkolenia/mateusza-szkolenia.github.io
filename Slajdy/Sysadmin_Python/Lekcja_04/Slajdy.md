Python dla sysadminów

# Lekcja 3

Mateusz Adamowski

------
# Klasy

---
## SQLite

```python
import sqlite3

# Connect to SQLite database (or create it if it doesn't exist)
connection = sqlite3.connect('sample.db')

# Create a cursor object to interact with the database
cursor = connection.cursor()

# Create a table
cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY,
        name TEXT NOT NULL,
        age INTEGER,
        email TEXT
    )
''')

# Insert data into the table
cursor.execute('''
    INSERT INTO users (name, age, email)
    VALUES ('John Doe', 25, 'johndoe@example.com')
''')
cursor.execute('''
    INSERT INTO users (name, age, email)
    VALUES ('Jane Smith', 30, 'janesmith@example.com')
''')

# Commit the changes to the database
connection.commit()

# Query the data
cursor.execute('SELECT * FROM users')
rows = cursor.fetchall()

# Display the data
print("Users:")
for row in rows:
    print(row)

# Close the connection when done
connection.close()
```

---
# Jinja

```python
jinja_env = jinja2.Environment(loader=jinja2.FileSystemLoader(TEMPLATES_DIR))

template = jinja_env.get_template(template_name)

# lub:
template = jinja2.Template()


```
