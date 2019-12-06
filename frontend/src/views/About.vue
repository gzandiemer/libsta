<template lang="pug">
  .about
    h1 LIBSTA - Per Libris Ad Astra
    .container 
      .logo-part
        img.logo(alt='logo' src='@/assets/logo-books.png')
      section.text-part
        | Libsta is imagined as a network of individual libraries serving as one online multilingual library.
        | Libsta is created to cover the need for an alternative library for the large international community of Berlin.
        | By becoming a member of Libsta you can create an avatar of your home library and let other members check what you lend or give away.
        | You can get also in touch with people whom you share a common reading taste by liking, commenting on and requesting books.
        | Don't let your books get dusty on shelves. Let them travel and influence many readers.
</template>

<style scoped>
h1 {
  margin-top: 30px;
  font-family: 'Merriweather', serif;
}
.logo-part {
  float: left;
  width: 50%;
}
.text-part {
  float: right;
  width: 50%;
  margin-top: 10%;
}
.logo {
  width: 350px;
  margin: 50px;
}
</style>
