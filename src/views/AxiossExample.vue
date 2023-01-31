
<script>
import axios from 'axios'
export default({
  data () {
    return {
      info: null,
      pagination: 0,
      currentPage: 1,
      loading: true,
      errored: false
    }
  },
  filter: {
    currencydecimal (value) {
      return value.toFixed(2)
    }
  },
  mounted () {
    this.toPage(this.currentPage)
  },
  methods: {
    nextPage() {
      this.toPage(this.currentPage+1)
    },
    prevPage() {
      this.toPage(this.currentPage-1)
    },
    toPage(page) {
      this.loading = true
      axios
      .get('https://jakpost.vercel.app/api/podcast/page/'+(page))
      .then(response => {
        this.info = response.data.podcast
        this.pagination = response.data.pagination
        this.currentPage = page
        console.log(this.pagination.totalPage)
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
    },
    search() {
      this.loading = true
      console.log(this.dataSearch)
      axios
      .get('https://jakpost.vercel.app/api/search/'+(this.dataSearch)+'/date/1', {
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      })
      .then(response => {
        console.log(response)
        this.info = response.data.data
        this.pagination = response.data.pagination
        this.currentPage = response.data.pagination.currentPage
      })
      .catch(error => {
        console.log(error)
        this.errored = true
      })
      .finally(() => this.loading = false)
    }
  },
  compatConfig: { MODE: 3 }
})
</script>


<template>
    <div id="app">
      <h1>The JakPost Podcast List</h1>
      <div class="input-group .col-6 .col-md-4">
        <input type="text" class="form-control" placeholder="Seach the podcast..." aria-label="Seach the podcast..." aria-describedby="button-addon2" v-model.trim="dataSearch">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="search">Search</button>
      </div>


        <section v-if="errored">
            <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
        </section>
        <section v-else>
          <div v-if="loading">Loading...</div>
          <div v-else>
            <table class="table">
              <thead>
                <tr>
                  <!-- <th scope="col">No</th> -->
                  <th scope="col">Title</th>
                  <th scope="col">Pict</th>
                  <th scope="col">URL</th>
                </tr>
              </thead>
              <tbody>
                <tr
                v-for="podcast in info"
                v-bind:key="podcast"
                class="currency">
                  <!-- <td>{{ index+1 }}</td> -->
                  <td>{{ podcast.title }}</td>
                  <td><img :src=podcast.image alt=""></td>
                  <td>{{ podcast.link }}</td>
                </tr>
              </tbody>
            </table>  
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li class="page-item"><a class="page-link" :class="{disabled: currentPage == 1}" @click="prevPage" href="javascript:void(0);">Previous</a></li>
                <li class="page-item"
                v-for="page in pagination.totalPage"
                v-bind:key="page">
                  <a class="page-link" :class="{active: currentPage == page}" @click="toPage(page)" href="javascript:void(0);">
                    {{ page }}
                  </a>
                </li>
                <li class="page-item"><a class="page-link" :class="{disabled: currentPage == pagination.totalPage || currentPage == pagination}" @click="nextPage" href="javascript:void(0);">Next</a></li>
              </ul>
            </nav>
          </div>
          
        </section>
    </div>
</template>
