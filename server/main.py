import pymysql
from app import app
from config import mysql
from flask import jsonify
from flask import request

@app.route('/')
def test():
    return "working"


@app.route('/form', methods=['POST'])
def index():
    try:
        userDetails = request.json
        addressline1 = userDetails['addressline1']
        addressline2 = userDetails['addressline2']
        area = userDetails['area']
        city = userDetails['city']
        postalcode = userDetails['postalcode']
        latitude = userDetails['latitude']
        longitude = userDetails['longitude']
        if addressline1 and addressline2 and area and city and postalcode and latitude and longitude and request.method == 'POST':
            conn = mysql.connect()
            cursor = conn.cursor(pymysql.cursors.DictCursor)
            bindData = (addressline1, addressline2, area, city, postalcode, latitude, longitude)
            sqlQuery = "INSERT INTO business_location(addressline1, addressline2, area, city, postalcode, latitude, longitude) VALUES (%s,%s,%s,%s,%s,%s,%s)"
            cursor.execute(sqlQuery, bindData)
            conn.commit()
            response = jsonify('Data added successfully')
            response.status_code = 200
            return response
        else:
            return showMessage()
    except Exception as e:
        print(e)
    finally:
        cursor.close()
        conn.close()

@app.errorhandler(404)
def showMessage(error=None):
    message = {
        'status': 404,
        "message": 'Record not found' + request.url,
    }
    response = jsonify(message)
    response.status_code = 404
    return response

if __name__ == '__main__':
    app.run(debug=True)