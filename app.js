let availableKeywords = [
    "priyanka mandal",
    "mandal",
    "What is the weather today?",
    "How to cook pasta?",
    "Best programming languages to learn",
    "Top tourist destinations in 2024",
    "How to lose weight fast?",
    "What is blockchain technology?",
    "How to start a blog?",
    "Best exercises for abs",
    "How to invest in stocks?",
    "What are the benefits of meditation?",
    "How to learn Python?",
    "How to tie a tie?",
    "Best books to read in 2024",
    "How to boost your immune system?",
    "What is AI?",
    "Top 10 movies of all time",
    "How to get rid of acne?",
    "What are the symptoms of COVID-19?",
    "How to write a resume?",
    "How to improve communication skills?",
    "Best places to visit in Europe",
    "How to make money online?",
    "What is quantum computing?",
    "How to reduce stress?",
    "Top 10 healthy foods",
    "What is machine learning?",
    "How to improve your memory?",
    "Best online courses for data science",
    "How to bake a cake?",
    "How to become a freelancer?",
    "What is the meaning of life?",
    "How to fix a flat tire?",
    "How to learn JavaScript?",
    "Best programming tutorials online",
    "How to create a website?",
    "What is the best diet for weight loss?",
    "How to study effectively?",
    "How to plan a trip?",
    "What is the best workout routine?",
    "How to learn coding?",
    "How to get a job at Google?",
    "Best productivity apps",
    "How to start a business?",
    "What is digital marketing?",
    "How to learn SQL?",
    "What is the best way to learn guitar?",
    "How to meditate?",
    "How to find a job?",
    "How to improve mental health?",
    "Best travel apps",
    "How to start investing?",
    "What is cryptocurrency?",
    "How to be more confident?",
    "How to save money?",
    "What is the best time to exercise?",
    "How to stop procrastinating?",
    "Best coding bootcamps",
    "How to start a podcast?",
    "What is cloud computing?",
    "How to improve your writing skills?",
    "Best ways to learn English",
    "How to learn data science?",
    "What is artificial intelligence?",
    "How to lose belly fat?",
    "How to get fit?",
    "How to sleep better?",
    "Best ways to relax",
    "How to learn a new language?",
    "How to improve creativity?",
    "What is SEO?",
    "How to start a YouTube channel?",
    "Best online tools for designers",
    "How to learn HTML and CSS?",
    "How to grow your Instagram following?",
    "What are the best podcasts to listen to?",
    "How to create a budget?",
    "What are the best productivity tips?",
    "How to learn to play the piano?",
    "Best ways to stay motivated",
    "How to deal with anxiety?",
    "How to become a software engineer?",
    "What is UX design?",
    "How to manage time effectively?",
    "How to improve public speaking?",
    "Best resources for learning coding",
    "How to start a career in tech?",
    "What is the best way to learn math?",
    "How to learn machine learning?",
    "Best online courses for coding",
    "How to set goals?",
    "How to practice mindfulness?",
    "What are the best TED Talks?",
    "How to learn data analysis?",
    "Best ways to organize your life",
    "How to build a personal brand?",
    "What is DevOps?",
    "How to become a data scientist?",
    "Best ways to manage stress",
    "How to create a business plan?",
    "What is agile development?",
    "How to improve concentration?",
    "Best books for self-improvement",
    "How to start a fitness routine?",
    "How to negotiate a salary?",
    "What is Python used for?",
    "How to learn Java?",
    "Best ways to make money",
    "How to become an entrepreneur?",
    "What is the best way to study?",
    "How to improve your vocabulary?",
    "How to get better grades?",
    "Best online resources for learning",
    "How to increase productivity?",
    "How to learn C++?",
    "What are the best learning strategies?",
    "How to stay focused?",
    "Best ways to improve memory",
    "How to learn a new skill?",
    "What is a growth mindset?",
    "How to start coding?",
    "Best ways to learn programming",
    "How to become a web developer?",
    "What is front-end development?",
    "How to build a portfolio?",
    "How to learn SQL for data analysis?",
    "Best resources for learning Python",
    "How to get started with machine learning?",
    "How to learn R programming?",
    "Best courses for learning web development",
    "How to become a full-stack developer?",
    "What is cloud computing used for?",
    "How to learn to code for free?",
    "Best online coding platforms",
    "How to start learning JavaScript?",
    "How to learn app development?",
    "Best resources for learning HTML and CSS",
    "How to become a backend developer?",
    "What is data science?",
    "How to prepare for a tech interview?",
    "Best online learning platforms",
    "How to start with AI?",
    "What is blockchain used for?",
    "How to learn ethical hacking?",
    "Best ways to learn about cybersecurity",
    "How to become a data analyst?",
    "What is a coding bootcamp?",
    "How to get a job in tech?",
    "Best programming languages for gaming",

];



const resultBox = document.querySelector(".result-box");
const inputBox = document.querySelector("#input-box");

inputBox.onkeyup = function() {
let result = [];
let input = inputBox.value;  

if (input.length) {
    result = availableKeywords.filter((keyword) => {
        return keyword.toLowerCase().includes(input.toLowerCase());
    });
    
} 
display(result);
  if(!result.length){
     resultBox.innerHTML='';
  }
};


function display(result){
 const content =result.map((list)=>{
         return "<li onclick=selectInput(this)>"+list+"</li>";
 });
 resultBox.innerHTML ="<ul>"+content.join('')+"</ul>"
}



function selectInput(list){
   inputBox.value = list.innerHTML;
   resultBox.innerHTML='';
}






const SearchInput = document.querySelector(".search-input");
SearchInput.addEventListener("keydown",function(event){
   if(event.code==="Enter"){
       search();
   }
})

function search(){
   const input = SearchInput.value;
   window.location.href = "https://www.google.com/search?q="+input+"&rlz=1C1RXQR_enIN1115IN1115&oq="+input+"&gs_lcrp=EgZjaHJvbWUqEAgAEAAY4wIYsQMYyQMYgAQyEAgAEAAY4wIYsQMYyQMYgAQyDQgBEC4YsQMYyQMYgAQyCggCEAAYsQMYgAQyDQgDEAAYgwEYsQMYgAQyCggEEAAYsQMYgAQyBwgFEAAYgAQyBwgGEAAYgAQyDQgHEAAYgwEYsQMYgAQyDQgIEAAYgwEYsQMYgAQyFggJEC4YgwEYxwEYsQMY0QMYgAQYigXSAQgyMzUxajBqN6gCCLACAQ&sourceid=chrome&ie=UTF-8"

}







let moonicon = document.getElementById('moon');
let imgcha = document.getElementById('forchange');

moonicon.onclick = function() {
document.body.classList.toggle('dark-theme');

if (document.body.classList.contains("dark-theme")) {
    moonicon.src = "asscet/sun.png";
    imgcha.src = "";
          
} else {
    moonicon.src = "asscet/moon.png";
  
   
}
};


document.getElementById("forchange").addEventListener("click", function () {
    this.querySelector("i").style.color = "rgb(209, 209, 209)"; 
});
