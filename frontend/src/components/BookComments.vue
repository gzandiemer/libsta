<template>
    <div style="display: flex; width: 100%">
      <!-- <figure class="media-left">
        <img class="image is-64x64"
          :src="submission.submissionImage">
      </figure> -->
      <div class="media-content">
        <div class="content">
          <p>
            <strong>
              <a :href="comment.url" class="has-text-info">
                {{ comment.title }}
              </a>
              <span class="tag is-small">#{{ comment.id }}</span>
            </strong>
            <br>
              {{ comment.text}}
            <br>
            <small class="is-size-7">
              Submitted by:
              <img class="image is-24x24"
                :src="comment.avatar">
            </small>
          </p>
        </div>
      </div>
      <div class="media-right">
        <span class="icon is-small" @click="upvote(comment.id)">
          <i class="fa fa-chevron-up"></i>
          <strong class="has-text-info">{{ comment.votes }}</strong>
        </span>
      </div>
    </div>
</template>

<script>
export default {
    name: 'BookComments',
    props: ['comment']
}
</script>