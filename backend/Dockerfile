FROM ruby:3.2.1
RUN apt-get update && apt-get install -y nodejs
WORKDIR /backend
COPY . .
RUN bundle install
EXPOSE 3000
CMD ["rails", "server", "-e", "production", "-b", "0.0.0.0"]