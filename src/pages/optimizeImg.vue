<template>
  <div class="prompt-title">
    <div class="title-container">
      <div class="title">OPTIMIZE IMAGE</div>
    </div>

  </div>

  <div class="input-area">
    <div class="step-row">
      Reference picture address
    </div>
    <el-input type="textarea" :rows="2" style="width: 50%; margin: 0 auto" v-model="imgUrl" placeholder="Enter your image Url" />
    <div class="step-row" style="margin-top: 40px">
      Fill in the prompt and click
      <el-button type="primary" style="margin-left: 10px" @click="getImageToImg" v-loading="imgLoading">Optimize image</el-button>
    </div>
    <el-input type="textarea" :rows="2" style="width: 50%; margin: 0 auto" v-model="prompt" placeholder="Enter your image prompt" />
    <div style="display: flex; margin: 20px 0; justify-content: center;">
      <el-button type="primary" @click="example()">Example image url</el-button>
    </div>

  </div>

  <div v-if="result.length">
    <div>Result</div>
    <div class="output-area">
      <div v-for="(item) in result" >
        <img :src='item'>
      </div>
    </div>
  </div>


</template>

<script>
import axios from 'axios';
const apikey = import.meta.env.VITE_API_KEY

export default {
  name: "index",
  data () {
    return {
      apiKey: apikey,
      prompt: '',
      result: [],
      imgLoading: false,
      imgUrl: '',
    }
  },
  methods: {
    example () {
      this.imgUrl = 'https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f42952d0338f447a92f14a655dedba5f~tplv-k3u1fbpfcp-watermark.image'
    },
    // 图生图功能
    async getImageToImg () {
      if (!this.imgUrl) return
      const bodyInfo = JSON.stringify(
          {
            "key": this.apiKey,
            "model_id": "midjourney",
            "prompt": this.prompt ,
            "init_image": this.imgUrl,
            "negative_prompt": null,
            "width": "512",
            "height": "512",
            "samples": 1,
            "num_inference_steps": "30",
            "safety_checker": "no",
            "enhance_prompt": "yes",
            "seed": null,
            "guidance_scale": 7.5,
            "webhook": null,
            "track_id": null
          });
      const options = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios.defaults.crossDomain = true
      axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
      this.imgLoading = true
      const result = await axios.post('/img-api', bodyInfo, options)
      const resultData = result.data.output
      setTimeout(() => {
        this.imgLoading = false
        this.result = [...resultData]
      }, 1000)
    },
  }
}
</script>
<style>
body{
  margin: 0;
  background: #03091f;
}
</style>

<style scoped>
.prompt-title {
  width: 100%;
  position: relative;
}
.step-row {
  color: #fff;
  margin: 0 auto;
  margin-bottom: 12px;
}
.title-container {
  display: flex;
  justify-content: center;
}
.title {
  font-size: 28px;
  left: 0;
  /*color: transparent;*/
  margin: 20px auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(135deg,#846ff4,#f17674);
}
.output-area {
  display: flex;
  margin:0 auto 50px;
  max-width: 50%;
  justify-content: space-between;
}
.output-area img {
  max-width: 300px;
  display: block;
}

.input-area {
  padding: 20px 0 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.img-wrapper>div>img{
  width: 100%;
  display: block;
}
</style>