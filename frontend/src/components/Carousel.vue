<template>
    <div>
        <div class="carousel">
            <ArrowButton
              arrowType="left"
              @click.native="showPrevElement"
              :disabled="this.reachedMaxLeft"
            />
            <Card
                class="current-element"
                :headline="currentElement.headline"
                :text="currentElement.text"
                :imgName="currentElement.imgName"
            />
             <ArrowButton
              arrowType="right"
              @click.native="showNextElement"
              :disabled="this.reachedMaxRight"
            />
        </div>
    <Indicators
      :elements="this.books"
      :currentElementIndex="this.currentElementIndex"
      :showElement="this.showElement"
    />
    </div>
</template>

<script>
import Card from "./Card"
import ArrowButton from "./ArrowButton"
import Indicators from "./Indicators.vue"

export default {
    name:'carousel',
    props: { cards: Array},
    components: {
        Card,
        ArrowButton,
        Indicators
    },
    data() {
        return {
            currentElementIndex: 0
        }
    },
    computed: {
        currentElement() {
            return this.cards[this.currentElementIndex];
        },
        reachedMaxLeft() {
            return this.currentElementIndex === 0;
        },
        reachedMaxRight() {
            return this.currentElementIndex === this.cards.length - 1;
        }
    },
    methods: {
        showNextElement() {
            this.currentElementIndex++;
        },
        showPrevElement() {
            this.currentElementIndex--;
        },
        showElement(elementIndex) {
            this.currentElementIndex = elementIndex;
        }
    }
}
</script>

<style scoped>
.carousel {
   display: flex;
   align-items: center;
   margin-bottom: 30px;
}

.btn {
    height: 90px;
    border: none;
    background: transparent;
    cursor: pointer;
    opacity: 0.5;
}

/*  you might check on media only screen */ 
/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (max-width: 768px) {
  .btn {
    display: none;
  }
}

.btn:focus {
  outline: none;
}

.btn:hover {
  opacity: 0.7;
}

.btn:disabled {
  opacity: 0.2;
  cursor: default;
}

.icon {
  height: 90px;
  width: auto;
}
</style>