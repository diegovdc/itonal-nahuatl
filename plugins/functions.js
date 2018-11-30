import Vue from 'vue'
import * as R from 'ramda'
import {
  baseUrl
} from '../base-url'
import { mapState } from 'vuex';
Vue.mixin({
  data() {
    return {
      baseUrl
    }
  },
  computed: {
    ...mapState(['trans', 'lang']),
  },
  methods: {
    titulo: R.path(['attributes', 'titulo']),
    slug: R.path(['attributes', 'slug']),
    audio: R.path(['attributes', 'audio']),
    imagen: R.path(['attributes', 'imagen']),
    getTrans(or, path) {
      return R.pathOr(or, path.concat(this.lang), this.trans)
    }
  }
})
