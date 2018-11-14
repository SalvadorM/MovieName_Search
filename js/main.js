
function fetchData(querySearch,div) {
    const query = querySearch;
    const url = "https://api.themoviedb.org/3/search/movie?api_key=73e9c32f5e534d529e1537f3b4f4ae38&language=en-US&query="+query+"&page=1&include_adult=false";

    $.get(url, (data) => {
        const query = parseData(data.results);
        console.log(query);
        displayData(query,div);
        
    });
}

function parseData(data) {
    var movies = [];
    for(i = 0; i < data.length;i++){
        var movie_path = "https://www.themoviedb.org/movie/" + data[i].id;
        var url = 'https://image.tmdb.org/t/p/w185'+ data[i].poster_path;
        var curr = {
            'title': data[i].title,
            'vote': data[i].vote_average,
            'body': data[i].overview,
            'id': data[i].id,
            'popularity' : data[i].popularity,
            'poster': url,
            'link' : movie_path,
        };
        movies.push(curr);
    }
    movies.sort(function(a, b) { return b.vote - a.vote; });
    return movies.slice(0,10);
}

function displayData(data, div) {
    const divElement = $(div);
    $(data).each( (index) => {
        let title = data[index].title;
        let path = data[index].poster;
        let bio = data[index].body;
        let votes = data[index].vote;
        let id = data[index].id;
        let link = data[index].link;
        let newHTML = "<div class=\"card\">  <img class=\"picture\" src="+ path + " style=\"width:100%\"> <div class=\"card-text\"> <h3 class=\"card-title\">"+ title +"</h3> <br> <p class=\"card-votes\">vote average: "+ votes +"</p><p>"+ bio +"</p> <a class=\"link\" href="+ link +">More info</a>  </div>    </div>";
    divElement.append(newHTML);
    });

}


$(document).ready(function() {

    const first_name = $('#f_name');
    const div1 = ".data";
    const div2 = ".data2";

    const last_name = $('#l_name');
    fetchData(first_name[0].innerText, div1);
    fetchData(last_name[0].innerText, div2);
 
});

