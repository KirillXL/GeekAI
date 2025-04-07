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


if __name__ == '__main__':
    app.run(debug=True)