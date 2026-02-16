# Dad Jokes API - Dart/Flutter Client

Dad Jokes is a simple tool for getting dad jokes. It returns a random dad joke.

[![pub package](https://img.shields.io/pub/v/apiverve_dadjokes.svg)](https://pub.dev/packages/apiverve_dadjokes)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This is the Dart/Flutter client for the [Dad Jokes API](https://apiverve.com/marketplace/dadjokes?utm_source=dart&utm_medium=readme).

## Installation

Add this to your `pubspec.yaml`:

```yaml
dependencies:
  apiverve_dadjokes: ^1.1.14
```

Then run:

```bash
dart pub get
# or for Flutter
flutter pub get
```

## Usage

```dart
import 'package:apiverve_dadjokes/apiverve_dadjokes.dart';

void main() async {
  final client = DadjokesClient('YOUR_API_KEY');

  try {
    final response = await client.execute();

    print('Status: ${response.status}');
    print('Data: ${response.data}');
  } catch (e) {
    print('Error: $e');
  }
}
```

## Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "joke": "Want to hear a joke about construction? I'm still working on it."
  }
}
```

## API Reference

- **API Home:** [Dad Jokes API](https://apiverve.com/marketplace/dadjokes?utm_source=dart&utm_medium=readme)
- **Documentation:** [docs.apiverve.com/ref/dadjokes](https://docs.apiverve.com/ref/dadjokes?utm_source=dart&utm_medium=readme)

## Authentication

All requests require an API key. Get yours at [apiverve.com](https://apiverve.com?utm_source=dart&utm_medium=readme).

## License

MIT License - see [LICENSE](LICENSE) for details.

---

Built with Dart for [APIVerve](https://apiverve.com?utm_source=dart&utm_medium=readme)
