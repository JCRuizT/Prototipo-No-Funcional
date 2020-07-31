(function(window, undefined) {
  var dictionary = {
    "8570fe49-da42-46fa-834b-73d7bda72594": "FORO",
    "923a5a43-5e66-4b36-a8bb-9640081d8342": "LOGIN APRENDIZ",
    "54f27742-dcb2-4a85-b5f1-b140b29e3ef7": "VISTA RESULTADO DE APRENDIZAJE",
    "4cbf057f-119f-4a0c-8e2f-58080390ca5e": "EDITAR PROGRAMA DE FORMACION",
    "302521ce-eeb8-449d-902b-289101f8a610": "GESTIONAR PROGRAMAS DE FORMACION",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "LOGIN INSTRUCTOR - ADMIN",
    "299a8b30-8fc8-490f-b907-0282f1176fe3": "CREAR RESULTADO APRENDIZAJE",
    "b669a10e-b8d1-4dc7-af55-c3d59102b43a": "USUARIO INSTRUCTOR",
    "7da4086e-e16c-4917-ac48-9fd743369924": "VISTA FICHA",
    "624eea97-96f4-4528-abe1-4c5cb603bfde": "INDEX INSTRUCTOR",
    "13580605-9dd2-4671-9073-ea6990f3b13e": "INDEX ADMINISTRADOR",
    "e39ae974-87e3-47ac-9967-89fed8c0701a": "FICHA APRENDIZ",
    "9c2d7cab-93f8-4d1e-8406-fe4bb455789a": "SUBIR MATERIAL DE APOYO ADMIN",
    "7d341265-aa84-4699-890f-34191e716163": "DESCARGAR MATERIAL DE APOYO",
    "e6c8f62b-3fdd-413c-b0b4-8e2777ffb689": "EDITAR RESULTADO APRENDIZAJE",
    "860d3203-5135-493d-ad9a-ae06dd5b4935": "GESTIONAR FORO",
    "1a75f076-a106-44dc-a519-365dbca4bbbd": "VISTA MATERIAL DE APOYO POR RESULTADO ADMIN",
    "5823382d-a3c4-47d5-bea7-17df505f06bc": "MATERIAL DESCARGADO",
    "8d9a6f32-021b-41ec-b215-311f79cef21a": "1 VISTA",
    "18ffa535-d639-441c-a25e-ac863ebfeb5e": "GESTIONAR RESULTADO DE APRENDIZAJE ADMIN",
    "4328e744-2fff-4fcd-bb74-34169535ccad": "VISTA RESULTADO DE APRENDIZAJE ADMIN",
    "4fa7a64d-9f0b-4d78-a150-c98755f6105f": "CREAR FICHA",
    "c3ee44e4-83d4-4d8c-a28e-4ad76787b904": "GESTIONAR USUARIOS ADMIN",
    "56c18c43-6600-4a9f-83c0-b2947ff0cd4c": "VER MATERIAL DE APOYO",
    "eb34b2d0-6f53-4249-b357-272b0ca5d946": "INDEX APRENDIZ",
    "eaa810cc-3fcd-4521-8348-133bd53d6fb1": "CREAR USUARIO",
    "6f590ccb-98f0-4e91-aacf-317e2e10cfa0": "EDITAR FICHA",
    "3617f971-21e2-4276-9733-0bdf16b71a19": "VISTA MATERIAL DE APOYO POR RESULTADO",
    "28c0ee58-a037-4dab-933f-394714191510": "SUBIR MATERIAL DE APOYO",
    "a8147d76-ee1b-4d86-a342-4ab7e52a0a35": "EDITAR USUARIO",
    "8053a187-1a02-4a71-9031-ad2e3c3be441": "VER MATERIAL DE APOYO ADMIN",
    "239de459-df46-4f0c-af4d-1f38a3b373b5": "FICHA POR INSTRUCTORES",
    "6a351d25-64cb-41c2-b040-3649839db70f": "CREAR PROGRAMA DE FORMACION",
    "5c422a3d-926d-4080-9919-66c38e9b97fc": "FICHA POR ADMINISTRADOR",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);