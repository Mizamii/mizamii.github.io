from flask import Flask, render_template, request, jsonify, g
import sqlite3
import os
import logging
from datetime import datetime

# Configurar logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

app = Flask(__name__)

# Configuração do banco de dados
DATABASE = 'scores.db'

def get_db():
    try:
        db = getattr(g, '_database', None)
        if db is None:
            db = g._database = sqlite3.connect(
                DATABASE,
                timeout=30,
                check_same_thread=False
            )
            db.row_factory = sqlite3.Row
            # Verificar e criar tabela se não existir
            init_db()
        return db
    except sqlite3.Error as e:
        logger.error(f"Erro ao conectar com banco de dados: {e}")
        raise

def init_db():
    try:
        db = sqlite3.connect(DATABASE)
        cursor = db.cursor()
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS scores (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                score INTEGER NOT NULL,
                time_taken INTEGER NOT NULL,
                difficulty TEXT NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        ''')
        db.commit()
        db.close()
        logger.info("Banco de dados inicializado com sucesso")
    except sqlite3.Error as e:
        logger.error(f"Erro ao inicializar banco de dados: {e}")

@app.teardown_appcontext
def close_connection(exception):
    db = getattr(g, '_database', None)
    if db is not None:
        try:
            db.close()
        except sqlite3.Error as e:
            logger.error(f"Erro ao fechar conexão: {e}")

# Garantir que o banco existe ao iniciar a aplicação
with app.app_context():
    try:
        init_db()
    except Exception as e:
        logger.error(f"Erro na inicialização: {e}")

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/podium')
def podium():
    return render_template('podio.html')

@app.route('/api/scores', methods=['GET', 'POST'])
def handle_scores():
    try:
        if request.method == 'GET':
            try:
                db = get_db()
                cursor = db.cursor()
                cursor.execute('''
                    SELECT name, email, score, time_taken, difficulty 
                    FROM scores 
                    ORDER BY score DESC, time_taken ASC 
                    LIMIT 10
                ''')
                scores = cursor.fetchall()
                return jsonify([dict(score) for score in scores])
            except sqlite3.Error as e:
                logger.error(f"Erro no GET: {e}")
                return jsonify({'success': False, 'error': 'Erro ao buscar dados'}), 500
        
        elif request.method == 'POST':
            try:
                data = request.get_json()
                if not data:
                    return jsonify({'success': False, 'error': 'Nenhum dado recebido'}), 400
                
                name = data.get('name', '').strip()
                email = data.get('email', '').strip()
                score = data.get('score')
                time_taken = data.get('time_taken')
                difficulty = data.get('difficulty', '').strip()
                
                # Validação
                if not name:
                    return jsonify({'success': False, 'error': 'Nome é obrigatório'}), 400
                if not email or '@' not in email:
                    return jsonify({'success': False, 'error': 'Email válido é obrigatório'}), 400
                if score is None or not isinstance(score, (int, float)) or score < 0:
                    return jsonify({'success': False, 'error': 'Pontuação inválida'}), 400
                if time_taken is None or not isinstance(time_taken, (int, float)) or time_taken < 0:
                    return jsonify({'success': False, 'error': 'Tempo inválido'}), 400
                if difficulty not in ['easy', 'medium', 'hard']:
                    return jsonify({'success': False, 'error': 'Dificuldade inválida'}), 400
                
                # Inserir no banco
                db = get_db()
                cursor = db.cursor()
                cursor.execute('''
                    INSERT INTO scores (name, email, score, time_taken, difficulty) 
                    VALUES (?, ?, ?, ?, ?)
                ''', (name, email, int(score), int(time_taken), difficulty))
                db.commit()
                
                return jsonify({'success': True})
                
            except sqlite3.Error as e:
                db.rollback()
                logger.error(f"Erro no POST (SQLite): {e}")
                return jsonify({'success': False, 'error': 'Erro no banco de dados'}), 500
                
    except Exception as e:
        logger.error(f"Erro inesperado: {e}")
        return jsonify({'success': False, 'error': 'Erro interno do servidor'}), 500

# Headers CORS
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    return response

if __name__ == '__main__':
    # Garantir que o diretório tem permissões de escrita
    if not os.access('.', os.W_OK):
        print("ERRO: Diretório atual não tem permissão de escrita!")
        print("Execute de um diretório com permissões ou altere as permissões.")
    
    print("Iniciando servidor Flask...")
    print(f"Database path: {os.path.abspath(DATABASE)}")
    app.run(debug=True, host='0.0.0.0', port=5000)
