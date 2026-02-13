// Movie and TV Series Data
const moviesData = [
    {
        id: 'game-of-thrones',
        title: 'Game of Thrones',
        type: 'TV Series',
        year: '2011-2019',
        genre: 'Fantasy, Drama',
        rating: 9.3,
        reviews: 4200,
        description: 'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
        fullReview: 'Game of Thrones redefined television storytelling with its epic scope, complex characters, and shocking plot twists. The series masterfully weaves together multiple storylines across different kingdoms, creating a rich tapestry of political intrigue, warfare, and supernatural elements. The production values are exceptional, with stunning cinematography and elaborate set designs that bring George R.R. Martin\'s world to life.',
        pros: ['Exceptional character development', 'Stunning visuals and production design', 'Complex and engaging storylines', 'Outstanding performances'],
        cons: ['Controversial final season', 'Some pacing issues in later seasons']
    },
    {
        id: 'house-of-dragon',
        title: 'House of the Dragon',
        type: 'TV Series',
        year: '2022-Present',
        genre: 'Fantasy, Drama',
        rating: 8.6,
        reviews: 1800,
        description: 'An internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys Targaryen.',
        fullReview: 'House of the Dragon successfully returns to the world of Westeros with a focused narrative about the Targaryen civil war. The series benefits from the lessons learned from Game of Thrones, delivering a more streamlined story with exceptional dragon sequences and political intrigue.',
        pros: ['Impressive visual effects', 'Strong performances', 'Focused storytelling', 'Epic dragon battles'],
        cons: ['Time jumps can be jarring', 'Less diverse cast of characters than GOT']
    },
    {
        id: 'avengers',
        title: 'Avengers: Endgame',
        type: 'Movie',
        year: '2019',
        genre: 'Action, Adventure, Sci-Fi',
        rating: 8.4,
        reviews: 2500,
        description: 'After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos\' actions and restore balance to the universe.',
        fullReview: 'Endgame serves as a satisfying conclusion to the Infinity Saga, bringing together characters from across the MCU for an emotional and action-packed finale. The film balances fan service with genuine character moments, delivering both spectacular action sequences and heartfelt goodbyes.',
        pros: ['Epic conclusion to 11 years of storytelling', 'Emotional character arcs', 'Spectacular action sequences', 'Perfect fan service'],
        cons: ['Long runtime', 'Some plot conveniences']
    },
    {
        id: 'knight-seven-kingdoms',
        title: 'A Knight of the Seven Kingdoms',
        type: 'TV Series',
        year: '2025',
        genre: 'Fantasy, Adventure',
        rating: 8.2,
        reviews: 950,
        description: 'A century before the events of Game of Thrones, two unlikely heroes wander Westeros - a young, naive but courageous knight, Ser Duncan the Tall, and his diminutive squire, Egg.',
        fullReview: 'This series offers a refreshing take on the Game of Thrones universe, focusing on smaller-scale adventures and character-driven storytelling. The relationship between Duncan and Egg provides heart and humor, while still maintaining the political intrigue the franchise is known for.',
        pros: ['Character-focused storytelling', 'Fresh perspective on Westeros', 'Strong chemistry between leads', 'Beautiful cinematography'],
        cons: ['Slower pace than GOT', 'Limited scope compared to other series']
    },
    {
        id: 'dark',
        title: 'Dark',
        type: 'TV Series',
        year: '2017-2020',
        genre: 'Sci-Fi, Thriller, Mystery',
        rating: 8.8,
        reviews: 1600,
        description: 'A family saga with a supernatural twist, set in a German town where the disappearance of two young children exposes the relationships among four families.',
        fullReview: 'Dark is a masterclass in complex storytelling, weaving together multiple timelines and generations into a coherent and mind-bending narrative. The series demands attention but rewards viewers with one of the most satisfying and well-planned conclusions in television history.',
        pros: ['Intricate and well-planned plot', 'Atmospheric cinematography', 'Strong performances', 'Satisfying conclusion'],
        cons: ['Complex timeline can be confusing', 'Requires full attention', 'Subtitles for non-German speakers']
    },
    {
        id: 'the-100',
        title: 'The 100',
        type: 'TV Series',
        year: '2014-2020',
        genre: 'Sci-Fi, Drama',
        rating: 7.6,
        reviews: 1400,
        description: 'Set 97 years after a nuclear war has destroyed civilization, a spaceship housing humanity\'s lone survivors sends 100 juvenile delinquents back to Earth.',
        fullReview: 'The 100 starts as a teen drama but evolves into a complex exploration of survival, morality, and leadership. The series isn\'t afraid to make bold choices and challenge its characters with impossible decisions, creating a compelling post-apocalyptic narrative.',
        pros: ['Strong character development', 'Moral complexity', 'Engaging world-building', 'Unpredictable plot'],
        cons: ['Inconsistent quality across seasons', 'Some melodramatic moments', 'Controversial final season']
    },
    {
        id: 'dune',
        title: 'Dune',
        type: 'Movie',
        year: '2021',
        genre: 'Sci-Fi, Adventure',
        rating: 8.5,
        reviews: 2100,
        description: 'Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe.',
        fullReview: 'Denis Villeneuve\'s Dune is a visual masterpiece that successfully adapts Frank Herbert\'s complex novel. The film\'s stunning cinematography, Hans Zimmer\'s powerful score, and meticulous world-building create an immersive sci-fi epic that honors the source material.',
        pros: ['Breathtaking visuals', 'Phenomenal score', 'Faithful adaptation', 'Outstanding performances'],
        cons: ['Slow pacing for some', 'Ends abruptly (Part 1)', 'Complex for newcomers']
    },
    {
        id: 'maze-runner',
        title: 'Maze Runner',
        type: 'Movie',
        year: '2014',
        genre: 'Action, Sci-Fi, Thriller',
        rating: 6.8,
        reviews: 980,
        description: 'Thomas wakes up in an elevator, remembering nothing but his own name. He emerges into a world of about 60 teen boys who have learned to survive in a completely enclosed environment.',
        fullReview: 'Maze Runner offers an entertaining dystopian thriller with an intriguing premise. While it follows familiar YA tropes, the mystery of the maze and the survival elements keep viewers engaged. The action sequences are well-executed, though the film doesn\'t quite reach the heights of its premise.',
        pros: ['Intriguing premise', 'Good action sequences', 'Strong ensemble cast', 'Effective world-building'],
        cons: ['Familiar YA tropes', 'Some plot holes', 'Uneven pacing']
    },
    {
        id: 'iron-man',
        title: 'Iron Man',
        type: 'Movie',
        year: '2008',
        genre: 'Action, Sci-Fi, Adventure',
        rating: 7.9,
        reviews: 2100,
        description: 'After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.',
        fullReview: 'Iron Man launched the MCU with style, thanks largely to Robert Downey Jr.\'s charismatic performance as Tony Stark. The film balances action, humor, and character development perfectly, establishing the template for future Marvel films while standing on its own as an excellent superhero origin story.',
        pros: ['Robert Downey Jr.\'s iconic performance', 'Perfect blend of action and humor', 'Strong origin story', 'Practical effects hold up well'],
        cons: ['Weak villain', 'Third act CGI battle', 'Some pacing issues']
    },
    {
        id: 'spider-man',
        title: 'Spider-Man: No Way Home',
        type: 'Movie',
        year: '2021',
        genre: 'Action, Adventure, Sci-Fi',
        rating: 8.7,
        reviews: 3200,
        description: 'With Spider-Man\'s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.',
        fullReview: 'No Way Home is a love letter to Spider-Man fans, bringing together elements from multiple Spider-Man franchises in a way that feels earned and emotional. The film successfully balances fan service with genuine character growth, delivering one of the most satisfying Spider-Man stories ever told.',
        pros: ['Emotional storytelling', 'Perfect fan service', 'Strong performances', 'Multiverse done right'],
        cons: ['Relies heavily on nostalgia', 'Some CGI inconsistencies', 'Convenient plot devices']
    }
];

