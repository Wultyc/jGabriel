<template>
    <!-- Start Section -->
    <section class="section" id="resume">
        <div class="container">

            <div class="row justify-content-center align-items-center">
                <div class="col-lg-4">
                    <div class="work-content mt-4">
                        <h2 class="text-capitalize">{{lifeEvents.info.title}}</h2>
                        <p class="mb-0 text-light-muted">{{lifeEvents.info.phrase}}</p>
                        <!-- <a href="#" class="btn btn btn-primary rounded mt-4 pt-2">See More <i class="mdi mdi-chevron-right"></i></a> -->
                    </div>
                </div>

                <div class="col-lg-8 ">
                    <div class="row">
                        <div class="main-timeline">
                            <div class="timeline mt-4" v-for="event in events" :key="event.id">
                                <div href="#" class="timeline-content">
                                    <div class="timeline-icon">
                                        <i data-feather="target" class="fea icon-md"></i>
                                    </div>
                                    <h3 class="title mb-0">{{event.title}}</h3>
                                    <a :href="event.url" class="company">{{event.company}} | {{event.role}}</a>
                                    <span class="badge skill-badge education-badge badge-light">{{event.start}} - {{event.end}}</span>
                                    <p class="description text-light-muted mt-2">
                                        {{event.description}}
                                    </p>
                                    <div class="description text-light-muted mt-2" v-if="event.responsibilities && event.responsibilities.length > 0">
                                        Responsabilities:
                                        <ul>
                                            <li v-for="resp in event.responsibilities" :key="resp">
                                                {{resp}}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><!-- end container -->
    </section><!-- end section -->
</template>

<script>
import Vue from 'vue'
import Event from '@/models/Event'

export default Vue.extend( {
    name: "LifeEvents",
    data(){
        return {
            events: []
        }
    },
    props: {
        lifeEvents: {
            type: Object,
            required: true
        },
    },
    mounted(){
        this.lifeEvents.experiences.forEach(element => {
            this.events.push( new Event(
                element.id,
                element.type,
                element.title,
                element.start,
                element.end,
                element.company,
                element.url,
                element.location,
                element.role,
                element.description,
                element.responsibilities,
            ))
        });
    }
})
</script>

<style>

</style>