const upload_preset = "yumyum"
const cloud_name = "dsukrs3kw"
const api_url = `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`

export const uploadImageToCloudinary = async (file) => {
   const data = new FormData();
   data.append("file", file);
   data.append("upload_preset", upload_preset);
   data.append("cloud_name", cloud_name);

   const res = await fetch(api_url, {
      method: "post",
      body: data,
   });

   const result = await res.json();
   return result.url;
}