#!/bin/bash

# Exit immediately if any command fails
set -e

# Install Node.js dependencies
npm install

# Build the project for production
npm run build
