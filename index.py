from flask import Flask, jsonify, render_template, request
from airtable import Airtable
import unidecode

songs = Airtable('appEghI8Wsg5QqBbJ', 'SONGS', 'keyWAcmBPlf0uxqyg')
artists = Airtable('appEghI8Wsg5QqBbJ', 'ARTISTS', 'keyWAcmBPlf0uxqyg')

app = Flask(__name__)
app.url_map.strict_slashes = False

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/api')
def main_api():
	all_songs = songs.get_all(sort=['Order'])
	for i in all_songs:
		artist_data = artists.get(i['fields']['Artist'][0])
		song = i['fields']
		song.update(artist_data['fields'])
		
	return jsonify(all_songs)


@app.route('/languages')
def language_api():
	language_response = songs.get_all(fields=['Language'])
	language_list = []
	for i in language_response:
		language_list.append(i["fields"]["Language"])
	languages = list(set(language_list))
	return jsonify(languages)

@app.route('/search/<language>')
def search(language):
	unaccented_language = unidecode.unidecode(language)
	language_songs = songs.search('Language', unaccented_language.title())
	for i in language_songs:
		artist_data = artists.get(i['fields']['Artist'][0])
		song = i['fields']
		song.update(artist_data['fields'])
	return jsonify(language_songs)