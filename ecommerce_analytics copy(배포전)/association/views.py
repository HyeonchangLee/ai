import re
from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
import pickle

# lift 기준
market_basket_analysis = pickle.load(open('/Users/hyeonchanglee/Documents/pydata/13.web/ecommerce_analytics/association/model/market_basket_analysis.pickle','rb'))
# print(market_basket_analysis['antecedents'].values[0])
market = [list(x) for x in market_basket_analysis['antecedents'].drop_duplicates().values] # 전체 리스트 출력용
# input = []
# market_basket_analysis[market_basket_analysis['antecedents'] == {input}] # 소시지와 요거트를 같이 구매한 사람은 다른 어떤 품목을 또 같이 살까?

# 지지도 : 몇번나왔는지 확인 전체 안에서
# 신뢰도 : 

# ----------------------------------------------------- 1
def naverapi(product_select):

    import os
    import sys
    import urllib.request
    client_id = 'VtlClViSdVmVKWZa3Nbj'
    client_secret = '7xH9zVPJTp'
    product = str(product_select) # 검색어를 문자로 변경

    encText = urllib.parse.quote(product)

    url = "https://openapi.naver.com/v1/search/image?query=" + encText # json 결과
    # url = "https://openapi.naver.com/v1/search/blog.xml?query=" + encText # xml 결과
    request = urllib.request.Request(url)
    request.add_header("X-Naver-Client-Id",client_id)
    request.add_header("X-Naver-Client-Secret",client_secret)
    response = urllib.request.urlopen(request)
    rescode = response.getcode()
    if(rescode==200):
        response_body = response.read()
        # print(response_body.decode('utf-8'))
    else:
        print("Error Code:" + rescode)

    product_data = response_body.decode('utf-8') #가져온 링크 정보를 받음

    # 문자 처리된 딕셔너리를 다시 딕셔너리로 변환해주는 함수
    from ast import literal_eval
    product_data = literal_eval(product_data)

    return product_data
# ----------------------------------------------------- 1

# Create your views here.
def grocery(request):
    return render(request, 'grocery.html')


def best_combinations(request):
    output={}

    output['product_name_all'] = market #이름정보 전체

    product_select = request.GET.get('product_select') #입력값 받아오기
    # print(product_select) 

    product_data =  naverapi(product_select) # api이용

    # print(product_data['items'][0]['link'].replace('\\',''))
    link_image = product_data['items'][0]['link'].replace('\\','')

    # print(market_basket_analysis[market_basket_analysis['antecedents'] == {str(product_select)}] )# 소시지와 요거트를 같이 구매한 사람은 다른 어떤 품목을 또 같이 살까?
    rules = market_basket_analysis[market_basket_analysis['antecedents'] == {str(product_select)}]

    #   분석 결과들
    consequents_df = rules['consequents']
    support = rules['support']
    confidence = rules['confidence']
    lift = rules['lift']

    output['response_body'] = list(product_data) # 받은 정보 전체
    output['link_image'] = link_image # api에서 받아온 링크 주소


    consequents = [list(x) for x in consequents_df.values] # 이릅 리스트로 뽑아내기

    # 함께 구매 조합의 이미지 받아옴
    consequents_image = []
    for co1 in consequents:
        consequents_image.append(naverapi(co1)['items'][0]['link'].replace('\\','')) # api이용

    # print(consequents_image)

    output['consequents'] = list(consequents)
    output['consequents_image'] = list(consequents_image)
    output['support'] = list(support)
    output['confidence'] = list(confidence)
    output['lift'] = list(lift)

    return HttpResponse(json.dumps(output),status=200)

