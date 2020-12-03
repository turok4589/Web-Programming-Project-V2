<template>
  <div>
    <section class="hero is-large is-bold">
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-size-1">
           This is my about page
        </h1>
        <h2 class="title is-size-0.5">
           This is a fitness website that will help keep track of your exercises and calculate the amount of calories you burned during your workout with the information given.
        </h2>
        <h3 class ="title is-size-0.2">
           <br>In order for you to begin your fitness journey you need to create an account by hitting the sign up button. If you have already created an account hit the login button.
        </h3>
      </div>
      <br>
           <p class="content"><b>Selected:</b> {{ selected }}</p>
           <b-field label="Find an Exercise Type Name">
            <b-autocomplete
                rounded
                v-model="name"
                :data="filteredDataArray"
                placeholder="Exercise Names"
                icon="magnify"
                clearable
                @select="option => selected = option">
                <template slot="empty">No results found</template>
            </b-autocomplete>
       </b-field>
       <tbody>
                <tr v-for="(x, i) in data " 
                      :key="i"
                      :i="i"
                      :post="x">
                    <th>{{x.Exercise_Types_Name}}</th>
                </tr>
            </tbody>
    </div>
  </section>
  </div>
</template>

<script>
import session from "@/models/session";
import { getexercisetypesname } from "@/models/exercise";
    export default {
        data() {
            return {
                data: [],
                name: '',
                selected: null
            }
        },
        async created()
        {
           this.data = await getexercisetypesname();
        },
        computed: {
            filteredDataArray() {
                return this.data.filter((option) => {
                    return option.Exercise_Types_Name
                        .toString()
                        .toLowerCase()
                        .indexOf(this.name.toLowerCase()) >= 0
                })
            }
        }
    }
</script>