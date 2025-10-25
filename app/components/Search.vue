<template>
    <div class="search-input__wrapper">
        <input class="search-input__input" type="text" placeholder="Write here film name...">
        <button class="search__button">Find</button>
    </div>
</template>

<style scoped>
.search-input__wrapper {
    min-width: 450px;
    position: relative;
    margin-top: 25px;
    padding-right: 50px;
}

.search-input__input {
    padding: 10px 35px 10px 15px;
    width: 100%;
    
    color: var(--text-primary);
    font-size: 18px;

    background-color: var(--white);
    border-radius: 20px;
}

.search-input__input::placeholder {
    color: var(--text-placeholder);
}

.search__button {
    position: absolute;
    right: 0;
    
    padding: 10px 25px;
    color: var(--text-white);
    font-size: 18px;
    font-weight: 500;

    background-image: linear-gradient(130deg,#4EA2F1, #9356DB);
    border-radius: 20px;
}
</style>