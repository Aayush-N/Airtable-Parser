$(function() {
         var languages = JSON.parse($.ajax({url: '/languages',async: false}).responseText);
$('input[name="searchbox"]').autoComplete({
    minChars: 1,
    source: function(term, suggest){
        term = term.toLowerCase();
        var choices = languages;
        var matches = [];
        for (i=0; i<choices.length; i++)
            if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
        suggest(matches);
    }
});
});