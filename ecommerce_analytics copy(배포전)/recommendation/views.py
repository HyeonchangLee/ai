from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
import json
import pickle

from tmdbv3api import Movie,TMDb

# https://api.themoviedb.org/3/movie/550?api_key=5b41ed68d49a740584bf5c7ede5ccd07
# API Key: 5b41ed68d49a740584bf5c7ede5ccd07


tmdb = TMDb()
movie_api = Movie()
tmdb.api_key = '5b41ed68d49a740584bf5c7ede5ccd07'


# --------------------------------------- 1
# 1. 인구 통계학 필터링
#   많은 사람들이 일반적으로 좋아하는 영화를 추천 (매출순, 인기순, 평점 좋은순)

import numpy as np
import pandas as pd

df1 = pd.read_csv('/Users/hyeonchanglee/Documents/pydata/13.web/ecommerce_analytics/recommendation/csv/tmdb_5000_credits.csv')
df2 = pd.read_csv('/Users/hyeonchanglee/Documents/pydata/13.web/ecommerce_analytics/recommendation/csv/tmdb_5000_movies.csv')

df1.columns = ['id', 'title', 'cast', 'crew']
df2 = df2.merge(df1[['id', 'cast', 'crew']], on='id') # id를 기준으로 df2에 df1을 병합시킴

# 문자 처리된 딕셔너리를 다시 딕셔너리로 변환해주는 함수
from ast import literal_eval
df2['genres'] = df2['genres'].apply(literal_eval) #features 컬럼들에 literal_eval를 적용시켜서 넣어줌


C = df2['vote_average'].mean() #전체 평점의 평균
m = df2['vote_count'].quantile(0.9) #quantile 하위 90%의 데이터를 뽑아줌.(상위10%의 기준이 됨)

q_movies = df2.copy().loc[df2['vote_count']>=m] # 최소기준 m 이상의 데이터만 뽑아옴(상위 10%)
q_movies['vote_count'].sort_values() # 오름차순

# 평점이 높기만 한게 좋은 영화가 아니므로, 가중치를 주는 위의 공식을 적용한 새로운 컬럼을 만들기 위한 함수를 생성

def weighted_rating(x, m=m, C=C):
  v = x['vote_count']
  R = x['vote_average']
  return (v / (v+m) * R) + (m / (m+v) * C)

q_movies['score'] = q_movies.apply(weighted_rating, axis=1) #row 단위로 연산함 
q_movies = q_movies.sort_values(by='score',ascending=False) # 역순 정렬



# 장르 3개만 출력한 리스트 생성
list_g = []     
for k in range(10):
    tmp =[]
    for j in range(3):
        try:
            # print(q_movies.iloc[k]['genres'][j]['name'])
            tmp.append(q_movies.iloc[k]['genres'][j]['name'])
        except:
            continue
    list_g.append(tmp)

# 영화 전체 제목

movies_all_title= df2['title'].copy()
movies_all_title = movies_all_title.sort_values()

# --------------------------------------- 2
# 컨텐츠 기반 추천
# 영화 제목을 받으면 코사인 유사도를 통해서 가장 유사도가 높은 상위 10개의 영화 목록 반환

cosine_sim = pickle.load(open('/Users/hyeonchanglee/Documents/pydata/13.web/ecommerce_analytics/recommendation/csv/cosine_sim.pickle','rb'))


indices = pd.Series(df2.index, index=df2['title']).drop_duplicates() # 인덱스 정보를 저장한 데이터 프레임

path = 'https://image.tmdb.org/t/p/w500/'

def get_recommendations(title):
  idx = indices[title] # 영화 제목을 통해 그 영화의 인덱스값을 얻기
  sim_scores = list(enumerate(cosine_sim[idx])) #영화에 해당하는 인덱스를 토대로 코사인 유사도를 가져옴
  sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True) # 코사인 유사도 기준으로 내림차순 정렬
  sim_scores = sim_scores[1:11] # 자기자신을 제외한 10개의 추천 영화 슬라이싱
  movie_indices = [i[0] for i in sim_scores] #추천 영화목록 10개의 인덱스 정보를 추출
  id = list(df2.iloc[movie_indices]['id']) #아이디번호를 추출
  details = [movie_api.details(i) for i in id] #TMDbd api 함수인 details를 통해 아이디번호에 해당하는 정보를 가져옴
  poster_path = [('https://image.tmdb.org/t/p/w500' + str(details[k]['poster_path'])) for k in range(10)] #포스터 경로정보를 가져와서 리스트에 담음
  return df2.iloc[movie_indices], poster_path # 인덱스 정보를 통해 영화 제목 추출, 포스터 경로 추출


# --------------------------------------- 3
# import surprise # 안씀





# --------------------------------------- 3




def movie(request):
    return render(request, 'movie.html')


def rec_1_pop(request):
    q_movies[['title','score']]
    output={}
    output['title'] = list(q_movies['title'])[:10]
    output['score'] = list(q_movies['score'])[:10]
    output['genres'] = list(list_g)
    output['all'] = list(movies_all_title)

    movie_selected = request.GET.get('movie_select')
    # print(movie_selected) 

    sim_recommendations, poster_path = get_recommendations(movie_selected)
    # print(sim_recommendations['title']) # 입력받은 영화 제목의 추천
    # print(poster_path) # 입력받은 영화 제목의 포스터 패스
    output['sim_title'] = list(sim_recommendations['title']) #유사도에 의한 추천 영화 제목

    # 장르 3개만 출력한 리스트 생성
    list_sim_g = []     
    for k in range(10):
        tmp =[]
        for j in range(3):
            try:
                # print(sim_recommendations.iloc[k]['genres'][j]['name'])
                tmp.append(sim_recommendations.iloc[k]['genres'][j]['name'])
            except:
                continue
        list_sim_g.append(tmp)

    output['sim_genres'] = list(list_sim_g)

    # 가중치 출력 공식
    C = df2['vote_average'].mean() #전체 평점의 평균
    m = df2['vote_count'].quantile(0.9) #quantile 하위 90%의 데이터를 뽑아줌.(상위10%의 기준이 됨)

    # 평점이 높기만 한게 좋은 영화가 아니므로, 가중치를 주는 위의 공식을 적용한 새로운 컬럼을 만들기 위한 함수를 생성

    def weighted_rating(x, m=m, C=C):
        v = x['vote_count']
        R = x['vote_average']
        return (v / (v+m) * R) + (m / (m+v) * C)

    sim_recommendations['score'] = sim_recommendations.apply(weighted_rating, axis=1) #row 단위로 연산함 
    # print(sim_recommendations['score'])

    output['sim_score'] = list(sim_recommendations['score'])
    output['poster_path'] = list(poster_path)
    return HttpResponse(json.dumps(output),status=200)

