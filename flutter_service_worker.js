'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "23b77cd257c45befe2e7e5b5f4625a13",
"index.html": "71c558a441a1e2bdf91bbed8ca06df4d",
"/": "71c558a441a1e2bdf91bbed8ca06df4d",
"fav/favicon-16x16.png": "4ab96105aceae19c4ace8d44f3faf076",
"fav/safari-pinned-tab.svg": "208707478f8fd607011a64a0140788ea",
"fav/favicon.ico": "e34c5ef7925f1cf3b46a5c92b1c930bf",
"fav/android-chrome-192x192.png": "c96538e9317a2fc4d147f77bf73b9347",
"fav/apple-touch-icon.png": "e7c7310449ebf1a24a3720bcf1a4392d",
"fav/android-chrome-512x512.png": "ad1973bbbd63442cc35f82c07c246f6d",
"fav/site.webmanifest": "35f3698d1ef7a7459be6ec9005be6466",
"fav/mstile-150x150.png": "e7c7310449ebf1a24a3720bcf1a4392d",
"fav/browserconfig.xml": "a493ba0aa0b8ec8068d786d7248bb92c",
"fav/favicon-32x32.png": "5ceff007b2fb59caf52cfd2094f1993d",
"main.dart.js": "ac04008907890259a52985cbefc75ff9",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"icon.svg": "231ca0512d076afe0559f751b82553e0",
"manifest.json": "6f89f8821a29873d582ab58567c66860",
"assets/AssetManifest.json": "b85d8dbbcd7f24444a2549a046accdef",
"assets/NOTICES": "79e72c92e6a2e19fb001442c2017bb6c",
"assets/FontManifest.json": "1dcae8368a267f33971494450108fd9f",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "0951c637291a3db0fb4a372f51ff3504",
"assets/fonts/MaterialIcons-Regular.otf": "e115c2c56269785aae2de03e3f152113",
"assets/assets/static_api/portfolio_id.json": "7e39b0b0d0516a7575c825410b2fa33c",
"assets/assets/static_api/portfolio_en.json": "ae6ace2e0f4d78ea823016cd0dd1ca89",
"assets/assets/images/ic_twitter.svg": "48943146a03795b712d55d2fa735253e",
"assets/assets/images/ic_facebook.svg": "3c3490700c33bb4e54b5964cf2a78d9d",
"assets/assets/images/ic_logo_text_oneline.svg": "36dc2a0fdef0c46b3a8b69b5f9f62b0d",
"assets/assets/images/ic_upwork.svg": "57b8521494d9a2f34512e0abb5a7bd85",
"assets/assets/images/ic_tiktok.svg": "b7b8e497afdaea80e412ba3b57834128",
"assets/assets/images/ic_close.svg": "24b3b74283c089eaefdbfb147e9f7f22",
"assets/assets/images/ic_avatar.JPG": "b9fc28c950e84e099510b9e6a8dff736",
"assets/assets/images/ic_linkedin.svg": "fb534c4ab06fb2deffcdd5b7f6ff06a0",
"assets/assets/images/ic_profile.jpg": "2174a90678785fb052bedfcaa3e1d1f3",
"assets/assets/images/ic_youtube.svg": "4216a9e9759b55e3837722aeae931581",
"assets/assets/images/ic_playstore.png": "1e91d02cf5a902f38f2923c006d79281",
"assets/assets/images/ic_logo_text.svg": "36dc2a0fdef0c46b3a8b69b5f9f62b0d",
"assets/assets/images/ic_menu.svg": "17b0fbdb410668d06be8b26620f289af",
"assets/assets/images/portfolio/semestakita/image_15.jpg": "1996506521026f46131acb45010e38aa",
"assets/assets/images/portfolio/semestakita/image_29.jpg": "903d305235b4860ab63cc414c2bf958c",
"assets/assets/images/portfolio/semestakita/image_28.jpg": "1b7fe51fb30e8500580707b6c93ae0e5",
"assets/assets/images/portfolio/semestakita/image_14.jpg": "790c2d4ebbba8ee1d6db35a9e1cde94f",
"assets/assets/images/portfolio/semestakita/image_16.jpg": "33756566d7dec14ced924c36e44c57fb",
"assets/assets/images/portfolio/semestakita/image_17.jpg": "3ec0eac61e75a61d0012777770999286",
"assets/assets/images/portfolio/semestakita/image_13.jpg": "56ba0bddfa5a734620d5ec2525c9354a",
"assets/assets/images/portfolio/semestakita/image_12.jpg": "ed5bf26062f1b9fc842d084fb2398c35",
"assets/assets/images/portfolio/semestakita/image_10.jpg": "0680bac85e50a7d929ea025ea4554049",
"assets/assets/images/portfolio/semestakita/image_11.jpg": "09424f433b5b4f0241106c60646772c3",
"assets/assets/images/portfolio/semestakita/image_8.jpg": "569680b74d0df66771168a96fe1caa56",
"assets/assets/images/portfolio/semestakita/image_9.jpg": "bcf69419be0f5c0f9a91f87076e90750",
"assets/assets/images/portfolio/semestakita/image_2.jpg": "2fbf98a4c0121e816dfcef013b3a6aff",
"assets/assets/images/portfolio/semestakita/image_3.jpg": "29ac1f22ba73ef13b46cb322942c5b5f",
"assets/assets/images/portfolio/semestakita/image_1.jpg": "c1487b630343f2a596d0b38df5bf41c9",
"assets/assets/images/portfolio/semestakita/image_4.jpg": "2c002d4a45b35bbda587bbcb6b3edc04",
"assets/assets/images/portfolio/semestakita/image_5.jpg": "a8355e35db6617db5e5f7944e7123e5e",
"assets/assets/images/portfolio/semestakita/image_7.jpg": "40af8d8605158145125e3d4a45127e93",
"assets/assets/images/portfolio/semestakita/image_6.jpg": "54afcc20377b0e2ca1e9a4d24dc88858",
"assets/assets/images/portfolio/semestakita/image_34.jpg": "36cc4311983dd276a2e276e66c980bbf",
"assets/assets/images/portfolio/semestakita/image_20.jpg": "0dee99a74cc79131edbfcb9cc510c7d6",
"assets/assets/images/portfolio/semestakita/image_21.jpg": "991cb825fdc78a226d41ea562e644a72",
"assets/assets/images/portfolio/semestakita/image_35.jpg": "01c7ee226cb58e6ff3f9a49ddbe0b830",
"assets/assets/images/portfolio/semestakita/image_23.jpg": "99a284078ff977bbfa152aee6e00bcc6",
"assets/assets/images/portfolio/semestakita/image_22.jpg": "5195b5c28da7c0308558d1b5f11b135d",
"assets/assets/images/portfolio/semestakita/image_26.jpg": "166c04816c097fd0208c3775995fbdd5",
"assets/assets/images/portfolio/semestakita/image_32.jpg": "a316fe9bb921c40ee5d69292bd7b2c95",
"assets/assets/images/portfolio/semestakita/image_33.jpg": "ac7b20746a05ab26ff4e416f747cc04d",
"assets/assets/images/portfolio/semestakita/image_27.jpg": "768109f3a8c52822e0d4e50bce6f0c72",
"assets/assets/images/portfolio/semestakita/image_19.jpg": "fabeafe3cf321636131fe840737843c5",
"assets/assets/images/portfolio/semestakita/image_31.jpg": "61a2c16c904052c39561560273eec109",
"assets/assets/images/portfolio/semestakita/image_25.jpg": "4fe2f0cb6b159086885629d69ff569ff",
"assets/assets/images/portfolio/semestakita/image_24.jpg": "d964db647265345a5329a5c06822f2f5",
"assets/assets/images/portfolio/semestakita/image_30.jpg": "633f9553b47dcabdb9297e44908d72ee",
"assets/assets/images/portfolio/semestakita/image_18.jpg": "b61bd76f5ed47e06e39b9b11726f6be9",
"assets/assets/images/portfolio/sikap/image_15.jpg": "4e1d23b5377010c516f82cbe62a93aef",
"assets/assets/images/portfolio/sikap/image_29.jpg": "4c6e87780f7e7fc797d3d88220070d63",
"assets/assets/images/portfolio/sikap/image_28.jpg": "8418b1723a8886718bbac3db57c772de",
"assets/assets/images/portfolio/sikap/image_14.jpg": "675689d9467e6f9b23072532e480d570",
"assets/assets/images/portfolio/sikap/image_16.jpg": "14f4c0bbb362cbea68eabca9ce49caea",
"assets/assets/images/portfolio/sikap/image_17.jpg": "e6f59bae478487e6039f04a2a4ae7f3c",
"assets/assets/images/portfolio/sikap/image_13.jpg": "e72d84d7604df13af608804ce22d1bbc",
"assets/assets/images/portfolio/sikap/image_12.jpg": "573735e0625b15a7d9fbd14bd3833406",
"assets/assets/images/portfolio/sikap/image_10.jpg": "ec4777fe92acb4c6d6f632e304c0a0a4",
"assets/assets/images/portfolio/sikap/image_11.jpg": "d8ee983607a2ca6ac35ca2abdc3e4660",
"assets/assets/images/portfolio/sikap/image_8.jpg": "cbd7242dea15b858e178fb09c85613a3",
"assets/assets/images/portfolio/sikap/image_9.jpg": "7b38dc8fb09f557ad8e9a94439980608",
"assets/assets/images/portfolio/sikap/image_2.jpg": "71220b554cc52c34b5090c5944ae402a",
"assets/assets/images/portfolio/sikap/image_3.jpg": "97ea6abc7087a1528c5c9a8e95cd9017",
"assets/assets/images/portfolio/sikap/image_1.jpg": "de4d56d7873e85942356820f4064bad8",
"assets/assets/images/portfolio/sikap/image_4.jpg": "cce6d4a785fdc8f50041277c687b939d",
"assets/assets/images/portfolio/sikap/image_5.jpg": "77cc52d743c67746a90eecc420587a2d",
"assets/assets/images/portfolio/sikap/image_7.jpg": "7dc67bcfc87fc33f7cee47f41446bbc3",
"assets/assets/images/portfolio/sikap/image_6.jpg": "9a8ea1b9499d05de06d220cac946310f",
"assets/assets/images/portfolio/sikap/image_34.jpg": "334c66a706e95f70dd1e214b4c006551",
"assets/assets/images/portfolio/sikap/image_20.jpg": "4f73a2387e91d42d8e79b4a594a85407",
"assets/assets/images/portfolio/sikap/image_21.jpg": "b9b0512f7b988da1454292f057f1b02b",
"assets/assets/images/portfolio/sikap/image_35.jpg": "39e4b6fcc1ef521f8ef6d1888cd359a5",
"assets/assets/images/portfolio/sikap/image_23.jpg": "4b5135da463c72ec9d7a671a876c16d7",
"assets/assets/images/portfolio/sikap/image_36.jpg": "72d3cb1fe5ab0e0f081c909e3fdf25aa",
"assets/assets/images/portfolio/sikap/image_22.jpg": "82427bb0de4a6166ad31f2370b7feed2",
"assets/assets/images/portfolio/sikap/image_26.jpg": "95a540aea257ed01fd5f9b389151ea99",
"assets/assets/images/portfolio/sikap/image_32.jpg": "4a44159f3decfe6f1e0ea9f80b99996e",
"assets/assets/images/portfolio/sikap/image_33.jpg": "0c97b3387ac300c8fab800aa5ec5cae6",
"assets/assets/images/portfolio/sikap/image_27.jpg": "f57516100b0ec290e18eff34a2dda105",
"assets/assets/images/portfolio/sikap/image_19.jpg": "413dc334091d333c2220ab5cb8ad765b",
"assets/assets/images/portfolio/sikap/image_31.jpg": "b4e09282b9710ce6aaae9f3bd287bc65",
"assets/assets/images/portfolio/sikap/image_25.jpg": "2490419dd8e4b205834bf0f76aa7eb16",
"assets/assets/images/portfolio/sikap/image_24.jpg": "d61df4428d1331ea9cf0426e99bc41cf",
"assets/assets/images/portfolio/sikap/image_30.jpg": "2c8aa862d2b4e9acf7de3c8cfe18570d",
"assets/assets/images/portfolio/sikap/image_18.jpg": "f85a8e6fd4d2d984a94e9d0f7ff76904",
"assets/assets/images/portfolio/kulkuldigital/image_15.jpg": "d6138db6d0fd3424c27d049f3700c20b",
"assets/assets/images/portfolio/kulkuldigital/image_14.jpg": "c5220ed2f01fc93d68e3d8e5b8fe5ec7",
"assets/assets/images/portfolio/kulkuldigital/image_16.jpg": "8c05ed48af41f2801731fafb997e62f0",
"assets/assets/images/portfolio/kulkuldigital/image_17.jpg": "b87c9b443af8529f42a49b611dee1129",
"assets/assets/images/portfolio/kulkuldigital/image_13.jpg": "7447e486ceef8da4d555f612574b02d1",
"assets/assets/images/portfolio/kulkuldigital/image_12.jpg": "b4f0fcf2e949ddccf414bdce4be2ee79",
"assets/assets/images/portfolio/kulkuldigital/image_10.jpg": "974ef59aeeb62f07d2878faf03150c4b",
"assets/assets/images/portfolio/kulkuldigital/image_11.jpg": "10dbc172cda5b3594b5bc011023c85a9",
"assets/assets/images/portfolio/kulkuldigital/image_8.jpg": "350405a10673efb65b96e1a7b614bdb2",
"assets/assets/images/portfolio/kulkuldigital/image_9.jpg": "77440d63bb9e380a79cd9a3b521eccc9",
"assets/assets/images/portfolio/kulkuldigital/image_2.jpg": "c2a653fcddc187d36d8b530f0a203369",
"assets/assets/images/portfolio/kulkuldigital/image_3.jpg": "35fc75966db512e2e93c5f555226e54c",
"assets/assets/images/portfolio/kulkuldigital/image_1.jpg": "a2c0ce5caf800a1e37389c486435c89b",
"assets/assets/images/portfolio/kulkuldigital/image_4.jpg": "7e5c90392189e484f235fdf414825568",
"assets/assets/images/portfolio/kulkuldigital/image_5.jpg": "c1bf17417ed5b937957893cdcbbdeac3",
"assets/assets/images/portfolio/kulkuldigital/image_7.jpg": "40af25b55a9bdb7d0a1a88cfb2a760ec",
"assets/assets/images/portfolio/kulkuldigital/image_6.jpg": "26f67f7d6b26f91fc63da5f022902d5b",
"assets/assets/images/portfolio/kulkuldigital/image_20.jpg": "9c281dff85a92f03622a7609412af41b",
"assets/assets/images/portfolio/kulkuldigital/image_21.jpg": "7693bf04436fadc19be09e83a2d0a086",
"assets/assets/images/portfolio/kulkuldigital/image_23.jpg": "ee730945c3c6de1de8dcaf6342bd64e6",
"assets/assets/images/portfolio/kulkuldigital/image_22.jpg": "46193ce636b120191d7471b0e7baabad",
"assets/assets/images/portfolio/kulkuldigital/image_19.jpg": "f567254f6874f144b07aee049005c3cb",
"assets/assets/images/portfolio/kulkuldigital/image_24.jpg": "e65bd68b619a5233288c715095625f79",
"assets/assets/images/portfolio/kulkuldigital/image_18.jpg": "0c57144a598a1832a95f25e22dd96347",
"assets/assets/images/portfolio/epersonal/image_15.jpg": "b8d02d0a736359f0e850ea32d3b4440b",
"assets/assets/images/portfolio/epersonal/image_29.jpg": "e30fc431acd2bed0f3b4536b404e9d75",
"assets/assets/images/portfolio/epersonal/image_28.jpg": "633f6ee4dd1b1a9e5e97539bb11b9b0c",
"assets/assets/images/portfolio/epersonal/image_14.jpg": "677dad03f2e860e97cf99f15ebb69cc4",
"assets/assets/images/portfolio/epersonal/image_16.jpg": "2d5daa7d4a92ecc18c482c3aafab942c",
"assets/assets/images/portfolio/epersonal/image_17.jpg": "c03cb52b8ced88ec03e94eaf1a3d20a0",
"assets/assets/images/portfolio/epersonal/image_13.jpg": "335516bd478293db762aa936cbcbe0b1",
"assets/assets/images/portfolio/epersonal/image_12.jpg": "270f2817fd44690ac11f3c9970ea32e2",
"assets/assets/images/portfolio/epersonal/image_38.jpg": "48c4af961175babe1575ba34f4f7c546",
"assets/assets/images/portfolio/epersonal/image_10.jpg": "2fc1fa3f973f6474102c7ddafde126b4",
"assets/assets/images/portfolio/epersonal/image_11.jpg": "811529bd8c7b5ed2238f3f424588055f",
"assets/assets/images/portfolio/epersonal/image_39.jpg": "81568fcc0628a49d40242d7f015afbc1",
"assets/assets/images/portfolio/epersonal/image_8.jpg": "0c465ee3acd906cc82ef0dcd4562b333",
"assets/assets/images/portfolio/epersonal/image_9.jpg": "e970bccb75fbaaca6c7368c1c7133c88",
"assets/assets/images/portfolio/epersonal/image_2.jpg": "44899ca655c4d1f18ed419af2379fe72",
"assets/assets/images/portfolio/epersonal/image_3.jpg": "a9d6108ca24a9edfa6ff5e6bfb3116ae",
"assets/assets/images/portfolio/epersonal/image_40.jpg": "810b4f90793605138e12a361c4ff559a",
"assets/assets/images/portfolio/epersonal/image_1.jpg": "bac0b00db5146d005ba1c3e3ed9ee62f",
"assets/assets/images/portfolio/epersonal/image_41.jpg": "81d421c65b96dcdf66e5a31c4be13d0e",
"assets/assets/images/portfolio/epersonal/image_4.jpg": "5666912037a5f5ea13e3b5fe8cfacb10",
"assets/assets/images/portfolio/epersonal/image_5.jpg": "9184e3e60d0913fac7fb04a86c6e0d7e",
"assets/assets/images/portfolio/epersonal/image_7.jpg": "ba8c1139a5af970e76cf056b591df748",
"assets/assets/images/portfolio/epersonal/image_6.jpg": "3a1b85dd55ac9b1fcfea5e2819088f2c",
"assets/assets/images/portfolio/epersonal/image_34.jpg": "275e815ec05bc22e6681dc1c6b64b3c0",
"assets/assets/images/portfolio/epersonal/image_20.jpg": "43f27316c3df807bde381bbeecffc976",
"assets/assets/images/portfolio/epersonal/image_21.jpg": "5d273b8ba9c7bad391723c6aaea84659",
"assets/assets/images/portfolio/epersonal/image_35.jpg": "3db43bafead372527db069611b08a2a7",
"assets/assets/images/portfolio/epersonal/image_23.jpg": "068f9d74828245ac6e82457a5f230a11",
"assets/assets/images/portfolio/epersonal/image_37.jpg": "711514dc64fe81eea39e69ac04fbd11d",
"assets/assets/images/portfolio/epersonal/image_36.jpg": "072cbab5a24e498021bb7e0b35c4853a",
"assets/assets/images/portfolio/epersonal/image_22.jpg": "be0a37f80458e5997c0ab9fd60cd1886",
"assets/assets/images/portfolio/epersonal/image_26.jpg": "824eb3d765af0fcda7c1fb2192a45a7d",
"assets/assets/images/portfolio/epersonal/image_32.jpg": "3ef15fd001a9ae952c64cbd7973b61df",
"assets/assets/images/portfolio/epersonal/image_33.jpg": "b3e79ff57467ee0a85bcd669508812b0",
"assets/assets/images/portfolio/epersonal/image_27.jpg": "4a69f580698e135d37efa096127a7f3c",
"assets/assets/images/portfolio/epersonal/image_19.jpg": "891f0f12fba49dd2fd29b8572e37a207",
"assets/assets/images/portfolio/epersonal/image_31.jpg": "fa6ed4ea1a0329fa27a3485bb4b4f104",
"assets/assets/images/portfolio/epersonal/image_25.jpg": "aec315f995e6b679d20aad44ffdabbae",
"assets/assets/images/portfolio/epersonal/image_24.jpg": "4d57c6d7ac73c39908955ecfa75ca7c8",
"assets/assets/images/portfolio/epersonal/image_30.jpg": "4a5c46c0ea6df4a47c64fe7fdf88aa54",
"assets/assets/images/portfolio/epersonal/image_18.jpg": "dbcce696fc2bff9a83cdf716cedb199a",
"assets/assets/images/portfolio/rudaya/image_15.jpg": "5183e030636ed8336d7dc55e9de49424",
"assets/assets/images/portfolio/rudaya/image_28.jpg": "ac24a96cddcd5a9a91072e0645eb2f20",
"assets/assets/images/portfolio/rudaya/image_14.jpg": "7eab95f9040a7a99c0c33430556b8045",
"assets/assets/images/portfolio/rudaya/image_16.jpg": "fa0d945f6729fb79e4028a3659ca6426",
"assets/assets/images/portfolio/rudaya/image_17.jpg": "3bd14384b74b013ff0003abda4d804b9",
"assets/assets/images/portfolio/rudaya/image_13.jpg": "5b9a4670e9c9fa65d2f6c122579e71ea",
"assets/assets/images/portfolio/rudaya/image_12.jpg": "ecca603a93e05e9263c373e1b10a9778",
"assets/assets/images/portfolio/rudaya/image_10.jpg": "56ed295a4b27565b069c3fd67e73ccbf",
"assets/assets/images/portfolio/rudaya/image_11.jpg": "7c9af49b5911539915b74958ac087d11",
"assets/assets/images/portfolio/rudaya/image_8.jpg": "b016644c5eb18794138008d4758aa66e",
"assets/assets/images/portfolio/rudaya/image_9.jpg": "7bb58a40f3799c0b56325f9d152f18b4",
"assets/assets/images/portfolio/rudaya/image_2.jpg": "911085d58b11112bdbddb12c3e2b89e4",
"assets/assets/images/portfolio/rudaya/image_3.jpg": "4de5d5ad46e01265b395bfa252e74615",
"assets/assets/images/portfolio/rudaya/image_1.jpg": "ff358fb845e7162c84d3e6e828257d76",
"assets/assets/images/portfolio/rudaya/image_4.jpg": "4b2f5ba321fc0e98d0ea24e25cf5eb68",
"assets/assets/images/portfolio/rudaya/image_5.jpg": "324e07280f5076998ed60b2a3d474889",
"assets/assets/images/portfolio/rudaya/image_7.jpg": "3506b0e4bc615d7e0fd82a3423dddcd6",
"assets/assets/images/portfolio/rudaya/image_6.jpg": "3bc9adff94c008ffa76423dd1d72f934",
"assets/assets/images/portfolio/rudaya/image_20.jpg": "7c732502534783c8e609e1c77dd18064",
"assets/assets/images/portfolio/rudaya/image_21.jpg": "e9d0907da2f74e391fdb723042c59328",
"assets/assets/images/portfolio/rudaya/image_23.jpg": "1b7762f90d6bdda2ca97a9647e341444",
"assets/assets/images/portfolio/rudaya/image_22.jpg": "1ca2fc7a3bf72b7601b4f82e2a3475e6",
"assets/assets/images/portfolio/rudaya/image_26.jpg": "2c600e60250904d85721ad2b98bcd07e",
"assets/assets/images/portfolio/rudaya/image_27.jpg": "3caba4ce280d721c42faba539f092fb0",
"assets/assets/images/portfolio/rudaya/image_19.jpg": "86ce5970310bd62b3ab84714f429f18f",
"assets/assets/images/portfolio/rudaya/image_25.jpg": "c2b7310f7060c07bffa706c03486cfc7",
"assets/assets/images/portfolio/rudaya/image_24.jpg": "fb89b18347f018310e67c784b4539c0c",
"assets/assets/images/portfolio/rudaya/image_18.jpg": "8c48706d86187b559f154bda2892c456",
"assets/assets/images/portfolio/museum/image_8.jpg": "80fb8d279e975845ca7672fd9f4463d1",
"assets/assets/images/portfolio/museum/image_2.jpg": "ad6e99ced0073ffa7f2792fffe04b6f0",
"assets/assets/images/portfolio/museum/image_3.jpg": "2a4447aacd0d30735f8424fa9678b849",
"assets/assets/images/portfolio/museum/image_1.jpg": "8ee186359076efb845ba544e7d184900",
"assets/assets/images/portfolio/museum/image_4.jpg": "5db7a7a4f78280ddc3be4721ca8a79fd",
"assets/assets/images/portfolio/museum/image_5.jpg": "45de0b7ac8a6aa064b910a3be07bde60",
"assets/assets/images/portfolio/museum/image_7.jpg": "8240e7f2e6314fa4682516b8d2825c65",
"assets/assets/images/portfolio/museum/image_6.jpg": "f69b84ed29bbc52f568d63acd3b72a51",
"assets/assets/images/portfolio/ezv2/image_15.jpg": "f4982a4757d9b8c57a52bafc574c503b",
"assets/assets/images/portfolio/ezv2/image_28.jpg": "15c92849ace935e6aa9be7b2a6f95a21",
"assets/assets/images/portfolio/ezv2/image_14.jpg": "9a37a679b198c975c77810d79282dfcb",
"assets/assets/images/portfolio/ezv2/image_16.jpg": "652c5979f97f04d376ce6d1ba1652e1a",
"assets/assets/images/portfolio/ezv2/image_17.jpg": "e6be74313b69d768ca40f30b366d0d4e",
"assets/assets/images/portfolio/ezv2/image_13.jpg": "d2dbbf0d95ffeab186ed2fc3c3eaad56",
"assets/assets/images/portfolio/ezv2/image_12.jpg": "283f6b776929b22fa8aad9c50a74c7f9",
"assets/assets/images/portfolio/ezv2/image_10.jpg": "900691443c7a8f66c2b247a3929a2dc8",
"assets/assets/images/portfolio/ezv2/image_11.jpg": "99974746874df0bef84467272f6fe1f0",
"assets/assets/images/portfolio/ezv2/image_8.jpg": "0b20e62c4ddd1f7a85cbdf1542c820a6",
"assets/assets/images/portfolio/ezv2/image_9.jpg": "a5f8b78914f139eeaf107692dcb2e749",
"assets/assets/images/portfolio/ezv2/image_2.jpg": "45f9ac3a777caa52411632c366d1e21d",
"assets/assets/images/portfolio/ezv2/image_3.jpg": "10b53cfb5502b49903ee93466e64ef80",
"assets/assets/images/portfolio/ezv2/image_1.jpg": "9057d1f9bf912952ea09ae07e6a40ec3",
"assets/assets/images/portfolio/ezv2/image_4.jpg": "b5b6d46068cc27e5ae9cc032e5b1a848",
"assets/assets/images/portfolio/ezv2/image_5.jpg": "5d2c22de0efe71cbebab2d36e0aaab2b",
"assets/assets/images/portfolio/ezv2/image_7.jpg": "d90328815001a52bc3301122fe373501",
"assets/assets/images/portfolio/ezv2/image_6.jpg": "e6174b4a7d9a1693bc2140204df4968d",
"assets/assets/images/portfolio/ezv2/image_20.jpg": "d082b41997dfbf1361524122f2d0266c",
"assets/assets/images/portfolio/ezv2/image_21.jpg": "856ca08fe81081060c3c7187b7b3eb58",
"assets/assets/images/portfolio/ezv2/image_23.jpg": "32149a5c5fc7799333c7f36dba86ea55",
"assets/assets/images/portfolio/ezv2/image_22.jpg": "7179335b1d238dbb0cc6d978761fadb5",
"assets/assets/images/portfolio/ezv2/image_26.jpg": "a80601dcdf88f8bf1d5572f3ff87fd91",
"assets/assets/images/portfolio/ezv2/image_27.jpg": "efce1fe8567620742451cf7c8da86fa2",
"assets/assets/images/portfolio/ezv2/image_19.jpg": "e38142e4c764b0cf637a4b10983c88c0",
"assets/assets/images/portfolio/ezv2/image_25.jpg": "bb2142009b68fee3ec881723cadf79ed",
"assets/assets/images/portfolio/ezv2/image_24.jpg": "f58836d4fa873206fbf9d44bbd7eba92",
"assets/assets/images/portfolio/ezv2/image_18.jpg": "3911e9f6c9b726f7d84761bffde93e41",
"assets/assets/images/ic_logo.svg": "a24e6efd566afca42a3ba00610ae821c",
"assets/assets/images/ic_settings.svg": "1c66e137e1000a65ccac946e78bd2002",
"assets/assets/images/ic_github.svg": "3b5432e19db352bf12e16cf1d2ce7b37",
"assets/assets/images/ic_instagram.svg": "d5368227272f1b9f38c5d2f2de975412",
"assets/assets/fonts/visuelt/VisueltPro-Black.ttf": "691b6f9aa3ee625e3cd8da2f8849a126",
"assets/assets/fonts/visuelt/VisueltPro-ExtraLight.ttf": "90bfa0766e43260710e3c6ac0f78c9e9",
"assets/assets/fonts/visuelt/VisueltPro-Regular.ttf": "0f8cd2494eb8c5e3a33352b2dd38fd61",
"assets/assets/fonts/visuelt/VisueltPro-Bold.ttf": "18acd33c965a455418d4204f0f334ea8",
"assets/assets/fonts/visuelt/VisueltPro-Thin.ttf": "82d7b5b67c24f00acb08f2dccf1fd03b",
"assets/assets/fonts/visuelt/VisueltPro-Medium.ttf": "cf4dbc20776a2b309fe30a9bbfe7de0a",
"assets/assets/fonts/visuelt/VisueltPro-Light.ttf": "2a1df2ff00c2611bf1b7fdeeaeebfa59",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
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
