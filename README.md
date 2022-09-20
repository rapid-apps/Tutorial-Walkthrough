# Simple Developer Tutorial

### Basic empty project setup from template

#### Check [this](https://github.com/rapid-apps/Tutorial-Walkthrough/tree/d969cd492cc7bbbfa5eee9a5ed9bb277370c5321) commit for the state of the project after this step. This is what the developer gets when the project begins.


### Now adding up the component specifications

#### Check [this](https://github.com/rapid-apps/Tutorial-Walkthrough/tree/fe4f70717cabd50c3f1be2358d124b2c0d0f88af) commit for the new additions to the project after this step. This is performed by the manager before the UI component development starts.


### Now writing of the component code <ins>by developer</ins>

#### This is one of the major tasks to be done by the developers. Check [this](https://github.com/rapid-apps/Tutorial-Walkthrough/tree/3968874705c94a55ff2dd37106866c1c40a4a641) commit for the new additions to the project that the developer does after this step. Manager creates a task for each individual component in the project management tool and developer completes the task accordingly.


### Now adding up the generated feature

#### Check [this](https://github.com/rapid-apps/Tutorial-Walkthrough/tree/aed3b82a850d20fd0bb1b47fa35d9d39aaba7a67) commit for the new additions to the project after this step. Manager writes the configuration and sets up the required code files for the generated features.


### Now adding up the specifications for custom features

#### Check [this](https://github.com/rapid-apps/Tutorial-Walkthrough/tree/c439b7ec62ac9f51778a8ca464d7d37192c15810) commit for the new additions to the project after this step. Manager writes the configuration and sets up the required code files for the custom features with the stubs and types. These files miss the business logic. That is done by developers in the next step.


### Now adding up the code for custom features <ins>by developer</ins>

#### This the another of the primary tasks to be done by developer i.e write the business logic for a given feature. They write the business logic only. The scope, design and signature of the feature is done by the manager as described in the feature specification in the previous step. Check [this](https://github.com/rapid-apps/Tutorial-Walkthrough/tree/02aa9c06844575c9fcecc3b3c4685d5d110c010c) commit for the new additions to the project after this step.



### Now adding up the code for wiring i.e containers <ins>by developer</ins>

#### This the final of the primary tasks to be done by developer i.e write the wiring code for a given page. Every page starts with a standard template and wiring code i.e mapping of **data slices** from feature(s) and invoking of **composers** from feature(s) is done based on event from the stateless UI component of that page. Check [this](https://github.com/rapid-apps/Tutorial-Walkthrough/tree/84d068f399e5af39e0add204fa2b7a5a9c85d85d) commit for the new additions to the project after this step. All additions to the source files outside the src/containers is done by the manager.

