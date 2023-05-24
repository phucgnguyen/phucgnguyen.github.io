'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "7bf3bc5d8d958b9b43e71a1dfd46427b",
"icons/logo-aerium-2.png": "58b131c1e81194452cb702693c040a92",
"icons/logo-aerium-1.png": "c9c1749b275f61ebc563d6596ccf2569",
"main.dart.js": "ecc93c91d213d156e26898e38bbaf400",
"index.html": "342afc505612ae9dca7802754c698680",
"/": "342afc505612ae9dca7802754c698680",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"version.json": "3f1b0f506b6a1235db2fb579dc1e131b",
"assets/FontManifest.json": "a78f950d25c1e29b92a4a309465e60cd",
"assets/NOTICES": "9422504d024e97474eaee4094bbdfc44",
"assets/fonts/MaterialIcons-Regular.otf": "e5882d14f52144f8162a0bc557718bb3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.smcbin": "4396a1da58009dd9d89854683dccd214",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/flutter_feather_icons/fonts/feather.ttf": "a2bbdbf8ee3e7b49dc5c43e73e125ec0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/AssetManifest.json": "9cd44786c904785bebdafc18e7ac176b",
"assets/assets/fonts/visuelt/VisueltPro-Bold.ttf": "18acd33c965a455418d4204f0f334ea8",
"assets/assets/fonts/visuelt/VisueltPro-Medium.ttf": "cf4dbc20776a2b309fe30a9bbfe7de0a",
"assets/assets/fonts/visuelt/VisueltPro-Thin.ttf": "82d7b5b67c24f00acb08f2dccf1fd03b",
"assets/assets/fonts/visuelt/VisueltPro-Black.ttf": "691b6f9aa3ee625e3cd8da2f8849a126",
"assets/assets/fonts/visuelt/VisueltPro-Regular.ttf": "0f8cd2494eb8c5e3a33352b2dd38fd61",
"assets/assets/fonts/visuelt/VisueltPro-Light.ttf": "2a1df2ff00c2611bf1b7fdeeaeebfa59",
"assets/assets/fonts/visuelt/VisueltPro-ExtraLight.ttf": "90bfa0766e43260710e3c6ac0f78c9e9",
"assets/assets/images/skills.png": "2bd1870ebedbbd39a41827675a2846c3",
"assets/assets/images/works.png": "5c6f8eb3a22f703781aad6c2528cf0cd",
"assets/assets/images/ios-down-arrow.png": "fa4679d2972f1d11355142a60ed34ede",
"assets/assets/images/data_science_cert.png": "1364c23105bfbb8c9197f7ad1f9dd245",
"assets/assets/images/DAVID_COBBINA_CV.pdf": "0516a6d443027d43295e07518ea5c67a",
"assets/assets/images/cmu_cert.png": "522cfd8c2bf621d86dbbca32c7624377",
"assets/assets/images/google_play.png": "7c42f3803d546db3d393106501dba541",
"assets/assets/images/associate_android_dev.png": "496dc53d08eec0434eeeae9887955ec8",
"assets/assets/images/skills2.png": "5849f99db0aaf1026199cd184087deae",
"assets/assets/images/right-arrow.png": "62a7bab73a0fe40acd3f4555adfcab91",
"assets/assets/images/projects/roam/roam_flow_chart.png": "50aa1d22e98a682fb24ad8beca7f306f",
"assets/assets/images/projects/roam/roam_profile.jpeg": "3351fb0171a75f53d2974e20e586db86",
"assets/assets/images/projects/roam/roam_cover.jpeg": "a67b0ed338d81feb4cf60955c3a821b2",
"assets/assets/images/projects/roam/roam_home.jpeg": "9bcacb5453047dca89cf69352742765f",
"assets/assets/images/projects/roam/roam_explore.jpeg": "545a73fcfd824fdc7aa66ec3b5601cf8",
"assets/assets/images/projects/roam/wireframes_onboarding.jpeg": "0793bcaad704dc77c2115eca32ec488b",
"assets/assets/images/projects/roam/wireframes_signup_login.jpeg": "3f9c2d5af711cbc401036749fca0ec76",
"assets/assets/images/projects/roam/wireframes_app.jpeg": "2fba25598d725ec44a6b828448535e3a",
"assets/assets/images/projects/roam/roam_onboarding.jpeg": "d6f2a2c09df8af0fc8708db8bd3c9a93",
"assets/assets/images/projects/roam/roam_overall.jpeg": "5c76cf22ede0a7955733f39d4439a055",
"assets/assets/images/projects/otp_package/otp_cover.png": "6fc7ff3a9d1b6d8cbb81348c8f2df184",
"assets/assets/images/projects/outfitr/outfitr_1.jpeg": "5a72c14039670e01bcbfaccbff889551",
"assets/assets/images/projects/outfitr/outfitr_6.jpeg": "8a986255dfcd301d00891cf0a6288df8",
"assets/assets/images/projects/outfitr/outfitr_2.jpeg": "b5c6638904552202a14d3d65f6d69116",
"assets/assets/images/projects/outfitr/outfitr_cover.jpg": "73c49501f831207eb63ca115c5b1dd31",
"assets/assets/images/projects/outfitr/outfitr_4.jpeg": "4f45a2d1f2735a813f9e3ce4ca83f351",
"assets/assets/images/projects/outfitr/outfitr_5.jpeg": "32317c7e7d7bf50c3ca110d6d393e670",
"assets/assets/images/projects/login_catalog/login8.png": "2bf8b3ab8d940dfb5c48069195c2d039",
"assets/assets/images/projects/login_catalog/login9.png": "4eb5737139e26eb31c1bea5e6e2c0a6b",
"assets/assets/images/projects/login_catalog/login_catalog_cover.jpg": "8142a609044c0f5b26df2964fe9304c4",
"assets/assets/images/projects/login_catalog/login4.png": "f5eb46c00b1ad99b48dc75648ae232c0",
"assets/assets/images/projects/login_catalog/login7.jpeg": "34412e31d874c3147f29d3bc522efbd2",
"assets/assets/images/projects/login_catalog/login5.png": "bafb620a4388df5ef86cff21ef895491",
"assets/assets/images/projects/foodybite/foodybite_cover.png": "969daa4932408c630eb26f795cd84840",
"assets/assets/images/projects/foodybite/foodybite_home.png": "831c86f2e1dd6fa238acd532e41b3607",
"assets/assets/images/projects/foodybite/foodybite_home_flow.png": "f144497bae302b17e440392f547410e7",
"assets/assets/images/projects/foodybite/foodybite_starting_flow.png": "77c7833485f0a71c95e3a74f3f01b7c4",
"assets/assets/images/projects/foodybite/foodybite_typography.png": "af6e1b156ad00cfb382824b30ba38a35",
"assets/assets/images/projects/foodybite/foodybite_review_favorite_notifications_flow.png": "e80ce1073e823a2fc83ddbf1515794f7",
"assets/assets/images/projects/aerium-v2/overall.jpg": "f114c609432d9115658f5477900f66a7",
"assets/assets/images/projects/aerium-v2/aerium_v2.jpg": "33ec4d62fe74fb6ee3b01301f92ceb9c",
"assets/assets/images/projects/aerium-v2/last.jpg": "ee1b6eee2d5df5a5bfdcb686266b75a0",
"assets/assets/images/projects/aerium-v2/typography.jpg": "e16664ace87aa12b2266e6f8127ca05f",
"assets/assets/images/projects/aerium-v2/first.jpg": "d7a4be69fcea5718ce8fdaa844ce0988",
"assets/assets/images/projects/disneyplus/disneyplus_theme.png": "b4a28335035d4b169f1033313801fcc5",
"assets/assets/images/projects/disneyplus/disneyplus_header.png": "1ef584f42c10fd2f994f44e35d281751",
"assets/assets/images/projects/disneyplus/disneyplus_cover.png": "ffa11a0c8f114e0a24b31bb1790f2ef8",
"assets/assets/images/projects/disneyplus/disneyplus_description.png": "f049e03a0d786b44d57f80e702f10a5c",
"assets/assets/images/projects/disneyplus/disneyplus_great_menu.png": "d13b01ee672be2e3e884fe866db90359",
"assets/assets/images/projects/disneyplus/disneyplus_the_end.png": "32e658209ce45e9227860a8c0fbf1b54",
"assets/assets/images/projects/disneyplus/disneyplus_components.png": "74d9e2263cebd38337ac2ae9d2f23b16",
"assets/assets/images/projects/disneyplus/mockups.png": "bfec31223be46e6c269d8bc71f3f707e",
"assets/assets/images/projects/disneyplus/disneyplus_profiles.png": "ee5c8f987396dbb6157911982b9e983d",
"assets/assets/images/projects/disneyplus/disneyplus_downloads_feature.png": "3bb3d18e2b7af7b62e3bc90a8deed037",
"assets/assets/images/projects/disneyplus/disneyplus_designs.png": "084289a49e4ec07af37d41eb0b919123",
"assets/assets/images/projects/disneyplus/disneyplus_more_description.png": "54c40930e0035fee095cc5f26e09e8d4",
"assets/assets/images/projects/disneyplus/disneyplus_home.png": "7c3f46edc91974a22db6ecab11e49cbd",
"assets/assets/images/projects/disneyplus/disneyplus_mockups.png": "ec3d2333044bc2622030e38eb84a1b90",
"assets/assets/images/projects/flutter_catalog/thanks.png": "f23385476a0df7db049d7b8f94714706",
"assets/assets/images/projects/flutter_catalog/typography.png": "b12b17f85e8e12bd2ccab08e987c640c",
"assets/assets/images/projects/flutter_catalog/activities.png": "56b8a82f91b3bb17fc2da735be8309e2",
"assets/assets/images/projects/flutter_catalog/flutter_catalog_cover.png": "529c018ceb7db5d85e0bba13a4cd19c3",
"assets/assets/images/projects/flutter_catalog/stats.png": "c6c5da388e4771644e3a0057737cc018",
"assets/assets/images/projects/flutter_catalog/onboarding.png": "78cd62661bd65bca48016781ec5af76d",
"assets/assets/images/projects/flutter_catalog/screens.png": "f384d904e19edcdf3b83ac9fab4a2514",
"assets/assets/images/projects/drop/drop_cover.png": "c50dd8fc206812051747e58cf5a8b345",
"assets/assets/images/projects/drop/drop_flowchart.png": "6601108c834215bb982c5fa49f586591",
"assets/assets/images/projects/drop/drop_description.gif": "7a0eede4ed79d2468eeaec6d30347b3c",
"assets/assets/images/projects/drop/drop_wireframes.gif": "155af5f6c5def746328626cfce09c163",
"assets/assets/images/projects/drop/drop_simple.png": "c4c00ba6b1933a304067dda102a922dd",
"assets/assets/images/projects/drop/drop_thanks.gif": "7f63f39ed7c894ee6e0755f77a39afb5",
"assets/assets/images/projects/drop/drop_minimal_design.png": "06c3434542050151428b3f66a0193244",
"assets/assets/images/projects/drop/drop_easy_access.gif": "7657c8f99a7a3a405cb71cb1f4bee892",
"assets/assets/images/projects/aerium-v1/portfolio_cover.png": "44d787594b26ade2562489ced20d9914",
"assets/assets/images/projects/aerium-v1/portfolio_design_3.png": "4b8a024161c0d3f30b858ac60b9286d0",
"assets/assets/images/projects/aerium-v1/portfolio_design_2.png": "415b12138860ce60055b3ce39e517fde",
"assets/assets/images/projects/nimbus/nimbus.jpg": "9f925a888c2ff02c9f1206f99c2b155d",
"assets/assets/images/projects/nimbus/nimbus_cover.jpg": "454409edbf32cc8432d70c69155a6016",
"assets/assets/images/circle.png": "663d5187ada8666bfa87120d1665605f",
"assets/assets/images/david-cobbina-cv.pdf": "056eac309f96f0152447de93b0d9f6ab",
"assets/assets/images/david_legend.png": "bac667358275697e63db4c888a736df9",
"assets/assets/images/android_basics_cert.png": "3279aee63a95e1b4df4e4999364f8749",
"assets/assets/images/dev_meditate.png": "742e79b9b388e0a9304a12eb0f8f6291",
"assets/assets/images/down-arrow.png": "4393cd5feeb20fb468c7eb223d1bbd06",
"assets/assets/images/down-arrow-2.png": "de203dedb01f2871b4ebbec490c20a6c",
"assets/assets/images/up-arrow.png": "d0c6457f5704962b99f0e6aa3e9b18e7",
"assets/assets/images/skills1.png": "77752281625f377820cdc5de7e66512c",
"assets/assets/images/cloud_developer_cert.png": "1ca2e8a34f3acd90d81a67673b3b42be",
"assets/assets/screenshots/3.gif": "045c76d00225ca68992c0dfdeca8d667",
"assets/assets/screenshots/8.jpg": "95799f71c9817f376085c3898b75d287",
"assets/assets/screenshots/10.jpg": "ee1b6eee2d5df5a5bfdcb686266b75a0",
"assets/assets/screenshots/11.jpg": "865a19485fc0879161062afd25ce23bf",
"assets/assets/screenshots/6.gif": "73e6970dd99c11e67c4ef508b6375487",
"assets/assets/screenshots/9.jpg": "e727c315acf66548049c51eb6c6bbc9e",
"assets/assets/screenshots/1.jpg": "396c571e13c03fa3ddd14f13c601b8ad",
"assets/assets/screenshots/4.jpg": "f114c609432d9115658f5477900f66a7",
"assets/assets/screenshots/5.gif": "63b922b2439e4b9d8c82cb0d70d49b29",
"assets/assets/screenshots/0.jpg": "d7a4be69fcea5718ce8fdaa844ce0988",
"assets/assets/screenshots/7.jpg": "2a56579d6ae3958c6ef6e14285d436dd",
"assets/assets/screenshots/2.jpg": "e16664ace87aa12b2266e6f8127ca05f",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/objects/2f/85fc9f0f81277bb403f36b43efd7c19d948388": "cbf0fdd4be1b813bf5a537edb0f3244b",
".git/objects/2f/a0b9a31488909dc11f384d0d61e5d26c743e42": "4cc4d149eb4e260cac5be6249d6138ee",
".git/objects/64/6f500562f3ef30494d2795faf06113070f5a1e": "de107af9e063cd69366c14cacb1b3b9a",
".git/objects/1c/f52677642eb14b004541dfc47a5ed77c7fe399": "e6d2b974f81462dc4952dcc579f78ef9",
".git/objects/92/788eed4a3b65922be0f8d6abe177ffaf976842": "ff2438048b5b17fb37d5224acf9f2e94",
".git/objects/92/0e0fc0a7190bda847c22a705e9751e8ff305dd": "47dd79476839b9c2f398e69b17520bbd",
".git/objects/92/4be1bd2ebb96311b427463aa98cae27aa77188": "190b5f737ec4d491d1b0d7dc5e7ea00d",
".git/objects/39/ed42e0b5923574420bc1f1605b5c1a4bce62c3": "dce5a850e4a208edd89266e88e52766a",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/70/ffc5a94108b021ed1eb8a7a6c46e3ff4e25c1f": "f49ee293078b8139df32cefe4df1c8f8",
".git/objects/a3/9c449824e5f811645b90bf1a089e6b36fe2cf2": "9a0f79f4623fd4c3cb0071d576ea64a2",
".git/objects/a8/29539912a1ae8291ff51a1d8c6ab5c5b5bb10a": "ed1c4b63204a1adf3453b14c5ed8b06e",
".git/objects/f5/69bc4c13cf97d5bda6d87080f90b481b3ddf11": "d7d01346c5011334c8a6563b5c1f031b",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/e8/ca24a641289684be3b7f1b15b9e4a0bc9c0b38": "d45c25dcc7fd65c153224a84bdc4a6c6",
".git/objects/5b/1d7595446ff89181833d58ee8dba43e892d5af": "767aa5010419db6c888eef4ba9416516",
".git/objects/5b/2c242d3c7ff508d01b704bce1bcda55197c3eb": "98da71ddc80ffbcdc1b58e8732341f74",
".git/objects/5b/a406515246b5f6e4600155907b57a50b8f01e2": "48ef350a835af523836d9f6c1864ddd9",
".git/objects/5b/236a6354a92d08b97b77e3a351b58c9b6f196c": "849dd01a57b53bda5762e02e38263c38",
".git/objects/f8/88837824f50d03a55fd6947242cd0d562ef1e5": "fa4aa795fd15e6121e7939fbbce2fb7e",
".git/objects/b2/af2e7c720ba7cb25087d5aa5f9dee7b20ba72d": "264200250ee2c2c5f81765d5e61f6970",
".git/objects/b2/d5a5a8d36756a7f5911c8db9dcfaa6e8de0e41": "ee93ebe4c68186090e23d9d7da9f4e5f",
".git/objects/b2/a8d1f343059444d30428a851da9b2481f182ba": "d1ebaae5f758ca3fc0904938a922d5a5",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/dffe5e7b82f7faf81f85e36d1d90bd13f0e827": "b6fbc0e5ba301b969d5370d212ea184b",
".git/objects/67/52d4a18113fd7a9f34cea1a7326cdd26badf19": "0b85e139da3d30304394f6e49470ce16",
".git/objects/67/320b0402016c756f8948b8de28d63a87f9c923": "50ef278059b326201291c629b203368f",
".git/objects/81/64ccad6ecf6f5fe77ef2ba13f06b2b191ce48d": "00959fc04412af7abde17100c64535d3",
".git/objects/81/374692f900a94b3ba83ad0bb3837f72b34c5f4": "efc7feffe18849046864ecb98f1a7499",
".git/objects/a0/dbb3c52de45974a99d87a3e16c35d270bf0f7c": "4575ee7f08a56387d00809aec8c4fc73",
".git/objects/d0/f733de32ec113a26287fbcf25a450f77e530ab": "84cfc914ec588a225bf70d66dd475bdb",
".git/objects/6b/1485ccb0e3818acf6a652ec18a664f9ee43e9a": "6a4992a05b33a0826099fc1cb57f20f7",
".git/objects/c9/b266b86f029b497c2dd46a3c47059a127cd57a": "b3c46eb2b10236984127676c07bdc866",
".git/objects/72/479a3808b585298e07e00de5280972336c4f71": "3c0f1a9dad129971bbbc2ae92ce06c52",
".git/objects/1d/f5914c8f7b6d8291f0450a478712958542c9f3": "81b9c4b22ff7e60b9dd50ffe400daf10",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/189a4e93c48c284f9f11d3359ec9771c96c3e7": "bb4f197ac1b588f58491b73ea5c5dee8",
".git/objects/3e/357d4205e1a7ad372dc041c6420254064d9ff2": "243b965da817d3456a224e1a2d1e1564",
".git/objects/86/21dd6270f5eb5282b5cf3757fcd064535b382a": "237e9fb8de36cb30ae1737bcc870d189",
".git/objects/1f/5f48a5e5b3948bcc3fc805762902b62a115a3f": "9507bb4413ace604ee0db6147576abd4",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/07/f965a6769f0618c2a166e57b9197d9633e4ae4": "62b1d20e4db36a16a907b7d4b6d8b441",
".git/objects/44/e610b02bd6a0e414f203820e669a2fde0258d9": "325948974d5cf6281d9bccd9feebd08d",
".git/objects/76/7330dc0a7ae745b3ce783bab8143fa7033be03": "0619f7d95c485d0198f34db6c6651cfb",
".git/objects/38/130dae6bc6e4502432ffe6888c08d18574c385": "06c81e1e941a3fe74495944af07a9527",
".git/objects/09/3631321be638401e329b64108d9c76c749e702": "9276d5c8963808fd2f4994c5e46f4b93",
".git/objects/09/2218c35c707f8acb517feaa348fa5d2dc419f0": "9228eaf4e6a7c9e975d3442e1db12db0",
".git/objects/09/3bfa2f2edfc3e82be9fbebbd05677056e5e4d6": "d76eb11250b7c20b6876e752ef077f53",
".git/objects/df/78df02021bb98e27e985dc13e387bcd59295ac": "2b5bdc9e9adec8937483c898e2c0ba18",
".git/objects/59/fc95ab9832a09ad68b487c17a1703e5422cacf": "1e488acd358ce2cb89784f67d484be5a",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/9e/7f3a22b469042d2d659e5ba9c12720d8c5bf02": "4d002ff9ddc00215da322380a23175b1",
".git/objects/9d/b166872bbf48db1fec659637c16354b1bca624": "cafe15eac2dbef9dd8ee671e1541c488",
".git/objects/18/40e01c58d82cb78c7d9be1a22d85639591bc5d": "1997eca01bcae9b26b691be75f65df3d",
".git/objects/33/cce270c89fe6cd0f0ff1ecbf4e913116d5295e": "18246700aa340d824897f6714ccb65db",
".git/objects/33/861b581ebd82a5378da7ef21413358f6674ec0": "2e671a3c1a8b40bf20eea85f6ff969d3",
".git/objects/33/6eb352836acc173ff314f90ba8cb3eb691faa8": "a99039138e0cef60869c905de7735c65",
".git/objects/f7/26985c739d31de9c2fb68ab3464db98f1030ba": "ec4f4f0da0ad0092e633b1ae9fec229d",
".git/objects/a1/da558b122154d81458fa3d0b909e8b1e892717": "b3f30a38c927e4cc2e72d356f9f9c768",
".git/objects/31/98ee49829d677d1e31693c0a726c2d3e327189": "db98e49c81bfb444af22d401f3f7d0c3",
".git/objects/8b/29442bae816f67bd2ccfe0c46bfeb0d70419c9": "560ae2f4e832208cc99e878a1433be4e",
".git/objects/8b/30e53606c395cc055a75f2c72644fed1c95e7e": "79b7af0fd15c2b2aaea0ecffbb84e656",
".git/objects/47/b8cc37775cfbaf144eff995f60035b755fcaee": "e8f2c0b4d8d73729e2dd96a2a204f757",
".git/objects/96/125180285f7dd2008f90f03fce3f4c4de50ba8": "128ab3fec40348f6ace042809950c089",
".git/objects/d1/9b260f6ea18b537bd32560d56643cd7a45c0bc": "f7ff48fbe685bd8fd5dcb0508e40566c",
".git/objects/d1/b7102d9d81c7eebef724613a3f0f8063b4afe3": "96ddc5a647af265e3c4255580f13403b",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/66/3d78b5821a8988dc10ad1547b10cb0992cdff9": "83bec8b58928ecf2084701ef01688c46",
".git/objects/01/f02872553f9e822875fac4a1d5bf2bfea78f35": "f8493666ae1fc4d9137ff6e6be8fc1dc",
".git/objects/52/faa9a9421b088829e3af09934bea463364de90": "44089dd5e151d4321f5c82c77e525015",
".git/objects/52/90e8e4f0aaefb4c92fb38e40cab957f0fd4588": "3f5f0d611d92e21e445e63e22e6df83c",
".git/objects/ed/bd857c9b48f6f2d97215a829688067ea667bc7": "0a41a90a287f79a4467ff22e6cd5743e",
".git/objects/ed/3647d1760d4531e894a01a3250dfb90a6d2265": "0a0b133eb21ea11b9f109b853e1c5907",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/74/d3e804f4fe433c69858de3b026c394bc6464af": "6580943c1400dfdaca777da059ef0aac",
".git/objects/61/1358aca38df6e3256d03256bd29d2501c6cfe4": "aaed0bfc6741a186eee405129e0f1ede",
".git/objects/2b/66646167bdc8368d816f07cf7929edd50492ee": "ac7e4bebeb8738556034a019bfad8240",
".git/objects/1a/3855aa035a49e7e7d223a86e49bc94c88d2a06": "aec72d790e9879289f826f6218734023",
".git/objects/1a/47107c3de47aecb7a5da036a18d09a5fd4b090": "c4e9a1f886d1dabc2e1b86c1ca06c1aa",
".git/objects/1a/c7fed18a58963392314028c4140cf1d5677b5c": "863298d7e1301ab81f956fb0ea29798a",
".git/objects/25/ccf4e705fb74af1cf410d4d5a62306ccf3e08c": "f3cd2e89b4ce9c4bd86a761056169a4d",
".git/objects/e6/25413b5798ece0fedb596cf89408f4e0b5f9ba": "2bcbe4f421eb906b737a2c1bb919a1a1",
".git/objects/e6/5c55a5b595e20e25bd59a1c8bd161d5b13e8a3": "a790fab1222de456f3faf3ebd3e8b99d",
".git/objects/7c/a1c9a9391d1c913338561b44f6e3f2b67ba54b": "4f2cf5445509e37e91227064b1ef4d95",
".git/objects/24/164b5976c59a8656c23bc47a3c6368ead06805": "ade9fa611a5c574671e59a09bdadf52b",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/13/5a3bec248d98fb478c2b9106a05e96cd6f5fa9": "8d3da3f39cf46fb7aa945ea7c5c4ed35",
".git/objects/7d/d63f09dfd543d5ac9cd1f83ab02d0d17c6bce6": "147b43be14c05515e4f4e83df7862378",
".git/objects/ec/c299f2e309b55969e04e60e655ad26dc94a80f": "dd09381ffb9e7f6a5a2b88ceb4bf3fa3",
".git/objects/68/85aae2a0355c34d1faa068722be59a238f365a": "69c70b44c3132f50d8b24e09b61bd9a0",
".git/objects/cb/04778f9545f06c754e8e77a159b6956fffb338": "343049594a6574b1293aca76c48ca1cb",
".git/objects/cb/e2ee35a2b49fc777e1d9c60057d15899dd57bc": "e7815089e128f01542779187cf96650c",
".git/objects/b5/4970e24ce428c97575e1559616d2a06d773814": "a376391f1fb353edea9a056df7ef07ad",
".git/objects/be/10c2a2f9b05acac3f09e67fc628e0a83fdc55f": "4ccdaabaa6d3ab679b00b5fea767a9dc",
".git/objects/8a/058ef508751a91ea2ebfe0e4c99a3ba77c0996": "025cea70ec43c79cef94802fcd1eda6a",
".git/objects/55/bc17d809b537738874e350255894b838cc9135": "3cfba8edee49963aa53e60b3ff3767ca",
".git/objects/de/620179f0830c05d80924b9629ac86fb7622598": "5173caa1528eb2ef3125658351642be9",
".git/objects/4a/a4d12abafae598add0b00fca10bed4b7301337": "e143791c38733ce0ac79fd96b05cbb7e",
".git/objects/fe/b006d66234e1b55600b00916023982706abf2d": "c05ea7c31475ad5922bc102ea1c204db",
".git/objects/6a/39b5e1b354f0f46f41da9f66c71ab6babf3fdc": "a411116f0d12d784f0f9d9bc26902310",
".git/objects/cd/0c3605f55465919721077d13d12126177bbcba": "7034ad78d17d383f73e492de093114eb",
".git/objects/23/f01214bb6ff9f32e6d312b3f85a68c370966b9": "f74c9b1650d82a061e380f3ec931031a",
".git/objects/69/4ae195490d89b07aeb9f81303ab851ebf3ed2a": "06ca3a3ea68043e1b6c3e4d8541aca4a",
".git/objects/83/6c780ca7ec29b7c7d2505009d85e8b2f4c26b1": "e54572b22d3ec867696b108771e9d94f",
".git/objects/40/91264ee1c08d70ea986bea2f9db19195e64337": "a60fc3a6a3d8b8ebc64178dd2603ecf7",
".git/objects/40/871c318ffcb9d92c6ddb94c8464e9c3b10039c": "a45afdbc97fd332f4729b5d6f5554549",
".git/objects/c6/7c46fd62d5592392a8f8d40d3ea501c4ae28a9": "b28315fb26db137c1803dc689a59c460",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/fa/84cb53e2eba86b467c599e89d697c1487dc930": "8155906b26b2e03142d3172b299b1023",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/8dc60f2995a6f34fe0d4926b1f872468c63f6f": "d5ce9e494cbf1d697f4a6a556ea00e2c",
".git/objects/57/a9d2c3737c44bc9468ed60d31e0e2318a69677": "e44a0b522dbb661e8bc791a8e93746c3",
".git/objects/41/18743ea8540705b23f2f3039141c2a40505a07": "846a02f6af59bd059f6d599d3dfb27aa",
".git/objects/41/1d80cb302bb4bc63218000c68a020f250cb9b5": "1d3a47b6ef03d744c093d489fd3776a3",
".git/objects/14/2a74e77bb94cb1c46afb838e4791e106b05d7a": "9e9456c9eebd56901127a9aa7bba2863",
".git/objects/14/3917431d169d19539fd7f8a50c6a889334faf4": "e64e36cf433ae24d9eabd314337823d2",
".git/objects/b4/695b090836de28a551cf9ba45a2aec6c38006f": "e8bf6bf92e764806931f9a2ef1b54d83",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/9c/2b3bf1f9e1eee278c45f4db16649afdb3010e3": "946d772b595c24270276d8cd586e184a",
".git/objects/9c/f17d6748e0a1b6818ca6a8b9cd73f4050e97fb": "730e41bbdd4acb9cec2ffe6a40104e97",
".git/objects/c8/c34e8466db2b6cc1363ca73612707ce284bce7": "aeaa30d6858ced0a6a2e44a0fb794ad6",
".git/objects/32/c14d54032058e05632675b82f374afff634364": "98da3a9512d0a79a60ba71cf6e18040e",
".git/objects/8c/f9bc3408fc42a32972b7748749eec240e10145": "b7948af1e4ad088b5bc8c584c99d62c5",
".git/objects/ee/c5de2a1c97c6bbb222dc9f3d8d8877efa6d084": "bf473316a24c8af97f065f87c8c122ee",
".git/objects/ee/a4983eb16151cce709ad5ccfd3db0d9b942755": "59d1b8f83bb865c2f0eb041c0129cb23",
".git/objects/82/573568ccc54fe6dfe8f153e9c04cdb7fd618aa": "e8ffbce1dddf0f2237413a1a566f41b3",
".git/objects/f6/154da94f0dba24ac6a8531162b8630d1ba7753": "df874c3f6addc92585764473aa043d0f",
".git/objects/34/bf9e383dfff6ce8e12cc411f3437cf984c2da5": "7a7631ffc15482df6121f950df436095",
".git/objects/b6/70865ee5e2deebfc0611c753c52bd76e0c6461": "ee502339b211c164712544dde248afc9",
".git/objects/ab/f5f0bb1074dc17b9205b8bb9edb44380a44540": "6646023a860f89c7a66b9ebf7c1814f0",
".git/objects/ef/ab2115625abafd4d58ac2ba84a1f6230e748da": "ad3234e94a5d627b97e7d8c09aa2e0fb",
".git/objects/a7/0d404bb91322ecdf3d8f53cb2fc48c893a8de1": "2aa71ac209ef1e995d427bac9ee4d771",
".git/objects/5e/4eb47a3a8355f9d4700341c43f08a6c8498fcb": "5df8360c830bf85bf3264918dfa11f46",
".git/objects/d5/beef05defe287a0027548fbb38e44517fd86de": "3771ed2f33d2fc8f6b9ed638fcb1d81d",
".git/objects/d5/872d21810434d2dfadfdafeb86203047b0fb0e": "04f36eb43d761e29171cb0d3072757e8",
".git/objects/d5/d406087f3386241f86f11730f7c71716cc3bbc": "c98e6c48f952d1de66c8d243ccb2bfd7",
".git/objects/00/585c4a557947dc62a687bcece887755de1b0ea": "a83d0de0f2a4c41594e17a81f0203711",
".git/objects/11/69a277ac08d419de5dffdc42793d73253dd6c1": "7f8c98a1bc8d46d64e62af2db9eba74e",
".git/objects/4f/2e5b959922535b96a51c8d19a209b6c30a0ad2": "bbe82e97bd50c1d13feca4ae4836baa6",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ae/24eab36512897aad631112d56e6b16a5bc61e6": "6dcb5a99d40a6368201b5187b1246f9c",
".git/objects/e7/c3d4d018dcda1d9db8f16bcb6a52dafc3b1a58": "9bcb2028bfc748554504406f9d224bbd",
".git/objects/e7/746e4b7eda5e72f4f9b654c3e37213b4da88e2": "3d80c363be00d96ff593a2c71ea784a5",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/e4/0f93bd1d782a6d81dcadeef6669f848925a807": "eb1672e88c52c1b763caf3c8d26d4589",
".git/objects/4c/87e6f70c70089b2d6c883af5a690e2b303e252": "e86f77ceb34990638205aee4a6c95e03",
".git/objects/3c/e6b593bc37d85037fc2f4e4f952628c859b504": "cedf7c3f3268f8e8509ad97894608377",
".git/objects/3c/6ccc2cc8ef5329ffa56c163ca6a8c8d7d68673": "4a26548d8f3bdc31f3b79343fbe4075b",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/7a/34759fda65d08e609cdd381f5145ff24d68f7c": "5a8ff523e9f293a5daa50d562e7b65ae",
".git/objects/c4/fb109c80d0e9e608d3fda9a1dbb913dcd118d8": "a329d9b485b1bbc79d84b9b4086188d6",
".git/objects/5d/edc9032c992916a56b40311a0d3fc99daa201f": "b8d5c5766897eea53871975d4ef3dc34",
".git/objects/5d/e0abfe7c9420d68998664d68e3c02faf9e98e6": "bdafc81131f41b889def5d6daf685601",
".git/objects/5a/1f36c402a0c477c05c5fde766427c7105064fd": "5d9eba5c0417da662f1e02f6fbc0c5d7",
".git/objects/63/ccdd4f1df84de2232dc528f0da5dee7eac96c1": "a2249e88d382736ef0910508d91bea3c",
".git/objects/a4/e8c22c3ef17219f5aa5be84954ab75ccc2e0bd": "ebea49dba7d32965357924ebec9b5b60",
".git/objects/17/8c3f1d90d96a494c0854acf9bfe734626c74d1": "3573d0abf65719021bb8af8c717e3c62",
".git/objects/5f/25987e428bd8d03bd521f9a74e7347c03fa7a3": "8442a2e3f3416b770b2cf1500cf56592",
".git/objects/36/e84908eeff824b10cc193cbf6928cfe620a468": "d8009695ea4ccec08c138b8f9fdedad7",
".git/objects/12/d6b82405257aa80e9fc0dcbf2d904abd49df71": "ed5a52b70614c5501b551838f1083a78",
".git/objects/7f/8168823b2e761bfc215b4e573083e790eab9d7": "e3d064f5cd40159d0f5bc6cdb07956f8",
".git/objects/93/5212ae33fc458a5948c2e9bc7f3534a0ea26a6": "def407a1e78aae447505301d3a6fc8a9",
".git/objects/2d/9224702eb8273423e326380cc7680d7097a3f1": "8b260e14f42c7e937868423cde11ad2e",
".git/index": "a3a4562c942eac1fb0ab910bfa93a858",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/logs/refs/heads/master": "0255010bd481fa6ca3d4066f4ded80ec",
".git/logs/refs/remotes/origin/master": "aaf4d13387edc7009bfd9257d475813f",
".git/logs/HEAD": "0255010bd481fa6ca3d4066f4ded80ec",
".git/config": "4b13e75b29cdeb8d7f80fe1e4b6e4d25",
".git/refs/heads/master": "a361a32723ab1e4bdd7e36569a8126cc",
".git/refs/remotes/origin/master": "a361a32723ab1e4bdd7e36569a8126cc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58"};
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
