![Colaboratory logo](Colaboratory-logo.png)

---

## Colaboratory, or "Colab" for short, allows you to write and execute Python in your browser, with

-   Zero configuration required
-   Free access to GPUs
-   Easy sharing

Whether you're a **student**, a **data scientist** or an **AI researcher**, Colab can make your work easier. Watch [Introduction to Colab](https://www.youtube.com/watch?v=inN8seMm7UI) to learn more, or just get started below!

---

## Getting started

The document you are reading is not a static web page, but an interactive environment called a **Colab notebook** that lets you write and execute code.

For example, here is a **code cell** with a short Python script that computes a value, stores it in a variable, and prints the result:


```bash
1. seconds_in_a_day = 24 * 60 * 60

2. seconds_in_a_day
```
86400


To execute the code in the above cell, select it with a click and then either press the play button to the left of the code, or use the keyboard shortcut "Command/Ctrl+Enter". To edit the code, just click the cell and start editing.

Variables that you define in one cell can later be used in other cells:


```bash
1. seconds_in_a_week = 7 * seconds_in_a_day

2. seconds_in_a_week
```

604800


Colab notebooks allow you to combine **executable code** and **rich text** in a single document, along with **images**, **HTML**, **LaTeX** and more. When you create your own Colab notebooks, they are stored in your Google Drive account. You can easily share your Colab notebooks with co-workers or friends, allowing them to comment on your notebooks or even edit them. To learn more, see [Overview of Colab](https://colab.research.google.com/notebooks/basic_features_overview.ipynb). To create a new Colab notebook you can use the File menu above, or use the following link: [create a new Colab notebook](http://colab.research.google.com/#create=true).

Colab notebooks are Jupyter notebooks that are hosted by Colab. To learn more about the Jupyter project, see [jupyter.org](https://www.jupyter.org/).

---

## Data science

With Colab you can harness the full power of popular Python libraries to analyze and visualize data. The code cell below uses **numpy** to generate some random data, and uses **matplotlib** to visualize it. To edit the code, just click the cell and start editing.


```bash
1. import numpy as np

2. from matplotlib import pyplot as plt

3. ys = 200 + np.random.randn(100)

4. x = [x for x in range(len(ys))]

5. plt.plot(x, ys, '-')

6. plt.fill_between(x, ys, 195, where=(ys > 195), facecolor='g', alpha=0.6)

7. plt.title("Sample Visualization")

8. plt.show()
```


You can import your own data into Colab notebooks from your Google Drive account, including from spreadsheets, as well as from Github and many other sources. To learn more about importing data, and how Colab can be used for data science, see the links below under [Working with Data](https://colab.research.google.com/notebooks/intro.ipynb#working-with-data).

---

## Machine learning

With Colab you can import an image dataset, train an image classifier on it, and evaluate the model, all in just [a few lines of code](https://colab.research.google.com/github/tensorflow/docs/blob/master/site/en/tutorials/quickstart/beginner.ipynb). Colab notebooks execute code on Google's cloud servers, meaning you can leverage the power of Google hardware, including [GPUs and TPUs](https://colab.research.google.com/notebooks/intro.ipynb#using-accelerated-hardware), regardless of the power of your machine. All you need is a browser.

---

## Colab is used extensively in the machine learning community with applications including:

-   Getting started with TensorFlow
-   Developing and training neural networks
-   Experimenting with TPUs
-   Disseminating AI research
-   Creating tutorials

To see sample Colab notebooks that demonstrate machine learning applications, see the [machine learning examples](https://colab.research.google.com/notebooks/intro.ipynb#machine-learning-examples) below.

---

## More Resources

### Working with Notebooks in Colab

-   [Overview of Colaboratory](https://colab.research.google.com/notebooks/basic_features_overview.ipynb)
-   [Guide to Markdown](https://colab.research.google.com/notebooks/markdown_guide.ipynb)
-   [Importing libraries and installing dependencies](https://colab.research.google.com/notebooks/snippets/importing_libraries.ipynb)
-   [Saving and loading notebooks in GitHub](https://colab.research.google.com/github/googlecolab/colabtools/blob/master/notebooks/colab-github-demo.ipynb)
-   [Interactive forms](https://colab.research.google.com/notebooks/forms.ipynb)
-   [Interactive widgets](https://colab.research.google.com/notebooks/widgets.ipynb)
-   ![New](https://colab.research.google.com/img/new.png)[TensorFlow 2 in Colab](https://colab.research.google.com/notebooks/tensorflow_version.ipynb)

### Working with Data

-   [Loading data: Drive, Sheets, and Google Cloud Storage](https://colab.research.google.com/notebooks/io.ipynb)
-   [Charts: visualizing data](https://colab.research.google.com/notebooks/charts.ipynb)
-   [Getting started with BigQuery](https://colab.research.google.com/notebooks/bigquery.ipynb)

### Machine Learning Crash Course

These are a few of the notebooks from Google's online Machine Learning course. See the [full course website](https://developers.google.com/machine-learning/crash-course/) for more.

-   [Intro to Pandas](https://colab.research.google.com/notebooks/mlcc/intro_to_pandas.ipynb)
-   [Tensorflow concepts](https://colab.research.google.com/notebooks/mlcc/tensorflow_programming_concepts.ipynb)
-   [First steps with TensorFlow](https://colab.research.google.com/notebooks/mlcc/first_steps_with_tensor_flow.ipynb)
-   [Intro to neural nets](https://colab.research.google.com/notebooks/mlcc/intro_to_neural_nets.ipynb)
-   [Intro to sparse data and embeddings](https://colab.research.google.com/notebooks/mlcc/intro_to_sparse_data_and_embeddings.ipynb)

### Using Accelerated Hardware

-   [TensorFlow with GPUs](https://colab.research.google.com/notebooks/gpu.ipynb)
-   [TensorFlow with TPUs](https://colab.research.google.com/notebooks/tpu.ipynb)

---
## Machine Learning Examples

To see end-to-end examples of the interactive machine learning analyses that Colaboratory makes possible, check out these tutorials using models from [TensorFlow Hub](https://tfhub.dev/).

A few featured examples:

-   [Retraining an Image Classifier](https://tensorflow.org/hub/tutorials/tf2_image_retraining): Build a Keras model on top of a pre-trained image classifier to distinguish flowers.
-   [Text Classification](https://tensorflow.org/hub/tutorials/tf2_text_classification): Classify IMDB movie reviews as either *positive* or *negative*.
-   [Style Transfer](https://tensorflow.org/hub/tutorials/tf2_arbitrary_image_stylization): Use deep learning to transfer style between images.
-   [Multilingual Universal Sentence Encoder Q&A](https://tensorflow.org/hub/tutorials/retrieval_with_tf_hub_universal_encoder_qa): Use a machine learning model to answer questions from the SQuAD dataset.
-   [Video Interpolation](https://tensorflow.org/hub/tutorials/tweening_conv3d): Predict what happened in a video between the first and the last frame.

---
