<template>
  <div>
    <v-container class="mt-4 px-4 main-wrapper">
      <div>
        <v-row class="my-4">

          <!--个人信息面板-->
          <v-col cols="3">
            <v-card
                class="mx-auto px-2 py-3"
                elevation="1"
            >
              <!--头像-->
              <section class="d-flex flex-column align-center my-4">
                <v-avatar size="100">
                  <img
                      src="../../assets/avatar.jpg"
                      alt="Coiggahou"
                  >
                </v-avatar>
                <div class="text-h5 mt-6">蔡嘉豪</div>
                <div class="text--secondary">Coiggahou2002</div>
              </section>
              <v-divider/>

              <!--基本信息-->
              <section class="py-2">
                <div class="ma-4">
                  <v-icon>mdi-account-circle-outline</v-icon>
                  <span class="text--secondary mx-2">200110617</span>
                </div>
                <div class="ma-4">
                  <v-icon>mdi-bookshelf</v-icon>
                  <span class="text--secondary mx-2">计算机学院 6 班</span>
                </div>
                <div class="ma-4">
                  <v-icon>mdi-book-outline</v-icon>
                  <span class="text--secondary mx-2">发布题解 55 篇</span>
                </div>
                <div class="ma-4">
                  <v-icon>mdi-thumb-up</v-icon>
                  <span class="text--secondary mx-2">获赞 1522</span>
                </div>
              </section>
              <v-divider/>

              <!--通过题目进度条展示-->
              <section class="d-flex flex-column align-center my-4">
                <div class="text--secondary mt-2 mb-4">已通过题目</div>
                <v-progress-circular
                    :rotate="-90"
                    :size="100"
                    :width="5"
                    :value="passedQuestionNumber / totalQuestionNumber * 100"
                    color="success"
                >
                  {{ passedQuestionNumber }} / {{ totalQuestionNumber }}
                </v-progress-circular>
              </section>
            </v-card>
          </v-col>

          <!--作业&实验&题解面板-->
          <v-col cols="8">

            <!--作业-->
            <div class="mx-2 mb-8">

              <v-card elevation="1" class="">
                <v-progress-linear
                    color="pink"
                    height="3"
                    value="100"
                    striped
                ></v-progress-linear>
                <section class="py-3 px-4">
                  <div class="text-h5 mt-3 mb-7 pink--text">
                    <v-icon color="pink">mdi-file-outline</v-icon>
                    作业
                  </div>
                  <div
                      v-for="(homework, index) in homeworks"
                      :key="index"
                      class="my-2"
                  >
                    <div class="text-h6">{{ homework.name }}</div>
                    <div class="text--secondary">发布者：{{ homework.publisher }}</div>
                    <div class="text--primary">{{ homework.description }}</div>
                    <v-divider class="my-4" v-if="index != homeworks.length - 1"/>
                  </div>
                </section>
              </v-card>
            </div>

            <!--实验-->
            <div class="mx-2 mb-8">
              <v-card elevation="1">
                <v-progress-linear
                    color="light-blue"
                    height="3"
                    value="100"
                    striped
                ></v-progress-linear>
                <section class="py-3 px-4">
                  <div class="text-h5 mt-3 mb-7 light-blue--text">
                    <v-icon color="light-blue">mdi-chemical-weapon</v-icon>
                    实验
                  </div>
                  <div
                      v-for="(experiment, index) in experiments"
                      :key="index"
                      class="my-2"
                  >
                    <v-row align="center">
                      <v-col cols="auto">
                        <span class="text-h6">{{ experiment.name }}</span>
                      </v-col>
                      <v-col cols="auto">
                        <v-chip small color="warning">进行中</v-chip>
                      </v-col>
                    </v-row>
                    <div class="text--secondary">发布者：{{ experiment.publisher }}</div>
                    <div class="text--primary">{{ experiment.description }}</div>
                    <v-divider class="my-4" v-if="index != experiments.length - 1"/>
                  </div>
                </section>
              </v-card>
            </div>

            <!--题解-->
            <div class="mx-2 mb-8">

              <v-card elevation="1">
                <v-progress-linear
                    color="light-green"
                    height="3"
                    value="100"
                    striped
                ></v-progress-linear>
                <section class="py-3 px-4">
                  <div class="text-h5 mt-3 mb-7 light-green--text">
                    <v-icon color="light-green">mdi-book-outline</v-icon>
                    我发布的题解
                  </div>
                  <div
                      v-for="(homework, index) in homeworks"
                      :key="index"
                      class="my-2"
                  >
                    <div class="text-h6">{{ homework.name }}</div>
                    <div class="text--secondary">发布者：{{ homework.publisher }}</div>
                    <div class="text--primary">{{ homework.description }}</div>
                    <v-divider class="my-4" v-if="index != homeworks.length - 1"/>
                  </div>
                </section>

              </v-card>
            </div>

          </v-col>

        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "StuHome",
  data() {
    return {
      passedQuestionNumber: 25,
      totalQuestionNumber: 223,
      homeworks: [
        {
          name: '线性表',
          description: '熟悉线性表的结构和操作',
          publisher: '张海军',
          deadline: '2021-10-07'
        },
        {
          name: '栈和队列',
          description: '先进先出和先进后出的数据结构',
          publisher: '黄虎杰',
          deadline: '2021-10-11'
        }
      ],
      experiments: [
        {
          name: '最短路算法实验',
          description: 'Dijkstra 和 SPFA',
          publisher: '张海军',
          deadline: '2021-11-09'
        },
        {
          name: '图的最小生成树',
          description: 'Prim 算法与 Kruskal 算法',
          publisher: '黄虎杰',
          deadline: '2021-12-11'
        },
        {
          name: '二叉树的遍历方法',
          description: '掌握二叉树的常见遍历方法',
          publisher: '任庆吉',
          deadline: '2021-12-24'
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped>
.main-wrapper {
  max-width: 1200px;
}
</style>