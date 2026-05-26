import { defineConfig } from "tinacms";

export default defineConfig({
  branch: "main",
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "static",
    },
  },
  ui: {
    previewUrl: ({ branch }) => ({
      url: branch
        ? `http://localhost:1313/?tina-preview=${branch}`
        : "http://localhost:1313",
    }),
  },
  schema: {
    collections: [
      {
        name: "homepage",
        label: "Forside",
        path: "content",
        match: {
          include: "_index",
        },
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Tittel",
            isTitle: true,
            required: true,
          },
          // --- HERO-SEKSJONEN ---
          {
            type: "string",
            name: "hero_title",
            label: "Hero Tittel",
          },
          {
            type: "string",
            name: "hero_subtitle",
            label: "Hero Undertekst",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "hero_button_text",
            label: "Hero Knappetekst",
          },
          // --- DE TRE HVITE KORTENE ---
          {
            type: "string",
            name: "card1_title",
            label: "Kort 1 - Overskrift",
          },
          {
            type: "string",
            name: "card1_body",
            label: "Kort 1 - Brødtekst",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "card1_icon",
            label: "Kort 1 - Ikon (grid, key, rocket)",
          },
          {
            type: "string",
            name: "card2_title",
            label: "Kort 2 - Overskrift",
          },
          {
            type: "string",
            name: "card2_body",
            label: "Kort 2 - Brødtekst",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "card2_icon",
            label: "Kort 2 - Ikon",
          },
          {
            type: "string",
            name: "card3_title",
            label: "Kort 3 - Overskrift",
          },
          {
            type: "string",
            name: "card3_body",
            label: "Kort 3 - Brødtekst",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "card3_icon",
            label: "Kort 3 - Ikon",
          },
          // --- PRESISJONS-SEKSJONEN ---
          {
            type: "string",
            name: "precision_title",
            label: "Presisjon Seksjon - Hovedoverskrift",
          },
          {
            type: "string",
            name: "step1_title",
            label: "Steg 01 - Tittel",
          },
          {
            type: "string",
            name: "step1_body",
            label: "Steg 01 - Brødtekst",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "step2_title",
            label: "Steg 02 - Tittel",
          },
          {
            type: "string",
            name: "step2_body",
            label: "Steg 02 - Brødtekst",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "step3_title",
            label: "Steg 03 - Tittel",
          },
          {
            type: "string",
            name: "step3_body",
            label: "Steg 03 - Brødtekst",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "step4_title",
            label: "Steg 04 - Tittel",
          },
          {
            type: "string",
            name: "step4_body",
            label: "Steg 04 - Brødtekst",
            ui: {
              component: "textarea",
            },
          },
          // --- TJENESTE-KORTENE NEDERST ---
          {
            type: "string",
            name: "service1_badge",
            label: "Tjeneste 1 - Merkelapp (f.eks. PLATTFORM)",
          },
          {
            type: "string",
            name: "service1_title",
            label: "Tjeneste 1 - Overskrift",
          },
          {
            type: "string",
            name: "service1_body",
            label: "Tjeneste 1 - Brødtekst",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "service2_badge",
            label: "Tjeneste 2 - Merkelapp",
          },
          {
            type: "string",
            name: "service2_title",
            label: "Tjeneste 2 - Overskrift",
          },
          {
            type: "string",
            name: "service2_body",
            label: "Tjeneste 2 - Brødtekst",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "string",
            name: "service3_badge",
            label: "Tjeneste 3 - Merkelapp",
          },
          {
            type: "string",
            name: "service3_title",
            label: "Tjeneste 3 - Overskrift",
          },
          {
            type: "string",
            name: "service3_body",
            label: "Tjeneste 3 - Brødtekst",
            ui: {
              component: "textarea",
            },
          },
        ],
      },
    ],
  },
});
