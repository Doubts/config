var uploadVideo={YOUTUBE_BASE_URL:"https://www.googleapis.com/upload/youtube/v3/videos",INFO_URL:"https://preview.diigo.com/api/v3/awe/upload/?user_id=luokebi",getGoogleOauthToken:function(){return new Promise(function(a,b){chrome.identity.getAuthToken({interactive:!0},function(c){c?a(c):b()})})},uploadToYoutube:function(a,b){var c=this;return c._upload(a,c.YOUTUBE_BASE_URL,b)},uploadToGoogleDrive:function(a,b){var c=this;return c._upload(a,null,b)},_upload:function(a,b,c){return this.getGoogleOauthToken().then(function(d){return new Promise(function(e,f){if(b)var g={snippet:{title:a.name.replace(/\.webm$/,""),description:"Test"},status:{privacyStatus:"Unlisted"}};else var g={title:a.name.replace(/\.webm$/,""),shareable:!0,shared:!0};var h=new MediaUploader({baseUrl:b,file:a,token:d,metadata:g,params:{part:Object.keys(g).join(",")},onError:function(a){console.log(a),f(a)},onProgress:function(a){var b=Date.now(),d=a.loaded,e=a.total,f=(d/((b-this.uploadStartTime)/1e3),100*d/e);c&&c(f)},onComplete:function(a){var b=JSON.parse(a);e(b)}});h.upload()})})},uploadInfo:function(a){var b=this;return new Promise(function(c,d){$.ajax({type:"POST",url:b.INFO_URL,contentType:"application/json; charset=utf-8",data:JSON.stringify(a),success:function(a){console.log(a),c(a)},error:function(a,b){d(b)}})})}};