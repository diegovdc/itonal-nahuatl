import Vue from 'vue'
import * as R from 'ramda'
import {
  baseUrl
} from '../base-url'
Vue.mixin({
  data() {
    return {
      baseUrl
    }
  },
  methods: {
    titulo: R.path(['attributes', 'titulo']),
    slug: R.path(['attributes', 'slug']),
    audio: R.path(['attributes', 'audio']),
    imagen: R.path(['attributes', 'imagen']),
  }
})
