<template>
  <div class="flex flex-col items-center justify-center min-h-screen p-4">
    
    <ThemeSwitcher></ThemeSwitcher>
    <div class="shadow-md rounded-lg p-6 w-full max-w-lg">
      <h2 class="text-2xl font-semibold mb-4 text-center">
        Upload a Text File
      </h2>
      <div class="flex items-center justify-center border border-dashed border-gray-400 rounded-lg p-6 mb-6 hover:border-gray-600 transition">
        <FileUpload
          mode="basic"
          name="demo"
          accept=".txt"
          choose-label="Upload File"
          @select="onFileSelect"
          class="text-center text-white hover:bg-blue-600 px-4 py-2 rounded-md cursor-pointer"
        />
      </div>
      <div v-if="fileContent">
        <h3 class="text-lg font-medium text-gray-600 mb-2">
          File Content:
        </h3>
        <Textarea 
          v-model="fileContent" 
          disabled 
          class="w-full h-40 border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        ></Textarea>
      </div>
    </div>
  </div>
</template>

  <script>
  import { ref } from "vue";
  import FileUpload from "primevue/fileupload";
  
  export default {
    components: {
      FileUpload
    },
    setup() {
      const fileContent = ref("");
  
      const onFileSelect = (event) => {
        const file = event.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          fileContent.value = reader.result;
        };
        reader.readAsText(file);
      };
  
      return {
        fileContent,
        onFileSelect,
      };
    },
  };
  </script>
  