let INFO = [
    {
        img: './assets/jimmy.jpg',
        alt: 'headshot of jimmy neutron',
        name: 'Jimmy Neutron',
        job: 'scientist',
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nemo aspernatur beatae! Assumenda incidunt, minima ipsam, accusamus soluta nostrum debitis delectus mollitia quo commodi voluptatum deserunt sunt ad ducimus aliquam, impedit ullam amet. Id ut officiis amet quia. Aut id quos ullam, magni ab delectus?'
    },
    {
        img: './assets/megabyte.webp',
        alt: 'headshot of megabyte from the hit TV show reboot',
        name: 'Megabyte',
        job: 'Virus',
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nemo aspernatur beatae! Assumenda incidunt, minima ipsam, accusamus soluta nostrum debitis delectus mollitia quo commodi voluptatum deserunt sunt ad ducimus aliquam, impedit ullam amet. Id ut officiis amet quia. Aut id quos ullam, magni ab delectus?'
    },
    {
        img: './assets/hexadecimal.webp',
        alt: 'headshot of hexidecimal from the hit TV show Reboot',
        name: 'Hexadecimal',
        job: 'Virus',
        quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nemo aspernatur beatae! Assumenda incidunt, minima ipsam, accusamus soluta nostrum debitis delectus mollitia quo commodi voluptatum deserunt sunt ad ducimus aliquam, impedit ullam amet. Id ut officiis amet quia. Aut id quos ullam, magni ab delectus?'
    }
]

const testamonialCard = document.querySelector('.testamonial');
const img = document.querySelector('.headshot')
const clientName = document.querySelector('#name');
const job = document.querySelector('#job');
const quote = document.querySelector('#quote');

const leftArrow = document.querySelector('#leftArrow')
const surprise = document.querySelector('#surprise')
const rightArrow = document.querySelector('#rightArrow')

let currentTest = 0

function displayTest(select) {
    img.src = INFO[select]['img']
    img.alt = INFO[select]['alt']
    clientName.textContent = INFO[select]['name']
    job.textContent = INFO[select]['job'].toUpperCase()
    quote.textContent = INFO[select]['quote']
}


leftArrow.addEventListener('click', function () {
    currentTest--;
    if (currentTest < 0) {
        currentTest = INFO.length - 1;
    }
    displayTest(currentTest)
})

surprise.addEventListener('click', function () {
    //generates a list of numbers for all included objects
    let cache = Array.from(Array(INFO.length).keys())
    //removes the number associated with the current selection
    cache.splice(currentTest, 1)
    //selects one from the list so a repeat is not sent and the user is not confused
    currentTest = cache[Math.random() * cache.length << 0]
    displayTest(currentTest)
})

rightArrow.addEventListener('click', function () {
    currentTest++;
    if (currentTest > INFO.length) {
        currentTest = 0
    }
    displayTest(currentTest)
})


displayTest(0)
