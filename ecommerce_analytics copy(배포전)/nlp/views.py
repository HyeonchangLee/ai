import re
from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
import pickle
import matplotlib

# Create your views here.
def reply(request):
    return render(request, 'reply.html')


# # --------------------------------------- 1
# # 
# # 모델 불러오기

import numpy as np
import pandas as pd
from tensorflow import keras
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.preprocessing.text import Tokenizer
from konlpy.tag import Okt


stopwords = ['의','가','이','은','들','는','좀','잘','걍','과','도','를','으로','자','에','와','한','하다']

# loaded_model = keras.models.load_model('/Users/hyeonchanglee/Documents/pydata/13.web/ecommerce_analytics/nlp/model/best_model.h5') 
loaded_model = keras.models.load_model('/Users/hyeonchanglee/Documents/data_analyst/003이커머스_분석사이트/ecommerce_analytics/best_model.h5') 


okt = Okt()
tokenizer =Tokenizer()

def sentiment_predict(new_sentence):
  new_sentence = re.sub(r'[^ㄱ-ㅎㅏ-ㅣ가-힣 ]','', new_sentence)
  new_sentence = okt.morphs(new_sentence, stem=True) # 토큰화
  new_sentence = [word for word in new_sentence if not word in stopwords] # 불용어 제거
  encoded = tokenizer.texts_to_sequences([new_sentence]) # 정수 인코딩
  pad_new = pad_sequences(encoded, maxlen = 30) # 패딩
  score = float(loaded_model.predict(pad_new)) # 예측
  if(score > 0.5):
    print("{:.2f}% 확률로 긍정 리뷰입니다.\n".format(score * 100))
    return score
  else:
    print("{:.2f}% 확률로 부정 리뷰입니다.\n".format((1 - score) * 100))
    return score
# # --------------------------------------- 2


def input_word(request):
    
    output={}
    input_text_area = request.GET.get('input_text_area')
    print(str(input_text_area)) 

    score = sentiment_predict(input_text_area)
    print('score',score)
    output['input_text_area'] = list(input_text_area)
    
    output['score'] = str(score)

    return HttpResponse(json.dumps(output),status=200)

