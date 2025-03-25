**Project Title: Machine Learning Hardware Accelerator Capstone**

**Project Overview:**  
This project involved the design, implementation, and simulation of a custom hardware accelerator optimized for machine learning inference. The accelerator was built entirely in **Python using PyRTL**, a Python-based hardware description language developed at UCSB. The goal was to develop an **energy-efficient hardware unit** capable of executing **floating-point matrix multiplications** using a novel L-Mul algorithm-based multiplier, along with a VLIW-style instruction set to maximize computational efficiency.

The project followed an **end-to-end hardware-software co-design approach**, including:
- RTL-level hardware design in PyRTL
- Simulation-based functional verification with automated CI testing
- A **rudimentary compiler** that transforms ML model architectures into executable instructions
- Open-source **EDA tool (OpenROAD) utilization for physical design** and performance estimation
- Full **MLP inference execution** in a simulated hardware environment

---

### **Technical Details:**

#### **1. Hardware Design & Architecture:**  
- The accelerator core was implemented using **PyRTL**, which allows hardware design in a Pythonic way with built-in simulation and debugging features.
- The core execution unit featured a **pipelined matrix multiplication engine** optimized for efficient resource utilization.
- **Custom VLIW-style instruction set**: Instead of using a standard ISA, instructions were represented as Python function calls, allowing the simulation of instruction execution via parameterized function inputs.
- Heavy use of **pipelining** to ensure high throughput, enabling parallel execution of multiple operations.

#### **2. L-Mul Floating-Point Multiplier:**  
- Implemented a **floating-point multiplication unit** based on the L-Mul algorithm, an alternative to standard IEEE-754 multipliers.
- Compared to conventional multipliers, **physical hardening using OpenROAD** showed:
  - **88.9% reduction in area**
  - **99.6% reduction in power consumption**
  - **80.7% reduction in delay**
- The design was tested across **FP8, BF16, and FP32 formats**, demonstrating significant efficiency gains while maintaining computation accuracy within **0.1% of expected results**.

#### **3. Compiler and Instruction Execution Framework:**  
- Developed a **rudimentary compiler** that converts a given ML model into a sequence of **VLIW-style instructions** executable by the accelerator.
- Implemented **matrix tiling and computational graph topological sorting** to optimize data movement and execution order.
- The system allowed **MLP inference to be executed end-to-end** within the accelerator simulation.

#### **4. Simulation and Verification:**  
- Used **PyRTL's built-in simulation framework** to verify correctness of individual hardware components and full system execution.
- Implemented **automated CI testing** to validate output consistency for a given set of test cases.
- Full neural network models were simulated on the hardware, confirming functional correctness.

#### **5. Physical Hardening & Performance Estimation:**  
- OpenROAD was used to **generate physical layouts** and extract real-world performance estimates.
- The estimated **area, power, and delay metrics validated the efficiency** of the L-Mul-based multiplier design compared to traditional floating-point hardware.

---

### **Key Takeaways & Learnings:**

1. **L-Mul-based multipliers can significantly outperform IEEE-754 designs** in terms of power and area, making them promising for energy-efficient AI hardware.
2. **Python-based RTL design** using PyRTL enables rapid prototyping and functional verification, though it lacks the robustness of Verilog/SystemVerilog for ASIC development.
3. **A VLIW-style instruction set** allows flexible and efficient computation scheduling, particularly when combined with **matrix tiling and pipelining**.
4. **Transforming a machine learning model into an executable instruction sequence** is a non-trivial challenge; optimizing data movement and execution order is crucial for performance.
5. **Simulation-based verification is effective for functional correctness but lacks real-world implementation constraints**; a future step would be synthesizing the design onto an **FPGA** for hardware validation.
6. **Open-source EDA tools like OpenROAD provide valuable insights into physical design metrics** even without full fabrication, making them useful for early-stage hardware prototyping.

---

### **Conclusion:**
This project demonstrated the feasibility of **custom ML hardware accelerators designed in Python**, leveraging innovative floating-point multipliers and a VLIW-style execution model. While designed for MLPs, the architecture lays the groundwork for **future transformer-optimized accelerators**. Expanding into FPGA implementation and refining the compiler pipeline would further enhance the project’s real-world applicability.

