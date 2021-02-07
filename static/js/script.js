/*
This file contains all the requierd Javascript functions, it is a mix of Jquery and JS
*/


//This method adds autocomplete functionality to the language search box
$(function() {

    //Gets a list of languages availabale in the database
    var languages = JSON.parse($.ajax({ url: '/languages', async: false }).responseText);

    //Adds autocomplete suggestions to the search box
    $('input[name="searchbox"]').autoComplete({
        minChars: 1,
        source: function(term, suggest) {
            term = term.toLowerCase();
            var choices = languages;
            var matches = [];
            for (i = 0; i < choices.length; i++)
                if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
            suggest(matches);
        }
    });
});

// This method converts a string to the corresponding langugage symbol
var language_to_symbol = function(language) {

    //This contains the key value pairs of language string and symbol
    var languages_dict = { 'English': 'EN', 'French': 'FR', 'Spanish': 'ES', 'Portuguese': 'PR', 'Italian': 'IT' }
    return languages_dict[language]
}

//This method is used to load all the cards on the home page, it expects an API endpoint as a parameter
var load_songs = function(url) {
    $.ajax({
        url: url,
        beforeSend: function() {
            $("#loading-skeleton").show();
        },
        success: function(data) {

            // Every card is created here in the below block
            $.each(data, function() {

                // Initial values of all variables
                var song_name = '';
                var genre = '';
                var genre_color = '';
                var artist = '';
                var year = '';
                var instrument = '';
                var instrument_color = '';
                var language = '';
                //Below is the placeholder image for each card
                var picture = 'https://via.placeholder.com/200';
                var style = '';
                var country = '';

                //These if statements are used to make sure empty fields are handled with grace
                if (this.fields.Song) {
                    song_name = this.fields.Song;
                }
                if (this.fields.Genre) {
                    genre = this.fields.Genre;
                    genre_color_dict = {'Pop': 'blue', 'Rock': 'red', 'Ballad': 'grey', 'Heavy Metal': 'pink', 'Rock Latino': 'yellow'};
                    genre_color = genre_color_dict[genre]
                }
                if (this.fields.Artist) {
                    artist = this.fields.Artist;
                }
                if (this.fields.Year) {
                    year = this.fields.Year;
                }
                if (this.fields.Instrument) {
                    instrument = this.fields.Instrument;
                    instrument_color_dict = {'Guitar': 'red', 'Piano': 'blue'};
                    instrument_color = instrument_color_dict[instrument];
                }
                if (this.fields.Language) {
                    language = this.fields.Language;
                }
                if (this.fields.Picture) {
                    picture = this.fields.Picture[0].url;
                }
                if (this.fields.Style) {
                    style = this.fields.Style;
                }
                if (this.fields.Country) {
                    country = this.fields.Country;
                }

                //Creation of one single card
                //var card = '<div class="card" style="width: 100%"><div class="row no-gutters"><div class="col-sm-4"> <img class="card-img card-img-top" src="' + picture + '" alt="' + song_name + '_img"></div><div class="col-sm-8"><div class="card-body"><div id="inlinespaced"><h5 class="card-title">' + song_name + '</h5><span><img src="/static/img/star.svg" height="20px"></span></div><p class="card-text">' + genre + '</p><div id="inline"><p class="card-text">' + song_name + ' (' + country + ')</p></div><div id="inlinespaced"><div id="inline"><p class="card-text">1993</p><p class="card-text" style="text-align: left">' + instrument + '</p></div><p class="card-text">' + language_to_symbol(language) + '</p></div></div></div></div></div>';
                var card = '<div class="container-fluid single-card"> <div class="row"> <div class="col-3 card-left-col"> <img src="' + picture + '" style="height: 77px; width: 77px;"> </div> <div class="col-9 card-middle-col"> <span class="inline-span"><p class="song-name">' + song_name + '</p><p class="star"><img src="/static/img/star.svg" height="20px"></p></span><br> <p class="genre" style="color:' + genre_color+'">' + genre + '</p><br> <p class="album">' + song_name + ' (' + country + ')</p><br> <span class="inline-span"><p class="year">' + year + '</p><p class="instrument" style="color:' + instrument_color+'">' + instrument + '</p><p class="language">' + language_to_symbol(language) + '</p></span> </div> </div> </div>'
                //Append each card to the div containing the cards
                $("#cards").append(card);
            });
            //Hide the loading skeleton as now data has been loaded
            $("#loading-skeleton").hide();
        }
    });
};