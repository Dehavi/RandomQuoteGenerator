var quotemama = [
    {
        quote: "Life may not be the party we hoped for, but while we're here, we should dance."
    },{
       quote:" You will appreciate every single moment of life, whether it is stressful or enjoyable, if you have the mindset that everything can be seen positively."
    },
    {
        quote: "Never cowardly or cruel. Never give up, never give in."
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail."
    },
    {
        quote: "In 20 years, you probably won't even remember this."
    },
    {
        quote: "Love all, trust a few, do wrong to none."
    },
    {
        quote: "Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life; define yourself."
    },
    {
        quote: "Faith is the art of holding on to things your reason has once accepted, in spite of your changing moods."
    },
    {
        quote: "A man who flies from his fear may find that he has only taken a shortcut to meet it."
    },
    {
        quote: "Life's too mysterious to take too serious."
    },
    {
        quote: "No one can make you feel inferior without your consent."
    },
    {
        quote: "The woman who follows the crowd will usually go no further than the crowd. The woman who walks alone is likely to find herself in places no one has been before."
    },
    {
        quote: "You can't go around building a better world for people. Only people can build a better world for people. Otherwise it's just a cage."
    },
    {
        quote: "There isn't a way things should be. There's just what happens, and what we do."
    },
    {
        quote: "It's not about how hard you can hit; it's about how hard you can get hit and keep moving forward."
    },
    {
        quote: "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind."

    },
    {
        quote: "This too, shall pass."
    },
    {
        quote: "Keep your eyes on the stars and your feet on the ground."
    },
    {
        quote: "The only person you should try to be better than is the person you were yesterday."
    },
    {
        quote: "If you want to go fast, go alone. If you want to go far, go together."
    },
    {
        quote: "It's OK to not be OK, as long as you don't stay that way."
    },
    {
        quote: "I can be changed by what happens to me but I refuse to be reduced by it."
    },
    {
        quote: "Believe you can and you're halfway there."
    },
    {
        quote: "May I never be complete. May I never be content. May I never be perfect."
    },
    {
        quote: "Nothing in life is to be feared; it is only to be understood. Now is the time to understand more so that we may fear less."
    },
    {

        quote: "Those who don't believe in magic will never find it."
    },
    {
        quote: "There is no elevator to success  you have to take the stairs."
    },
    {
        quote: "Plant your garden and decorate your own soul, instead of waiting for someone to bring you flowers."
    },
    {
        quote: "It does not do to dwell on dreams and forget to live."
    },
    {
        quote: "Don't sweat the petty things and don't pet the sweaty things."
    },
    {
        quote: "Do what you feel in your heart to be right, for you'll be criticized anyway."
    },
    {
        quote: "Do not set yourself on fire in order to keep others warm."
    },
    {
        quote: "The way I see it, every life is a pile of good things and bad things. The good things don't always soften the bad things, but vice versa, the bad things don't always spoil the good things and make them unimportant."
    },
    {
        quote: "It's supposed to be hard. If it were easy, everyone would do it."
    },
    {
        quote: "Ask yourself if what you're doing today will get you closer to where you want to be tomorrow."
    },
    {
        quote: "Clear eyes, full hearts, can't lose."

    },
    {
        quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit."
    }
];

//create a random generator
function generator()
{
    var randomn=Math.floor(Math.random()*(quotemama.length));
    var randomnumber=quotemama[randomn];
    return randomnumber;
}

//print the qoute 
function printmama()
{
    var quotemama=generator();
    var two=document.getElementById("rey");
    var three=`<b><p class="quote">${quotemama.quote}</p><b>`;
    two.innerHTML=three;

}

window.setInterval(function()
{
    printmama();
},15000);

document.getElementById("btn").addEventListener("click",printmama,false);