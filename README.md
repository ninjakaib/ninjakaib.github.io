# portfolio

Collection of projects I worked on and my resume

# continue chat

I want you to help me fill out the work experience and projects bullet points in my resume. You can see the partially empty template here: @resume.tex. Ask whatever questions you feel are necessary to gather enough information to fill out the empty bullet points

---

I'll help you craft compelling bullet points for your experience and projects sections. Let me ask you some questions about each role and project:

For XiFin (Machine Learning Engineer Intern):

What types of ML models or systems are you working on?
What technologies/tools are you using?
Have you achieved any measurable results or completed any significant projects?
For Clayton Health (Lead Developer):

What was the size of the team you led?
What type of application/system did you develop?
What were your key achievements or deliverables?
For Verizon (Sales Consultant):

Did you meet or exceed any sales targets?
What products/services did you primarily sell?
Did you receive any recognition or awards?
For TheCoderSchool (CS Tutor):

What age groups/levels did you teach?
What programming languages or concepts did you cover?
How many students did you typically work with?
For Projects: Machine Learning Accelerator Chip:

What is the main purpose of this project?
What specific ML operations does it accelerate?
What was your role and key contributions?
AI Healthcare Assistant:

What healthcare-related functions does it perform?
What AI/ML techniques did you implement?
What were the main features you developed?
Once you provide these details, I can help you craft impactful bullet points that highlight your achievements and technical skills.

---

Lets go one at a time starting with xifin. I have worked on several impactful projects while interning here, in order:

1. Developed a codebot coding assistant integrated into the ide (vscode) similar to github copilot. I used open source models and deployed them to private aws instances to ensure data privacy rather than sending requests to openai. I used the llama and qwen models and set up a context aware chatbot that automatically retrieves relevant code from the project, inline editing that shows a diff of the llm suggested edits, and realtime autocomplete suggestions. This required using aws sagemaker to host models, configuring custom inference containers for ml using docker, and integrating these endpoints into a vscode extension using react/typescript. To help experimenting with new models, I also built a tool for the machine learning team that allows no code deployments of any model on huggingface and container customization through a web gui to our private sagemaker domain. This tool was built using fastapi and gradio and deployed locally on prem inside a docker container. Deployments also support inference acceleration techniques like quantization, speculative decoding, and using various hardware optimized model serving backends like aws neuron, vllm, and huggingface tgi.

I also worked on another project that helps ingest data for the company's payor transparency monitor which helps compare pricing of medical procedures from different insurance payors/providers. Insurance companies publish this data as MRFs in accordance with the transparency in coverage act. These mrfs take the form of compressed json files. We needed to extract the relevant information from terabytes of deeply nested json files, so i wrote an efficient parsing application using python with a customized c backends from the ijson package. The parser is highly parallelized using multiprocessing, threading, concurrent io from the raw files and uploads to s3, can handle multiple files at a time and leverages the full available resources of the instance it is running on (ram and multiple cpus). In order to efficiently store this large amount of data, I redesigned the sql database schema to a more normalized structure to reduce the amount of data duplication since the files often contain a large amount of repeated information which was wasting space and leading to extra cloud storage costs. The new db schema was pushed into production and the parsing workflow is fully automated, taking the raw files from the insurance provider websites, running the data extraction job on sagemaker, and populating the final db which is connected to the frontend viewer. This new workflow increased the data processing speed by over 100x compared to the old process and enabled us to add 2 new insurance providers, blue shield california and humana. The new normalized db schema led to a 75% reduction in data storage.

Another project I worked on was the company's internal chatbot. The chatbot serves as a way to easily get answers about the company products like the RPM system by using a RAG system. I worked on deploying new models and improving the RAG pipeline to improve the quality, speed and accuracy of the answers given. I simplified the cloud infrastructure used for hosting models to allow for streaming responses from the llm instead of having to wait for a complete response to be generated before returning it to the user. For the rag pipeline, I upgraded the way documents are parsed and retrieved to improve the quality of the context given to the model. The old method involved parsing text from documents like powerpoints, pdfs, and websites, chunking this text, and embedding it into a vectorstore. The new method used a new model called colpali optimized for embedding entire documents without needing to extract text, leading to a simpler way to add new knowledge to the vectorstore. It can directly retireve images of documents based on a query and natively understands image inputs (screenshots of an issue with the product) and can return visual data like diagrams and screenshots that the model can natively understand. Incorporating vision language models into the chatbot decreased the hallucination rate and generally improved the quality of answers.

