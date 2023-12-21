// GenAiRecipes.jsx

import React from "react";
import "../Styles/ConfigPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faCogs, faDatabase } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Components/Navbar";

const GenAiRecipes = () => {
  const vectorDBOptions = [
    { value: "pinecone", label: "Pinecone" },
    { value: "faiss", label: "FAISS" },
    { value: "chromadb", label: "Chroma DB" },
    { value: "elasticsearch", label: "Elasticsearch" },
    {
      value: "googlevertexaivectorsearch",
      label: "Google vertex AI Vector Search",
    },
    { value: "redis", label: "Redis" },
    { value: "mongodbatlas", label: "MongoDBAtlas" },
    { value: "hippo", label: "Hippo" },
    { value: "atlas", label: "Atlas" },
  ];
  const llmOptions = [
    { value: "Azureopenai", label: "Azure Open AI" },
    { value: "AWSBedrock", label: "AWS Bedrock" },
    { value: "Alpaca", label: "Alpaca" },
    { value: "Dolly", label: "Dolly" },
    { value: "falcon", label: "Falcon" },
    { value: "Googlepalm", label: "Google Palm" },
    { value: "huggingfacehub", label: "HuggingFace Hub" },
    { value: "llama2", label: "LLAMA2" },
    { value: "Noushermes", label: "Nous-hermes" },
    { value: "openai", label: "OpenAI" },
    { value: "Replicate", label: "Replicate" },
  ];
  const embeddingOptions = [
    { value: "alephalpha", label: "Aleph Alpha" },
    { value: "azureopenai", label: "Azure OpenAI" },
    { value: "deepinfra", label: "Deep Infra" },
    { value: "edenai", label: "Eden AI" },
    { value: "elasticsearch", label: "ElasticSearch" },
    { value: "gpt4all", label: "GPT4 All" },
    { value: "huggingface", label: "HuggingFace" },
    { value: "spacy", label: "Spacy" },
    { value: "tensorflowhub", label: "TensorFlow Hub" },
    { value: "openai", label: "OpenAI" },
  ];

  return (
    <>
      <Navbar />
      <div className="gen-ai-recipes-container">
        <div className="gen-ai-recipes-flex">
          <div className="gen-ai-recipes-main">
            <h1 className="gen-ai-recipes-title">GEN AI RECIPES</h1>
            <p className="gen-ai-recipes-description">
              Elevate Your Chatbot's IQ Effortlessly, Customizing Linguistic
              Flair And Precision Vectors. Explore A Symphony Of Models, Turning
              Every Interaction Into A Delightful Dialogue.
            </p>
            <div className="gen-ai-recipes-section1">
              <div className="gen-ai-recipes-subsection">
                <div className="gen-ai-recipes-subsection-title">
                  <FontAwesomeIcon icon={faBrain} className="brain-icon" />
                  <h2 className="gen-ai-recipes-subtitle">Model</h2>
                </div>
                <p>
                  Harness The Power Of Advanced Large Language Models (LLMs) To
                  Elevate Your Conversational AI. Configure And Fine-Tune
                  Language Generation, Comprehension, And Contextual
                  Understanding For A Personalized And Intelligent Chatbot
                  Experience
                </p>
                <div className="gen-ai-recipes-selectors">
                  <div className="gen-ai-recipes-selectors1">
                    <label className="gen-ai-recipes-label">Provider</label>
                    <select className="gen-ai-recipes-select">
                      <option>Open AI</option>
                    </select>
                  </div>
                  <div className="gen-ai-recipes-selectors2">
                    <label className="gen-ai-recipes-label">Model</label>
                    <select className="gen-ai-recipes-select">
                      {llmOptions.map((data) => (
                        <option key={data.value} value={data.value}>
                          {data.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="gen-ai-recipes-subsection">
                <div className="gen-ai-recipes-subsection-title">
                  <FontAwesomeIcon icon={faCogs} className="cogs-icon" />
                  <h2 className="gen-ai-recipes-subtitle">Embedding</h2>
                </div>
                <p>
                  Craft a linguistic masterpiece for your chatbot by selecting
                  from a diverse menu of embedding options. Stir the essence of
                  seamless communication as you customize the linguistic blend,
                  allowing your bot to savor the richness of context and deliver
                  a personalized user experience that leaves conversations
                  simmering with satisfaction
                </p>
                <div className="gen-ai-recipes-selectors">
                  <div className="gen-ai-recipes-selectors1">
                    <label className="gen-ai-recipes-label">Provider</label>
                    <select className="gen-ai-recipes-select">
                      <option>Open AI</option>
                    </select>
                  </div>
                  <div className="gen-ai-recipes-selectors2">
                    <label className="gen-ai-recipes-label">Model</label>
                    <select className="gen-ai-recipes-select">
                      {embeddingOptions.map((data) => (
                        <option key={data.value} value={data.value}>
                          {data.value}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="gen-ai-recipes-subsection">
                <div className="gen-ai-recipes-subsection-title">
                  <FontAwesomeIcon
                    icon={faDatabase}
                    className="database-icon"
                  />
                  <h2 className="gen-ai-recipes-subtitle">Vector DB</h2>
                </div>
                <p>
                  Infuse your chatbot with data precision using our Vector
                  Database – the secret sauce to elevate your bot's
                  intelligence. Explore a palate of vectors and seamlessly blend
                  data, crafting a symphony of insights that transforms every
                  interaction into a flavorful and meaningful conversation
                </p>
                <div className="gen-ai-recipes-selectors">
                  <div className="gen-ai-recipes-selectors1">
                    <label className="gen-ai-recipes-label">Model</label>
                    <select className="gen-ai-recipes-select">
                      {vectorDBOptions.map((data) => (
                        <option key={data.value} value={data.value}>
                          {data.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div className="gen-ai-recipes-benefits">
            <h2 className="gen-ai-recipes-subtitle">Benefits</h2>
            <div className="gen-ai-recipes-section2">
              <div className="gen-ai-recipes-subsection-1">
                <div className="gen-ai-recipes-subsection-title">
                  <i className="gen-ai-recipes-icon fas fa-star"></i>
                  <h3 className="gen-ai-recipes-subtitle-1">GPT 3.5 Turbo</h3>
                </div>
                <p className="gen-ai-recipes-text">
                  GPT-3.5 Turbo offers enhanced language understanding, expanded
                  vocabulary, and faster, more contextually accurate responses
                  across a wide range of tasks and domains.
                </p>
              </div>

              {/* New block with a dotted line */}
              <div className="gen-ai-recipes-divider"></div>

              <div className="gen-ai-recipes-subsection-2">
                <div className="gen-ai-recipes-subsection-title">
                  {/* You can customize the color for the green box */}
                  <div className="green-box"></div>
                  <h3 className="gen-ai-recipes-subtitle-2">GPT 3.5 Turbo_1</h3>
                </div>
                <p className="gen-ai-recipes-text">Blah blah</p>
              </div>
            </div>
          </div>

          <footer className="footer">
            <div className="footer-content">
              <div className="copyright">
                &copy; 2023 Your Company Name. All Rights Reserved.
              </div>
              <button className="start-cooking-button">Start Cooking</button>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default GenAiRecipes;
