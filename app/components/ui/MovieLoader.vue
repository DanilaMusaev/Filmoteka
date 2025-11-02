<script setup lang="ts"></script>

<template>
    <div class="movie-strip-loader">
        <div class="movie-strip"></div>
        <p>Uploading ABSOLUTE cinema<span class="dots"></span></p>
    </div>
</template>

<style scoped>
.movie-strip-loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 200px;
}

.movie-strip {
    width: 100px;
    height: 70px;
    background-image: url('/images/film-strip-loader.png');
    background-size: 600px 70px;
    border-radius: 5px;
    position: relative;
    animation: frameChange 7.2s infinite;
}

@keyframes frameChange {
    0% {
        background-position: 0 0;
    }
    13.89% {
        background-position: 0 0;
    }

    16.67% {
        background-position: -100px 0;
    }
    30.56% {
        background-position: -100px 0;
    }

    33.34% {
        background-position: -200px 0;
    }
    47.23% {
        background-position: -200px 0;
    }

    50.01% {
        background-position: -300px 0;
    }
    63.9% {
        background-position: -300px 0;
    }

    66.68% {
        background-position: -400px 0;
    }
    80.57% {
        background-position: -400px 0;
    }

    83.35% {
        background-position: -500px 0;
    }
    97.24% {
        background-position: -500px 0;
    }

    100% {
        background-position: 0 0;
    }
}

.movie-strip-loader p {
    margin-top: 20px;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: var(--text-secondary);
}

.dots {
    display: inline-block;
    width: 20px;
    text-align: left;
}

/* Или более сложный вариант с поочерёдным появлением точек */
.dots::after {
    content: '';
    animation: typing 1.5s infinite;
}

@keyframes typing {
    0% {
        content: '';
    }
    33% {
        content: '.';
    }
    66% {
        content: '..';
    }
    100% {
        content: '...';
    }
}
</style>
