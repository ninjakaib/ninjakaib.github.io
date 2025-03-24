# XiFin Machine Learning Engineering Internship Projects (June 2024 - Present)

## General tasks:

- Deploying models to AWS sagemaker for real time inference
- Building containers for development on sagemaker studio
- Developing and deploying custom inference containers for model serving
- Building frontend web applications for non technical users to interact with models
- Building internal CLI tools to help automate common workflows for my team

### Technologies used:

- AWS Sagemaker, Lambda, S3, ECR, Textract
- Python:
  - transformers
  - pyTorch
  - pandas
  - numpy
  - langchain
  - fastAPI
  - gradio
  - boto3
  - ijson
  - multiprocessing, threading
  - asyncio
- vllm, ollama, huggingface, tgi, llama.cpp, djl lmi
- Docker
- Github:
  - actions
  - git
- SQL
- Svelte, TypeScript/JavaScript, HTML, CSS

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
    - ~100x increase in processing speed
    - 75% reduction in storage costs
    - Added support for Blue Shield CA and Humana
- See the frontend [here](https://www.xifin.com/resources/payor-rate-transparency-monitor/) (this part was not developed by me!)

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
  - Agentic system
- Data Sources:
  - Denial codes
  - Regulatory rules
  - Payor guidelines
  - Appeal letter templates
