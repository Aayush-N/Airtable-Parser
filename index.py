from flask import Flask, jsonify, render_template
from airtable import Airtable
import json

songs = Airtable('appEghI8Wsg5QqBbJ', 'SONGS', 'keyWAcmBPlf0uxqyg')
artists = Airtable('appEghI8Wsg5QqBbJ', 'ARTISTS', 'keyWAcmBPlf0uxqyg')

app = Flask(__name__)

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/api')
def api():
	all_songs = songs.get_all()
	for i in all_songs:
		artist_data = artists.get(i['fields']['Artist'][0])
		song = i['fields']
		song.update(artist_data['fields'])
		
	return jsonify(all_songs)

@app.route('/search/<language>')
def search(language):
	language_songs = songs.search('Language', language.title())
	for i in language_songs:
		artist_data = artists.get(i['fields']['Artist'][0])
		song = i['fields']
		song.update(artist_data['fields'])
		
	return jsonify(language_songs)