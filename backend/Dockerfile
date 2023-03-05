FROM --platform=linux/amd64 ruby:3.2.1
RUN apt-get update && apt-get install -y nodejs
WORKDIR /backend
COPY . .
RUN bundle install
CMD ["rails", "server", "-e", "production", "-b", "0.0.0.0", "-p", "8080"]
EXPOSE 8080