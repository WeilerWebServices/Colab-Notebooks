# Convert-a-Text-File-into-Speech

from gtts import gTTS
import os

# Creating a text that we want to convert into audio
text = “Global warming is the long-term rise in the average temperature of the Earth’s climate system”

# gTTS supports multiple languages. Please refer to the documentation here. Selected ‘en’ -> English and stored in the language variable
language = ‘en’

# Creating an object called speech and passing the text and language to the engine. Marked slow = False which tells the module that the converted audio should have a high speed.
speech = gTTS(text = text, lang = language, slow = False)

# Saving the converted audio in a mp3 file named called ‘text.mp3’
speech.save(“text.mp3”)

# Playing the converted file, using Windows command ‘start’ followed by the name of the mp3 file.
os.system(“start text.mp3”)

text.mp3 file

# The output of the above program saved as text.mp3 file. Mp3 file should be a voice saying, 'Global warming is the long-term rise in the average temperature of the Earth’s climate system'
Convert a Text File into Speech

# Here, covert the text file into speech.
# Reading the text file and pass to gTTS module
# Import gTTS and os library
from gtts import gTTS
import os

# Reading the text file and store into object called text. My file name is “draft.txt”
file = open("draft.txt", "r").read().replace("\n", " ")

# Choosing language English
language = ‘en’

# Passing the text file into gTTS module and store into speech
speech = gTTS(text = str(file), lang = language, slow = False)

# Saving the converted audio in a mp3 file named called ‘voice.mp3’
speech.save("voice.mp3")

# Playing the mp3 file
os.system("start voice.mp3")
