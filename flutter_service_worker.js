'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "3f1b0f506b6a1235db2fb579dc1e131b",
"index.html": "9d6e8dad62eb843d5d55bc535026a9e1",
"/": "9d6e8dad62eb843d5d55bc535026a9e1",
"main.dart.js": "05d23a3469d98d8b7652098310e2b682",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icons/logo-aerium-1.png": "c9c1749b275f61ebc563d6596ccf2569",
"icons/logo-aerium-2.png": "58b131c1e81194452cb702693c040a92",
"manifest.json": "7bf3bc5d8d958b9b43e71a1dfd46427b",
".git/ORIG_HEAD": "dd48bd412542eb9f1fca7b774ceb874f",
".git/config": "825565bfcd0ee57ce02371c5c7d8ed02",
".git/objects/93/ecf1491c22b600c650097cfbdb1e2e43a59480": "9e1887fce69724f5f52374e125d57067",
".git/objects/60/998f9d1554eec0eda44cea521144e17b1f93f4": "e82d48121bb6809851dba3f7c824ac0d",
".git/objects/34/ebbe088e2a444119cef7f55924d79f42b7b4e8": "af3254951df5e9bf3646085720bf733e",
".git/objects/ad/32e05c8ea46d5be64d03d6d6d0eea696ee8451": "1b0e7e83cbf1c074e259279221d279fe",
".git/objects/e2/de7c17827cf3f113dbb47d6d4d15562b2ce7c1": "3c39c6be536555548a0176b376469d16",
".git/objects/fd/a3a8096be4210c48cc7838daf3bf5b4536394a": "343282b8b24faac7f42b711d23327e82",
".git/objects/cf/42ed0b5c293a15f438d1a9485e4477246c3a25": "c58dcd576ce699398b1b17dccfeb2caa",
".git/objects/ec/f9695145b790c045fee3e1ebf13d812c4a2270": "8f50634ee33618457d28dbb90c35b9b4",
".git/objects/4b/42e5635ebcee32890f460d12c7ec8928099c1b": "f5a65cfe8ee83970785709532aff119f",
".git/objects/pack/pack-17bf74733cb747cd3855d8461cfe6de9d670442a.idx": "9849c5d717029576e6654b7d353be056",
".git/objects/pack/pack-17bf74733cb747cd3855d8461cfe6de9d670442a.pack": "5a22fe674d981bcf4edbe5acc993c3e5",
".git/objects/7e/46adda13a948ac51a34ffd8e06ee8f795a52e3": "8bae0391dd145350f564a76090ee0a80",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/19/3a855d9c9eb50c6016ad61d48d1ec2bdbd1b79": "a93ade9f8d99c04274ee8d715c7bb7c8",
".git/objects/86/b55b23bb0c354a97f6451d0c20723a9d8d785a": "27b3a89fd03ce69b0f80a010052e8028",
".git/objects/00/8c0080fd7f0bd576543df9643fc84e3cea82fb": "a5542a3ac451bb6d8deaac6248eaa179",
".git/objects/6e/fc886b4f84324ce42299ffc0229a0ff288e6fc": "f906399b4cc777df4149aa83360a0f3b",
".git/objects/5c/e96a3b63d92ed0b9ee714e059e5de3ebd4637c": "31b9cc578423105edebd3e53a5c249af",
".git/objects/91/d76e6c5941dcbd763dbae15c2a403d9a06493f": "6003c4ad999580ca4f3bb67211845aca",
".git/objects/39/21ca97162f0deaceb900b79ed38cd47523ff79": "c23d6d724902e65412f6b3a59c63cc2c",
".git/objects/90/e8c0368496f2d2109048af90c40cfc6f9a70ed": "38754a04769c0e49522388b6b48d3325",
".git/objects/b7/39935efe03ce30c52afd97ba660bd665a0c41e": "3e2477b1f50c070ebdf2a31548e3372b",
".git/objects/db/e49508d15799eb95cefd8d82b7ffa3c6e23864": "f0f253b2f23c9601a176d1ee3adfe253",
".git/objects/a6/82b653f55b1db41dab88bebe811c0c071c4af7": "9883de2fb12d0fa77c2b00db12a64fbc",
".git/objects/cd/d9ef8e935b74056db193647914aaa09f62d551": "7e085ea0496df722304203c9acaadaa6",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/70/111eed3a47942662259f634d4bb01d842e36ab": "fb20f9dee9ee0bcc7715a7234adca9d5",
".git/objects/76/2cdd520a22a2f4ad4517f23dd322a47d05b1a3": "017a2ecc7dbbda0cef8003185686eea2",
".git/objects/8b/d79059bb8ca37f8cf0fe16975de14113398ddb": "08bfe715ba11e0c9ad4867f69034ea93",
".git/objects/14/026914cb08bea9ca81b9980b2b4b70c2eea2d5": "10eb8dc00b97a66523339266c72499d6",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fe7517df425d5d415dc4c4cb422cdc4d",
".git/logs/refs/heads/master": "fe7517df425d5d415dc4c4cb422cdc4d",
".git/logs/refs/remotes/origin/HEAD": "82c2e9a01324a90850bc17c67c48e2c4",
".git/logs/refs/remotes/origin/master": "679bbce49374c4f5fb17c5b2a5d32e99",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "598c96b14ce6c55bef68321712f65490",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "598c96b14ce6c55bef68321712f65490",
".git/index": "50d3c6de89368b8d4349172cab42afe6",
".git/packed-refs": "d5ad38f5f6b4e32b2f3f4aa6faa5342f",
".git/COMMIT_EDITMSG": "60d2c3654fdf9b9c1db0462aa60ca7b4",
".git/FETCH_HEAD": "ea86fadae2b2389ac943264c27ae2987",
"assets/AssetManifest.json": "a08c7e77181b6325131d191712a795dd",
"assets/NOTICES": "9422504d024e97474eaee4094bbdfc44",
"assets/FontManifest.json": "a78f950d25c1e29b92a4a309465e60cd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "a2bbdbf8ee3e7b49dc5c43e73e125ec0",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "42741b20a4599d4967eb8d66468edd07",
"assets/fonts/MaterialIcons-Regular.otf": "e5882d14f52144f8162a0bc557718bb3",
"assets/assets/screenshots/8.jpg": "95799f71c9817f376085c3898b75d287",
"assets/assets/screenshots/9.jpg": "e727c315acf66548049c51eb6c6bbc9e",
"assets/assets/screenshots/5.gif": "63b922b2439e4b9d8c82cb0d70d49b29",
"assets/assets/screenshots/6.gif": "73e6970dd99c11e67c4ef508b6375487",
"assets/assets/screenshots/3.gif": "045c76d00225ca68992c0dfdeca8d667",
"assets/assets/screenshots/11.jpg": "865a19485fc0879161062afd25ce23bf",
"assets/assets/screenshots/10.jpg": "ee1b6eee2d5df5a5bfdcb686266b75a0",
"assets/assets/screenshots/4.jpg": "f114c609432d9115658f5477900f66a7",
"assets/assets/screenshots/7.jpg": "2a56579d6ae3958c6ef6e14285d436dd",
"assets/assets/screenshots/2.jpg": "e16664ace87aa12b2266e6f8127ca05f",
"assets/assets/screenshots/1.jpg": "396c571e13c03fa3ddd14f13c601b8ad",
"assets/assets/screenshots/0.jpg": "d7a4be69fcea5718ce8fdaa844ce0988",
"assets/assets/images/ios-down-arrow.png": "fa4679d2972f1d11355142a60ed34ede",
"assets/assets/images/DAVID_COBBINA_CV.pdf": "0516a6d443027d43295e07518ea5c67a",
"assets/assets/images/down-arrow.png": "4393cd5feeb20fb468c7eb223d1bbd06",
"assets/assets/images/david-cobbina-cv.pdf": "056eac309f96f0152447de93b0d9f6ab",
"assets/assets/images/associate_android_dev.png": "496dc53d08eec0434eeeae9887955ec8",
"assets/assets/images/cloud_developer_cert.png": "1ca2e8a34f3acd90d81a67673b3b42be",
"assets/assets/images/data_science_cert.png": "1364c23105bfbb8c9197f7ad1f9dd245",
"assets/assets/images/projects/phan_thiet_230430/pt_cover.gif": "0fbc65bd0ed9032d32e9272f06f2e971",
"assets/assets/images/projects/phan_thiet_230430/screens.png": "fcf3593b4dfc111079e5a241f9fe5acc",
"assets/assets/images/projects/phan_thiet_230430/works.png": "5c6f8eb3a22f703781aad6c2528cf0cd",
"assets/assets/images/projects/phan_thiet_230430/phan_thiet_cover.png": "016fb0c39c14477c086e03bcaa1f0afc",
"assets/assets/images/cmu_cert.png": "522cfd8c2bf621d86dbbca32c7624377",
"assets/assets/images/circle.png": "663d5187ada8666bfa87120d1665605f",
"assets/assets/images/right-arrow.png": "62a7bab73a0fe40acd3f4555adfcab91",
"assets/assets/images/android_basics_cert.png": "3279aee63a95e1b4df4e4999364f8749",
"assets/assets/images/works.png": "5c6f8eb3a22f703781aad6c2528cf0cd",
"assets/assets/images/david_legend.png": "bac667358275697e63db4c888a736df9",
"assets/assets/images/dev_meditate.png": "742e79b9b388e0a9304a12eb0f8f6291",
"assets/assets/images/profile.png": "0f5aa4ae166d290ede96629fe54d55ba",
"assets/assets/images/down-arrow-2.png": "de203dedb01f2871b4ebbec490c20a6c",
"assets/assets/images/google_play.png": "7c42f3803d546db3d393106501dba541",
"assets/assets/images/profile2.png": "511126785526247fdf719a4a7a9d4063",
"assets/assets/images/skills.png": "2bd1870ebedbbd39a41827675a2846c3",
"assets/assets/images/up-arrow.png": "d0c6457f5704962b99f0e6aa3e9b18e7",
"assets/assets/images/skills1.png": "77752281625f377820cdc5de7e66512c",
"assets/assets/images/skills2.png": "5849f99db0aaf1026199cd184087deae",
"assets/assets/fonts/visuelt/VisueltPro-Black.ttf": "691b6f9aa3ee625e3cd8da2f8849a126",
"assets/assets/fonts/visuelt/VisueltPro-ExtraLight.ttf": "90bfa0766e43260710e3c6ac0f78c9e9",
"assets/assets/fonts/visuelt/VisueltPro-Regular.ttf": "0f8cd2494eb8c5e3a33352b2dd38fd61",
"assets/assets/fonts/visuelt/VisueltPro-Bold.ttf": "18acd33c965a455418d4204f0f334ea8",
"assets/assets/fonts/visuelt/VisueltPro-Thin.ttf": "82d7b5b67c24f00acb08f2dccf1fd03b",
"assets/assets/fonts/visuelt/VisueltPro-Medium.ttf": "cf4dbc20776a2b309fe30a9bbfe7de0a",
"assets/assets/fonts/visuelt/VisueltPro-Light.ttf": "2a1df2ff00c2611bf1b7fdeeaeebfa59",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
