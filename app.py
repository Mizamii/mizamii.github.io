from flask import Flask, render_template, request, jsonify, g
import sqlite3
import os

app = Flask(__name__)

# Configuração do banco de dados
DATABASE = 'scores.db'

def get_db():
    db = getattr(g, '_database', None)
    if db is None:
        db = g._database = sqlite3.connect(DATABASE)
    return db

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        db.close()

def init_db():
    with app.app_context():
        db = get_db()
        cursor = db.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS scores (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                score INTEGER NOT NULL,
                time_taken INTEGER NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        db.commit()

# Inicializar o banco de dados
if not os.path.exists(DATABASE):
    init_db()

@app.route('/')
def index():
    return render_template('index.html')

# Use esta linha se o arquivo se chama PODIO.HTML
@app.route('/podium')
def podium():
    return render_template('podio.html')

# Ou use esta linha se renomeou para PODIUM.HTML
# @app.route('/podium')
# def podium():
#     return render_template('podium.html')

@app.route('/api/scores', methods=['GET', 'POST'])
def handle_scores():
    if request.method == 'GET':
        db = get_db()
        cursor = db.cursor()
        cursor.execute('SELECT name, email, score, time_taken FROM scores ORDER BY score DESC, time_taken ASC LIMIT 10')
        scores = cursor.fetchall()
        return jsonify([{'name': s[0], 'email': s[1], 'score': s[2], 'time_taken': s[3]} for s in scores])
    
    elif request.method == 'POST':
        data = request.json
        name = data.get('name')
        email = data.get('email')
        score = data.get('score')
        time_taken = data.get('time_taken')
        
        db = get_db()
        cursor = db.cursor()
        cursor.execute('INSERT INTO scores (name, email, score, time_taken) VALUES (?, ?, ?, ?)', 
                      (name, email, score, time_taken))
        db.commit()
        
        return jsonify({'success': True})

if __name__ == '__main__':
    app.run(debug=True)
