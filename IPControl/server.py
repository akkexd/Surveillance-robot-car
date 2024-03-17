from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Define the IP addresses for car control and picture taking
car_ip = "http://192.168.1.88/"
picture_ip = "http://192.168.1.204/"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/switch_functionality', methods=['POST'])
def switch_functionality():
    data = request.get_json()
    functionality = data['functionality']

    # Choose the appropriate IP address based on the selected functionality
    if functionality == 'car':
        ipAddress = car_ip
    elif functionality == 'picture':
        ipAddress = picture_ip
    else:
        return jsonify({'error': 'Invalid functionality'})

    # Perform actions based on the chosen functionality and IP address
    # For demonstration purposes, I'm just returning a response
    return jsonify({'message': f'Switched to {functionality} using IP address {ipAddress}'})

if __name__ == '__main__':
    app.run(debug=True)
