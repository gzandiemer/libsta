<template lang="pug"> 
  div(style='display: flex; width: 100%')
    .media-content
      .content
        p
          strong
            a.has-text-info(:href='comment.url')
              | {{ comment.title }}
            span.tag.is-small #{{ comment.id }}
          br
          |               {{ comment.text}}
          br
          small.is-size-7
            | Submitted by:
            img.image.is-24x24(:src='comment.avatar')
    .media-right
      span.icon.is-small(@click='upvote(comment.id)')
        i.fa.fa-chevron-up
        strong.has-text-info {{ comment.votes }}
</template>

<script>
export default {
    name: 'BookComments',
    props: ['comment']
}
</script>