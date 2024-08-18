export default [
  {
    name: "Blog Title",
    description:
      "An AI tool that generates compelling blog titles based on your blog niche.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/4186/4186534.png",
    aiPrompt:
      "Based on the provided blog niche, generate 5 compelling and creative blog titles that are attention-grabbing and relevant to the niche. Format the titles in a rich text editor format, using bullet points.",
    slug: "generate-blog-title",
    form: [
      {
        label: "Enter your Blog Niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "Blog Content",
    description:
      "An AI tool that crafts engaging blog content tailored to your chosen language and outline.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/6114/6114045.png",
    slug: "generate-blog-content",
    aiPrompt:
      "Using the given blog title and outline, generate engaging and well-structured blog content. Ensure the content is relevant, informative, and formatted for easy reading in a rich text editor format.",
    form: [
      {
        label: "Enter your Blog Title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter blog Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Blog Topic Ideas",
    description:
      "An AI tool that suggests catchy blog topics based on your niche.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/11497/11497847.png",
    slug: "generate-blog-topics",
    aiPrompt:
      "Generate 5 unique and trending blog topic ideas that align with the provided niche. Present the ideas in bullet points without additional descriptions, formatted for rich text editors.",
    form: [
      {
        label: "Enter your Blog Niche",
        field: "input",
        name: "niche",
        required: true,
      },
    ],
  },
  {
    name: "Youtube SEO Title",
    description:
      "An AI tool that creates SEO-optimized YouTube titles for better visibility and ranking.",
    category: "Youtube",
    icon: "https://cdn-icons-png.flaticon.com/128/402/402075.png",
    slug: "youtube-seo-title",
    aiPrompt:
      "Create 5 high-ranking, SEO-optimized YouTube video titles based on the provided keywords and outline. Ensure the titles are concise, impactful, and formatted in HTML tags for easy integration.",
    form: [
      {
        label: "Enter your youtube video topic keyowords",
        field: "input",
        name: "keywords",
        required: true,
      },
      {
        label: "Enter youtube description Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Description",
    description:
      "An AI tool that generates concise and catchy YouTube descriptions with emojis, tailored to your video topic.",
    category: "Youtube",
    icon: "https://cdn-icons-png.flaticon.com/128/2111/2111748.png",
    slug: "youtube-description",
    aiPrompt:
      "Craft a catchy and concise YouTube description using the provided topic and outline. Include relevant emojis and keep the description within 4-5 lines, formatted for rich text editors.",
    form: [
      {
        label: "Enter your blog topic/title",
        field: "input",
        name: "topic",
        required: true,
      },
      {
        label: "Enter youtube Outline here",
        field: "textarea",
        name: "outline",
      },
    ],
  },
  {
    name: "Youtube Tags",
    description:
      "An AI tool that generates relevant YouTube tags to improve your video’s discoverability.",
    category: "Youtube",
    icon: "https://cdn-icons-png.flaticon.com/128/4674/4674918.png",
    slug: "youtube-tag",
    aiPrompt:
      "Generate 10 relevant and optimized YouTube tags based on the given video title and outline. Present the tags in bullet points and format them for rich text editors.",
    form: [
      {
        label: "Enter your youtube title",
        field: "input",
        name: "title",
        required: true,
      },
      {
        label: "Enter youtube video Outline here (Optional)",
        field: "textarea",
        name: "outline",
      },
    ],
  },

  {
    name: "Rewrite Article (Plagiarism Free)",
    description:
      "An AI tool that rewrites articles to make them plagiarism-free while bypassing AI detectors.",
    icon: "https://cdn-icons-png.flaticon.com/128/3131/3131607.png",
    category: "Rewriting Tool",
    slug: "rewrite-article",
    aiPrompt:
      "Rewrite the provided article or blog post to ensure it is plagiarism-free and bypasses AI detection tools. Maintain the original meaning and format the output in a rich text editor format.",
    form: [
      {
        label:
          "🤖 Provide your Article/Blogpost or any other content to rewrite.",
        field: "textarea",
        name: "article",
        required: true,
      },
    ],
  },
  {
    name: "Text Improver",
    description:
      "An AI tool that refines your writing, correcting errors and enhancing readability.",
    icon: "https://cdn-icons-png.flaticon.com/128/1686/1686815.png",
    category: "Writing Assistant",
    slug: "text-improver",
    aiPrompt:
      "Enhance the provided text by correcting grammar, improving clarity, and refining the tone. Ensure the final text is polished and professional, formatted for rich text editors.",
    form: [
      {
        label: "Enter text that you want to re-write or improve",
        field: "textarea",
        name: "textToImprove",
      },
    ],
  },
  {
    name: "Add Emojis to Text",
    description:
      "An AI tool that adds emojis to your text, making it more engaging and expressive.",
    icon: "https://cdn-icons-png.flaticon.com/128/2584/2584606.png",
    category: "Writing Assistant",
    slug: "add-emoji-to-text",
    aiPrompt:
      "Integrate relevant and expressive emojis into the provided text. Maintain the text's original meaning while making it more engaging. Format the output for rich text editors.",
    form: [
      {
        label: "Enter your text to add emojis",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post Generator",
    description:
      "An AI tool that generates creative Instagram posts based on provided keywords.",
    icon: "https://cdn-icons-png.flaticon.com/128/15713/15713420.png",
    category: "Instagram",
    slug: "instagram-post-generator",
    aiPrompt:
      "Generate 3 creative and engaging Instagram post ideas based on the provided keywords. Each post should be concise, visually appealing, and formatted for rich text editors.",
    form: [
      {
        label: "Enter Keywords for your post",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Hash Tag Generator",
    description:
      "An AI tool that creates effective hashtags for your Instagram posts to boost engagement.",
    icon: "https://cdn-icons-png.flaticon.com/128/7045/7045432.png",
    category: "Instagram",
    slug: "instagram-hash-tag-generator",
    aiPrompt:
      "Create 15 effective and trending Instagram hashtags based on the provided keywords. Ensure the hashtags are relevant and optimize them for maximum engagement, formatted for rich text editors.",
    form: [
      {
        label: "Enter Keywords for your instagram hastag",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "Instagram Post/Reel Idea",
    description:
      "An AI tool that suggests new and trending Instagram post or reel ideas based on your niche.",
    icon: "https://cdn-icons-png.flaticon.com/128/1029/1029183.png",
    category: "Instagram",

    slug: "instagram-post-idea-generator",
    aiPrompt:
      "Generate 5-10 innovative and trending Instagram post or reel ideas based on the given niche. Incorporate the latest social media trends, and format the ideas for rich text editors.",
    form: [
      {
        label: "Enter Keywords / Niche for your instagram idea",
        field: "input",
        name: "keywords",
        required: true,
      },
    ],
  },
  {
    name: "English Grammer Check",
    description:
      "An AI tool that corrects grammar mistakes in your English text for polished writing.",
    icon: "https://cdn-icons-png.flaticon.com/128/12596/12596700.png",
    category: "Writing Assistant",

    slug: "english-grammer-checker",
    aiPrompt:
      "Correct the grammar in the provided English text, ensuring it is free of errors and flows smoothly. Present the revised text in a polished and professional manner, formatted for rich text editors.",
    form: [
      {
        label: "Enter text to correct the grammer",
        field: "input",
        name: "inputText",
        required: true,
      },
    ],
  },
  {
    name: "Write Code",
    description: "An AI tool that generates code in any programming language based on your requirements.",
    icon: "https://cdn-icons-png.flaticon.com/128/6062/6062646.png",
    category: "Coding",

    slug: "write-code",
    aiPrompt:
      "Generate a well-structured and efficient code snippet based on the provided description and programming language. Include comments where necessary and format the output in a code block within a rich text editor format.",
    form: [
      {
        label: "Enter description of code you want along with Programming Lang",
        field: "textarea",
        name: "codeDesscripton",
        required: true,
      },
    ],
  },
  {
    name: "Explain Code",
    description: "An AI tool that explains code line-by-line to help you understand complex programming.",
    icon: "https://cdn-icons-png.flaticon.com/128/8488/8488751.png",
    category: "Coding",

    slug: "explain-code",
    aiPrompt:
      "Provide a detailed line-by-line explanation of the provided code. Clarify complex logic and ensure the explanation is clear and easy to understand, formatted in a code block within a rich text editor.",
    form: [
      {
        label: "Enter code which you want to understand",
        field: "textarea",
        name: "codeDesscripton",
        required: true,
      },
    ],
  },
  {
    name: "Code Bug Detector",
    description:
      "An AI tool that identifies and suggests solutions for bugs in your code.",
    icon: "https://cdn-icons-png.flaticon.com/128/4426/4426267.png",
    category: "Coding",

    slug: "code-bug-detector",
    aiPrompt:
      "Analyze the provided code for bugs, identify issues, and suggest effective solutions. Provide detailed explanations of the fixes, formatted in a code block within a rich text editor.",
    form: [
      {
        label: "Enter code which you want to test bug",
        field: "textarea",
        name: "codeInput",
        required: true,
      },
    ],
  },
  {
    name: "Tagline Generator",
    description:
      "An AI tool that creates catchy taglines for your brand or product.",
    icon: "https://cdn-icons-png.flaticon.com/128/2178/2178616.png",
    category: "Marketing",

    slug: "tagline-generator",
    aiPrompt:
      "Generate 5-10 catchy and memorable taglines for the provided product or brand. Ensure the taglines are creative and aligned with the product's marketing goals, formatted for rich text editors.",
    form: [
      {
        label: "Product/Brand Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "What you are selling / Marketting",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
  {
    name: "Product Description",
    description:
      "An AI tool that writes compelling product descriptions for your e-commerce business.",
    icon: "https://cdn-icons-png.flaticon.com/128/679/679922.png",
    category: "Marketing",

    slug: "product-description",
    aiPrompt:
      "Craft a concise and persuasive product description based on the provided product name and details. Ensure the description is SEO-friendly and optimized for e-commerce platforms, formatted for rich text editors.",
    form: [
      {
        label: "Product Name",
        field: "input",
        name: "productName",
        required: true,
      },
      {
        label: "Product Details",
        field: "textarea",
        name: "outline",
        required: true,
      },
    ],
  },
];
