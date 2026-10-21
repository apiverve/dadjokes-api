# Dad Jokes API - Ruby Gem

Dad Jokes delivers a random dad joke with every request. Send a plain GET call without parameters to receive a clean punchline ready for display.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_dadjokes'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_dadjokes
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_dadjokes'

# Initialize the client
client = APIVerve::Dadjokes::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({  })
  puts response["data"]
rescue APIVerve::Dadjokes::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Dadjokes::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Dadjokes::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "joke": "What state do crayons go to on vacation? Color-ado."
  }
}
```

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/dadjokes?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/dadjokes?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/dadjokes?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
