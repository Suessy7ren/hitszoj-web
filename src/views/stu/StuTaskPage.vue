<template>
 <div>
   <v-container id="main-view">
     <header class="text-h4 my-6">我的作业列表</header>
     <div
         v-for="(homework, index) in homeworks"
         v-bind:key="index"
     >
       <v-card
           outlined
           elevation="0"
           class="my-4"
       >
         <v-card-title>{{  homework.title }}</v-card-title>
         <v-card-subtitle>截止日期：{{  homework.deadline }}</v-card-subtitle>
         <v-card-actions class="mx-1">
           <v-chip small color="warning">进行中</v-chip>
           <v-spacer></v-spacer>
           <v-btn
               text
               @click="homework.showDetail = !homework.showDetail"
           >
             详情
             <v-icon>{{ homework.showDetail ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
           </v-btn>
         </v-card-actions>

         <v-expand-transition>
           <div v-show="homework.showDetail">
             <v-divider></v-divider>
              <dropzone/>
           </div>
         </v-expand-transition>
       </v-card>
     </div>
   </v-container>
 </div>
</template>

<script> 
import Dropzone from '@/components/Dropzone'


export default {
  name: "StuTaskPage",
  components:{
    Dropzone
  },

  methods: {

  },
  data () {
    return {
      homeworks: [
        {
          title: '线性表',
          deadline: '2021-09-01 23:59:59',
          showDetail: false
        },
        {
          title: '栈和队列',
          deadline: '2021-09-09 23:59:59',
          showDetail: false
        },
        {
          title: '最短路算法',
          deadline: '2021-12-01 23:59:59',
          showDetail: false
        }
      ]
    }
  }
}
</script>

<style scoped>
#main-view {
  max-width: 800px;
}
</style>