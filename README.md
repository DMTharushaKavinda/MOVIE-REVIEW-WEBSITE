# CineVerse - Movie Review Website 🎬

A stunning, modern movie and TV series review website built with HTML, CSS, JavaScript, and Tailwind CSS.

## Features ✨

- **Multi-Page Website**: Home, Movies, TV Series, Reviews, and About pages
- **Interactive Reviews**: Users can add ratings and comments for each movie/TV series
- **Modern Design**: Premium UI with gradients, animations, and glassmorphism effects
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Filter Functionality**: Filter movies and TV series by genre
- **Local Storage**: Comments and ratings are saved in browser's local storage
- **Rich Content**: Includes reviews for popular titles like:
  - Game of Thrones
  - House of the Dragon
  - Dune
  - Dark
  - The 100
  - Avengers: Endgame
  - Spider-Man: No Way Home
  - Iron Man
  - Maze Runner
  - A Knight of the Seven Kingdoms

## How to Use 🚀

1. **Open the website**: Simply double-click on `index.html` to open it in your default browser
   - Or right-click and select "Open with" your preferred browser

2. **Navigate the site**:
   - **Home**: Featured content and trending movies/series
   - **Movies**: Browse all movie reviews with genre filters
   - **TV Series**: Browse all TV series reviews with genre filters
   - **Reviews**: See all reviews in one place
   - **About**: Learn more about CineVerse

3. **Read Reviews**: Click on any movie/TV series card to read the full review

4. **Add Your Review**:
   - Go to any review page (e.g., `review-got.html`)
   - Scroll to the "Share Your Thoughts" section
   - Enter your name
   - Select your rating (click on stars)
   - Write your review
   - Click "Post Review"
   - Your review will be saved and displayed!

## File Structure 📁

```
MOVIE-REVIEW-WEBSITE/
├── index.html              # Homepage
├── movies.html             # Movies listing page
├── tv-series.html          # TV Series listing page
├── reviews.html            # All reviews page
├── about.html              # About page
├── review-got.html         # Game of Thrones review
├── review-dune.html        # Dune review
├── review-dark.html        # Dark review
├── styles.css              # Main stylesheet
├── script.js               # JavaScript functionality
├── images/                 # Image folder (for custom posters)
└── README.md               # This file
```

## Technologies Used 💻

- **HTML5**: Semantic markup
- **CSS3**: Custom styles with animations and gradients
- **JavaScript**: Interactive features and local storage
- **Tailwind CSS**: Utility-first CSS framework (via CDN)
- **Google Fonts**: Inter and Playfair Display fonts

## Features in Detail 🎯

### Interactive Rating System
- Click on stars to rate (1-5 stars)
- Hover effects for better UX
- Visual feedback on selection

### Comment System
- Add your name and review
- Reviews are saved locally in browser
- View all community reviews
- Each review shows author, date, rating, and text

### Filtering
- Filter movies by: Action, Sci-Fi, Adventure, Thriller
- Filter TV series by: Fantasy, Sci-Fi, Drama, Thriller
- Smooth animations when filtering

### Modern Design Elements
- Gradient backgrounds
- Glassmorphism effects
- Smooth hover animations
- Custom scrollbar
- Responsive navigation
- Beautiful color scheme (purple/pink gradients)

## Browser Compatibility 🌐

Works best on modern browsers:
- Chrome (recommended)
- Firefox
- Edge
- Safari

## Customization 🎨

You can easily customize:
- **Colors**: Edit the gradient colors in `styles.css`
- **Content**: Add more movies/series in `script.js` (moviesData array)
- **Styles**: Modify `styles.css` for different looks
- **Layout**: Adjust HTML structure in any page

### Adding Your Own Images 🖼️

The website currently uses placeholder images from Unsplash. To add your own movie posters:

1. **Download movie posters** and save them in the `images/` folder
2. **Update the image sources** in the HTML files:
   - Open `index.html` (or other pages)
   - Find the `<img src="...">` tags
   - Replace the Unsplash URLs with your local images:
     ```html
     <!-- Before -->
     <img src="https://images.unsplash.com/photo-..." alt="Movie Name" class="featured-img">
     
     <!-- After -->
     <img src="images/game-of-thrones.jpg" alt="Game of Thrones" class="featured-img">
     ```
3. **Recommended image sizes**:
   - Featured cards: 800x1200px (portrait)
   - Movie cards: 600x900px (portrait)
   - Use JPG or WebP format for best performance

## Tips 💡

1. **View on larger screen**: The website looks best on desktop/laptop screens
2. **Try the filters**: Use genre filters on Movies and TV Series pages
3. **Add reviews**: Test the comment system by adding your own reviews
4. **Explore all pages**: Each page has unique content and design

## Future Enhancements 🚀

Potential additions:
- Search functionality
- User accounts
- Backend integration
- More movies and TV series
- Watchlist feature
- Social sharing

## Credits 👏

Created with ❤️ using modern web technologies.

---

**Enjoy exploring CineVerse!** 🎬✨