// Comments storage
let commentsData = {
    'game-of-thrones': [
        { author: 'John Doe', date: '2026-02-10', rating: 5, text: 'One of the best TV series ever made! The character development is incredible.' },
        { author: 'Sarah Smith', date: '2026-02-09', rating: 4, text: 'Amazing show, though the final season was disappointing.' }
    ],
    'dune': [
        { author: 'Mike Johnson', date: '2026-02-11', rating: 5, text: 'Visually stunning! Denis Villeneuve is a master filmmaker.' },
        { author: 'Emma Wilson', date: '2026-02-10', rating: 5, text: 'The cinematography and score are absolutely breathtaking.' }
    ],
    'dark': [
        { author: 'Alex Brown', date: '2026-02-12', rating: 5, text: 'Mind-bending and perfectly executed. Best time travel show ever!' }
    ]
};

// Initialize comments from localStorage
function initializeComments() {
    const stored = localStorage.getItem('movieComments');
    if (stored) {
        commentsData = JSON.parse(stored);
    }
}

// Save comments to localStorage
function saveComments() {
    localStorage.setItem('movieComments', JSON.stringify(commentsData));
}

// Add comment
function addComment(movieId, author, rating, text) {
    if (!commentsData[movieId]) {
        commentsData[movieId] = [];
    }
    
    const comment = {
        author: author,
        date: new Date().toISOString().split('T')[0],
        rating: rating,
        text: text
    };
    
    commentsData[movieId].unshift(comment);
    saveComments();
    return comment;
}

// Get comments for a movie
function getComments(movieId) {
    return commentsData[movieId] || [];
}

// Get movie by ID
function getMovieById(id) {
    return moviesData.find(movie => movie.id === id);
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        nav.style.background = 'rgba(0, 0, 0, 0.95)';
        nav.style.backdropFilter = 'blur(20px)';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0.3)';
        nav.style.backdropFilter = 'blur(10px)';
    }
    
    lastScroll = currentScroll;
});

// Card hover effects
document.querySelectorAll('.movie-card, .featured-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Initialize
initializeComments();

// Export for use in other pages
if (typeof window !== 'undefined') {
    window.moviesData = moviesData;
    window.addComment = addComment;
    window.getComments = getComments;
    window.getMovieById = getMovieById;
}
