from flask import Flask, Response
from airtable import Airtable
import json

songs = Airtable('appEghI8Wsg5QqBbJ', 'SONGS', 'keyWAcmBPlf0uxqyg')
artists = Airtable('appEghI8Wsg5QqBbJ', 'ARTISTS', 'keyWAcmBPlf0uxqyg')

app = Flask(__name__)

@app.route('/')
def index():
	all_songs = songs.get_all()
	for i in all_songs:
		artist_data = artists.get(i['fields']['Artist'][0])
		song = i['fields']
		song.update(artist_data['fields'])
		
	return Response(json.dumps(all_songs), mimetype='application/json')