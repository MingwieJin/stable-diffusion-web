<template>
  <div class="prompt-title">
    <div class="title-container">
      <div class="title">SD web</div>
    </div>
  </div>

  <div class="input-area">
    <el-input style="width: 50%; margin: 0 auto" v-model="prompt" placeholder="Please enter your prompt" />
    <div style="display: flex; margin: 20px 0; justify-content: center;">
      <el-button type="primary" @click="example">Example</el-button>
      <el-button type="primary" @click="getImage" v-loading="loading">Get images</el-button>
      <el-button type="primary" @click="goOptimizeImg()">Img2Img</el-button>
    </div>
  </div>

  <div v-if="result.length">
    <div>get image</div>
    <div class="output-area">
      <div v-for="item in result">
        <img :src="item" />
      </div>
    </div>
  </div>

  <div class="img-wrapper">
    <div v-for="item in imageList">
      <el-popover
          trigger="hover"
          placement="top"
          :content="item.prompt"
          width="800px"
      >
        <template #reference>
          <img :src="item.src" />
        </template>
      </el-popover>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const apikey = import.meta.env.VITE_API_KEY

export default {
  name: "index",
  data() {
    return {
      imageList: [
        {
          prompt:
            "A sprawling, futuristic city floats amidst the stars, surrounded by the glowing nebulas and swirling galaxies of deep space. Sleek, towering skyscrapers and complex transportation systems are lit up against the darkness, giving the impression of a thriving, advanced civilization.",
          src: "/images/1.png",
        },
        {
          prompt:
            "Space opera, a fantasy mural with people walking around a large mirror which like a moon, in the style of futuristic victorian, white and amber, spectacular show of ages, cinematic stills, kushan empire, rim light, captivatingly atmospheric cityscapes",
          src: "/images/2.png",
        },
        {
          prompt:
            "Beautiful girl Bulgarian tradinional folklor style with colorful gold hair, slender and soft eyes, wallpaper, light silver and lavender style, romantic mood, 32k ultra high definition, exaggerated facial features, super realism ultra - high resolution, 8K, - - aspect 6: 4",
          src: "/images/3.png",
        },
        {
          prompt:
            "Dragon, cyberpunk, wallpaper, anime, Photorealistic, extremely detailed, - - ar 16: 9",
          src: "/images/4.png",
        },
        {
          prompt:
            "A fantasy half elf woman wearing a fantasy style suit of armor in the style of iron man",
          src: "/images/5.png",
        },
        {
          prompt:
            "A 16 year old korean smiling girl running in the rain, nike running jacket, yellow running shorts, full figure, cinematic, cgsociety, 15mm",
          src: "/images/6.png",
        },
        {
          prompt: "A cute cat ultraman with anime vibes",
          src: "/images/7.png",
        },
        {
          prompt:
            "A painting of four people with a large circular hole in the center, in the style of yoann lossel, futuristic cityscapes, hans zatzka, cinematic sets, detailed crowd scenes, hall of mirrors, white and amber",
          src: "/images/11.png",
        },
        {
          prompt: "God of Mechanics born from Thunder, 8k",
          src: "/images/8.png",
        },
        {
          prompt:
            "Spirited Away style, Oil House, 8 floors' high, in the jungle",
          src: "/images/9.png",
        },
        {
          prompt:
            "Cinematic still, a vintage weird photography of rock n roll girls party in x the desert in zone 51 in the 60's with sci fy decorations, realistic Cinematic, Photoshoot, Shot on 25mm lens, Depth of Field, Tilt Blur, Shutter Speed 1/ 1000, F/ 22, White Balance, 32k, Super - Resolution, Pro Photo RGB, Half rear Lighting, Backlight, Dramatic Lighting, Incandescent, Soft Lighting, Volumetric, Conte - Jour, Global Illumination, Screen Space Global Illumination, Scattering, Shadows, Rough, Shimmering, Lumen Reflections, Screen Space Reflections, Diffraction Grading, Chromatic Aberration, GB Displacement, Scan Lines, Ambient Occlusion, Anti - Aliasing, FKAA, TXAA, RTX, SSAO, OpenGL - Shader's, Post Processing, Post - Production, Cell Shading, Tone Mapping, CGI, VFX, SFX, insanely detailed and intricate, hyper maximalist, elegant, dynamic pose, photography, volumetric, ultra - detailed, intricate details, super detailed, ambient",
          src: "/images/10.png",
        },


        {
          prompt: "A boat on the luminous colorful beautiful bioluminescent sea, starry sky, van Gogh style",
          src: "/images/33.png",
        },
        {
          prompt: "An abstract fox with strange hair and eyes on it, in the style of cyril rolando, whimsical cats, hans zatzka, 3d, colorful pixel - art, tanya shatseva, gold leaf",
          src: "/images/promptTips/1.png",
        },
        {
          prompt: "An abstract fox with strange hair and eyes on it, in the style of cyril rolando, whimsical cats, hans zatzka, 3d, colorful pixel - art, tanya shatseva, gold leaf",
          src: "/images/promptTips/2.png",
        },
        {
          prompt: "Cartoon - style illustration of a rooster in denim dungarees, dribbling a basketball on a farmyard court, surrounded by other farm animals, bright and bold colors",
          src: "/images/36.png",
        },
        {
          prompt: "Similar to previous picture, chinese gril sitting on the floor and working on laptop, in the style of silver and navy, smilecore, cinematic",
          src: "/images/37.png",
        },
      ],

      numberOfPics: 3, // 一次生成多少图片
      apiKey: apikey, // 你的SD api key
      prompt: "", // prompt 内容
      negative_prompt: // 不要prompt的内容
        "((out of frame)), ((extra fingers)), mutated hands, ((poorly drawn hands)), ((poorly drawn face)), (((mutation))), (((deformed))), (((tiling))), ((naked)), ((tile)), ((fleshpile)), ((ugly)), (((abstract))), blurry, ((bad anatomy)), ((bad proportions)), ((extra limbs)), cloned face, (((skinny))), glitchy, ((extra breasts)), ((double torso)), ((extra arms)), ((extra hands)), ((mangled fingers)), ((missing breasts)), (missing lips), ((ugly face)), ((fat)), ((extra legs)), anime",
      result: [],
      loading: false,
    };
  },
  methods: {
    goOptimizeImg() {
      this.$router.push("/optimizeImg");
    },
    example() {
      this.prompt =
        "ultra realistic close up portrait ((A sprawling, futuristic city floats amidst the stars, surrounded by the glowing nebulas and swirling galaxies of deep space))";
    },
    async getImage() {
      const bodyInfo = JSON.stringify({
        key: this.apiKey,
        model_id: "midjourney",
        prompt: this.prompt,
        negative_prompt: this.negative_prompt,
        width: "512",
        height: "512",
        samples: this.numberOfPics,
        num_inference_steps: "30",
        safety_checker: "no",
        enhance_prompt: "yes",
        seed: null,
        guidance_scale: 7.5,
        webhook: null,
        track_id: null,
      });
      const options = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      axios.defaults.crossDomain = true;
      axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
      this.loading = true;
      const result = await axios.post("/api", bodyInfo, options);
      this.loading = false;
      const resultData = result.data.output;
      this.result = [...resultData];
    },
  },
};
</script>

<style>
body {
  margin: 0;
  background: #03091f;
}
</style>

<style scoped>
.prompt-title {
  width: 100%;
  position: relative;
}
.title-container {
  display: flex;
  justify-content: center;
}
.title {
  font-size: 28px;
  left: 0;
  margin: 20px auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-image: linear-gradient(135deg,#846ff4,#f17674);
}
.output-area {
  display: flex;
  margin: 0 auto 50px;
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
.img-wrapper {
  padding: 0;
  column-count: 5;
  column-gap: 0;
}
.img-wrapper > div > img {
  width: 100%;
  display: block;
}
</style>
