<script>


export default {
    name: "ImageUploader",
 data(){
    return {
      images: [],
      imagePreviews: [],
    }
  },

  methods :{
    openFileInput() {
      this.$refs.fileInput.click();
    },

    handleFileUpload(event) {
      const files = event.target.files;
      const remainingSlots = 10 - this.images.length;

      if (files.length > remainingSlots) {
        window.alert("You can only upload up to 10 images.");
        return;
      }

      

      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.readAsDataURL(files[i]);
        reader.onload = () => {
          this.imagePreviews.push(reader.result);
          this.images.push(files[i]);
        };
      }
    },

    removeImagePreview(index) {
      this.imagePreviews.splice(index, 1);
      this.images.splice(index, 1);
    },
  }
 }



</script>

<template>
  <div class="flex items-center justify-center p-5">
    <div class="flex flex-col justify-center items-center sm:mx-[0px] md:mx-[400px]">
  <div @click="openFileInput" class="dropzone">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.3335 29.3333L12.0337 18.6331C13.8561 16.8106 16.8109 16.8106 18.6333 18.6331L29.3335 29.3333M24.6668 24.6666L28.367 20.9664C30.1894 19.144 33.1442 19.144 34.9667 20.9664L38.6668 24.6666M24.6668 10.6666H24.6902M6.00016 38.6666H34.0002C36.5775 38.6666 38.6668 36.5772 38.6668 33.9999V5.99992C38.6668 3.42259 36.5775 1.33325 34.0002 1.33325H6.00016C3.42283 1.33325 1.3335 3.42259 1.3335 5.99992V33.9999C1.3335 36.5772 3.42283 38.6666 6.00016 38.6666Z"
            stroke="#333333"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <div class="text">Upload Images</div>
      
        <div class="">
          <label for="fileInput" class="cursor-pointer">
            <span class="text-[#1D80F5]">Select upto 10 images</span>
           
            <input
              :multiple="true"
              type="file"
              accept="image/*"
              ref="fileInput"
              @change="handleFileUpload"
              class="hidden"
            />
          </label>
        </div>
      
      </div>

      <div v-if="imagePreviews.length" class="mt-5 -ml-[24px] grid grid-cols-3">
  <div
    v-for="(preview, index) in imagePreviews"
    :key="index"
    class="container relative"
  >
    <div
      class="flex flex-row flex-wrap h-full  px-4 pt-8 pb-8 rounded-lg overflow-hidden text-center relative object-cover"
    >
      <img
        :src="preview"
        alt="preview image"
        class="min-h-[100px] max-h-[100px] min-w-[100px] max-w-[100px] rounded-lg"
      />
      <button @click="removeImagePreview(index)" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div class="text-black hover:fill-current hover:text-black">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 13L13 1M1 1L13 13"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </button>
    </div>
  </div>
</div>


</div>
  </div>

</template>

<style scoped>
.dropzone {
  width: 203px;
  height: 203px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 16px;
  border: 2px dashed #b4b9b7;
  border-radius: 2px;
  background-color: #fff;
  transition: 0.3s ease all;
}

.text {
  font-size: 16px;
  align-items: center;
}



</style>
