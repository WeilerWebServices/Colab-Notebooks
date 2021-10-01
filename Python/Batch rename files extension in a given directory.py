#!/usr/bin/env python

# Batch renames file's extension in a given directory

import os, sys

for filename in os.listdir(os.path.dirname(os.path.abspath(__file__))):
  base_file, ext = os.path.splitext(filename)
  if ext == ".md":
    os.rename(filename, base_file + ".txt")