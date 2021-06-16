
import flask
import json
import pandas as pd
app = flask.Flask(__name__)
model = pd.read_pickle('./model/xgboost_model.pickle')
# print(type(model))
category_columns = pd.read_pickle('./model/categorical_columns.pickle')
# print(type(category_columns))
one_hot_columns = pd.read_pickle('./model/one_hot_columns.pickle')
# print(type(one_hot_columns))


@app.route('/model', methods=['GET','POST'])
def get_return():
    if flask.request.method == 'GET':
        print("GET: I received your message")
        return {"message":"Jeffrey"}
    if flask.request.method == 'POST':

        # print(type(flask.request.data))
        # print('Data:',flask.request.data.decode('utf-8'))
        # print(type(flask.request.data.decode('utf-8')))
        # s = flask.request.data.decode('utf-8')
        data = json.loads(flask.request.data.decode('utf-8'))
        # print(type(data))

        numeric = data['numerical_data']
        category = data['categorical_data']
        numeric_df = pd.DataFrame([[int(i) for i in numeric.values()]],columns=numeric.keys())
        columns = [i+"_"+j for i,j in category.items()]
        category_df = pd.DataFrame([[0]*len(category_columns)] ,columns=category_columns)
        category_df[columns] = 1
        input_data = pd.concat([numeric_df,category_df],axis=1)[one_hot_columns]
        # print(input_data.shape)
        prob = model.predict_proba(input_data)[0][1]
        # print(type(data))
        # pd.to_pickle(data,'./test.pickle')
        # print("POST: I received your message")
        return {"probability":str(prob)}