Another project I worked on was a sql generation tool for the data engineering team. Xifin maintains hundreds of databases with thousands of total tables and the sql queries used to interact with the dbs are often very long and complex. Using Ai to write queries doesn't work very well since the models don't have an understanding of the data they are writing queries for. I built a tool that you can interact with via a chat interface hosted as a website that leverages existing sql queries as context to understand the table schemas and entity relationships. It functions similar to rag with some extra steps. First, existing known queries are annotated and uploaded to the system as context. Descriptions of tables and databases are also uploaded as context. When a user asks for a query to be generated, the model retrieves information about the target data and uses similar previous queries to help guide the generation. It can automatically run the query and return the result as a pandas dataframe from which the user can mark the query as either correct or incorrect. If the query was correct, the generated query and user request get added to the models context pool to continually improve future generations. If its incorrect, the user can manually fix the query before it gets added back to the context. This enables continuous improvement of the sql queries and with increased use comes increased quality.

The project I am currently working on is a system that uses AI to help automate insurance denial appeal letter generation using knowledge graphs and multimodal llms. Xifin has a team that manually generates appeal letters for denials and we wanted to automate this process using ai. To do this, we construct a knowledge graph of various entities and their relationships using llms to parse through information we already have like denial codes, regulatory rules, payor specific guidelines, and appeal letter templates. We use a denial letter to generate a query for the knowledge graph and retrieve relevant information to a specific denial to fill out the templates. We feed the results of the query to an LLM along with the appeal letter document to have it automatically fill out the document with relevant information greatly reducing the need for a manual process. The system also scrapes the web to get appeal letter templates, converts them into an editable format suitable for llm usage, and writes code that integrates the new templates into the existing rpm system.

These are all of the projects I have worked on as an intern at Xifin since june 2024 (its currently decemeber 2024). Before turning them into resume bullet points, rewrite the descriptions of these projects as a backtick delimited markdown document that has the full details of each project. this document is just so i can include it as part of a journal documenting everything ive worked on during my career. Then you may turn them into resume points, be sure to highlight the most important information and quantify the impact each project had.

---

First, let me create a detailed markdown documentation of your projects:

```markdown
# XiFin Machine Learning Engineering Internship Projects (June 2024 - Present)

## 1. IDE-Integrated Code Assistant

- Built a private GitHub Copilot alternative using open-source LLMs (Llama, Qwen)
- Features:
  - Context-aware code suggestions using project-specific code retrieval
  - Inline code editing with diff preview
  - Real-time autocomplete
- Technical Implementation:
  - AWS SageMaker for model hosting
  - Custom Docker inference containers
  - VSCode extension development with React/TypeScript
  - Built no-code model deployment tool using FastAPI and Gradio
  - Supported acceleration techniques:
    - Quantization
    - Speculative decoding
    - Hardware optimization (AWS Neuron, vLLM, HF TGI)

## 2. Healthcare Pricing Data Parser

- Purpose: Process insurance MRF files for payor transparency monitoring
- Technical Details:
  - Custom Python parser with C backends (ijson)
  - Optimizations:
    - Multi-processing and threading
    - Concurrent I/O for S3 uploads
    - Resource-optimized instance utilization
  - Database redesign:
    - Normalized schema to reduce redundancy
    - Automated ETL pipeline via SageMaker
    - Integration with frontend viewer
  - Results:
    - 100x increase in processing speed
    - 75% reduction in storage costs
    - Added support for Blue Shield CA and Humana

## 3. Internal RAG Chatbot Enhancement

- Improvements:
  - Streaming response implementation
  - Advanced document parsing using Colpali model
  - Multimodal capabilities for image understanding
  - Direct document/image retrieval
- Results:
  - Reduced hallucination rate
  - Improved answer quality
  - Native support for visual data

## 4. SQL Query Generation Assistant

- Features:
  - Chat interface for query generation
  - Context-aware using existing SQL queries
  - Automatic query execution and validation
  - Self-improving system through feedback loop
- Implementation:
  - Web-based interface
  - RAG-based query generation
  - Pandas integration for result verification
  - Continuous learning from user feedback

## 5. Automated Insurance Appeal Letter System

- Components:
  - Knowledge graph construction from multiple data sources
  - Multimodal LLM integration
  - Web scraping for template collection
  - Automated template conversion and integration
- Data Sources:
  - Denial codes
  - Regulatory rules
  - Payor guidelines
  - Appeal letter templates
```

Now, let me craft impactful resume bullet points for the XiFin experience (focusing on the most significant achievements):

```markdown
• Developed private GitHub Copilot alternative using open-source LLMs and AWS SageMaker, implementing context-aware code suggestions, inline editing, and real-time autocomplete while ensuring data privacy
• Engineered high-performance healthcare pricing data parser achieving 100x faster processing speed and 75% storage cost reduction through optimized multi-threading and database normalization
• Built self-improving SQL query generation system with RAG capabilities, enabling data engineering team to efficiently generate complex queries across hundreds of databases
• Enhanced company-wide chatbot with streaming responses and multimodal capabilities, reducing hallucination rate and improving answer quality through advanced RAG pipeline
• Architected automated insurance appeal letter system using knowledge graphs and multimodal LLMs, significantly reducing manual processing time for denial management team
```

Would you like me to adjust any of these bullet points or would you like to move on to discussing your other positions?
