<template>
    <div >
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center">
                <h1
                    class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-pry">
                    404</h1>
                <p class="mb-4 text-3xl tracking-tight font-bold text-text md:text-4xl ">Something's
                    missing.</p>
                <p class="mb-4 text-lg font-light text-text">The page you are looking for doesn't
                    exist.
                    You'll find lots to explore on the Job Board. </p>
                <router-link to="/job-board"
                    class="inline-flex text-white bg-pry hover:bg-pryHover font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-4">Back
                    to Job Board</router-link>
            </div>
        </div>
    </div>
</template>
