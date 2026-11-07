function movieRating(stars) {
    if (stars === 5) {
        return "This movie is amazing!";
    } else if (stars === 4) {
        return "This movie is very good!";
    } else if (stars === 3) {
        return "This movie is good!";
    } else {
        return "This movie needs improvement!";
    }
}

console.log(movieRating(5));