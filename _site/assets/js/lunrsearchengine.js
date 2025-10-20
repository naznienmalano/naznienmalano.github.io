
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "Memoirs, a free minimalist Jekyll blogging theme with modern design",
    "body": "This website is a demonstration to see Memoirs Jekyll theme in action. The theme is compatible with Github pages, in fact even this demo itself is created with Github Pages and hosted with Github.  Get Memoirs for Jekyll → "
    }, {
    "id": 2,
    "url": "http://localhost:4000/authors",
    "title": "Authors",
    "body": "                                                                                                                                                                                                                                        Naznien Malano:         Hello. My name is Naznien Fevrianne Malano. I'm an Information Systems graduate and currently working as a Data Scientist. In this blog, I'll write about my work, my learnings, the books I read, the movies I watch, and bunch of random things that interesting to write. I'm happy to receive any criticism and suggestions regarding this blog via contact section.                "
    }, {
    "id": 3,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 4,
    "url": "http://localhost:4000/contact",
    "title": "Contact",
    "body": "  Please send your message to me (if any). I will reply as soon as possible!   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "                                                      On loneliness and entering the adulthood              :       Turns out, adulthood isn’t what I imagined. Somehow it feels boring, lonely, and confusing, even when I’m starting to become the person I once dreamed of being. I have a. . . &lt;/h4&gt;    &lt;/div&gt;                          &lt;/span&gt;                                20 Sep 2025                            &lt;/div&gt;&lt;/div&gt;                                                      On passion and what I really want it to do for living              :       &lt;/h4&gt;    &lt;/div&gt;                          &lt;/span&gt;                                19 Sep 2025                            &lt;/div&gt;&lt;/div&gt;                                                      On feminism and looking for a partner              :       &lt;/h4&gt;    &lt;/div&gt;                          &lt;/span&gt;                                19 Sep 2025                            &lt;/div&gt;&lt;/div&gt;                                                      On female friendship              :       &lt;/h4&gt;    &lt;/div&gt;                          &lt;/span&gt;                                19 Sep 2025                            &lt;/div&gt;&lt;/div&gt;  &lt;/div&gt;    "
    }, {
    "id": 6,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 7,
    "url": "http://localhost:4000/adulthood/",
    "title": "On loneliness and entering the adulthood",
    "body": "2025/09/20 - Turns out, adulthood isn’t what I imagined. Somehow it feels boring, lonely, and confusing, even when I’m starting to become the person I once dreamed of being. I have a routine that used to seem ideal, and I’ve accomplished things I once thought were out of reach. But still… I don’t know. Maybe it’s because I no longer know what comes next. When I got into one of favorite public high schools in Jakarta with what I’d call “kind of” good grades, I knew exactly what my next goal was: to get into a good university. When I made it to my dream university, I had a clear list of what I needed to do next: maintain a good GPA, land an internship, and eventually secure a job at a company I could be proud of. And now that I’m working at a company I once thought was impossible to get into… I don’t know what’s next. Should I climb the corporate ladder? Start a side project or build a business of my own? Pursue another degree, something that challenges me again? Or maybe, for the first time, should I focus on my personal life—on building a serious relationship, on thinking about marriage, on finding emotional stability rather than professional success? How many years will I stay in this company? I don’t know. I really don’t know what’s best for me, and that uncertainty quietly scares me. And another thing I’ve learned after entering adulthood: I crave companionship more than I ever expected. I used to think I was good at being alone. Maybe I even romanticized it a little, the quiet, the independence, the idea of being strong and self-sufficient. But the truth is, I only enjoy solitude when life is heavy, when my mind feels crowded, when I need space to think or recover. I’m not being avoidant; I just need silence when I’m struggling. But when things are going well like now, when I finally have peace, when the chaos subsides, I start craving connection. I want laughter that fills a room, spontaneous plans, people who make ordinary days feel less dull. I’m grateful for my current routine, it’s the kind of work-life balance I used to dream of. I have a supportive team, kind seniors who never make me feel small, and work that pays decently while still leaving time for rest. Everything is fine, objectively speaking. Yet somehow, I feel bored and lonely. Maybe it’s because, for the first time, it feels like I’m not hustling for anything. When I was in junior high, I was busy with archery practice and competitions. Everything that I do is just to get a medal. In high school and college, I was constantly chasing grades, targets, and the next big thing. Every phase of my life had a goal, a sense of direction and a reason to keep pushing forward. But now that I finally have what I used to wish for—time, stability, and a sense of calm, I feel strangely hollow. I finally have the freedom I wanted, and yet it feels like I’ve lost the momentum that once made life exciting. Sometimes I wonder if this is just part of growing up, this quiet confusion that sits between gratitude and longing. I know I should be thankful for what I have like what my parents always told me, and I am. But at the same time, I can’t help but feel restless. My job is good, but am I learning enough? Am I challenging myself enough? Should I pursue another degree, something more difficult, something that reignites the ambition I used to have in college? Or should I slow down, stop running, and learn to simply exist without constantly chasing something? I don’t have the answers yet. Maybe adulthood isn’t about knowing exactly what’s next. Maybe it’s about learning to live with the uncertainty, to find meaning in the quiet stretches between achievements, to build a life that isn’t always measured by progress, but by peace. "
    }, {
    "id": 8,
    "url": "http://localhost:4000/passion/",
    "title": "On passion and what I really want it to do for living",
    "body": "2025/09/19 - "
    }, {
    "id": 9,
    "url": "http://localhost:4000/feminism-and-partner/",
    "title": "On feminism and looking for a partner",
    "body": "2025/09/19 - "
    }, {
    "id": 10,
    "url": "http://localhost:4000/female-friendship/",
    "title": "On female friendship",
    "body": "2025/09/19 - "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});