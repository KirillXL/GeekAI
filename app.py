from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def auth():
    return render_template('auth.html')

@app.route('/chat')
def chat():
    return render_template('chat.html')

@app.route('/admin')
def admin():
    return render_template('admin.html')

@app.route('/chat-content')
def chat_content():
    return render_template('chat-content.html')

@app.route('/profile')
def profile():
    return render_template('profile.html')

@app.route('/settings')
def settings():
    return render_template('settings.html')

if __name__ == '__main__':
    app.run(debug=True)