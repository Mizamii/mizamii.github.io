# app.py (corrigido)
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
                difficulty TEXT NOT NULL DEFAULT 'easy',
                team TEXT NOT NULL DEFAULT 'cat',
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        
        # Verificar se a coluna 'team' existe, se não, adicionar
        cursor.execute("PRAGMA table_info(scores)")
        columns = [column[1] for column in cursor.fetchall()]
        
        if 'team' not in columns:
            print("Adicionando coluna 'team' à tabela scores...")
            cursor.execute("ALTER TABLE scores ADD COLUMN team TEXT DEFAULT 'cat'")
        
        db.commit()

# Inicializar o banco de dados
if not os.path.exists(DATABASE):
    init_db()

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/podium')
def podium():
    return render_template('podio.html')

@app.route('/api/scores', methods=['GET', 'POST'])
def handle_scores():
    if request.method == 'GET':
        try:
            db = get_db()
            cursor = db.cursor()
            cursor.execute('SELECT name, email, score, time_taken, difficulty, team FROM scores ORDER BY score DESC, time_taken ASC')
            scores = cursor.fetchall()
            print(f"Found {len(scores)} scores in database")  # Debug log
            return jsonify([{
                'name': s[0], 
                'email': s[1], 
                'score': s[2], 
                'time_taken': s[3],
                'difficulty': s[4],
                'team': s[5]
            } for s in scores])
        except Exception as e:
            print(f"Erro ao buscar scores: {e}")
            return jsonify({'error': 'Erro ao carregar pontuações'}), 500
    
    elif request.method == 'POST':
        try:
            data = request.json
            name = data.get('name')
            email = data.get('email')
            score = data.get('score')
            time_taken = data.get('time_taken')
            difficulty = data.get('difficulty', 'easy')
            team = data.get('team', 'cat')
            
            if not name or not email or score is None or time_taken is None:
                return jsonify({'success': False, 'error': 'Dados incompletos'}), 400
            
            db = get_db()
            cursor = db.cursor()
            cursor.execute('INSERT INTO scores (name, email, score, time_taken, difficulty, team) VALUES (?, ?, ?, ?, ?, ?)', 
                          (name, email, score, time_taken, difficulty, team))
            db.commit()
            
            return jsonify({'success': True})
        except Exception as e:
            print(f"Erro ao salvar score: {e}")
            return jsonify({'success': False, 'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
